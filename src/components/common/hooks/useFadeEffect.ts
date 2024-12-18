import { useEffect, useState } from 'react';
import { TRANSITION_SECONDS } from '../constants';

export const useFadeEffect = (isOpen: boolean, transitionDuration = TRANSITION_SECONDS) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, transitionDuration * 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, transitionDuration]);

  return { isVisible, isMounted };
};
