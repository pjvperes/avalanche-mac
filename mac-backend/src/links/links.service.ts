import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link, LinkDocument } from './links.schema';

@Injectable()
export class CreatorsService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  async create(createLinkDto: CreateLinkDto): Promise<Link> {
    const newCreator = new this.linkModel(createLinkDto);
    return newCreator.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string): Promise<Link> {
    return this.linkModel.findById(id).exec();
  }

  async update(id: string, updateLinkDto: UpdateLinkDto): Promise<Link> {
    return this.linkModel
      .findByIdAndUpdate(id, updateLinkDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Link> {
    return this.linkModel.findByIdAndDelete(id).exec();
  }
}
