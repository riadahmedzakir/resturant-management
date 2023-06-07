import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root/root.module';
import { MongoClient } from './modules/database/services/contracts/database.mongodb.service';

async function bootstrap() {
  await MongoClient.initializeDatabase().then(async () => {
    const app = await NestFactory.create(RootModule);
    await app.listen(3000);
  });
}

bootstrap();
