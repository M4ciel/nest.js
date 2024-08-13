import { NestFactory } from '@nestjs/core';
import { BasicCrudServiceModule } from './basic_crud_service.module';

async function bootstrap() {
	const app = await NestFactory.create(BasicCrudServiceModule);
	await app.listen(3000);
}
bootstrap();
