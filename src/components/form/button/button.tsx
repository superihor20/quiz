import { ComponentWithChildren } from '../../../types/component-with-children';

type ButtonProps = ComponentWithChildren<{
  type?: 'button' | 'submit' | 'reset';
  position?: 'left' | 'center' | 'right';
}>;

const buttonPosition = {
  left: 'm-left',
  center: 'm-auto',
  right: 'm-right',
};

export const Button: ButtonProps = ({ children, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-300 active:bg-emerald-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white mt-4 w-max ${buttonPosition}`}
    >
      {children}
    </button>
  );
};
