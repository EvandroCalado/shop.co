import { Dispatch, SetStateAction, useState } from 'react';

interface ReturnActiveProps {
  activeSize: string;
  setActiveSize: Dispatch<SetStateAction<string>>;
}

export const useActiveSize = (initialState: string): ReturnActiveProps => {
  const [activeSize, setActiveSize] = useState(initialState);

  return {
    activeSize,
    setActiveSize,
  };
};
