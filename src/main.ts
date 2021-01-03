import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
  });
}
bootstrap();
