// Hooks Imports
import useLocalStorage from "./useLocalStorage";

const useInput = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const resetUser = () => setValue(initValue);

  const userAttributes = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, resetUser, userAttributes];
};

export default useInput;
