import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  Put,
  Query,
} from '@nestjs/common';
import * as _ from 'lodash';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FindAllFilter, ProductDto } from './products.dto';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { Product } from './entity/product.entity';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('productImage', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const newFileName = `${Date.now()}-${file.originalname}`;
          callback(null, newFileName);
        },
      }),
    }),
  )
  create(
    @Body() product: ProductDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/*' })],
        fileIsRequired: false,
      }),
    )
    file?: Express.Multer.File,
  ) {
    return this.productsService.create({
      ...product,
      photoUrl: file?.filename || null,
    });
  }

  @Get(':productId')
  findOne(@Param('productId') productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get()
  findAll(@Query() filter?: FindAllFilter) {
    return this.productsService.findAll(filter);
  }

  @Put()
  update(@Body() productData: Product) {
    return this.productsService.update(productData);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return this.productsService.remove(productId);
  }
}
