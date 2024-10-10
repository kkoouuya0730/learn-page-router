export type Review = {
  id: string;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  title: string;
  content: string;
};
