import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'obrien-2024.myshopify.com',
    storefrontToken: '417fa8b8572590b9288321a4e146f3a6',
    storefrontApiVersion: '2022-07',
  },
  logger: {
    showQueryTiming: true,
  },
});
