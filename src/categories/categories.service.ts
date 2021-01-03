import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  async getById(_id: string): Promise<Category> {
    return await this.categoriesRepository.findOne({ where: [{ id: _id }] });
  }

  async create(category: Category): Promise<Category> {
    return await this.categoriesRepository.save(category);
  }

  async update(_id: string, category: Category): Promise<Category> {
    const updatedCategory = await this.categoriesRepository.findOne(_id);
    if (!updatedCategory) {
      throw new NotFoundException('Category is not found');
    }
    updatedCategory.name = category.name;
    updatedCategory.display_name = category.display_name;
    updatedCategory.description = category.description;
    updatedCategory.preview_image = category.preview_image;
    updatedCategory.detail_image = category.detail_image;
    updatedCategory.seo_title = category.seo_title;
    updatedCategory.seo_description = category.seo_description;
    updatedCategory.seo_slug = category.seo_slug;
    return await updatedCategory.save();
  }

  async remove(_id: string): Promise<Category> {
    const removedProduct = await this.categoriesRepository.findOne(_id);
    return await this.categoriesRepository.remove(removedProduct);
  }
}
