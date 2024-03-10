import Header from '@/components/shared/Header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <Header />
      <div className="root-container">{children}</div>
    </div>
  );
};
export default Layout;
