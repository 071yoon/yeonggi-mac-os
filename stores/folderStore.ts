import create from "zustand";
import { folderInterface } from "../interfaces/folder.interface";

interface FolderStoreInterface {
  folders: folderInterface[];
  addFolder: (folder: folderInterface) => void;
  removeFolder: (folder: folderInterface) => void;
}

const useFolderStore = create<FolderStoreInterface>((set) => ({
  folders: [],
  addFolder: (by: folderInterface) => set((state) => ({ folders: [by] })),
  removeFolder: (by: folderInterface) =>
    set((state) => ({ folders: state.folders.filter((f) => f !== by) })),
}));

export default useFolderStore;
