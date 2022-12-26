import create from "zustand";
import { folderInterface } from "../interfaces/folder.interface";

interface FolderStoreInterface {
  folders: folderInterface[];
  addFolder: (folder: folderInterface) => void;
  removeFolder: (folder: folderInterface) => void;
}

const useFolderStore = create<FolderStoreInterface>((set) => ({
  folders: [],
  addFolder: (folder) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (folder) =>
    set((state) => ({ folders: state.folders.filter((f) => f !== folder) })),
}));

export default useFolderStore;
