"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateProjectDto.prototype, "code", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateProjectDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    tslib_1.__metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
exports.CreateProjectDto = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map