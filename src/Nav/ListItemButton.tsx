import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import {
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { ReactNode } from 'react';
import { useCallback } from 'react';

import type { Link } from '../types';

export interface ListItemButtonBase extends Link {
  icon?: ReactNode;
}

export interface ListItemButtonProps extends ListItemButtonBase {
  onClick: (path: string) => void;
  open?: boolean;
  pathname?: string;
  sx?: MuiListItemButtonBaseProps['sx'];
}

const CollapseIcon = ({ open }: { open: boolean }) => {
  return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
};

const ListItemButton = ({
  icon,
  onClick,
  open,
  path,
  pathname,
  sx,
  text,
}: ListItemButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(path);
  }, [path, onClick]);

  return (
    <MuiListItemButton
      selected={pathname === path}
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
