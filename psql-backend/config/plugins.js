module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_S3_REGION"),
        params: {
          Bucket: env("AWS_S3_BUCKET"),
        },
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
      url: env("VERCEL_BUILD_HOOK"),
      trigger: {
        type: "manual",
      },
    },
  },
});
