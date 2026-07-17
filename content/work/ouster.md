---
id: 610cb2706c3fbb2921665cca
title: "Ouster"
slug: ouster
link: https://ouster.com/
image: /uploads/d1a916807d2240feb62941895448fd28.png
order: 10
createdAt: 2021-08-06T03:54:24.171Z
updatedAt: 2024-07-30T04:37:58.431Z
---

Ouster's website is a true JamStack Gatsby site using multiple data sources. The blog data comes from a Wordpress instance. Data for the actual website comes from contentful and deployed on Netlify. I maintain the frontend and both backends. Deployment is run through a CI/CD process through Gitlab and then a release schedule to production. The design pattern for the CMS checks each component type and and loads them in a full dynamic import to load components when they are needed. The react components are designed in Figma and then realized through a review process using Jira. Also the site has some exciting uses of react-select and great code pattern for translating mutliple CMS sources. Building this site to as perfomant as possible is a high priority using a JavaScript static site generator is great way to accomplish this.
