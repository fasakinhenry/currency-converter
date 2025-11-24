const axios = require('axios');

// Get the required environment variables
const CURRENCYLAYER_API_URL = process.env.CURRENCYLAYER_API_URL;
const RESTCOUNTRIES_BASE_URL = process.env.RESTCOUNTRIES_BASE_URL;

// GET - get exchange rates
const getExchangeRate = (fromCurrency, toCurrency) => {
  axios.get(`${CURRENCYLAYER_API_URL}`).then((response) => {
    const rate = response.data.quotes
    console.log(rate[`${fromCurrency}${toCurrency}`]);
  })
}
// GET - get all countries and their currencies
// POST - convert currency

getExchangeRate('USD', 'EUR');
