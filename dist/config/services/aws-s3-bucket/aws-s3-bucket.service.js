"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3BucketService = void 0;
const common_1 = require("@nestjs/common");
const aws_s3_bucket_config_1 = require("./aws-s3-bucket.config");
let AwsS3BucketService = class AwsS3BucketService {
    async uploadFiles(files, folder) {
        if (!files || files.length === 0) {
            return [];
        }
        const uploadPromises = await Promise.all(files.map(async (file) => {
            const uploadableObject = {
                Bucket: process.env.AWS_USER,
                Key: `${folder}/${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimetype,
            };
            const uploadedFiles = await this.s3_upload(uploadableObject);
            return uploadedFiles;
        }));
        return uploadPromises;
    }
    async s3_upload(bucketModel) {
        try {
            const s3Response = await aws_s3_bucket_config_1.s3_Bucket.upload(bucketModel).promise();
            return s3Response.Key;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async getFiles(keys) {
        if (!keys || keys.length === 0) {
            return [];
        }
        const imageUrls = await Promise.all(keys.map(async (key) => {
            if (key && key !== null) {
                const params = {
                    Bucket: process.env.AWS_USER,
                    Key: key,
                    Expires: 60 * 60 * 24,
                };
                const url = await aws_s3_bucket_config_1.s3_Bucket.getSignedUrlPromise('getObject', params);
                if (!url) {
                    return {};
                }
                return { url: url, key: key, name: key.split('/').pop() };
            }
            return null;
        }));
        return imageUrls;
    }
    async getSingleFile(key) {
        if (!key || key === '' || key === null || key === undefined) {
            return { url: null, key: null, name: null };
        }
        const params = {
            Bucket: process.env.AWS_USER,
            Key: key,
            Expires: 60 * 60 * 24,
        };
        const url = await aws_s3_bucket_config_1.s3_Bucket.getSignedUrlPromise('getObject', params);
        if (!url) {
            return { url: null, key: null, name: null };
        }
        return { url: url, key: key, name: key.split('/').pop() };
    }
    async fileSyncer(beforeFileList, afterFileList) {
        const deleteList = beforeFileList.filter((item) => !afterFileList.includes(item));
        if (!deleteList || deleteList.length === 0) {
            return true;
        }
        const response = deleteList.forEach((key) => {
            aws_s3_bucket_config_1.s3_Bucket.deleteObject({
                Bucket: process.env.AWS_USER,
                Key: key,
            }, (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                else {
                    return false;
                }
            });
        });
        return response;
    }
    async removeFiles(files) {
        if (!files || files.length === 0 || !files[0]) {
            return true;
        }
        const response = files.forEach((key) => {
            aws_s3_bucket_config_1.s3_Bucket.deleteObject({
                Bucket: process.env.AWS_USER,
                Key: key,
            }, (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                else {
                    return 0;
                }
            });
        });
        return true;
    }
};
exports.AwsS3BucketService = AwsS3BucketService;
exports.AwsS3BucketService = AwsS3BucketService = __decorate([
    (0, common_1.Injectable)()
], AwsS3BucketService);
//# sourceMappingURL=aws-s3-bucket.service.js.map