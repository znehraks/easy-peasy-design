import { Button, ModalBody, ModalFooter, ModalHeader } from '../../components';

import { useRef, useState } from 'react';
import { ModalRoot } from '../../components';
import { modalDemoBodyStyle, modalDemoFooterStyle, modalDemoHeaderStyle, modalDemoRootStyle } from './ModalDemo.css';

export const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ModalRoot ref={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} className={modalDemoRootStyle}>
        <ModalHeader className={modalDemoHeaderStyle}>Modal Header</ModalHeader>
        <ModalBody className={modalDemoBodyStyle}>Modal Body</ModalBody>
        <ModalFooter className={modalDemoFooterStyle}>Modal Footer</ModalFooter>
      </ModalRoot>
    </>
  );
};
