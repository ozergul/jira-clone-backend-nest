"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateAudit = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class DateAudit {
}
tslib_1.__decorate([
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib_1.__metadata("design:type", Date)
], DateAudit.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    tslib_1.__metadata("design:type", Date)
], DateAudit.prototype, "updatedAt", void 0);
exports.DateAudit = DateAudit;
//# sourceMappingURL=date-audit.entity.js.map