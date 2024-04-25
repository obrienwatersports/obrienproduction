// Import the necessary modules
const {redirects} = require('@shopify/hydrogen/routing');

// Define the redirects
module.exports = redirects([
  {
    from: 'https://www.obrien.com/heritage-american-flag-kayak-paddle/5637755196.p',
    to: 'https://www.obrien.com/collections/all',
    statusCode: 301,
  },
  {
    from: 'https://www.obrien.com/heritage-kayak-paddle---brown/5637755194.p',
    to: 'https://www.obrien.com/collections/all',
    statusCode: 301,
  },
  {
    from: 'https://www.obrien.com/heritage-kayak-paddle---brown/5637755194.p?preview=v962578',
    to: 'https://www.obrien.com/collections/all',
    statusCode: 301,
  },
]);
