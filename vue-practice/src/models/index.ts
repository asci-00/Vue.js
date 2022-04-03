export interface NewsType {
  id: number;
  date: string;
  domain: string;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
  points: number;
  comments_count: number;
}

export interface JobType {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
}

export interface AskType {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
}
