import { Input as InputAntd, InputProps as InputAntdProps } from 'antd';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

type InputProps<TForm extends FieldValues, TName extends FieldPath<TForm>> = {
  error?: string;
  field: ControllerRenderProps<TForm, TName>;
} & InputAntdProps;

export const Input = <TForm extends FieldValues, TName extends FieldPath<TForm>>({
  error,
  field,
  ...antdInputProps
}: InputProps<TForm, TName>) => {
  return (
    <>
      <InputAntd status={error ? 'error' : ''} {...antdInputProps} {...field} />
      {error ? <p style={{ color: 'red', margin: '10px 0 0' }}>{error}</p> : null}
    </>
  );
};
