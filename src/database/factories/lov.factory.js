"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const lov_entity_1 = require("../../api/lov/lov.entity");
typeorm_seeding_1.define(lov_entity_1.Lov, () => {
    const lov = new lov_entity_1.Lov();
    lov.id = 6;
    lov.text = 'test';
    return lov;
});
//# sourceMappingURL=lov.factory.js.map