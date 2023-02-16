import { Breadcrumb as BreadcrumbAntd } from 'antd';

type BreadcrumbProps = {
  items: string[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbAntd style={{ margin: '16px 0' }}>
      {items.map((item) => (
        <BreadcrumbAntd.Item key={item}>{item}</BreadcrumbAntd.Item>
      ))}
    </BreadcrumbAntd>
  );
};
