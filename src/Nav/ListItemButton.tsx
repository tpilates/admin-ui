import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import {
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { VFC } from 'react';
import { useCallback } from 'react';

import type { LinkHandler, LinkWithIcon } from '../types';

export interface ListItemButtonProps extends LinkWithIcon {
  onClick: LinkHandler;
  open?: boolean;
  pathname?: string;
  sx?: MuiListItemButtonBaseProps['sx'];
}

const CollapseIcon: VFC<{ open: boolean }> = ({ open }) => {
  return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
};

const ListItemButton: VFC<ListItemButtonProps> = ({
  href,
  icon,
  onClick,
  open,
  pathname,
  sx,
  text,
}) => {
  const handleClick = useCallback(() => {
    onClick(href, text);
  }, [href, text, onClick]);

  return (
    <MuiListItemButton
      selected={pathname === href}
      sx={sx}
      onClick={handleClick}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
      {typeof open === 'boolean' && <CollapseIcon open={open} />}
    </MuiListItemButton>
  );
};

export default ListItemButton;
