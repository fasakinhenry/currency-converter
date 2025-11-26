const axios = require('axios');

// Get the required environment variables
const CURRENCYLAYER_API_URL = process.env.CURRENCYLAYER_API_URL;
const RESTCOUNTRIES_BASE_URL = process.env.RESTCOUNTRIES_BASE_URL;
const RESTCOUNTRIES_API_KEY = process.env.RESTCOUNTRIES_API_KEY;

// Convert 1 unit of one currency to another to get exchange rates
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(
    `${CURRENCYLAYER_API_URL}&from=${fromCurrency}&to=${toCurrency}&amount=1`
  );
  const exchangeRate = response.data.result;

  if (!exchangeRate || isNaN(exchangeRate)) {
    throw new Error(
      `Unable to get exchange rate from ${fromCurrency} to ${toCurrency}`
    );
  }
  return exchangeRate;
};

// Get countries using a specific currency
const getCountries = async (toCurrency) => {
  try {
    const response = await axios.get(
      `${RESTCOUNTRIES_BASE_URL}/${toCurrency}?access_key=${RESTCOUNTRIES_API_KEY}`
    );
    return response.data.map((country) => country.name);
  } catch (error) {
    throw new Error(`Unable to get countries that use ${toCurrency}`);
  }
};

// Convert currency and output a message
// Multiply exchange rate by amount to get converted currency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const countries = await getCountries(toCurrency);
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);
  return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries.join(
    ', '
  )}`;
};

// call convertCurrency function
convertCurrency('PGK', 'NGN', 100)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
