export interface PostType {
  id: number;
  title: string;
  points: number | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  date: string;
}

export interface NewsType extends PostType {
  domain: string;
  user: string | null;
}

export interface JobType extends PostType {
  domain: string;
  user: string | null;
}

export interface UserType {
  created_time: number;
  created: string;
  about: string;
  karma: number;
  id: string;
}

export interface ItemType {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: CommentType[];
  comments_count: number;
  url: string;
  domain: string;
}

export interface CommentType {
  comments: CommentType[];
  comments_count: number;
  content: string;
  id: number;
  level: number;
  time: number;
  time_ago: string;
  type: string;
  url: string;
  user: string;
}
