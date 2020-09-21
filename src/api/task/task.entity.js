"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../shared/entities");
let Task = class Task extends entities_1.DateAudit {
    updateTimestamp() {
        this.updatedAt = new Date();
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "taskId", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column('int'),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "reporterId", void 0);
tslib_1.__decorate([
    typeorm_1.Column('int'),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Task.prototype, "updateTimestamp", null);
Task = tslib_1.__decorate([
    typeorm_1.Entity('tasks')
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map