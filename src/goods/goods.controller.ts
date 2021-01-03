import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Good } from './good.entity';

@Controller('api/goods')
export class GoodsController {
  constructor(private readonly service: GoodsService) {}

  @Get()
  getAll(): Promise<Good[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Good> {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() good: Good): Promise<Good> {
    return this.service.create(good);
  }

  @Put(':id')
  update(@Body() good: Good, @Param('id') id: string): Promise<Good> {
    return this.service.update(id, good);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Good> {
    return this.service.remove(id);
  }
}
