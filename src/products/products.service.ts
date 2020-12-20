import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  create(productDto: CreateProductDto) {
    this.products.push({
      ...productDto,
      id: Date.now().toString(),
    });
  }

  update(productDto: UpdateProductDto, id: string) {
    let product = this.products.find((product) => product.id === id);
    product = productDto;
  }

  remove(id: string) {
    const index = this.products.find((product) => product.id === id);
    this.products.splice(index, 1);
  }
}
