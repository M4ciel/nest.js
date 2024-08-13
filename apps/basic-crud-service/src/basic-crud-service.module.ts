import { Module } from '@nestjs/common';
import { BasicCrudServiceController } from './basic-crud-service.controller';
import { BasicCrudServiceService } from './basic-crud-service.service';

@Module({
  imports: [],
  controllers: [BasicCrudServiceController],
  providers: [BasicCrudServiceService],
})
export class BasicCrudServiceModule {}
