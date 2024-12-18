import { Button, ModalBody, ModalFooter, ModalHeader } from '../components';

import { useState } from 'react';
import { ModalRoot } from '../components';

export const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ModalRoot isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </ModalRoot>
    </>
  );
};
