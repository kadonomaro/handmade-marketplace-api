import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | string;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  description: string;

  @Column()
  preview_image: string;

  @Column()
  detail_image: string;

  @Column()
  seo_title: string;

  @Column()
  seo_description: string;

  @Column()
  seo_slug: string;

  @ManyToMany(() => Product, (products: Product) => products.categories)
  @JoinTable()
  products: Product[];
}
