"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.B1ApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const https = require("https");
const b1_session_service_1 = require("./b1-session.service");
let B1ApiService = class B1ApiService {
    constructor(b1SessionService) {
        this.b1SessionService = b1SessionService;
    }
    async request_GET(requestOptions) {
        if (!requestOptions.logic ||
            requestOptions.logic === '' ||
            requestOptions.logic === null ||
            requestOptions.logic === undefined) {
            delete requestOptions.logic;
        }
        const token = await this.b1SessionService.request_TOKEN();
        try {
            const getResponse = await axios_1.default.get(process.env.SAP_HOST + `/${requestOptions.path}` + requestOptions.logic, {
                headers: {
                    Cookie: `B1SESSION=${token}`,
                    'B1S-CaseInsensitive': true,
                },
                httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
            return getResponse.data.value;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.response.data.error.message);
        }
    }
    async request_POST(requestOptions) {
        const token = await this.b1SessionService.request_TOKEN();
        try {
            const postResponse = await axios_1.default.post(process.env.SAP_HOST + `/${requestOptions.path}`, requestOptions.body, {
                headers: { Cookie: `B1SESSION=${token}` },
                httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
            return postResponse.data;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.response.data.error.message);
        }
    }
    async request_PATCH(requestOptions) {
        const token = await this.b1SessionService.request_TOKEN();
        try {
            const postResponse = await axios_1.default.patch(process.env.SAP_HOST +
                `/${requestOptions.path}('${requestOptions.id}')`, requestOptions.body, {
                headers: { Cookie: `B1SESSION=${token}` },
                httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
            return postResponse.data;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.response.data.error.message);
        }
    }
    async counting_GET(requestOptions) {
        if (!requestOptions.logic ||
            requestOptions.logic === '' ||
            requestOptions.logic === null ||
            requestOptions.logic === undefined) {
            delete requestOptions.logic;
        }
        const token = await this.b1SessionService.request_TOKEN();
        try {
            const getResponse = await axios_1.default.get(process.env.SAP_HOST + `/${requestOptions.path}` + requestOptions.logic, {
                headers: {
                    Cookie: `B1SESSION=${token}`,
                    'B1S-CaseInsensitive': true,
                },
                httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
            return getResponse.data;
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.response.data.error.message);
        }
    }
    async pagination_GET(requestOptions) {
        const data_endpoint = {
            path: requestOptions.path,
            logic: `?$top=${requestOptions.limit}&$skip=${requestOptions.skip}` +
                requestOptions.datalogic,
        };
        const dataCollection = await this.request_GET(data_endpoint);
        const counting_endPoint = {
            path: requestOptions.path,
            logic: '/$count' + requestOptions.counterlogic,
        };
        const count = await this.counting_GET(counting_endPoint);
        return {
            data: dataCollection,
            dataCount: count,
            pageCount: Math.ceil(count / requestOptions.limit),
            currentPage: requestOptions.page,
        };
    }
};
exports.B1ApiService = B1ApiService;
exports.B1ApiService = B1ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [b1_session_service_1.B1SessionService])
], B1ApiService);
//# sourceMappingURL=b1-api.service.js.map