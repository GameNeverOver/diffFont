import { useState } from 'react';

type Return = [boolean, {
  setTrue: () => void;
  setFalse: () => void;
  triggerBoolean: React.Dispatch<React.SetStateAction<boolean>>
}]

export function useBoolean(defaultBoolean = false): Return {
  const [state, triggerBoolean] = useState(defaultBoolean);

  function setTrue() {
    triggerBoolean(true);
  }

  function setFalse() {
    triggerBoolean(false);
  }

  return [state, {
    triggerBoolean,
    setTrue,
    setFalse
  }]
}
