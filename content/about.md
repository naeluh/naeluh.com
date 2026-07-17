### PROFESSIONAL EXPERIENCE

#### 2025-PRESENT PwC - Full Stack Engineer

- **PepsiCo SAP AIOps Platform**: built a Next.js/React frontend with Python FastAPI/FastMCP services integrating SAP OData and ServiceNow, and LangGraph orchestration for deep agents; deployed via GitOps to AKS.
- **PwC ERP AI Delivery Platform**: built a TypeScript MCP server and FastAPI backend (PostgreSQL/pgvector) with Entra ID auth; deployed to AKS via GitHub Actions.
- **Boston Scientific AP Invoice Platform**: built an AI invoice-extraction platform (Next.js UI, Python FastAPI/MCP services, AWS Lambdas, DynamoDB/S3/OpenSearch) with Claude handling document extraction and classification, matching each document to vendor/PO and non-PO records via Athena queries against SAP data synced to Parquet; deployed to AWS EKS via GitLab CI/Helm.

**Technologies**: Python, Node.js, FastAPI, LangGraph, Claude API, AWS Bedrock, PostgreSQL/pgvector, Parquet, Athena, Docker, Kubernetes (AKS/EKS), AWS (Lambda, DynamoDB, S3), Azure (App Service, Entra ID), GitHub Actions, GitLab CI, GitOps, React, Next.js, TypeScript, Tailwind

#### 2020-2025 Third and Grove - Senior Frontend Engineer

At Third and Grove we do our best to adhere to the Agile development methodology using Jira and developing a kanban board that suits that project's needs. Our Jira boards usually follow a pattern of to do, in progress, blocked, code review, quality assurance, ready for staging, on staging, user acceptance testing, ready for release and done. When code is ready for deployment, we then update a deployment checklist designed specifically for that project. Agile creates an environment where most mistakes or issues can be identified before they make it into production.

To build development environments we use Docker, Vagrant and Lando. We use Travis CI and Github Actions to connect to various deployments (AWS, Acquia, Pantheon, Netlify, Gatsby Cloud, Vercel).

<div class="ul-p-cont">

