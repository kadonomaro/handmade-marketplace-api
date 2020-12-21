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
      preview_image: { type: String, default: '' },
      detail_image: { type: String, default: '' },
    }),
  )
  image: Record<string, any>;

  @Prop(
    raw({
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      slug: { type: String, default: '' },
    }),
  )
  seo: Record<string, any>;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
