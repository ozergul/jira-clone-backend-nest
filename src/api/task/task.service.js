"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async paginate(options) {
        return nestjs_typeorm_paginate_1.paginate(this.taskRepository, options);
    }
    async create(createTaskDto) {
        const entity = Object.assign(new task_entity_1.Task(), createTaskDto);
        return this.taskRepository.save(entity);
    }
};
TaskService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(task_entity_1.Task)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map