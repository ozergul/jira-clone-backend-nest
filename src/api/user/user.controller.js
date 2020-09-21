"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return await this.usersService.findAll();
    }
    async create(res, createUserDto) {
        const user = await this.usersService.create(createUserDto);
        if (user) {
            const { password } = user, result = tslib_1.__rest(user, ["password"]);
            res.status(common_1.HttpStatus.OK).send(result);
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    // TODO ROLE
    async delete(res, id) {
        const deleted = await this.usersService.deleteById(id);
        if (deleted.affected) {
            res.status(common_1.HttpStatus.OK).send();
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
};
tslib_1.__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Post('/create'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.CreateUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Delete('/:id'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = tslib_1.__decorate([
    swagger_1.ApiTags('users'),
    common_1.Controller('/users'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map