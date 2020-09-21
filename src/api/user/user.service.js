"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const entity = Object.assign(new user_entity_1.User(), createUserDto);
        return this.userRepository.save(entity);
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(email) {
        return this.userRepository.findOne({ email });
    }
    async deleteById(id) {
        return this.userRepository.delete({ id });
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map