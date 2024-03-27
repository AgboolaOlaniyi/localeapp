import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from "dotenv"
dotenv.config()
import * as cookieParser from "cookie-parser"
const express = require('express')
const app = express ()


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser())
  await app.listen(process.env.PORT);
}
bootstrap();

module.exports = app;