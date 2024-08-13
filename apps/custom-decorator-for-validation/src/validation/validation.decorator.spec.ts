import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ExampleController } from '../modules/example/example.controller';

describe('Validate Decorator', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			controllers: [ExampleController],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await app.close();
	});

	it('should throw BadRequestException with invalid data', () => {
		return request(app.getHttpServer())
			.post('/example')
			.send({ name: '' })
			.expect(400)
			.expect({
				statusCode: 400,
				message: 'Validation failed: Invalid data',
				error: 'Bad Request',
			});
	});

	it('should pass validation with valid data', () => {
		return request(app.getHttpServer())
			.post('/example')
			.send({ name: 'ValidName' })
			.expect(201)
			.expect({ message: 'Data is valid', data: { name: 'ValidName' } });
	});

	it('should throw BadRequestException with invalid data', () => {
		return request(app.getHttpServer())
			.post('/example')
			.send({ name: 'No' })
			.expect(400)
			.expect({
				statusCode: 400,
				message: 'Validation failed: Invalid data',
				error: 'Bad Request',
			});
	});
});
