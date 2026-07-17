---
id: 5f56c7867b888077db0c1b6e
title: "J. Paul Getty Museum and Trust"
slug: getty
link: https://www.getty.edu/
image: /uploads/d1795e27f7884a0687004f4a8c437ddc.png
order: 6
createdAt: 2020-09-07T23:51:34.709Z
updatedAt: 2024-07-30T04:36:43.172Z
---

**Getty.edu Redesign**
Frontend: Nuxt.Js/Vue
Styleguide: Storybook.js
Backend: Contentful
Deploy: Netlify

Towards the end of my time at the Getty we worked with the Agency [Area17](https://area17.com/) to build a design system using Nuxt.js/Vue.js to build the components. The component library or styleguide was built in Storybook.js. The site was built with UI testing with Chromatic and end-to-end testing that was runs on Circle CI and deploys on Netlify. 

**Getty Elastic Stack implementation**
Frontend: Vue, Vue-Router, Vue-CLI
Backend: Elastic Stack
Deploy: EC2, Elastic.co, Netlify

I rewrote the main site search and other search applications needed for the insitution using Elasticsearch as the index. Apache Nutch does the crawling to replace the Google appliance that was about to be discontinued. I built several front ends for the indexes that were needed to support the various types of search that were implemented before the switch. Trying to recreate what Google was doing previously was tricky, but the search’s reception has been positive and some did not even notice it has changed backends. We also are now implementing an index for Elastic’s Application Performance Monitoring (APM) and applying it to some, if not all, of our codebases. Adding real time monitoring of the code allows our developers to drill down on resource costs to make our code fast and cost effective.  

**Getty Digital Project Dashboard**
Frontend: Vue, Vuex, Vue-Router, Vue-CLI
Backend: Wordpress, WP-REST
Deploy: EC2, S3, and Cloudfront 

The Getty staff is broken up into various departments; my department is Getty Digital. I built a dashboard that allows various users to add/edit their projects to this dashboard in Wordpress and then be displayed to other staff throughout the institution. Mainly this tool is for executive staff to keep track of the many digital projects underway at the institution. 


