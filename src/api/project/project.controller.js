"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const project_service_1 = require("./project.service");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async paginate(page = 1, limit = 10) {
        return await this.projectService.paginate({
            page,
            limit,
        });
    }
    async getByCode(params) {
        return await this.projectService.findByCode(params.code);
    }
    async create(res, createProjectDto) {
        const code = createProjectDto.code;
        const isExist = await this.projectService.findByCode(code);
        if (isExist) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Code you provided is existing.',
            });
        }
        const project = await this.projectService.create(createProjectDto);
        if (project) {
            res.status(common_1.HttpStatus.OK).send();
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async update(res, updateProjectDto) {
        const updated = await this.projectService.update(updateProjectDto);
        if (updated) {
            res.status(common_1.HttpStatus.OK).send();
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async completeProject(res, { id }) {
        const completed = await this.projectService.complete(id);
        if (completed) {
            const updatedLastEntity = await this.projectService.findById(id);
            res.status(common_1.HttpStatus.OK).send(updatedLastEntity);
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    async delete(res, params) {
        const deleted = await this.projectService.delete(params.id);
        if (deleted) {
            res.status(common_1.HttpStatus.OK).send(deleted);
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query('page')),
    tslib_1.__param(1, common_1.Query('limit')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "paginate", null);
tslib_1.__decorate([
    common_1.Get('/:code'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "getByCode", null);
tslib_1.__decorate([
    common_1.Post('/create'),
    tslib_1.__param(0, common_1.Res()),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.CreateProjectDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put('/update'),
    tslib_1.__param(0, common_1.Res()),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, update_project_dto_1.UpdateProjectDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Post('/complete'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "completeProject", null);
tslib_1.__decorate([
    common_1.Delete('/:id'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "delete", null);
ProjectController = tslib_1.__decorate([
    swagger_1.ApiTags('projects'),
    common_1.Controller('/projects'),
    tslib_1.__metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map