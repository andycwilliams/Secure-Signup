// Hooks Imports
import useLocalStorage from "./useLocalStorage";

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggleValue = (value) => {
    setValue((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  };

  return [value, toggleValue];
};

export default useToggle;
