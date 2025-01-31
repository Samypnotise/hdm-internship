import { NestFactory } from '@nestjs/core';
import { ApiModule } from './Api/ApiModule';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(process.env.PORT ?? 3030);
}
bootstrap();
