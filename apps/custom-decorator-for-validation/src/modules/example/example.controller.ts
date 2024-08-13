import { Controller, Post, Body } from '@nestjs/common';
import { Validate } from '../../validation/validation.decorator';

@Controller('example')
export class ExampleController {
	@Post()
	create(
		@Body()
		@Validate((value) => value.name !== '' && value.name.length > 3)
		data: any,
	) {
		return {
			message: 'Data is valid',
			data,
		};
	}
}
