import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number;

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
