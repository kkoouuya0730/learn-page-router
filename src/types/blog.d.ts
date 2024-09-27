import { UserInfo } from "./auth";
export type Blog = {
  id: string;
  title: string;
  thumbnail: string;
  author: UserInfo;
  tag: string[];
  likes: number;
  contents: string;
};
