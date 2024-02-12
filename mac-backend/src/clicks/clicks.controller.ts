import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Ip,
} from '@nestjs/common';
import { ClicksService } from './clicks.service';
import { CreateLinkDto as CreateClickDto } from './dto/create-click.dto';
import { UpdateLinkDto as UpdateClickDto } from './dto/update-click.dto';
import { CountClickRequestDto } from './dto/count-click-request-dto';
import { CheckIpAlreadyClicked } from './dto/check-click-already-clicked-dto';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Get()
  findAll() {
    return this.clicksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clicksService.findOne(id);
  }

  @Post()
  create(@Body() createClickDto: CreateClickDto) {
    return this.clicksService.create(createClickDto);
  }

  @Post('/ip-already-clicked')
  async ipAlreadyClicked(@Body() checkIpAlreadyClicked: CheckIpAlreadyClicked) {
    return await this.clicksService.checkIfIpAlreadyClicked(
      checkIpAlreadyClicked.ip,
      checkIpAlreadyClicked.reference,
    );
  }

  @Post('/unpaid')
  async hasAtLeastThousandUnpaidClicks(
    @Body() countClickRequestDto: CountClickRequestDto,
  ) {
    return await this.clicksService.hasAtLeastThousandUnpaidClicks(
      countClickRequestDto.reference,
    );
  }

  @Patch('/reset-unpaid-count')
  async markAllClicksAsPaid() {
    return await this.clicksService.markAllClicksAsPaid();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClickDto: UpdateClickDto) {
    return this.clicksService.update(id, updateClickDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clicksService.remove(id);
  }
}
