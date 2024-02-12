import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Click {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  ip: string;

  @Prop({ default: false })
  paid: boolean;
}

export const ClickSchema = SchemaFactory.createForClass(Click);
export type ClickDocument = Click & Document;
