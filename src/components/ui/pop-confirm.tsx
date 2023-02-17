import { Button, Popconfirm } from 'antd';
import { PropsWithChildren, useState } from 'react';
import { useMutation } from 'react-query';

type PopConfirmProps<TMutationParam> = PropsWithChildren<{
  title: string;
  description?: string;
  mutationParam: TMutationParam;
  mutationQuery: (param: TMutationParam) => Promise<void>;
  onCancel?: () => Promise<void> | void;
  onOk?: () => Promise<void> | void;
}>;

export const PopConfirm = <TMutationParam,>({
  title,
  description,
  children,
  mutationQuery,
  onCancel,
  onOk,
  mutationParam,
}: PopConfirmProps<TMutationParam>) => {
  const { mutateAsync, isLoading } = useMutation(mutationQuery);
  const [isOpen, setIsOpen] = useState(false);

  const showPopconfirm = () => {
    setIsOpen(true);
  };

  const hidePopconfirm = () => {
    setIsOpen(false);
  };

  const handleOk = async () => {
    await mutateAsync(mutationParam);
    await onOk?.();
    hidePopconfirm();
  };

  const handleCancel = async () => {
    await onCancel?.();
    hidePopconfirm();
  };

  return (
    <Popconfirm
      title={title}
      description={description}
      open={isOpen}
      onConfirm={handleOk}
      okButtonProps={{ loading: isLoading }}
      onCancel={handleCancel}
    >
      <Button htmlType="button" onClick={showPopconfirm} color="red">
        {children}
      </Button>
    </Popconfirm>
  );
};
