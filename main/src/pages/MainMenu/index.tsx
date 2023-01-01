import './index.less';
import MenuItem from '@/pages/MainMenu/components/MenuItem';
import config from  './config'
import { useState } from 'react';

export default function MainMenu() {
  const [activeKey,setActiveKey] = useState('doing')
  return (
    <div className="main-menu-wrapper">
    {
      config.map(item => (
        <MenuItem name={item.name} active={activeKey === item.key} count={item.count} key={item.key} onClick={() => setActiveKey(item.key)} />
      ))
    }
      
    </div>
  );
}
