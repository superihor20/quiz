import { ComponentWithChildren } from '../../../types/component-with-children';

export const MainLaoyut: ComponentWithChildren = ({ children }) => {
  return <div className="bg-slate-100 min-h-screen p-8">{children}</div>;
};
