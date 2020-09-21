"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lov_service_1 = require("../lov/lov.service");
const enum_1 = require("../lov/enum");
const project_service_1 = require("../project/project.service");
let UiController = class UiController {
    constructor(lovService, projectService) {
        this.lovService = lovService;
        this.projectService = projectService;
    }
    async createTask() {
        const priorities = await this.lovService.findAllByType(enum_1.LovType.TaskPriority);
        const types = await this.lovService.findAllByType(enum_1.LovType.TaskType);
        const projects = await this.projectService.getAll();
        return {
            priorities,
            types,
            projects,
        };
    }
};
tslib_1.__decorate([
    common_1.Get('/create-task'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UiController.prototype, "createTask", null);
UiController = tslib_1.__decorate([
    swagger_1.ApiTags('ui'),
    common_1.Controller('/ui'),
    tslib_1.__metadata("design:paramtypes", [lov_service_1.LovService, project_service_1.ProjectService])
], UiController);
exports.UiController = UiController;
//# sourceMappingURL=ui.controller.js.map