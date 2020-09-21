"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationPipe = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let CustomValidationPipe = class CustomValidationPipe {
    async transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException('No data submitted');
        }
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(this.buildError(errors));
        }
        return value;
    }
    buildError(errors) {
        return errors
            .map((error) => Object.entries(error.constraints).map((item) => ({
            property: error.property,
            error: item[0],
            message: item[1],
        })))
            .reduce((acc, item) => [...acc, ...item], []);
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find((type) => metatype === type);
    }
};
CustomValidationPipe = tslib_1.__decorate([
    common_1.Injectable()
], CustomValidationPipe);
exports.CustomValidationPipe = CustomValidationPipe;
//# sourceMappingURL=validation.pipe.js.map