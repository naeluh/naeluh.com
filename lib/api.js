require('dotenv').config();

const API_URL = 'https://strapi.hulea.org/graphql';

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPosts() {
  const data = await fetchAPI(
    `
  query {
    webs {
      id
      Title
      Description
      Slug
      createdAt
      updatedAt
      Link
      Image {
        url
        ext
        provider
        size
      }
    }
  }
`
  );
  return data?.webs;
}

export async function getPost(Slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    webs(where: $where) {
      id
      Title
      Description
      Slug
      Link
      createdAt
      updatedAt
      Image {
        url
        ext
        provider
        size
      }
    }
  }
`,
    {
      variables: {
        where: {
          Slug,
        },
      },
    }
  );
  return data?.webs;
}

export async function getPage(page) {
  const data = await fetchAPI(
    `
  query PageByArg($where: JSON) {
    basics(where: { URL: $where }, limit: 1) {
      Title
      id
      Image {
        url
        ext
        provider
        size
      }
      Body
      URL
      createdAt
      updatedAt
    }
  }
`,
    {
      variables: {
        where: page,
      },
    }
  );

  return data?.basics[0];
}
