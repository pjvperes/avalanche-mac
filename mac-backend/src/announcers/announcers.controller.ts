import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnouncersService } from './announcers.service';
import { CreateAnnouncerDto } from './dto/create-announcer.dto';
import { UpdateAnnouncerDto } from './dto/update-announcer.dto';

@Controller('announcers')
export class AnnouncersController {
  constructor(private readonly announcersService: AnnouncersService) {}

  @Post()
  create(@Body() createAnnouncerDto: CreateAnnouncerDto) {
    return this.announcersService.create(createAnnouncerDto);
  }

  @Get()
  findAll() {
    return this.announcersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnnouncerDto: UpdateAnnouncerDto,
  ) {
    return this.announcersService.update(id, updateAnnouncerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.announcersService.remove(id);
  }
}
