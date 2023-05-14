import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { roleProviders } from './roles.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...roleProviders,
    RolesService,
  ],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
