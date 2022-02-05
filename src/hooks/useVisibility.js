import {useState} from "react";

export const useVisibility = () => {
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!isVisible);

  return {isVisible, toggleVisibility};
};
