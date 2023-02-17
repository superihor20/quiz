import { GradientLink } from '@/ui/gradient-link';

import { DividerStyled, Text } from './form-helper.styled';

type FormHelper = {
  text: string;
  link?: {
    text: string;
    url: string;
  };
};

export const FormHelper: React.FC<FormHelper> = ({ link, text }) => {
  return (
    <>
      <DividerStyled />
      <Text>
        {text} {link?.text && <GradientLink href={link.url}>{link.text}</GradientLink>}
      </Text>
    </>
  );
};
