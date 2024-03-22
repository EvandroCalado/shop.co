import { Dispatch, SetStateAction, useState } from 'react';

interface ReturnActiveProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export const useActive = (initialState: string): ReturnActiveProps => {
  const [active, setActive] = useState(initialState);

  return {
    active,
    setActive,
  };
};
