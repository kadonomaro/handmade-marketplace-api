import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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
}
