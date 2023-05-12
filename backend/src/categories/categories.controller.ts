import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './category.dto';

@Controller('categories')
export class CategoriesController {

  constructor(
    private readonly categoriesService: CategoriesService,
  ) {}

  @Post()
  create(@Body() category: CategoryDto) {
    return this.categoriesService.create(category);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Delete(':categoryId')
  delete(@Param('categoryId') categoryId: number) {
    return this.categoriesService.delete(categoryId);
  }

}
