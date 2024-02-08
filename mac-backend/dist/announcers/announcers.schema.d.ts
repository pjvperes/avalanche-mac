/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import * as mongoose from 'mongoose';
export declare class Announcer {
    _id: mongoose.Schema.Types.ObjectId;
    razaoSocial: string;
    quantidadeAnunciosFeitos: number;
    stars: number;
    link: string;
    email: string;
}
export declare const AnnouncerSchema: mongoose.Schema<Announcer, mongoose.Model<Announcer, any, any, any, mongoose.Document<unknown, any, Announcer> & Announcer & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Announcer, mongoose.Document<unknown, {}, mongoose.FlatRecord<Announcer>> & mongoose.FlatRecord<Announcer> & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>>;
export type AnnouncerDocument = Announcer & mongoose.Document;