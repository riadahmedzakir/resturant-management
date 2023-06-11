import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { MongoClient } from './modules/database/services/contracts/database.mongodb.service';
import { RootModule } from './modules/root/root.module';

async function bootstrap() {
  await MongoClient.initializeDatabase().then(async () => {
    const app = await NestFactory.create(RootModule);

    const swaggerConfig = new DocumentBuilder()
      .setTitle('sMunch.Rest.Api')
      .setDescription('sMuch rest api')
      .setVersion('1.0')
      .addTag('Product')
      .build();

    const swaggerOptions: SwaggerDocumentOptions = {
      operationIdFactory: (controllerKey: string, methodKey: string) =>
        methodKey,
    };

    const document = SwaggerModule.createDocument(
      app,
      swaggerConfig,
      swaggerOptions,
    );

    SwaggerModule.setup('api', app, document);

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
