import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Good } from './good.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Good) private goodsRepository: Repository<Good>,
  ) {}

  async getAll(good: Good): Promise<Good[]> {
    return await this.goodsRepository.find();
  }

  async getById(_id: number): Promise<Good[]> {
    return await this.goodsRepository.find({ where: [{ id: _id }] });
  }

  async create(good: Good): Promise<Good> {
    const newGood = new Good();
    return await this.goodsRepository.save(newGood);
  }

  async update(_id: number, good: Good): Promise<Good> {
    let updatedGood = await this.goodsRepository.findOne(_id);
    updatedGood = good;
    return await this.goodsRepository.save(updatedGood);
  }

  async remove(_id: number): Promise<Good> {
    const removedGood = await this.goodsRepository.findOne(_id);
    return await this.goodsRepository.remove(removedGood);
  }
}
