import Header from '../header/header';

type LayoutProps = {
  children: React.ReactNode;
  className: string;
}

function Layout({ children, className }: LayoutProps): JSX.Element {
  return (
    <div className={className}>
      <Header/>
      {children}
    </div>
  );
}

export default Layout;
