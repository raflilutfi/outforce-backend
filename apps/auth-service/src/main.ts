import { NestFactory } from "@nestjs/core";
import { AuthServiceModule } from "./auth-service.module";
import type { MicroserviceOptions } from "@nestjs/microservices";
import { Transport } from "@nestjs/microservices";
import { PROTO_PATHS } from "libs/proto";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthServiceModule, {
    transport: Transport.GRPC,
    options: {
      package: ["auth"],
      protoPath: [PROTO_PATHS.AUTH],
    },
  });
  await app.listen();
}
void bootstrap();
