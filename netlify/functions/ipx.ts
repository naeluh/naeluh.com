import { createIPXHandler } from '@netlify/ipx';

export const handler = createIPXHandler({
  domains: ['strapi.hulea.org'],
});
