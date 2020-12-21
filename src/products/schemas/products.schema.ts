import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from '../../categories/schemas/categories.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  category_ids: Category[];

  @Prop(
    raw({
      preview_image: { type: String },
      detail_image: { type: String },
    }),
  )
  image: Record<string, any>;

  @Prop(
    raw({
      title: { type: String },
      description: { type: String },
      slug: { type: String },
    }),
  )
  seo: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
