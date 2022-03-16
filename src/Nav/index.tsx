import type { DrawerProps, ThemeOptions } from '@mui/material';
import {
  createTheme,
  Drawer,
  List,
  ListSubheader,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

import type { LinkHandler } from '../types';
import type { NavListItem } from './ListItem';
import { renderListItems } from './ListItem';

export interface NavList {
  items: NavListItem[];
  subheader: string;
}
export interface NavProps
  extends Pick<DrawerProps, 'onClose' | 'sx' | 'variant'> {
  onChange: LinkHandler;
  pathname: string;
  items?: NavListItem[];
  lists?: NavList[];
  open?: boolean;
  title?: ReactNode;
  width?: number;
}

const COLOR = '#F5F5F7';
const BACKGROUND_COLOR = '#000000CC';
const OPTIONS: ThemeOptions = {
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: COLOR,
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          fontSize: '1.125rem',
        },
      },
    },
  },
  palette: {
    background: { paper: BACKGROUND_COLOR },
    mode: 'dark',
    primary: {
      main: COLOR,
    },
    text: { primary: COLOR },
  },
  typography: { fontFamily: 'inherit' }, // Inherit global theme
};
const theme = createTheme(OPTIONS);

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'width',
})<{ width: number }>(({ width }) => ({
  '& .MuiDrawer-paper': {
    width,
  },
}));

const Nav: VFC<NavProps> = ({
  items,
  lists,
  onChange,
  onClose,
  open,
  pathname,
  sx,
  title,
  variant = 'temporary',
  width = 240,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDrawer
        open={open}
        sx={sx}
        variant={variant}
        width={width}
        onClose={onClose}
      >
        <List component="nav">
          <Toolbar>
            <Typography component="div" variant="h6">
              {title}
            </Typography>
          </Toolbar>
          {lists?.map(({ items, subheader }, index) => (
            <List
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              component="section"
              subheader={
                <ListSubheader component="header">{subheader}</ListSubheader>
              }
            >
              {renderListItems({ items, onChange, pathname })}
            </List>
          ))}
          {renderListItems({ items, onChange, pathname })}
        </List>
      </StyledDrawer>
    </ThemeProvider>
  );
};

export * from './ListItem';
export * from './ListItemButton';
export default memo(Nav);
