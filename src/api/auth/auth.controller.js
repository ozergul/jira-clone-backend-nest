"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req) {
        return this.authService.login(req.body);
    }
    async register(res, registerUserDto) {
        const user = await this.authService.register(registerUserDto);
        if (user) {
            const { password } = user, result = tslib_1.__rest(user, ["password"]);
            res.status(common_1.HttpStatus.OK).send(result);
        }
        else {
            res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
    }
    getProfile(req) {
        return req.user;
    }
};
tslib_1.__decorate([
    common_1.Post('/login'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    common_1.Post('/register'),
    tslib_1.__param(0, common_1.Res()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, dto_1.RegisterUserDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
tslib_1.__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('/me'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('/auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map