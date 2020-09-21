"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LoginUserDto {
}
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=login-user.dto.js.map