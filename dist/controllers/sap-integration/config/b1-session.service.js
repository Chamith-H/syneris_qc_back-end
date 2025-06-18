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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var B1SessionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.B1SessionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const axios_1 = require("axios");
const https = require("https");
const mongoose_2 = require("mongoose");
const sap_session_schema_1 = require("../../../schemas/common/sap-session.schema");
let B1SessionService = B1SessionService_1 = class B1SessionService {
    constructor(sessionModel) {
        this.sessionModel = sessionModel;
        this.logger = new common_1.Logger(B1SessionService_1.name);
    }
    async login_toSAP() {
        const serviceLayerCredentials = {
            CompanyDB: process.env.SAP_DB,
            UserName: process.env.SAP_USER,
            Password: process.env.SAP_PWD,
        };
        try {
            const session = await axios_1.default.post(process.env.SAP_HOST + '/Login', serviceLayerCredentials, {
                httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            });
            return {
                session: session.data.SessionId,
            };
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async request_TOKEN() {
        const sap_connection = await this.sessionModel.findOne({ target: 'SAP' });
        const exist_sessionDate = new Date(sap_connection.date);
        const current_sessionDate = new Date();
        const timeGap = current_sessionDate.getTime() - exist_sessionDate.getTime();
        const difference = timeGap / (1000 * 60);
        if (difference > 26) {
            const sapConnection = await this.login_toSAP();
            const sessionData = {
                sessionToken: sapConnection.session,
                date: new Date(),
            };
            const updateSession = await this.sessionModel.updateOne({ target: 'SAP' }, { $set: sessionData });
            if (updateSession) {
                return sapConnection.session;
            }
        }
        else {
            return sap_connection.sessionToken;
        }
    }
};
exports.B1SessionService = B1SessionService;
exports.B1SessionService = B1SessionService = B1SessionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sap_session_schema_1.SapSession.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], B1SessionService);
//# sourceMappingURL=b1-session.service.js.map