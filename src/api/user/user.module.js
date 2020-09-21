"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user.controller");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const shared_1 = require("../../shared");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    common_1.Module({
        imports: [shared_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map