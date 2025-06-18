"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3_Bucket = void 0;
const aws_sdk_1 = require("aws-sdk");
const s3_Bucket = new aws_sdk_1.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
exports.s3_Bucket = s3_Bucket;
//# sourceMappingURL=aws-s3-bucket.config.js.map