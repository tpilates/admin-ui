import type { Theme } from '@mui/material';
import { CssBaseline, styled, ThemeProvider } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { useCallback, useState } from 'react';

import type { FooterProps } from '../Footer';
import Footer from '../Footer';
import type { HeaderProps } from '../Header';
import Header from '../Header';
import type { NavProps } from '../Nav';
import Nav from '../Nav';

type LayoutFooter = Pick<FooterProps, 'businessName'>;
type LayoutNav = Pick<NavProps, 'pathname' | 'onChange'>;
export interface LayoutProps extends LayoutFooter, LayoutNav {
  children: ReactNode;
  theme: Theme;
  footer?: FooterProps['children'];
  headerPages?: HeaderProps['pages'];
  headerTitle?: HeaderProps['title'];
  navItems?: NavProps['items'];
  navLists?: NavProps['lists'];
  navTitle?: NavProps['title'];
  navWidth?: NavProps['width'];
}

type NavWidth = Pick<NavProps, 'width'>;

const NAV_WIDTH = 240;

const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<NavWidth>(({ theme, width = NAV_WIDTH }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `${width}px 1fr`,
  },
}));

const Main = styled('main')(({ theme }) => ({
  backgroundColor: '#F5F5F7',
  padding: theme.spacing(3),
}));

const NavWrapper = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'width',
})<NavWidth>(({ theme, width = NAV_WIDTH }) => ({
  display: 'none',
  gridRow: '1 / 4',
  width,
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const NAV_SX = { display: { md: 'none', xs: 'block' } };

const Layout: FC<LayoutProps> = ({
  businessName,
  children,
  footer,
  headerPages,
  pathname,
  headerTitle,
  navLists,
  navItems,
  navTitle,
  navWidth = NAV_WIDTH,
  theme,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container width={navWidth}>
        <Header pages={headerPages} title={headerTitle} onOpen={onOpenDrawer} />
        <Main>{children}</Main>
        <Footer businessName={businessName}>{footer}</Footer>
        <NavWrapper width={navWidth}>
          <Nav
            items={navItems}
            lists={navLists}
            pathname={pathname}
            title={navTitle}
            variant="permanent"
            width={navWidth}
            onChange={onChange}
          />
          <Nav
            items={navItems}
            lists={navLists}
            open={open}
            pathname={pathname}
            sx={NAV_SX}
            title={navTitle}
            width={navWidth}
            onChange={onChange}
            onClose={onCloseDrawer}
          />
        </NavWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
