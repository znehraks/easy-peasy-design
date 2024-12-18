import { ModalCommonProps } from './types';

export type ModalBodyProps = ModalCommonProps & {};

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div>{children}</div>;
};
