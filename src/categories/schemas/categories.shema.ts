import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  display_name: string;

  @Prop()
  description: string;

  @Prop()
  products: [];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
