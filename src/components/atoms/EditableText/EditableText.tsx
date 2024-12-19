'use client';

import { forwardRef, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  editableTextContainerStyleRecipe,
  editableTextInputStyleRecipe,
  editableTextSpanStyleRecipe,
} from './EditableText.css';
import clsx from 'clsx';
import { EditableTextProps } from './EditableText.types';
import { useHandleKeyDown, useInputWidth } from './useEditableText';

export const EditableText = forwardRef<HTMLDivElement, EditableTextProps>(
  (
    {
      children,
      className,
      onEditComplete,
      onEditCancel,
      containerClassName,
      containerStyle,
      inputClassName,
      inputStyle,
      spanClassName,
      spanStyle,
      completeTrigger = 'all',
      ...rest
    },
    ref,
  ) => {
    // 편집 상태 관리
    const [isEditing, setIsEditing] = useState(false);

    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // 편집 모드 활성화
    const handleClickSpan = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      setIsEditing(true);
    };

    // 편집 모드 비활성화
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsEditing(false);

      if (completeTrigger === 'blur' || completeTrigger === 'all') {
        onEditComplete(e.currentTarget.value);
      } else {
        onEditCancel?.();
      }
    };

    // 편집 모드 keyDown 이벤트 핸들러
    const { handleKeyDown } = useHandleKeyDown({
      setIsEditing,
      completeTrigger,
      onEditComplete,
      onEditCancel,
    });

    // 편집 모드 input width 계산
    const { adjustInputWidth, inputWidth } = useInputWidth({ spanRef, inputRef });

    // 편집 모드 input 값 변경 이벤트 핸들러
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      e.stopPropagation();
      adjustInputWidth();
    };

    return (
      <div
        ref={ref}
        className={clsx(editableTextContainerStyleRecipe(), containerClassName)}
        style={containerStyle}
        {...rest}
      >
        {isEditing ? (
          <input
            ref={inputRef}
            className={clsx(editableTextInputStyleRecipe(), inputClassName)}
            autoFocus
            onBlur={handleBlur}
            onInput={handleInput}
            defaultValue={children}
            onKeyDown={handleKeyDown}
            style={{ width: inputWidth, ...inputStyle }}
          />
        ) : (
          <span
            ref={spanRef}
            onClick={handleClickSpan}
            className={clsx(editableTextSpanStyleRecipe(), spanClassName)}
            style={spanStyle}
          >
            {children}
          </span>
        )}
      </div>
    );
  },
);

EditableText.displayName = 'EditableText';
