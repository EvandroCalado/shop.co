import { Dispatch, SetStateAction, useState } from 'react';

export interface ReturnActiveProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
}

export const useActiveColor = (initialState: string): ReturnActiveProps => {
  const [activeColor, setActiveColor] = useState(initialState);

  return {
    activeColor,
    setActiveColor,
  };
};