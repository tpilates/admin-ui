import type { DrawerProps } from '@mui/material';
import { Drawer, List, styled, Toolbar, Typography } from '@mui/material';
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

// #region StyledDrawer
const COLOR = '#F5F5F7';
const BACKGROUND_COLOR = '#000000CC';

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'width',
})<StyledDrawerProps>(({ width }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: BACKGROUND_COLOR,
    color: COLOR,
    width,
  },
  '& .MuiListItemIcon-root': {
    color: COLOR,
  },
}));
// #endregion

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
  );
};

export default memo(Nav);
