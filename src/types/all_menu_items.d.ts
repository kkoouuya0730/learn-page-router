import type { Category } from "./category";

export type AllMenuItems = Omit<Category, "description">;
