import React, { useMemo } from 'react';
import { ISidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import './Sidebar.styles.css';

const Sidebar: React.FC<ISidebar> = ({
  open,
  width = 300,
  right = false,
  children,
  className,
}) => {
  const widthSelected = useMemo(() => (open ? width : 0), [open, width]);
  return (
    <aside
      className={twMerge('sidebar', right && 'order-2 right-0', className)}
      aria-label="Sidebar"
      style={{
        width: widthSelected,
      }}
    >
      <div className={'sidebar__container'} style={{ width }}>
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
