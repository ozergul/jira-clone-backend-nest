"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTaskDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map