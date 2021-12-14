"use strict";

/**
 *  program controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::program.program", ({ strapi }) => ({
  async find(ctx) {
    // make an array of parts that needed to be populated
    const populateList = ["tags"];

    // push the items from the ctx.query.populate to the array
    // and joining it together with a comma.
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    // some logic here
    let { data, meta } = await super.find(ctx);
    // some more logic
    data = data.map((program) => {
      let trimmedProgram = program;

      const strippedTags = trimmedProgram.attributes.tags.data.map(
        (tag) => tag.attributes.tag_name
      );

      trimmedProgram.attributes.tags = strippedTags;

      return trimmedProgram;
    });

    return { data, meta };
  },

  async findOne(ctx) {
    // make an array of parts that needed to be populated
    const populateList = ["tags"];

    // push the items from the ctx.query.populate to the array
    // and joining it together with a comma.
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    const { data } = await super.findOne(ctx);
    // some more logic
    const strippedTags = data.attributes.tags.data.map(
      (tag) => tag.attributes.tag_name
    );

    data.attributes.tags = strippedTags;

    return data;
  },
}));
