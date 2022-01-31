"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    // make an array of presistent parts that needed to be populated
    const populateList = ["seo"];

    // push the items from the ctx.query.populate to the array
    // and joining it together with a comma.
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    console.log(ctx.query.populate);

    const response = await super.findOne(ctx);
    // some more logic

    return response;
  },
}));
