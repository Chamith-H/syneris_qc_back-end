export declare class AwsS3BucketService {
    uploadFiles(files: any[], folder: string): Promise<string[]>;
    private s3_upload;
    getFiles(keys: string[]): Promise<({
        url?: undefined;
        key?: undefined;
        name?: undefined;
    } | {
        url: string;
        key: string;
        name: string;
    })[]>;
    getSingleFile(key: string): Promise<{
        url: string;
        key: string;
        name: string;
    }>;
    fileSyncer(beforeFileList: string[], afterFileList: string[]): Promise<true | void>;
    removeFiles(files: string[]): Promise<boolean>;
}
