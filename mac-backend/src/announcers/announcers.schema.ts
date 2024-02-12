import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Announcer {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  razaoSocial: string;

  @Prop({ required: true, type: Number })
  quantidadeAnunciosFeitos: number;

  @Prop({ required: true, type: mongoose.Schema.Types.Decimal128 })
  stars: number;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  walletAddress: string;
}

export const AnnouncerSchema = SchemaFactory.createForClass(Announcer);

export type AnnouncerDocument = Announcer & mongoose.Document;
