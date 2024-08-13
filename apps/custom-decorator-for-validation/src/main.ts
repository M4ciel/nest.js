import { NestFactory } from '@nestjs/core';
import { CustomDecoratorForValidationModule } from './custom-decorator-for-validation.module';

async function bootstrap() {
	const app = await NestFactory.create(CustomDecoratorForValidationModule);
	await app.listen(3000);
}
bootstrap();
