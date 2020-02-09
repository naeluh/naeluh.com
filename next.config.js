const fetch = require('isomorphic-unfetch');

module.exports = {
  async exportPathMap () {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch('https://strapi.hulea.org/webs');
    const postList = await response.json();

    // console.log(postList);

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/work/${post.URL}`]: {
            page: `/work/entry`,
            query: { id: post.URL }
          }
        }),
      {}
    );

    // console.log(pages);

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/work': { page: '/work' }
    });
  }
};
