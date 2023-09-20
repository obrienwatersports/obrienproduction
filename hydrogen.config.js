import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: Oxygen?.env?.PUBLIC_STORE_DOMAIN,
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    storefrontApiVersion: Oxygen?.env?.PUBLIC_STOREFRONT_API_VERSION,
  },
});
