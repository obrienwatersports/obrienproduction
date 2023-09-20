import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'obrien-water-sports.myshopify.com',
    storefrontToken: 'c726c777a2e28ea86bcf92ae2792384f',
    storefrontApiVersion: '2022-07',
  },
  logger: {
    showQueryTiming: true,
  },
});
