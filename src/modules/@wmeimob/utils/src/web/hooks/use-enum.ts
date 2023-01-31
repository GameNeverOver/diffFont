import React, { useState } from 'react';

export type UseEnum<T> = [
  T,
  {
    triggerEnumType: React.Dispatch<React.SetStateAction<T>>;
    whenEnumType: (type: T) => boolean;
  }
];

export function useEnum<T>(defaultEnumType: T): UseEnum<T> {
  const [enumType, triggerEnumType] = useState<T>(defaultEnumType);

  function whenEnumType(type: T) {
    return enumType === type;
  }

  return [
    enumType,
    {
      triggerEnumType,
      whenEnumType
    }
  ];
}
