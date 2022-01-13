"use strict";

/**
 *  program-tag controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::program-tag.program-tag",
  ({ strapi }) => ({
    async find(ctx) {
      // some logic here
      const { data } = await super.find(ctx);
      // some more logic

      const programTags = [];
      data.map((programTag) => {
        programTags.push(programTag.attributes.tag_name);
      });

      return { data: programTags };
    },

    async findOne(ctx) {
      // some logic here
      const response = await super.findOne(ctx);
      // some more logic

      return response.data.attributes.tag_name;
    },
  })
);
