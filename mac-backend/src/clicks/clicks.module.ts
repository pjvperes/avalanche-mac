import { Module } from '@nestjs/common';
import { ClicksController } from './clicks.controller';
import { LinksService } from './clicks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Click, ClickSchema } from './clicks.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Click.name, schema: ClickSchema }]),
  ],
  controllers: [ClicksController],
  providers: [LinksService],
  exports: [LinksService],
})
export class LinksModule {}
