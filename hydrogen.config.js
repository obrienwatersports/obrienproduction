import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'kent-outdoors.myshopify.com',
    storefrontToken: 'c4b18b8c6ae1dc48941df55891ff243b',
    storefrontApiVersion: '2022-07',
  },
  logger: {
    showQueryTiming: true,
  },
});
