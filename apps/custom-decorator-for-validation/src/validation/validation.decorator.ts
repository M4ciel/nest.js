import {
	createParamDecorator,
	ExecutionContext,
	BadRequestException,
} from '@nestjs/common';

export const Validate = createParamDecorator(
	(validationFn: (value: any) => boolean, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		const value = request.body || request.params || request.query;

		if (!validationFn(value)) {
			throw new BadRequestException('Validation failed: Invalid data');
		}

		return value;
	},
);
