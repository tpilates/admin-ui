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
import type { ReactNode } from 'react';
import { memo } from 'react';

import type { ListItemProps } from './ListItem';
import { renderListItems } from './ListItem';

export interface NavProps {
  onClickItem: ListItemProps['onClick'];
  pathname: string;
  width: number;
  items?: ListItemProps[];
  lists?: { items: ListItemProps[]; subheader: string }[];
  onClose?: DrawerProps['onClose'];
  open?: boolean;
  sx?: DrawerProps['sx'];
  title?: ReactNode;
  variant?: DrawerProps['variant'];
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

const Nav = ({
  items,
  lists,
  onClickItem,
  onClose,
  open,
  pathname,
  sx,
  title,
  variant = 'temporary',
  width = 240,
}: NavProps) => {
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
              {renderListItems({ items, onClickItem, pathname })}
            </List>
          ))}
          {renderListItems({ items, onClickItem, pathname })}
        </List>
      </StyledDrawer>
    </ThemeProvider>
  );
};

export default memo(Nav);
