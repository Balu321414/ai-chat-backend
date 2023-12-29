import { Module } from '@nestjs/common';
import { ChatController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ChatController],
  providers: [AppService],
})
export class AppModule { }
