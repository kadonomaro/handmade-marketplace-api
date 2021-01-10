import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    try {
      return await this.productsRepository.find({
        relations: ['categories'],
        order: { sort: 'ASC' },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getById(_id: string): Promise<Product> {
    try {
      return await this.productsRepository.findOne({
        where: [{ id: _id }],
        relations: ['categories'],
      });
    } catch (error) {
      console.error(error);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      product.slug = product.slug || (+new Date()).toString(36);
      product.created_at = new Date();
      return await this.productsRepository.save(product);
    } catch (error) {
      console.error(error);
    }
  }

  async update(_id: string, product: Product): Promise<Product> {
    try {
      const updatedProduct = await this.productsRepository.findOne(_id);
      if (!updatedProduct) {
        throw new NotFoundException(`Product with id=${_id} is not found`);
      }
      updatedProduct.slug = product.slug;
      updatedProduct.active = product.active;
      updatedProduct.sort = product.sort;
      updatedProduct.title = product.title;
      updatedProduct.description = product.description;
      updatedProduct.amount = product.amount;
      updatedProduct.price = product.price;
      updatedProduct.preview_image = product.preview_image;
      updatedProduct.detail_image = product.detail_image;
      updatedProduct.seo_title = product.seo_title;
      updatedProduct.seo_description = product.seo_description;
      updatedProduct.updated_at = new Date();
      updatedProduct.categories = product.categories;
      return await updatedProduct.save();
    } catch (error) {
      console.error(error);
    }
  }

  async remove(_id: string): Promise<Product> {
    try {
      const removedProduct = await this.productsRepository.findOne(_id);
      if (!removedProduct) {
        throw new NotFoundException(`Product with id=${_id} is not found`);
      }
      return await this.productsRepository.remove(removedProduct);
    } catch (error) {
      console.error(error);
    }
  }
}
