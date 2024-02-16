"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const announcements_schema_1 = require("./announcements/announcements.schema");
const creators_schema_1 = require("./creators/creators.schema");
const announcers_schema_1 = require("./announcers/announcers.schema");
const clicks_schema_1 = require("./clicks/clicks.schema");
const references_schema_1 = require("./references/references.schema");
const path_1 = require("path");
const fs_1 = require("fs");
async function bootstrap() {
    const cors = require('cors');
    const serverUrl = 'https://mac-backend-six.vercel.app';
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('MAC API')
        .setDescription('APIs for MAC application.')
        .setVersion('1.0')
        .addTag('mac')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels: [announcements_schema_1.Announcement, creators_schema_1.Creator, announcers_schema_1.Announcer, clicks_schema_1.Click, references_schema_1.Reference],
    });
    swagger_1.SwaggerModule.setup('swagger', app, document);
    app.use(cors());
    dotenv.config();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
    if (process.env.NODE_ENV === 'development') {
        const pathToSwaggerStaticFolder = (0, path_1.resolve)(process.cwd(), 'swagger-static');
        const pathToSwaggerJson = (0, path_1.resolve)(pathToSwaggerStaticFolder, 'swagger.json');
        const swaggerJson = JSON.stringify(document, null, 2);
        (0, fs_1.writeFileSync)(pathToSwaggerJson, swaggerJson);
        console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map