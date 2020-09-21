"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const bcryptjs_1 = require("bcryptjs");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../shared/entities");
let User = class User extends entities_1.DateAudit {
    updateTimestamp() {
        this.updatedAt = new Date();
    }
    async hashPassword() {
        this.password = await bcryptjs_1.default.hash(this.password, 10);
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'text', default: 'tr-TR' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "language", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], User.prototype, "updateTimestamp", null);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = tslib_1.__decorate([
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map