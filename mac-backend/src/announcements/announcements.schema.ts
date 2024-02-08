import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Announcement {
  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  token: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Decimal128 })
  CPM: number;

  @Prop({ required: true })
  anunciante: string;

  @Prop({ required: true })
  criadorConteudo: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  concluido: boolean;

  @Prop({ required: true })
  linkParametrizado: string;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
export type AnnouncementDocument = Announcement & mongoose.Document;
