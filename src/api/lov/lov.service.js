"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LovService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lov_entity_1 = require("./lov.entity");
let LovService = class LovService {
    constructor(lovRepository) {
        this.lovRepository = lovRepository;
    }
    async findAllByType(lovType) {
        return this.lovRepository.find({
            where: { type: lovType },
            order: {
                value: 'DESC',
            },
        });
    }
};
LovService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(lov_entity_1.Lov)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], LovService);
exports.LovService = LovService;
//# sourceMappingURL=lov.service.js.map