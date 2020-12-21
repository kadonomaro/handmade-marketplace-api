import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from '../../products/schemas/products.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  display_name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  products: Product[];

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

export const CategorySchema = SchemaFactory.createForClass(Category);
