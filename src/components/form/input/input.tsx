import { ComponentWithChildren } from '../../../types/component-with-children';

type InputProps = {
  label: string;
  type: string;
};

export const Input: ComponentWithChildren<InputProps> = ({ type, label }) => {
  return (
    <label className="block">
      <span className="text-sm capitalize text-slate-700">{label}</span>
      <input
        type={type}
        className="w-full mt-1 px-3 py-2 bg-white border-slate-300 rounded-md placeholder-slate-400 text-sm"
      />
    </label>
  );
};
