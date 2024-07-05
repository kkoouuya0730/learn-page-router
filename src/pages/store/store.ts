import { create } from "zustand";

type BearStore = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// 前からの疑問　レスポンスの型がわからない時、もしくはころころ変わるようなときはどうやって型つける
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostStore = {
  posts: Post[];
  fetchPost: () => void;
};
export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  // swrと相性悪い？
  // ただのfetchでもいい気がするけど調査
  // Nextのキャッシュ戦略についても調査する
  // 状態管理ってSSRの時どうなんの
  // キャッシュ戦略と状態管理
  // SSRとCSRの使い分け
  fetchPost: async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ posts: await res.json() });
    } catch (error) {
      console.error(error);
      set({ posts: [] });
    }
  },
}));
