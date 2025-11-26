# Currency Converter

## Overview

This is a simple tool that outputs a friendly message to users showing conversion from one currency to another. We are basically fetching exchange rate from one currency to another and simply multiplying it by the amount of money to be converted.

It basically consists of three functions:

- `getExchangeRate` : This gets the exchange rate from one currency to another
- `getCountries` : This functions gets all the country using the currency that we converted into.
- `convertCurrency` : This function converts the currency by multiplying exchange rate by amount of currency that needs to be converted. It also outputs the final message to the users.

It's just a simple prototype to test new waters.

## Goal

The goal of this project is to get a good grasp of the following things:

1. How Async/Await works and how we can use them as a syntactical sugar to write asynchronous codes.
2. How to use axios library to get results from an external API

On the bright side, this is a big step to achieving my bigger goals of building tons of real world projects.

## Getting Started

To replicate this project, you would have to check out the `.env.example` file and copy it into a `.env` file. You also have to follow these steps:

- Visit [Currency Layer](https://currencylayer.com) to create an account and get a free API key. Free API key should be enough to get started.
- Visit [Country Layer](https://currencylayer.com) to create an account and get a free API key. Free API key should also be enough to get started.
- Copy the API keys and add them appriopriately to the `.env` file.
- Run `bun index.js` to see your output.
- Change the currencies involved in `index.js` file to get conversion of another set of currencies.

> JSYK, Currency layer is used to get exchange rates while country layer is used to get all countries using a specific currency.

## Technology stacks

I made use of the following technologies to keep things simple:

1. **Javascript** - Main scripting language.
2. **Axios** - Fetching library to fetch data from currency converter API
3. **Bun** - Package manager to install dependencies Godspeed.

> Made with 💖 by [fasakinhenry](https://github.com/fasakinhenry)

