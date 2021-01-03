import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Product> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.service.create(product);
  }

  @Put(':id')
  update(@Body() product: Product, @Param('id') id: string): Promise<Product> {
    return this.service.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.service.remove(id);
  }
}
