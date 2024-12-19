import React, { SetStateAction, useLayoutEffect, useMemo, useState } from 'react';
import { EditableTextProps } from './EditableText.types';

export const useHandleKeyDown = ({
  setIsEditing,
  completeTrigger,
  onEditComplete,
  onEditCancel,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  completeTrigger: EditableTextProps['completeTrigger'];
  onEditComplete: EditableTextProps['onEditComplete'];
  onEditCancel?: EditableTextProps['onEditCancel'];
}) => {
  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsEditing(false);
    onEditComplete(e.currentTarget.value);
  };

  const handlePressEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsEditing(false);
    onEditCancel?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter' && (completeTrigger === 'all' || completeTrigger === 'enter')) {
      handlePressEnter(e);
    } else if (e.key === 'Escape') {
      handlePressEscape(e);
    }
  };

  return { handleKeyDown };
};

export const useInputWidth = ({
  spanRef,
  inputRef,
}: {
  spanRef: React.RefObject<HTMLSpanElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const [spanEl, setSpanEl] = useState<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (spanRef.current) {
      setSpanEl(spanRef.current);
    }
  }, [spanRef.current]);

  const inputWidth = useMemo(() => {
    const spanBox = spanEl?.getBoundingClientRect();
    return spanBox?.width ? `${spanBox.width}px` : 'auto';
  }, [spanEl]);

  const adjustInputWidth = () => {
    const input = inputRef.current;
    if (!input) return;

    input.style.width = '0px';
    const contentWidth = input.scrollWidth;
    const minWidth = parseFloat(inputWidth) || 0;
    const finalWidth = Math.max(minWidth, contentWidth);
    input.style.width = `${finalWidth}px`;
  };

  return { inputWidth, adjustInputWidth };
};
