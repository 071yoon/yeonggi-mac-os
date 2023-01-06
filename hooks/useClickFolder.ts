import { useState } from "react";

export const useClickFolder = () => {
  const [clickedFolder, setClickedFolder] = useState<string | null>(null);

  const handleClickFolder = (folder: string) => {
    setClickedFolder(folder);
  };

  const onDisable = () => {
    if (clickedFolder !== null) setClickedFolder(null);
  };

  return { clickedFolder, handleClickFolder, onDisable };
};
