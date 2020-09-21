"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const nocache = require("nocache");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const pipes_1 = require("./shared/pipes");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    app.enableCors();
    app.use(helmet());
    app.use(nocache());
    app.use(compression());
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.useGlobalPipes(new pipes_1.CustomValidationPipe());
    app.useStaticAssets(path_1.resolve(__dirname, '..', 'resources'));
    const options = new swagger_1.DocumentBuilder()
        .setTitle(config.get('app.title'))
        .setDescription(config.get('app.description'))
        .setVersion(config.get('app.version'))
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const logger = new common_1.Logger('bootstrap');
    await app.listen(config.get('app.port'), () => {
        logger.log(`Server is listen on http://localhost:${config.get('app.port')}`);
    });
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=bootstrap.js.map