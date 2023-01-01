import './index.less';
import { ReactNode } from 'react';

interface Iprops {
  name: String;
  // ?表示可有可无
  icon?: ReactNode;
  count: Number;
  active: Boolean;
  onClick: () => void;
}

export default function MenuItem(props: Iprops) {
  const { name, icon, count, active, onClick } = props;
  return (
    <div
      className={`menu-item ${active ? 'menu-item--active' : ''}`}
      onClick={onClick}
    >
      <div className="menu-item__name">{name}</div>
      <div className="menu-item__count">{count}</div>
    </div>
  );
}
