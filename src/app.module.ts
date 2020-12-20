import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { config } from './server.config';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(config.databaseUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
