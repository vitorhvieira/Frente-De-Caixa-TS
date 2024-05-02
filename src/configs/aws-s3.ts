import { S3, Endpoint } from "aws-sdk";

const endpoint = new Endpoint(process.env.ENDPOINT_S3);

export const s3 = new S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.KEY_APP,
  },
});
