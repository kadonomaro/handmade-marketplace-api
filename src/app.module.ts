import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsModule } from './products/products.module';

// import { CategoriesModule } from './categories/categories.module';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: './.settings.env',
    // }),
    // MongooseModule.forRoot(process.env.MONGO_URI),
    TypeOrmModule.forRoot(),
    GoodsModule,
    // ProductsModule,
    // CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
