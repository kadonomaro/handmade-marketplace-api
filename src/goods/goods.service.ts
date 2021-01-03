import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Good } from './good.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Good) private goodsRepository: Repository<Good>,
  ) {}

  async getAll(): Promise<Good[]> {
    return await this.goodsRepository.find();
  }

  async getById(_id: string): Promise<Good> {
    return await this.goodsRepository.findOne({ where: [{ id: _id }] });
  }

  async create(good: Good): Promise<Good> {
    return await this.goodsRepository.save(good);
  }

  async update(_id: string, good: Good): Promise<Good> {
    const updatedGood = await this.goodsRepository.findOne(_id);
    if (!updatedGood) {
      throw new NotFoundException('Good is not found');
    }
    updatedGood.title = good.title;
    updatedGood.description = good.description;
    updatedGood.amount = good.amount;
    updatedGood.price = good.price;
    updatedGood.preview_image = good.preview_image;
    updatedGood.detail_image = good.detail_image;
    updatedGood.seo_title = good.seo_title;
    updatedGood.seo_description = good.seo_description;
    updatedGood.seo_slug = good.seo_slug;
    return await updatedGood.save();
  }

  async remove(_id: string): Promise<Good> {
    const removedGood = await this.goodsRepository.findOne(_id);
    return await this.goodsRepository.remove(removedGood);
  }
}
