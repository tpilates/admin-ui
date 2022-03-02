import type { DrawerProps, ThemeOptions } from '@mui/material';
import {
  createTheme,
  Drawer,
  List,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import { memo } from 'react';

import type { ListItemProps } from './ListItem';
import ListItem from './ListItem';

// #region types
interface StyledDrawerProps extends DrawerProps {
  width?: number;
}

export interface NavProps {
  items: ListItemProps[];
  onClickItem: ListItemProps['onClick'];
  width: StyledDrawerProps['width'];
  onClose?: DrawerProps['onClose'];
  open?: boolean;
  sx?: DrawerProps['sx'];
  title?: ReactNode;
  variant?: DrawerProps['variant'];
}
// #endregion

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
  },
  palette: {
    background: { paper: BACKGROUND_COLOR },
    mode: 'dark',
    primary: {
      main: '#AAAAAA',
    },
    text: { primary: COLOR },
  },
};
const theme = createTheme(OPTIONS);

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'width',
})<StyledDrawerProps>(({ width }) => ({
  '& .MuiDrawer-paper': {
    width,
  },
}));

const Nav = ({
  items,
  onClickItem,
  onClose,
  open,
  sx,
  title,
  variant = 'temporary',
  width,
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
          {items.map(({ icon, path, subItems, text }, index) => {
            return (
              <ListItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                icon={icon}
                path={path}
                subItems={subItems}
                text={text}
                onClick={onClickItem}
              />
            );
          })}
        </List>
      </StyledDrawer>
    </ThemeProvider>
  );
};

export default memo(Nav);
