//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  collectionTypes: ["article", "category", "author"],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
  ],
};
