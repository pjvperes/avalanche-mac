import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Reference {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  reference: string;
}

export const ReferenceSchema = SchemaFactory.createForClass(Reference);
export type ReferenceDocument = Reference & Document;
