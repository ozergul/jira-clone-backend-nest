"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./task.entity");
const task_controller_1 = require("./task.controller");
const task_service_1 = require("./task.service");
const shared_1 = require("../../shared");
let TaskModule = class TaskModule {
};
TaskModule = tslib_1.__decorate([
    common_1.Module({
        imports: [shared_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task])],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map