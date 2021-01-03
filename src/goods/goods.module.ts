import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { Good } from './good.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Good])],
  providers: [GoodsService],
  controllers: [GoodsController],
})
export class GoodsModule {}
