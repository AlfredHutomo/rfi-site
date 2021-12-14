"use strict";

/**
 *  home-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      const populateList = ["Hero.hero_card"];

      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");

      const respond = await super.find(ctx);

      const { data } = respond;

      return data;
    },
  })
);
