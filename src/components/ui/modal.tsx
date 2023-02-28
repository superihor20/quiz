import { Modal as ModalAntd } from 'antd';
import { useState } from 'react';

import { Button } from '@/form/button';
import { ComponentWithChildren } from '@/types/component-with-children';

type ModalProps = ComponentWithChildren<{
  buttonText: string;
  title: string;
  onClose?: () => Promise<void> | void;
  onSubmit?: () => Promise<void> | void;
}>;

export const Modal: ModalProps = ({ buttonText, title, onClose, onSubmit, children }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleOk = async () => {
    await onSubmit?.();
    closeModal();
  };

  const handleClose = async () => {
    await onClose?.();
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
