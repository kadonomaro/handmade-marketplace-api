import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  getAll(): Promise<Category[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Category> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.service.create(category);
  }

  @Put(':id')
  update(
    @Body() category: Category,
    @Param('id') id: string,
  ): Promise<Category> {
    return this.service.update(id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.service.remove(id);
  }
}
