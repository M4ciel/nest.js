import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	private users: User[] = [];
	private idCounter = 1;

	create(createUserDto: CreateUserDto): User {
		const newUser: User = {
			id: this.idCounter++,
			name: createUserDto.name,
			email: createUserDto.email,
		};

		this.users.push(newUser);
		return newUser;
	}

	findAll(): User[] {
		return this.users;
	}

	findOne(id: number): User {
		const user = this.users.find((user) => user.id === id);

		if (!user) {
			throw new NotFoundException(`User with ID ${id} not found`);
		}

		return user;
	}

	update(id: number, updateUserDto: UpdateUserDto): User {
		const user = this.findOne(id);

		if (updateUserDto.name) {
			user.name = updateUserDto.name;
		}

		if (updateUserDto.email) {
			user.email = updateUserDto.email;
		}

		return user;
	}

	remove(id: number): void {
		const index = this.users.findIndex((user) => user.id === id);

		if (index === -1) {
			throw new NotFoundException(`User with ID ${id} not found`);
		}

		this.users.splice(index, 1);
	}
}
