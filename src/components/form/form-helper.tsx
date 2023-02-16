import { Divider } from 'antd';
import Link from 'next/link';

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
      <Divider />
      <p style={{ textAlign: 'center' }}>
        <span>{text}</span> {link?.text && <Link href={link.url}>{link.text}</Link>}
      </p>
    </>
  );
};
