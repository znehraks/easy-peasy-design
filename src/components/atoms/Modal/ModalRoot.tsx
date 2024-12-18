// ModalRoot: 촤상위 모달 레이아웃 + Backdrop 컴포넌트
// ModalHeader: 모달 헤더 컴포넌트
// ModalBody: 모달 바디 컴포넌트
// ModalFooter: 모달 푸터 컴포넌트
'use client';

import { createPortal } from 'react-dom';
import {
  modalBackdropStyleRecipe,
  modalRootStyle,
  modalContainerStyleRecipe,
  TRANSITION_SECONDS,
} from './ModalRoot.css';
import { ModalCommonProps } from './types';
import { useState, useEffect } from 'react';

export type ModalRootProps = ModalCommonProps & {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalRoot = ({ children, isOpen, onClose }: ModalRootProps) => {
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
      }, TRANSITION_SECONDS * 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return createPortal(
    <div className={modalRootStyle}>
      <div onClick={onClose} className={modalBackdropStyleRecipe({ isVisible })} />
      <div className={modalContainerStyleRecipe({ isVisible })}>{children}</div>
    </div>,
    document.body,
  );
};
