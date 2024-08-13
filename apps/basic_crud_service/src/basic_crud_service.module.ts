import { Module } from '@nestjs/common';
import { BasicCrudServiceController } from './basic_crud_service.controller';
import { BasicCrudServiceService } from './basic_crud_service.service';

@Module({
  imports: [],
  controllers: [BasicCrudServiceController],
  providers: [BasicCrudServiceService],
})
export class BasicCrudServiceModule {}
