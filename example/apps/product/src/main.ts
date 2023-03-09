import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { ProductModule } from './product.module';

async function bootstrap() {
  const port = Number.parseInt(process.env.PORT as string, 10) || 3001;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    {
      transport: Transport.TCP,
      options: {
        port,
      },
    },
  );

  app.enableShutdownHooks();

  await app.listen();
}

bootstrap();
