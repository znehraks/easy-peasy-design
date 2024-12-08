import { MutableRefObject, Ref } from 'react';

export function mergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (instance: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = instance;
      }
    });
  };
}
