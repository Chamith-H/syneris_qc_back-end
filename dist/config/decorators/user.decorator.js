"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
const jwt = require('jsonwebtoken');
exports.GetUser = (0, common_1.createParamDecorator)(async (_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    if (!token || !token.startsWith('Bearer ')) {
        return null;
    }
    const jwtToken = token.replace('Bearer ', '');
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    return payload.id;
});
//# sourceMappingURL=user.decorator.js.map