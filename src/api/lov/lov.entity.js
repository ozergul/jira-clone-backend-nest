"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lov = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const enum_1 = require("./enum");
const entities_1 = require("../../shared/entities");
let Lov = class Lov extends entities_1.DateAudit {
    updateTimestamp() {
        this.updatedAt = new Date();
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Lov.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: enum_1.LovType,
    }),
    tslib_1.__metadata("design:type", String)
], Lov.prototype, "type", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Lov.prototype, "value", void 0);
tslib_1.__decorate([
    typeorm_1.Column('text'),
    tslib_1.__metadata("design:type", String)
], Lov.prototype, "text", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Lov.prototype, "updateTimestamp", null);
Lov = tslib_1.__decorate([
    typeorm_1.Entity('lovs')
], Lov);
exports.Lov = Lov;
//# sourceMappingURL=lov.entity.js.map