"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./project.entity");
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(createProjectDto) {
        const entity = Object.assign(new project_entity_1.Project(), createProjectDto);
        return this.projectRepository.save(entity);
    }
    async findByCode(code) {
        return this.projectRepository.findOne({ code });
    }
    async findById(id) {
        return this.projectRepository.findOne({ id });
    }
    async paginate(options) {
        const queryBuilder = this.projectRepository.createQueryBuilder('project');
        queryBuilder.orderBy('project.updatedAt', 'DESC');
        return nestjs_typeorm_paginate_1.paginate(queryBuilder, options);
    }
    async update(updateProjectDto) {
        return this.projectRepository.save(updateProjectDto);
    }
    async complete(id) {
        return this.projectRepository.update(id, { isCompleted: true });
    }
    async delete(id) {
        return this.projectRepository.delete(id);
    }
    async getAll() {
        return this.projectRepository.find();
    }
};
ProjectService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(project_entity_1.Project)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map