import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Link {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  ip: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
export type LinkDocument = Link & Document;
