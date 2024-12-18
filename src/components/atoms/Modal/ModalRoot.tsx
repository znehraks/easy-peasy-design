// ModalRoot: 촤상위 모달 레이아웃 + Backdrop 컴포넌트
// ModalHeader: 모달 헤더 컴포넌트
// ModalBody: 모달 바디 컴포넌트
// ModalFooter: 모달 푸터 컴포넌트
'use client';

import { createPortal } from 'react-dom';
import { modalBackdropStyleRecipe, modalRootStyle, modalContainerStyleRecipe } from './ModalRoot.css';
import { ModalCommonProps } from './types';
import clsx from 'clsx';
import { useFadeEffect } from '../../common/hooks/useFadeEffect';
import { forwardRef } from 'react';

export type ModalRootProps = ModalCommonProps &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpen: boolean;
    onClose: () => void;
    backdropClassName?: string;
    backdropStyle?: React.CSSProperties;
    rootClassName?: string;
    rootStyle?: React.CSSProperties;
  };

export const ModalRoot = forwardRef<HTMLDivElement, ModalRootProps>(
  (
    { children, isOpen, onClose, className, rootClassName, rootStyle, backdropClassName, backdropStyle, ...rest },
    ref,
  ) => {
    const { isVisible, isMounted } = useFadeEffect(isOpen);

    if (!isMounted) return null;

    return createPortal(
      <div className={clsx(modalRootStyle, rootClassName)} style={rootStyle}>
        <div
          role="button"
          aria-label="modal backdrop"
          onClick={onClose}
          className={clsx(modalBackdropStyleRecipe({ isVisible }), backdropClassName)}
          style={backdropStyle}
        />
        <div ref={ref} className={clsx(modalContainerStyleRecipe({ isVisible }), className)} {...rest}>
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);

ModalRoot.displayName = 'ModalRoot';
