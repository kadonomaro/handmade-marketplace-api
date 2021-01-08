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
    try {
      return await this.categoriesRepository.find();
    } catch (error) {
      console.error(error);
    }
  }

  async getById(_id: string): Promise<Category> {
    try {
      return await this.categoriesRepository.findOne({
        where: [{ id: _id }],
      });
    } catch (error) {
      console.error(error);
    }
  }

  async create(category: Category): Promise<Category> {
    try {
      category.created_at = new Date();
      return await this.categoriesRepository.save(category);
    } catch (error) {
      console.error(error);
    }
  }

  async update(_id: string, category: Category): Promise<Category> {
    try {
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
      updatedCategory.updated_at = new Date();
      return await updatedCategory.save();
    } catch (error) {
      console.error(error);
    }
  }

  async remove(_id: string): Promise<Category> {
    try {
      const removedCategory = await this.categoriesRepository.findOne(_id);
      if (!removedCategory) {
        throw new NotFoundException('Category is not found');
      }
      return await this.categoriesRepository.remove(removedCategory);
    } catch (error) {
      console.error(error);
    }
  }
}
