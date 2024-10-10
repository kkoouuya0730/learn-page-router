import { UserInfo } from "./auth";
export type Blog = {
  id: string;
  title: string;
  thumbnail: string;
  author: UserInfo;
  authorId: UserInfo["id"];
  tag: string[];
  likes: number;
  contents: string;
};
