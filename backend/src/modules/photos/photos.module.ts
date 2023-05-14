import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { photoProviders } from './photos.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotosController],
  providers: [
    ...photoProviders,
    PhotosService,
  ],
  exports: [PhotosService],
})
export class PhotosModule {}
