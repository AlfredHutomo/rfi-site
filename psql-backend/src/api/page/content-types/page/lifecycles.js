module.exports = {
  async beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    if (!data.indexPage) {
      const parentData = await strapi.entityService.findOne(
        "api::page.page",
        data.parent
      );

      const array = [`/${data.slug}`];

      if (parentData) {
        array.unshift(parentData.url);
      }

      data.url = array.join("");
    } else {
      data.url = "/";
    }
  },

  async beforeUpdate(event) {
    const { data, where, select, populate } = event.params;

    if (!data.indexPage) {
      const parentData = await strapi.entityService.findOne(
        "api::page.page",
        data.parent
      );

      const array = [`/${data.slug}`];

      if (parentData) {
        array.unshift(parentData.url);
      }

      data.url = array.join("");
    } else {
      data.url = "/";
    }
  },
};