**Littler** - [https://www.littler.com](https://www.littler.com) - **Lead Frontend and Fullstack developer** - **Frontend**: Twig Templates, React, TypeScript, SCSS **Design System**: Storybook **Backend**: MYSQL, Drupal, PHP, Node.js, Algolia **Deploy**: Acquia **CI**: Github Actions

- Created Frontend in Storybook and implemented the backend integration with preprocess functions
- Architected and developed React Applications for 4 Algolia searches
- All component were integrated into Layout Builder
- Accessibility tested to WCAG AA
- Required Global State Management
- Worked with Third and Grove designers to build features into website using Figma

**Third and Grove** - [https://www.thirdandgrove.com/](https://www.thirdandgrove.com/) - **Technical Architect, Fullstack Developer** - **Frontend**: React, Next.js, TypeScript, Tailwind, GSAP **Backend**: Drupal 10, Node.js, GraphQL **Deploy**: Netlify, Pantheon **CI**: Github Actions

- Architected and implemented modern Next.js application using App Router with server components and SSR
- Component library built and maintained in Storybook for design QA and accessibility testing
- Each commit tested with Husky for code quality and standards enforcement
- Image optimization and transformation using next/image with advanced caching strategies
- Migrated backend from Drupal 9 to Drupal 10 with GraphQL integration
- Implemented type-safe GraphQL queries using CodeGen for improved developer experience
- Collaborated with designers to implement pixel-perfect features from Figma designs
- Server-side form processing with Next.js API routes and server actions
- Comprehensive accessibility testing and compliance with WCAG standards
- Built reusable component library with full TypeScript support
- Required Global State Management
- Accessibility tested to WCAG AAA
- Building complex animations with GSAP

**AppleTree Institute for Education** - [https://www.appletreeinstitute.org/](https://www.appletreeinstitute.org/) - **Technical Architect, Fullstack Developer** - **Frontend**: React, TypeScript, SCSS, SWR **Design System**: Storybook **Backend**: PHP, Node.js, MYSQL, Drupal **Deploy**: Pantheon **CI**: Github Actions

Every Child Ready is an application that requires single sign on to see. It is the first web application that Third and Grove has created and I helped lead the development. AppleTree is a online pre-K school platform that uses this application to schedule classes, write curriculum, grade students, track student attendance and many other data points to help educators edit the application.

- Developed multiple API endpoints from MYSQL for CRUD application
- Created and implemented API endpoint client side data consumption with caching and invalidation specific to each call to the API
- Designed and developed deployment for React Application
- Developed performance, accessibility and unit testing for component library
- Worked with Third and Grove designers to build features into website using Figma
- Each commit is tested with Husky
- Site used Typescript for development
- Used SWR to query MYSQL
- The custom API that was built was protected by authentication.
- Accessibility tested to WCAG AAA
- Required Global State Management

**California Closets Refactor and Redesign : In Progress** - **Technical Architect, Fullstack and Frontend Developer** - **Frontend**: React, GSAP, Tailwind, TypeScript, GSAP **Design System**: Storybook **Backend**: Node.js, Next.js, Wordpress, Faust.js, PHP, WPGraphQL **Deploy**: WP Engine **CI**: Github Actions

- Utilized WPGraphQL to connect to the Wordpress GraphQL API
- Building complex animations with Green Sock.
- Developing performance, accessibility and unit testing for component library.
- Component library is compiled by RollUp.js to ESM and CJS libraries and deployed to GitHub packages and installed via NPM
- The component library is used in the Wordpress editor Gutenberg and creates a one to one relationship with the components built in Storybook.js using the React framework
- This project has three frontends Next.js, Storybook.js and Wordpress Gutenberg, building the component library allows access to these components to any target that uses React.
- Worked with Clay designer agency to build features into website using Figma
- Each commit is tested with Husky
- Site is using Typescript for development and Codegen to get types from Wordpress for GraphQL
- The GraphQL client was protected by authentication.
- Accessibility tested to WCAG AAA
- Required Global State Management

**King Arthur Baking Calendar Update** - [https://www.kingarthurbaking.com/baking-school/calendar](https://www.kingarthurbaking.com/baking-school/calendar) - **Lead Frontend** - **Frontend**: Twig Templates, React, TypeScript, SCSS, SWR, FullCalendar **Design System**: Storybook **Backend**: MYSQL, Drupal, PHP, Node.js **Deploy**: Acquia **CI**: Github Actions

- King Arthur updated their calendar to utilize a new sign up platform.
- Designed and developed deployment for React Application
- Utilizing the API provided from the platform we created a flow of events that were saved to Drupal MYSQL database.
- Created and implemented API endpoint client side data consumption with caching and invalidation specific to each call to the API
- Used SWR to query MYSQL
- The custom API that was built was protected by authentication
- Designed and developed deployment for React Application
- Accessibility tested to WCAG AAA
- Required Global State Management
- Worked with Third and Grove designers to build features into website using Figma

**King Arthur Baking Mega Menu** - [https://www.kingarthurbaking.com/](https://www.kingarthurbaking.com/) - **Lead Frontend** -

**Frontend**: Twig Templates, React, TypeScript, SCSS, Liquid Templates **Design System**: Storybook **Backend**: Netlify Lambda functions, Astro.js, MYSQL, Drupal, PHP **Deploy**: Acquia, Netlify, Big Commerce **CI**: Github Actions

- King Arthur is required a menu that could be sent via API. This API was needed due to multiple targets that needed the menu from the Drupal MYSQL database. Once place to edit and then the menu could be distributed to multiple other web properties.
- Using a Netlify edge function I was able to alter the response before the server rendered via string transforms. This serve the menu that was being built in React. The code is an API that uses AstroJS static site generator and then the sends statically rendered JavaScript, CSS, HTML as JSON response to render in the targets via server side http request in any template language.
- There's a highly intensive cache strategy in place to limit requests from the Netlify functions.
- Designed and developed deployment for React Application
- The custom API that was built was protected by authentication.
- Accessibility tested to WCAG AAA

**Cross River** - [https://www.crossriver.com/](https://www.crossriver.com/) - **Technical Architect, Fullstack and Frontend Developer** - **Frontend**: Svelte, Astro.js, TypeScript, SCSS **Design System**: Storybook **Backend**: Node.js, Astro.js, Contentful **Deploy**: Netlify **CI**: Github Actions

- Designed and developed deployment strategy for production and preview using Netlify Lambda functions
- Developed performance, accessibility and unit testing
- Worked with internal and client QA to make site accessible and performant
- Worked with Third and Grove designers to build features into website using Figma
- Each commit is tested with Husky
- Custom Image optimization and transformation using Contentful Image API
- Site used Typescript for development
- Used GraphQL to query Contentful

**Lending Club Blog** - Proof of concept/Internal Project - **Technical Architect, Fullstack and Frontend Developer** - **Frontend**: React **Backend**: Node.js, Next.js, Contentful **Deploy**: Vercel **CI**: Github Actions

- Designed and developed deployment strategy for production and preview using Vercel Lambda functions
- Developed performance, accessibility and unit testing
- Worked with internal and client QA to make site accessible and performant
- Each commit is tested with Husky
- Image optimization and transformation with Next Image
- Site used Typescript for development
- Used GraphQL to query Contentful

**Ouster** - [https://ouster.com/](https://ouster.com/) - **Technical Architect, Fullstack and Frontend Developer** - **Frontend**: React **Backend**: Gatsby, Node.js, Contentful, WordPress, PHP **Deploy**: Netlify/Gatsby Cloud, Pantheon **CI**: Gitlab CI/CD

- Architected and built site to be fully translated in Chinese and Japanese
- Maintained code to be fully updated and performance testing
- Architected deployment process for complex decoupled project
- Worked with internal and client QA to make site accessible and performant
- Worked with Ouster designers to build features into website using Figma
- Styleguide/Design System built with Storybook.js
- Developed scroll animation, autoplay video, video overlay components
- Each commit is tested with Husky
- Custom Image optimization and transformation using Contentful Image API and Gatsby Image
- Uses preview builds on WordPress and Contentful, I architected and implemented this strategy
- Migrated site from Netlify to Gatsby Cloud for hosting and builds
- Used GraphQL to query Contentful and WordPress

**OLD Third and Grove**- [https://www.thirdandgrove.com/](https://www.thirdandgrove.com/) - **Technical Architect, Fullstack and Frontend Developer and Designer** - **Frontend**: React **Backend**: Gatsby, Node.js, Drupal, PHP **Deploy**: Netlify/Gatsby Cloud, Pantheon **CI**: Github Actions

- Maintained code to be fully updated and performance testing
- Worked on getting the site’s components tested in Cypress with Github Actions. This can be complex because Gatsby builds can take some time if not cached correctly. I build a script that would check for a Gatsby Cloud build completed, and if it was a build that was not production it would instrument the code to be tested with Cypress.
- Worked with Third and Grove designers to build features into website using Figma
- Each commit is tested with Husky
- Image optimization and transformation using Gatsby Image
- Migrated backend to Drupal 9
- Used Netlify Lambda functions for form processing

**King Arthur Baking** - [https://www.kingarthurbaking.com/](https://www.kingarthurbaking.com/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS, Algolia Instantsearch.js **Backend**: Drupal, Algolia, PHP **Deploy**: Acquia **CI**: Github Actions

- King Arthur is very strict when it comes to accessibility and adhering to design system so all features that I have built into the site are screen reader and keyboard accessible. Features that did not pass QA will not make it to production.
- Built a highly customisable print feature for recipes. After clicking the print button you can change the recipe to suit you.
- Built a custom Algolia search implementation. This included the main search page and the search input overlay. The design and implementation work went through multiple changes to make it accessible as possible.

**Isabella Stewart Gardner Museum** - [https://www.gardnermuseum.org/](https://www.gardnermuseum.org/) - **Technical Architect, Frontend Developer and Backend Developer** - **Frontend**: Twig Templates, Gulp, Webpack, SCSS **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Travis

- Isabella Stewart Gardner Museum looks at accessibility as core value in their website. When building for the museum we have multiple targets for adhering to the design system but we also look at accessibility as part of the design.
- I maintain the module that syncs data from Gallery Systems to populate the thousands of art objects in Drupal.
- Third and Grove inherited this site from another agency, so I rebuilt much of the frontend tooling.

**VMware Cloud Health Redesign** - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Travis

- Built design system for full redesign
- Built style guide in KSS
- Worked with VMware’s designer through Adobe XD

**San Francisco Public Library** - [https://sfpl.org/](https://sfpl.org/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS **Backend**: Drupal, PHP **Deploy**: Pantheon **CI**: Travis

- Built new frontend features and components into existing architecture and design system
- San Francisco Public Library follows strict WCAG specifications

**Dartmouth College Covid 19 student info micro site** - [https://covid.dartmouth.edu/](https://covid.dartmouth.edu/) - **Lead Frontend** -

- This project was a squarespace site. I built a link between a google sheet that held data about students and faculty's Covid-19 status and produce responsive tables to display the data.

**Backroads** - [https://www.backroads.com/](https://www.backroads.com/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Travis

- For backroads.com I also built a PDF generator for their trip itineraries pages. I built a module that would output the HTML from the itinerary page and then preprocess the page to return a PDF that could be printed for you trip
- Extended the site’s design system to have new features and components.
- Worked with Backroads designer to build new components.

**Chestnut Hill Realty** - [https://www.chr-apartments.com/](https://www.chr-apartments.com/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Travis

- Chestnut Hill Realty wanted to add a layer to their design system that was a fully accessible version of the site. I created a high contrast version of the site with a toggle to turn it on and off.

**Ultimate Kronos Group** - [https://www.ukg.com/](https://www.ukg.com/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS, GSAP **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Bitbucket Pipelines

- Frontend architect and developer for new build and new design and design system.
- Build is strictly tested for accessibility.
- Build includes animations and dynamic design features using CSS3 and Green Sock.

**Davis Polk** - [https://www.davispolk.com/](https://www.davispolk.com/) - **Lead Frontend** - **Frontend**: Twig Templates, Gulp, SCSS **Backend**: Drupal, PHP **Deploy**: Acquia **CI**: Travis

- I was brought onto this project to do all the animations and transitions on the site.
- I used Green Sock and CSS3 to build the dynamic parts of the site.

</div>

#### 2017-2020 J. Paul Getty Museum and Trust - Software Engineer

**[QUIRE](https://quire.getty.edu/): Open-source multiformat publishing tool**

I was the lead maintainer of Getty Publications open-source digital publishing tool Quire and brought it to its first public release. Quire is a tool that can create dynamic publications in a variety of formats, including web, print, and e-book. Quire is an ideal tool for publishing beautiful, scholarly digital books optimized for visual imagery and designed to ensure publication content is widely accessible and stable. Quire leverages Nodejs for the CLI, Hugo/11ty (Static Site Generator), Bulma, Pandoc (File Converter), Prince XML (web to PDF). Quire adheres to strict accessibility standards of WCAG. Quire also has flexible deployment built in, deploy to your favorite serverless network. Theme is tested with Cypress/Jest, CLI is tested with Jest. CLI bundled with RollupJS. CircleCI for integration and fail safe releases. I built a multi environment Webpack configuration to bundle JavaScript and CSS for the site Hugo generates. Quire also includes an executable binary I wrote in GO that could be called from the CLI to transform images into IIIF format, a museum standard.

**Getty Search** - **Backend**: Apache Nutch, Elastic Stack **Frontend**: Vue, Vuex **Testing**: Cypress/Jest **Integration**: CircleCI **Deployment**: AWS, Netlify

Another developer and I rewrote the getty.edu search functionality with Elasticsearch. We built several frontends for the indexes that were needed to support the various types of search that were implemented before the switch. Trying to recreate what Google was doing previously was tricky, but the search’s reception was positive and some did not even notice it had changed backends. We also implemented an index for Elastic’s Application Performance Monitoring and applied it to some, if not all, of our code bases. Adding real time monitoring of the code allows our developers to drill down on resource costs to make our code fast and cost effective.

**New Docent Website** - **Frontend**: Vue, Vuex **Backend**: WordPress **Deployment**: AWS.

The docent site was a major refactor since the last site was built 7 years ago. The WordPress site connects to a scheduling system and uses this data to create a custom experience for each user based on their role and schedule. AAM award winner

_**Bauhaus Beginnings: Building the New Artist**_ - **Frontend**: Quire **Backend**: Markdown files **Integration**: CircleCI **Deployment**: Netlify.

The Bauhaus 100th anniversary site for the Getty Research Institute site was built using the CLI tool I maintained. I worked with our designer to build the site from Figma, and designed the logo and homepage animation. Several writers from the Getty Research team wrote the content in markdown files and made use of various custom shortcodes and templates that I created for the Quire’s starter theme, as well as custom themes that I created for this site.[https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/](https://www.getty.edu/research/exhibitions_events/exhibitions/bauhaus/new_artist/)

**Redesign: getty.edu** - **Frontend**: Nuxt.Js, GraphQL, Bulma, Styleguide: Storybook.js, **Backend**: Contentful, **Deploy**: Netlify

I worked on the redesign of Getty&#x27;s main website with design partner Area17 building components in Nuxt/Vue/Storybook and deployment architecture. [https://www.getty.edu/](https://www.getty.edu/)

**Art & Architecture Thesaurus** - **Backend**: Python Flask **Frontend**: Vue **Deployment**: AWS

I worked on the Art & Architecture Thesaurus API which was built with Flask. Using Vue I built a frontend solution that would make interfacing with the data more useful for the wide array of international institutions that needed to access the data.

**Getty Digital Project Dashboard** - **Frontend**: Vue, Vuex, Vue-Router, Vue-CLI **Backend**: WordPress, WPGraphQL **Deploy**: AWS

The Getty staff is broken up into various departments; my department is Getty Digital. I built a dashboard that allows various users to add/edit their projects to this dashboard in WordPress and then be displayed to other staff throughout the institution. Mainly this tool is for executive staff to keep track of the many digital projects underway at the institution.

#### 2013-2017 Natural History Family of Museums (NHMLA) - Lead Digital Developer

For NHM’s main site (nhm.org), I modernized the code to fit the demanding needs of web enabled devices, and with every new project, sold my colleagues on the advantages of this modernization even if it wasn’t initially an institutional priority. I have led many section-specific updates to the sites. All three institutions had various departments with web related needs. I make sure that each one has the ability to get what it needs out of the web. For the La Brea Tar Pits and Museum (tarpits.org), I worked with Hello Design to create a mobile theme using the existing Drupal 7 site.

I helped create the L.A. Nature Map, an interactive map that shows the discoveries of the iNaturalist app and website in L.A. County. The L.A. Nature Map lived on a micros site which supported an institutional science project called the Urban Nature Research Center, which I built a blog to better showcase the scientists’ work and other informational features on the site to help understand the urban plants and animals in Los Angeles.

For the La Brea Tar Pits we have an institutional initiative called the Ice Age Hair Ball and I was tasked with creating an online ticketing form which accepted tickets purchases, donations and pledges. It worked through the CyberSource API and through JS and PHP I was able to create custom coupons and purchases through mobile and desktop devices through front end solutions that I designed. The purchase path also was secure and adhered to PCI compliance.

For exhibitions, I developed microsites or pages that would have a special look and feel to promote the new exhibit, while still connecting to the overall brand of the institution. I enjoyed building these since I would be deeply involved in design and I got to show off some of my creativity through coding and design.

Another major project was a micro-site for the Pterosaurs exhibit. I converted old code from a game the institution paid for several years ago into a robust, responsive game that allowed users to determine what pterosaur they were based on off question logic. The entire site was built off a responsive framework that I developed, because I needed all the code to play together. I created a “pterosaur tracker” that used the Google maps api and js to have a pterosaur fly across the U.S. to stops on its way to the museum. I made use of the JS Canvas API to create an image that would follow the rotational position of the KML points which gave a feeling of the pterosaur actually flying. I used requestAnimationFrame and the rendering engine which gave the pterosaur flying on the Google Map 60fps allowing fluid animation and preventing jitter.

I created a meme generator for the Extreme Mammals that was fully editable and the image and page could be recalled for sharing.

I created a custom calendar interface that aggregated events of different types. I built an API from Drupal and used JavaScript, CSS and HTML to build a frontend based on the user’s query. Events also had different types, that was part of the interface.I designed this entire solution.

I built and maintained an internal scheduling tool that would allow different departments to schedule rooms in various buildings that NHM owns.

I built a real time leaderboard for the City Nature Challenge using the iNaturalist API. This was a community event where users identified plants and animals and as those got processed through iNaturalist they would show up in their API. The site we created became the main informational site and contest status for a worldwide event.

- Project lead and strategist for all digital properties and projects
- Administrated LAMP stacks on 3 Redhat servers (dev, stage, production)
- Managed multiple custom forms with PHP and NodeJS backends, secure processing and notification was always my highest priority.
- Integrated development between datasets from multi backends (MYSQL and MongoDB) and APIs.
- Made use of Google Maps API and JS Canvas API to create an interactive Google map tracking application with custom directional image of a Pterosaur that followed a predetermined path set in KML file that would finish on a given date
- Used Gulp to compile SCSS and JavaScript
- Various JavaScript frontend development (interactive, utility, game)
- All deployments were via dedicated Rackspace servers via Gitlab deploy scripts

#### 2012-2013 The Confluence Group - Creative Director/Web Director

The Confluence is a digital marketing, advertising, and publicity company. I was hired to create a system to handle their massive database of websites, mostly consisting of print, radio, and TV info data. They needed a way to enter new information into the database, a fast faceted search, and ways to output reports.

- Built 3D animations with 3Ds Max, VRAY, and composited in After Effects (<https://vimeo.com/40062967>)
- Created various promotional sites for our affiliates
- Retouched photos and edited promotional videos
- Maintained Drupal instances for a custom reporting dashboard for clients (Each client had their own private dashboard to view the stats from the advertising campaign)
- For data visualizations for reporting using D3.js and Highcharts.js.
- Deployed via Pantheon

#### 2009-2012 Flaunt Magazine - Digital Design Director

As the Digital Design Director at Flaunt Magazine I worked with photographers, artists, and advertisers to create the unique and intricate covers every month. Flaunt’s cover was actually two covers: The main art cover and then a second layout that was the main interview or main fashion story for that issue. To create this work, I used Indesign, Illustrator, and Photoshop, and for the more intricate vectors I used a program called Rhino 3D.

For the website at Flaunt, I maintained a Linux Ubuntu server leveraging Rackspace Cloud for scalability. This allowed me to use Varnish Cache, Memcached, and an AWS CDN for a highly available server that was able to handle up to a million visitors a day. I designed, implemented, and maintained the site while also working on the magazine.

Building, maintaining, and designing the Digital properties at Flaunt magazine required working with content editors for the site, editors, interns, writers, photographers, artists, illustrators, musicians and various other content creators. The evolving nature of the kinds of media and stakeholders created some interesting design problems to solve. That is what is great about working in digital; it also provides a lot of amazing solutions for almost any situation.

- Controlled the flow of all visual media within Flaunt Magazine’s web and print media pipeline.
- Design and implement new features for flaunt.com
- Maintained a high performance Rackspace cloud server that ran a Drupal instance with CloudFront CDN
- Maintained and facilitated all technology at the office, including, large-format printers, web and LAN servers, cameras, computers, and software
- Organized and edited a large range of media types, from streaming video to 3D models and high-resolution graphics

### FREELANCE

#### [Natural History Family of Museums (NHMLA) - ongoing contract work](https://nhm.org/)

**Backend**: Drupal
**Frontend**: Twig, JavaScript, SCSS, Webpack
**Deploy**: Pantheon
**CI**: Github Actions

- Built custom Drupal 11 components from Figma, frontend and backend development
- Custom module development to extend Drupal functionality
- Design and development consultation — an ongoing relationship over a decade after leaving NHMLA's staff role
- Major modifications to calendar frontend and backend event display

#### [Caltech Alumni Association](https://alumni.caltech.edu/)

**Backend**: WordPress, PHP REST API
**Frontend**: React, Gutenberg
**Deploy**: AWS

- Built a custom WordPress plugin for Techer magazine with React Gutenberg blocks, custom post types, and a PHP REST API backend (AJAX, SEO, navigation); deployed to AWS.
- Developed an accessibility plugin for the Divi-based alumni site (skip links, ARIA/keyboard navigation) compatible with Divi's visual editor.

#### [UCLA Broad Stem Cell Research Center 20th anniversary website ](https://stemcell.ucla.edu/20years)

**Backend**: Drupal, Vite
**Frontend**: React, GSAP, Lenis, Typescript
**Deploy**: Pantheon
**CI**: GitLab CI/CD

- Built Drupal 11 module to add React/TypeScript application with GSAP and Lenis animation
- Collaboration and consultation with stakeholders and print designer to create the final product
- I created this single page application from the print version of the report

#### [Pills Universe NFT project](https://portalpill.pills.game/)

**Backend**: OpenSea web3 apis
**Frontend**: NextJS, SWR, Typescript, Three.js
**Deploy**: Vercel

I work with a group of developers and creators that make the Pills Universe NFTs. I built the interface of the most recent project as a way to re-mint a pill into a new one for a new avatar NFT system. When developing a web3 project using TypeScript becomes extremely valuable to know that the transaction or login process accepts the correct values. Numbers need to make use of the BigNumber types, which uses numbers in a more math driven way, but lets you know that you are using the right one. The data is added with useContext, which adds global state and with Typescript added the dispatch functions work every time. Using ThreeJS I also created the space scene that is used as the background of the interface.

I also maintain the story mode site, which runs on Jekyll and uses Netlify CMS also deployed on Vercel. I can’t say enough positive things about Netlify CMS, a great choice for a simple open source free CMS that just works. We&#x27;re moving this site over to NextJS and Typescript currently.

#### [Mamalagels](https://www.mamalagels.com/)

**Backend**: WordPress, WPGraphQL, Custom Express Endpoints
**Frontend**: NextJS, SWR, Typescript, payment gateway with Stripe
**Deploy**: Vercel, Digital Ocean

Mamalagels was built to sell custom products in a specific geolocation with a custom payment gateway. This site really shows how NextJS, SWR, Typescript work to connect content from Wordpress, payment from Stripe, and Node.JS/Express functions to generate stable HTML receipts that are accessible via a subdomain, and email correspondence via sendmail API. The Node.JS/Express functions run on the same server as the WordPress site. Making use of these technologies together are able to create a fast accessible site, with a way to make purchases. This is my sister’s company, and she only wanted to sell in certain areas, so I built a zip code checking system. We created purchase pathway forms. The key with this site was increasing access by increasing performance.

#### [ACLU](https://www.aclusocal.org/)

- Built Drupal 7 module to make new optional frontend styles for content
- These features were created for the Southern California ACLU but were pushed to the national sites

#### Adult Swim

- Built Promotional website for new show &#x27;Black Jesus&#x27;
- The website made use of the Javascript Canvas API, Youtube API and CSS3 to showcase the promo video in a &#x27;heavenly&#x27; way. The scene contained animated clouds and god sized hands.

#### [Cat Bounce](https://cat-bounce.com/)

- Rewrote high traffic Flash website to JavaScript using Matter JS and Webpack 4.
- The site receives several hundreds of thousands visits a month
- 2019 Webby Award Winner

### PERSONAL PROJECTS

#### Websites &amp; Art

- [gifpaint.in](http://gifpaint.hulea.org/)
- [yourimage.io](http://yourimage.hulea.org/)

### EDUCATION

#### Otis College of Art and Design Los Angeles, California 2002-06

### SKILLS

#### Creative, philosophical thinking based in logical and algorithmic coding experience and know-how to create unique solutions for all design and development problems. Expert knowledge of creative and development software in Linux, Windows and Mac

#### Languages

<div class="columnList">

- JavaScript
- TypeScript
- Rust
- MYSQL
- PHP
- Python
- Ruby on Rails
- HTML
- CSS
- XML
- Git
- Apache
- Nginx
- Erlang
- C#
- C
- JAVA
- GO
- BASH/ZSH
- Arduino
- GraphQL
- Lua
- Mongo

</div>

#### GenAI

<div class="columnList">

- LangGraph
- MCP (FastMCP + TS SDK)
- Claude API
- AWS Bedrock
- ChromaDB

</div>

#### CMS, Frameworks and Libraries

<div class="columnList">

- Drupal
- Composer
- Drush
- Docker
- Lando
- Vagrant
- Zend
- HighchartsJS
- jQuery
- Django
- Angular
- Vue
- Nuxt
- VueX
- React
- Redux
- Laravel
- NodeJS
- Backbone
- Underscore
- Backdrop
- OpenCV
- Caffe
- Tensorflow
- WordPress
- D3.js
- Hugo
- Gatsby
- NextJS
- Astro
- MDX
- Jekyll
- Vuepress
- Matter.js
- Three.js
- socket.io
- Pandoc
- NPM
- Prince XML
- Apache Nutch
- Elastic Stack
- Webpack
- Gulp
- Grunt
- Rollup.js
- Varnish
- SVN
- Git
- Deno
- Pika
- Jest
- Tape
- Cypress
- CircleCI
- Jenkins
- Travis
- XState

</div>

### AWARDS

- 2021 22nd annual Media &amp; Technology MUSE Awards Juror for category 2020 Response
- 2020 The American Alliance of Museums MUSE Award Winner for The Bauhaus 100th Anniversary site for the Getty Research Institute
- 2019 The American Alliance of Museums MUSE Award Winner for The Getty Docent Site
- 2019 Webby Award category Weird for cat-bounce.com
- Certificate of achievement from Mayor Antonio Villaraigosa for revitalization project
- Folio Ozzie Award — Best Overall Design, Consumer, Silver Award - Flaunt Magazine April, 2010
- Best Cover, Consumer Under 250,000 Circulation Bronze Award - Flaunt Magazine: The Census Issue April, 2010