import { Modal as ModalAntd } from 'antd';
import { useState } from 'react';

import { Button } from '@/form/button';
import { ComponentWithChildren } from '@/types/component-with-children';

type ModalProps = ComponentWithChildren<{
  buttonText: string;
  title: string;
}>;

export const Modal: ModalProps = ({ buttonText, title, children }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleOk = () => {
    showModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <Button htmlType="button" onClick={showModal}>
        {buttonText}
      </Button>
      <ModalAntd
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={false}
        onCancel={handleClose}
      >
        {children}
      </ModalAntd>
    </>
  );
};
