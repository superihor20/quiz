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
      <div className="border-slate-100 border-t-2 w-full h-1" />
      <p className="text-center">
        <span className="text-sm text-slate-400">{text}</span>{' '}
        {link?.text && (
          <a className="text-sm text-emerald-400 underline underline-offset-1" href={link.url}>
            {link.text}
          </a>
        )}
      </p>
    </>
  );
};
