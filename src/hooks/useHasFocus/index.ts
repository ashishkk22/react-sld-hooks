import React, { useEffect } from "react";

const useHasFocus = () => {
  //set initial state to document.hasFocus()
  const [hasFocus, setHasFocus] = React.useState(document.hasFocus());
  const handleFocus = () => setHasFocus(true);
  const handleBlur = () => setHasFocus(false);

  useEffect(() => {
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return hasFocus;
};

export default useHasFocus;
