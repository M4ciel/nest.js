import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

describe('UserController', () => {
	let userController: UserController;
	let userService: UserService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserService],
		}).compile();

		userService = module.get<UserService>(UserService);
		userController = module.get<UserController>(UserController);
	});

	describe('create', () => {
		it('should create a user and return it', async () => {
			const result: User = {
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
			};

			jest.spyOn(userService, 'create').mockImplementation(() => result);

			expect(
				userController.create({
					name: 'John Doe',
					email: 'john@example.com',
				}),
			).toBe(result);
		});
	});

	describe('findAll', () => {
		it('should return an array of users', async () => {
			const result: User[] = [
				{ id: 1, name: 'John Doe', email: 'john@example.com' },
			];
			jest.spyOn(userService, 'findAll').mockImplementation(() => result);

			expect(userController.findAll()).toBe(result);
		});
	});

	describe('findOne', () => {
		it('should return a single user by ID', async () => {
			const result: User = {
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
			};
			jest.spyOn(userService, 'findOne').mockImplementation(() => result);

			expect(userController.findOne(1)).toBe(result);
		});
	});

	describe('update', () => {
		it('should update a user and return the updated user', async () => {
			const result: User = {
				id: 1,
				name: 'John Updated',
				email: 'john@example.com',
			};
			jest.spyOn(userService, 'update').mockImplementation(() => result);

			expect(userController.update(1, { name: 'John Updated' })).toBe(
				result,
			);
		});
	});

	describe('remove', () => {
		it('should remove a user', async () => {
			jest.spyOn(userService, 'remove').mockImplementation(
				() => undefined,
			);

			expect(userController.remove(1)).toBeUndefined();
		});
	});
});
