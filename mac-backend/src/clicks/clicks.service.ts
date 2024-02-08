import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto as CreateClickDto } from './dto/create-click.dto';
import { UpdateLinkDto as UpdateClickDto } from './dto/update-click.dto';
import { Click, ClickDocument } from './clicks.schema';

@Injectable()
export class ClicksService {
  constructor(
    @InjectModel(Click.name) private clickModel: Model<ClickDocument>,
  ) {}

  async create(createClickDto: CreateClickDto): Promise<Click> {
    const newCreator = new this.clickModel(createClickDto);
    return newCreator.save();
  }

  async findAll(): Promise<Click[]> {
    return this.clickModel.find().exec();
  }

  async findOne(id: string): Promise<Click> {
    return this.clickModel.findById(id).exec();
  }

  async update(id: string, updateClickDto: UpdateClickDto): Promise<Click> {
    return this.clickModel
      .findByIdAndUpdate(id, updateClickDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Click> {
    return this.clickModel.findByIdAndDelete(id).exec();
  }
}
