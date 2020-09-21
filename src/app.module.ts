import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ApiModule],
})
export class AppModule {}
