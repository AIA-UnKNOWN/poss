import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.provider';

@Module({
  imports: [DatabaseModule],
  exports: [UsersService],
  providers: [
    ...userProviders,
    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
