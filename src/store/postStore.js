import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (posts) => set((state) => ({ posts: posts, ...state.posts })),
}));

export default usePostStore;
