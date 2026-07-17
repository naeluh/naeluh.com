---
id: 5d38e4c17b888077db0c1b6b
title: "Bauhaus 100th Anniversary site for the Getty Research Institute "
slug: bauhaus
link: https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/
image: /uploads/fdbcf9bd6c1f4d9e96afcea8bd9faf2e.png
order: 5
createdAt: 2019-07-24T23:07:45.140Z
updatedAt: 2024-07-30T04:36:31.801Z
---

This site was built using the tool CLI tool I maintain. I worked with our designer to build the site from Sketch templates. Several writers from the Getty Research team wrote the content in markdown files and made use of various custom shortcodes and templates that I created for the Quire’s starter theme, but also custom ones that I created specifically for this site. We made use of Netlify’s integration with Git where we deploy a master branch and pull request deployments which our designer verifies that what I built is correct and functions the way it should. Netlify makes deployment incredibly easy and useful especially when using Hugo and Webpack for building the final code. Running integration testing with each pull request makes it easy to tell what is going on with the site and for others to see instantly what you did.

- Frontend: Quire, Hugo, Webpack 4
- Deploy: Netlify 

