import { ModalCommonProps } from './types';

export type ModalFooterProps = ModalCommonProps & {};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div>{children}</div>;
};
