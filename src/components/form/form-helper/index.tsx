import { Link } from '../../ui/link';

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
        {text} {link?.text && <Link href={link.url}>{link.text}</Link>}
      </Text>
    </>
  );
};
