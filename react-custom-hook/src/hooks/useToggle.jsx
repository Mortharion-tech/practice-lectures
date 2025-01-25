import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((x) => !x);

  return [value, toggle];
}
