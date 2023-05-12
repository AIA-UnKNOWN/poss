import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import * as _ from 'lodash';
import { CATEGORY_REPOSITORY } from './categories.provider';
import { Category } from './entity/category.entity';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoriesService {

  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private categoryRepository: Repository<Category>
  ) {}

  create(category: CategoryDto): Promise<Category> {
    if (_.isEmpty(category)) throw new BadRequestException('Failed to create category due to empty payload');
    if (!category.name) throw new BadRequestException('No category name provided');
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  delete(categoryId: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(categoryId);
  }

}
