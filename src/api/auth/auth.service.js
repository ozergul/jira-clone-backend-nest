"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(usersService, jwtService, userRepository) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async validateUser(payload) {
        const user = await this.usersService.findOne(payload.email);
        if (!user) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(registerUserDto) {
        const entity = Object.assign(new user_entity_1.User(), registerUserDto);
        return this.userRepository.save(entity);
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(2, typeorm_1.InjectRepository(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map