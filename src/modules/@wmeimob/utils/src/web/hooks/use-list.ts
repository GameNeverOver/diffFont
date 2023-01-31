import { useState } from 'react';

type Return<T> = [T[], {
  setList: React.Dispatch<React.SetStateAction<T[]>>;
  replace: (idx: number, newItem: T) => void;
  remove: (idx: number) => void;
}]

export function useList<T>(defaultList = [] as T[]): Return<T> {
  const [list, setList] = useState<T[]>(defaultList);

  function replace(idx: number, newItem: T) {
    setList(prev => {
      const _list = [...prev];
      _list.splice(idx, 1, newItem);

      return _list;
    })
  }

  function remove(idx: number) {
    setList(prev => {
      const _list = [...prev];
      _list.splice(idx, 1);

      return _list;
    })
  }

  return [list, {
    setList,
    replace,
    remove
  }]
}
