import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number | string;

  @Column({ unique: true })
  slug: string;

  @Column()
  display_name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  preview_image: string;

  @Column()
  detail_image: string;

  @Column()
  seo_title: string;

  @Column()
  seo_description: string;

  @CreateDateColumn({ update: false })
  created_at: Date;

  @UpdateDateColumn({ update: false })
  updated_at: Date;

  @ManyToMany(() => Product, (products: Product) => products.categories)
  products: Product[];
}
