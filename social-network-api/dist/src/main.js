"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ApiModule_1 = require("./Api/ApiModule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(ApiModule_1.ApiModule);
    await app.listen(process.env.PORT ?? 3030);
}
bootstrap();
//# sourceMappingURL=main.js.map