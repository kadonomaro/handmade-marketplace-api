export class CreateCategoryDto {
  readonly name: string;
  readonly display_name: string;
  readonly description: string;
  readonly products: [];
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
