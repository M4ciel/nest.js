import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto): User {
		return this.userService.create(createUserDto);
	}

	@Get()
	findAll(): User[] {
		return this.userService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number): User {
		return this.userService.findOne(id);
	}

	@Patch(':id')
	update(
		@Param('id') id: number,
		@Body() updateUserDto: UpdateUserDto,
	): User {
		return this.userService.update(id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number): void {
		return this.userService.remove(id);
	}
}
