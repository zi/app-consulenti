import axios from 'axios';

const {
  REACT_APP_WP_USERNAME: username,
  REACT_APP_WP_PASSWORD: password,
  REACT_APP_WP_SITEURL: siteUrl,
  NODE_ENV: environment,
} = process.env;
const authentication = btoa(`${username}:${password}`);

const config =
  environment === 'development'
    ? { headers: { Authorization: `Basic ${authentication}` } }
    : {};

function getCategories() {
  return axios.get(`${siteUrl}/wp-json/wc/v2/products/categories`, config);
}

export { getCategories };
