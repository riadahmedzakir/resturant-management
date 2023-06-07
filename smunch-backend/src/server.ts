import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root/root.module';
import { MongoClient } from './modules/database/services/contracts/database.mongodb.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  await MongoClient.initializeDatabase().then(async () => {
    const app = await NestFactory.create(RootModule);
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );
    await app.listen(3000);
  });
}

bootstrap();
