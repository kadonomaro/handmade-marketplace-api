export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly amount: number;
  readonly category_ids: [];
  readonly image: {
    preview_image: string;
    detail_image: string;
  };
  readonly seo: {
    title: string;
    description: string;
    slug: string;
  };
}
