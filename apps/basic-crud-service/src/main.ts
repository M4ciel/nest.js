import { NestFactory } from '@nestjs/core';
import { BasicCrudServiceModule } from './basic-crud-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BasicCrudServiceModule);
  await app.listen(3000);
}
bootstrap();
