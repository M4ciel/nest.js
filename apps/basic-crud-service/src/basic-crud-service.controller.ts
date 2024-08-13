import { Controller, Get } from '@nestjs/common';
import { BasicCrudServiceService } from './basic-crud-service.service';

@Controller()
export class BasicCrudServiceController {
  constructor(private readonly basicCrudServiceService: BasicCrudServiceService) {}

  @Get()
  getHello(): string {
    return this.basicCrudServiceService.getHello();
  }
}
