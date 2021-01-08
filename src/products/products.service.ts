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
    return await this.productsRepository.find({ relations: ['categories'] });
  }

  async getById(_id: string): Promise<Product> {
    return await this.productsRepository.findOne({
      where: [{ id: _id }],
      relations: ['categories'],
    });
  }

  async create(product: Product): Promise<Product> {
    product.created_at = new Date();
    return await this.productsRepository.save(product);
  }

  async update(_id: string, product: Product): Promise<Product> {
    const updatedProduct = await this.productsRepository.findOne(_id);
    if (!updatedProduct) {
      throw new NotFoundException('Product is not found');
    }
    updatedProduct.title = product.title;
    updatedProduct.description = product.description;
    updatedProduct.amount = product.amount;
    updatedProduct.price = product.price;
    updatedProduct.preview_image = product.preview_image;
    updatedProduct.detail_image = product.detail_image;
    updatedProduct.seo_title = product.seo_title;
    updatedProduct.seo_description = product.seo_description;
    updatedProduct.seo_slug = product.seo_slug;
    updatedProduct.updated_at = new Date();
    updatedProduct.categories = product.categories;
    return await updatedProduct.save();
  }

  async remove(_id: string): Promise<Product> {
    const removedProduct = await this.productsRepository.findOne(_id);
    return await this.productsRepository.remove(removedProduct);
  }
}
