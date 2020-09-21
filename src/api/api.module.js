"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const project_module_1 = require("./project/project.module");
const task_module_1 = require("./task/task.module");
const lov_module_1 = require("./lov/lov.module");
const ui_module_1 = require("./ui/ui.module");
let ApiModule = class ApiModule {
};
ApiModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            project_module_1.ProjectModule,
            task_module_1.TaskModule,
            lov_module_1.LovModule,
            ui_module_1.UiModule,
        ],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map