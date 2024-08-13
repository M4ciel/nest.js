import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';

describe('UserService', () => {
	let userService: UserService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserService],
		}).compile();

		userService = module.get<UserService>(UserService);
	});

	describe('create', () => {
		it('should create and return a user', () => {
			const result: User = {
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
			};
			expect(
				userService.create({
					name: 'John Doe',
					email: 'john@example.com',
				}),
			).toEqual(result);
		});
	});

	describe('findAll', () => {
		it('should return an array of users', () => {
			const result: User[] = [
				{ id: 1, name: 'John Doe', email: 'john@example.com' },
			];
			userService.create({ name: 'John Doe', email: 'john@example.com' });
			expect(userService.findAll()).toEqual(result);
		});
	});

	describe('findOne', () => {
		it('should return a user by ID', () => {
			const result: User = {
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
			};
			userService.create({ name: 'John Doe', email: 'john@example.com' });
			expect(userService.findOne(1)).toEqual(result);
		});

		it('should throw NotFoundException when user is not found', () => {
			expect(() => userService.findOne(999)).toThrow(NotFoundException);
		});
	});

	describe('update', () => {
		it('should update and return the updated user', () => {
			const result: User = {
				id: 1,
				name: 'John Updated',
				email: 'john@example.com',
			};
			userService.create({ name: 'John Doe', email: 'john@example.com' });
			expect(userService.update(1, { name: 'John Updated' })).toEqual(
				result,
			);
		});

		it('should throw NotFoundException when trying to update a non-existing user', () => {
			expect(() => userService.update(999, { name: 'Jane Doe' })).toThrow(
				NotFoundException,
			);
		});
	});

	describe('remove', () => {
		it('should remove a user by ID', () => {
			userService.create({ name: 'John Doe', email: 'john@example.com' });
			expect(() => userService.remove(1)).not.toThrow();
		});

		it('should throw NotFoundException when trying to remove a non-existing user', () => {
			expect(() => userService.remove(999)).toThrow(NotFoundException);
		});
	});
});
