const fs = require('fs');
const sharp = require('sharp');
const http = require('http');
const https = require('https');
const fetch = require('isomorphic-unfetch');
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

async function getPosts() {
  const data = await fetchAPI(
    `
  query {
    webs {
      id
      Title
      Slug
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
`
  );
  return data?.webs;
}

const convert = (dir, name) => {
  if (name.indexOf('.gif') !== -1) {
    return;
  }
  const fullname = dir + '/' + name;
  const i = sharp(fs.readFileSync(fullname));
  i.toFormat('webp', { quality: 80 });
  return i
    .toFile('./public/images/' + name + '.webp')
    .then(() => console.log('Converted', fullname))
    .catch((e) => console.log('Failed converting', fullname, e, 'skipping...'));
};

const process = async () => {
  const files = fs.readdirSync('./public/images');
  const promises = files.map((name) => {
    console.log('./public/images', name);
    return convert('./public/images', name);
  });
  Promise.all(promises)
    .then(() => console.log('Done process'))
    .catch((e) => console.error(e));
};

const downloadImageToUrl = (url, filename) => {
  let client = http;
  if (url.toString().indexOf('https') === 0) {
    client = https;
  }
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      console.log(url);
      res
        .pipe(fs.createWriteStream(filename))
        .on('error', reject)
        .once('close', () => resolve(filename));
    });
  });
};

const getImages = async () => {
  const posts = await getPosts();
  return new Promise((resolve, reject) => {
    const promises = posts.map(async ({ Image }) => {
      const filename = Image.url.replace('/uploads/', '');
      return await downloadImageToUrl(
        `https://strapi.hulea.org${Image.url}`,
        `./public/images/${filename}`
      );
    });
    Promise.all(promises)
      .then(() => {
        return resolve();
      })
      .catch((e) => {
        console.error(e);
        return reject();
      });
  });
};

const init = async () => {
  getImages()
    .then(async () => {
      await process();
    })
    .catch((e) => {
      console.error(e);
    });
};

init();
