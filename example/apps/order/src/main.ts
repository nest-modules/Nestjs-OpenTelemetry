import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { OrderModule } from './order.module';

async function bootstrap() {
  const port = Number.parseInt(process.env.PORT as string, 10) || 3002;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
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
