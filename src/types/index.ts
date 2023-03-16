interface Frontmatter {
  title: string
  description: string
}

export interface FrontmatterSerialized extends Frontmatter {
  date: string
}

export interface FrontmatterParsed extends Frontmatter {
  date: Date
}

export interface PostItem {
  filename: string
  frontmatter: FrontmatterSerialized
  content: string
}

export type PostItemList = ReadonlyArray<PostItem>
