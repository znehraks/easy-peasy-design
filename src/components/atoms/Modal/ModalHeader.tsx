import { ModalCommonProps } from './types';

export type ModalHeaderProps = ModalCommonProps & {};

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <div>{children}</div>;
};
