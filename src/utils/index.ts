import { PostItem } from 'src/types';

export function getPostPath(post: PostItem): string {
  return post.filename.split('.')[0];
}

const READING_SPEED = 150; // per minute

export function getReadingTime(fileContents: string) {
  const words = fileContents.split(/\s+/g);
  const wordCount = words.length;

  return Math.ceil(wordCount / READING_SPEED);
}
