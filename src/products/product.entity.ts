import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number | string;

  @Column({ unique: true })
  slug: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: 100 })
  sort: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
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

  @CreateDateColumn({ update: false })
  created_at: Date;

  @UpdateDateColumn({ update: false })
  updated_at: Date;

  @ManyToMany(() => Category, (categories: Category) => categories.products, {
    cascade: true,
  })
  @JoinTable()
  categories: Category[];
}
