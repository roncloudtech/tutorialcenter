import React, { useCallback, useState } from "react";

export const useToggleState = ({ initiaState }) => {
  const [state, setState] = useState(initiaState);
  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);
  return [state, toggle];
};
