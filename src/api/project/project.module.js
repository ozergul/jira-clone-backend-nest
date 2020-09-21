"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_controller_1 = require("./project.controller");
const project_entity_1 = require("./project.entity");
const project_service_1 = require("./project.service");
const shared_1 = require("../../shared");
let ProjectModule = class ProjectModule {
};
ProjectModule = tslib_1.__decorate([
    common_1.Module({
        imports: [shared_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project])],
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService],
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map