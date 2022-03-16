module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: "ap-southeast-2",
        params: {
          Bucket: "rfi-site",
        },
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
    //url: "https://api.vercel.com/v1/integrations/deploy/prj_tTSSXbwDKQHVK8YPVVwhjBqIiq1R/96cl12i8hS",
      url: "https://api.vercel.com/v1/integrations/deploy/prj_tTSSXbwDKQHVK8YPVVwhjBqIiq1R/az0MhzdAQW",
      trigger: {
        type: "manual",
      },
      // trigger: {
      //   type: "event",
      //   events: [
      //     {
      //       model: "page",
      //       types: ["create", "update", "delete"],
      //     },
      //     {
      //       model: "program",
      //       types: ["create", "update", "delete"],
      //     },
      //     {
      //       model: "blog",
      //       types: ["create", "update", "delete"],
      //     },
      //   ],
      // },
    },
  },
});
