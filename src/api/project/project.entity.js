"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../shared/entities");
let Project = class Project extends entities_1.DateAudit {
    updateTimestamp() {
        this.updatedAt = new Date();
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Project.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Project.prototype, "code", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Project.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text', { nullable: true }),
    tslib_1.__metadata("design:type", String)
], Project.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column('boolean', { default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Project.prototype, "isCompleted", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Project.prototype, "updateTimestamp", null);
Project = tslib_1.__decorate([
    typeorm_1.Entity('projects')
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map