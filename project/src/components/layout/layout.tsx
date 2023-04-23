import { memo } from 'react';
import Header from '../header/header';

type LayoutProps = {
  children: React.ReactNode;
  className: string;
}

function Layout({ children, className }: LayoutProps): JSX.Element {
  const MemorizedHeader = memo(Header);
  return (
    <div className={className}>
      <MemorizedHeader/>
      {children}
    </div>
  );
}

export default Layout;
