import { ComponentWithChildren } from '../../../types/component-with-children';

type InputProps = {
  label: string;
  type: string;
  error?: boolean;
  errorMessage?: string;
};

const errorClassNames = 'focus:ring-red-500 focus:border-red-500 border-red-500';
const normalClassNames = 'focus:ring-emerald-300 focus:border-emerald-300';
const restOfClassNames =
  'w-full mt-1 px-3 py-2 bg-white border-slate-300 rounded-md placeholder-slate-400 text-sm focus:ring';

export const Input: ComponentWithChildren<InputProps> = ({ type, label, error, errorMessage }) => {
  return (
    <label className="block relative">
      <span className="text-sm capitalize text-slate-700">{label}</span>
      <input
        type={type}
        className={`${restOfClassNames} ${error ? errorClassNames : normalClassNames}`}
      />
      {errorMessage && (
        <span className="absolute bottom-0 translate-y-full left-0 text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
