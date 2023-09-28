import { create } from "zustand";
import { IBlogInfo, IBlogCard } from "./types";

const useStore = create<IBlogCard>((set) => ({
  blogInfo: {},
  setBlogInfo: (val: IBlogInfo) => set({ blogInfo: val }),
}));

export default useStore;
