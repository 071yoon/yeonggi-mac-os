import SingleFinderWindow from "./SingleFinderWindow";
import { folderData } from "../../utils/folder-data";
import folderStore from "../../stores/folderStore";

export default function FinderWindows() {
  const { folders, addFolder, removeFolder } = folderStore();
  return folders.map((singleFolder) => {
    return (
      <SingleFinderWindow data={singleFolder} removeFolder={removeFolder} />
    );
  });
}
