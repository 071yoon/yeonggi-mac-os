import SingleFinderWindow from "./SingleFinderWindow";
import folderStore from "../../stores/folderStore";

export default function FinderWindows() {
  const { folders, removeFolder } = folderStore();
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
