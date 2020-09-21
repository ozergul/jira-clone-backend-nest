"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateProjectDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], UpdateProjectDto.prototype, "id", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UpdateProjectDto.prototype, "code", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UpdateProjectDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    tslib_1.__metadata("design:type", String)
], UpdateProjectDto.prototype, "description", void 0);
exports.UpdateProjectDto = UpdateProjectDto;
//# sourceMappingURL=update-project.dto.js.map