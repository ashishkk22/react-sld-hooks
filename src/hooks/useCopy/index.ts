import { useCallback, useState } from "react";

/**
 * A hook to copy and paste text from the clipboard
 * @example
 * const { text, copy, paste } = useCopy();
 * copy("Hello World");
 * paste();
 * console.log(text);
 * //=> "Hello World"
 * @returns {text, copy, paste} returns the text, copy and paste function
 */

const useCopy = () => {
  //text that is copied or pasted
  const [text, setText] = useState("");

  //to write the text to the clipboard
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setText(() => text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, []);

  //to read the text from the clipboard
  const paste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText(text);
    } catch (err) {
      console.error("Failed to paste: ", err);
    }
  }, []);

  //return the text, copy and paste function
  return { text, copy, paste };
};

export default useCopy;
