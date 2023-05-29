interface Frontmatter {
  title: string
  description: string
}

export interface FrontmatterSerialized extends Frontmatter {
  published: string
  updated?: string
}

export interface FrontmatterParsed extends Frontmatter {
  published: Date
  updated?: Date
}

export interface PostItem {
  filename: string
  frontmatter: FrontmatterSerialized
  content: string
}

export type PostItemList = ReadonlyArray<PostItem>
