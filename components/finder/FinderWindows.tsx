import SingleFinderWindow from "./SingleFinderWindow";
import { folderData } from "../../utils/folder-data";
import folderStore from "../../stores/folderStore";

export default function FinderWindows() {
  const { folders, addFolder, removeFolder } = folderStore();
  return (
    <>
      {folders.map((singleFolder, index) => {
        return (
          <SingleFinderWindow
            key={Symbol(index).toString()}
            data={singleFolder}
            removeFolder={removeFolder}
          />
        );
      })}
    </>
  );
}
