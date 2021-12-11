require('dotenv').config();

const {
  ENV,
  PORT,
  API_URL,
  API_KEY_TOKEN,
} = process.env;

module.exports = {
  dev: process.env.ENV !== 'production',
  env: ENV,
  port: PORT,
  apiUrl: API_URL,
  apiKeyToken: API_KEY_TOKEN,
};
