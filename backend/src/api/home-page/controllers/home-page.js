"use strict";

/**
 *  home-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      // make an array of parts that needed to be populated
      const populateList = [
        "hero.hero_card",
        "programs.tags",
        "block_tiles.content",
      ];

      // push the items from the ctx.query.populate to the array
      // and joining it together with a comma.
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");

      // trigger the find method from the coreController
      const respond = await super.find(ctx);

      const { data } = respond;

      return data;
    },
  })
);
