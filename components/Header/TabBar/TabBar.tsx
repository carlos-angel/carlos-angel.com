import { ReactNode, FunctionComponent } from 'react';

interface TabBarProps {
  children: ReactNode;
  className?: string;
}

const TabBar: FunctionComponent<TabBarProps> = ({ children, className }) => (
  <nav className={className ?? 'fixed bottom-0 z-10 flex items-center justify-between w-full px-6 shadow-inner h-14 md:hidden'}>
    {children}
  </nav>
);

interface TabBarLogoProps {
  children: ReactNode;
  className?: string;
}

const TabBarLogo: FunctionComponent<TabBarLogoProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

interface TabBarOptionsProps {
  children: ReactNode;
  className?: string;
}

const TabBarOptions: FunctionComponent<TabBarOptionsProps> = ({ children, className }) => (
  <div className={className ?? 'flex items-center space-x-4'}>
    {children}
  </div>
);

export default Object.assign(TabBar, {
  Logo: TabBarLogo,
  Options: TabBarOptions,
});
