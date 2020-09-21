"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_module_1 = require("./config/config.module");
const api_module_1 = require("./api/api.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [config_module_1.ConfigModule, database_module_1.DatabaseModule, api_module_1.ApiModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map