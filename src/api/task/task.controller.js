"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task_service_1 = require("./task.service");
const dto_1 = require("./dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async paginate(page = 1, limit = 10) {
        return await this.taskService.paginate({
            page,
            limit,
        });
    }
    async create(res, createTaskDto) {
        const task = await this.taskService.create(createTaskDto);
        if (task) {
            res.status(common_1.HttpStatus.OK).send(task);
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
], TaskController.prototype, "paginate", null);
tslib_1.__decorate([
    common_1.Post('/create'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.CreateTaskDto]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
TaskController = tslib_1.__decorate([
    swagger_1.ApiTags('tasks'),
    common_1.Controller('/tasks'),
    tslib_1.__metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map