"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ui_controller_1 = require("./ui.controller");
const lov_service_1 = require("../lov/lov.service");
const lov_entity_1 = require("../lov/lov.entity");
const project_service_1 = require("../project/project.service");
const project_entity_1 = require("../project/project.entity");
const shared_1 = require("../../shared");
let UiModule = class UiModule {
};
UiModule = tslib_1.__decorate([
    common_1.Module({
        imports: [shared_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([lov_entity_1.Lov, project_entity_1.Project])],
        controllers: [ui_controller_1.UiController],
        providers: [lov_service_1.LovService, project_service_1.ProjectService],
    })
], UiModule);
exports.UiModule = UiModule;
//# sourceMappingURL=ui.module.js.map