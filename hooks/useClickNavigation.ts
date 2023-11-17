import { useState } from "react";

export const useClickNavigation = () => {
  const [clickedNavigation, setClickedNavigation] = useState<number | null>(
    null
  );

  const handleClickNavigation = (nav?: number) => {
    if (nav !== undefined) {
      setClickedNavigation(nav);
    } else {
      setClickedNavigation(null);
    }
  };

  const onDisable = () => {
    if (clickedNavigation !== null) setClickedNavigation(null);
  };

  return { clickedNavigation, handleClickNavigation, onDisable };
};
