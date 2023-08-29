interface Frontmatter {
  title: string;
  description: string;
  image?: string;
  tags?: string;
}

export interface FrontmatterSerialized extends Frontmatter {
  published: string;
  updated?: string;
  incomplete?: string;
}

export interface FrontmatterParsed extends Frontmatter {
  published: Date;
  updated?: Date;
  incomplete?: boolean;
}

export interface PostItem {
  filename: string;
  frontmatter: FrontmatterSerialized;
  readingTime: number;
  content: string;
}

export type PostItemList = ReadonlyArray<PostItem>;

export interface ProductExperience {
  product?: string;
  thumbnails?: string[];
  description?: string[];
  contributions: string[];
  time: string;
  projecturl: string;
  roles: string[];
}

export interface Experience {
  uid?: string;
  company: string;
  productExperiences: ProductExperience[];
}
