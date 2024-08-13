import { Controller, Post, Body } from '@nestjs/common';
import { Validate } from '../../validation/validation.decorator';

@Controller('example')
export class ExampleController {
	@Post()
	create(
		@Body()
		@Validate((data) => data && data.name && data.name.length > 3)
		data: any,
	) {
		return {
			message: 'Data is valid',
			data,
		};
	}
}
