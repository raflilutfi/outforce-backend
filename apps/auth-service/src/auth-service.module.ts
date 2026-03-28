import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/app.config";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: [join(__dirname, `../.env.${process.env.NODE_ENV}`), join(__dirname, "../.env")],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AuthServiceModule {}
