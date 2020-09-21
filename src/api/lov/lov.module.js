"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LovModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lov_service_1 = require("./lov.service");
const lov_entity_1 = require("./lov.entity");
const shared_1 = require("../../shared");
let LovModule = class LovModule {
};
LovModule = tslib_1.__decorate([
    common_1.Module({
        imports: [shared_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([lov_entity_1.Lov])],
        providers: [lov_service_1.LovService],
    })
], LovModule);
exports.LovModule = LovModule;
//# sourceMappingURL=lov.module.js.map