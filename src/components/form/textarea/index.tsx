import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

import { ErrorText } from '../error-text';

import { TextareaStyled, TextareaWrapper } from './textarea.styled';

type TextareaProps<TForm extends FieldValues, TName extends FieldPath<TForm>> = {
  error?: string;
  field: ControllerRenderProps<TForm, TName>;
  placeholder?: string;
};

export const Textarea = <TForm extends FieldValues, TName extends FieldPath<TForm>>({
  error,
  field,
  placeholder,
}: TextareaProps<TForm, TName>) => {
  console.log(error);
  return (
    <TextareaWrapper>
      <TextareaStyled status={error ? 'error' : ''} rows={4} placeholder={placeholder} {...field} />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </TextareaWrapper>
  );
};
