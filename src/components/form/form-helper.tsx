import { Divider, Typography } from 'antd';
import Link from 'next/link';

type FormHelper = {
  text: string;
  link?: {
    text: string;
    url: string;
  };
};

const { Link: LinkAntd } = Typography;

export const FormHelper: React.FC<FormHelper> = ({ link, text }) => {
  return (
    <>
      <Divider />
      <p style={{ textAlign: 'center' }}>
        <span>{text}</span>{' '}
        {link?.text && (
          <Link className="text-sm text-emerald-400 underline underline-offset-1" href={link.url}>
            <LinkAntd>{link.text}</LinkAntd>
          </Link>
        )}
      </p>
    </>
  );
};
