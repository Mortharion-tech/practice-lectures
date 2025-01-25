import { useCallback } from "react";
import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle];
}
