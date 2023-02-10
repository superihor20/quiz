import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  label: string;
  type: string;
  error?: boolean;
  errorMessage?: string;
  register?: UseFormRegister<T>;
  name: Path<T>;
  autoComplete?: 'on' | 'off';
};

const errorClassNames = 'focus:ring-red-500 focus:border-red-500 border-red-500';
const normalClassNames = 'focus:ring-emerald-300 focus:border-emerald-300';
const restOfClassNames =
  'w-full mt-1 px-3 py-2 bg-white border-slate-300 rounded-md placeholder-slate-400 text-sm focus:ring-0';

export const Input = <T extends FieldValues>({
  type,
  label,
  errorMessage,
  register,
  name,
  autoComplete = 'off',
}: InputProps<T>) => {
  return (
    <label className="block relative">
      <span className="text-sm capitalize text-slate-700">{label}</span>
      <input
        type={type}
        className={`${restOfClassNames} ${errorMessage ? errorClassNames : normalClassNames}`}
        autoComplete={autoComplete}
        {...register?.(name)}
      />
      {errorMessage && (
        <span className="absolute bottom-0 translate-y-full left-0 text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
