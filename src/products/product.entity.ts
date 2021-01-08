import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from '../categories/category.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  amount: number;

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

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column({ type: 'datetime' })
  updated_at: Date;

  @ManyToMany(() => Category, (categories: Category) => categories.products, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[];
}
