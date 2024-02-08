import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Creator {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  biography: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ required: true })
  targetAudience: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Decimal128 })
  stars: number;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Decimal128 })
  CPM: number;
}

export const CreatorSchema = SchemaFactory.createForClass(Creator);
export type CreatorDocument = Creator & Document;
