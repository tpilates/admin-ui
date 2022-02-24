import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import {
  Collapse,
  List,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

import type { Link } from '../types';

// #region types
type LinkEventHandler = (path: string) => void;

interface ListItemButtonBase extends Link {
  icon?: ReactNode;
}
interface ListItemButtonProps extends ListItemButtonBase {
  onClick: LinkEventHandler;
  open?: boolean;
  sx?: MuiListItemButtonBaseProps['sx'];
}

export interface ListItemBase extends ListItemButtonBase {
  subItems?: ListItemBase[];
}
export interface ListItemProps extends ListItemBase {
  onClick: LinkEventHandler;
  sx?: MuiListItemButtonBaseProps['sx'];
}
// #endregion

// #region ListItemButton
const CollapseIcon = ({ open }: { open: boolean }) => {
  return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
};

const ListItemButton = ({
  icon,
  onClick,
  open,
  path,
  sx,
  text,
}: ListItemButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(path);
  }, [path, onClick]);

  return (
    <MuiListItemButton sx={sx} onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
      {typeof open === 'boolean' && <CollapseIcon open={open} />}
    </MuiListItemButton>
  );
};
// #endregion

const SX = { pl: 4 };

const ListItem = ({
  icon,
  onClick,
  path,
  subItems,
  sx,
  text,
}: ListItemProps) => {
  const [open, setOpen] = useState(false);

  const onToggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleClick = subItems ? onToggle : onClick;

  return (
    <>
      <ListItemButton
        icon={icon}
        open={subItems ? open : undefined}
        path={path}
        sx={sx}
        text={text}
        onClick={handleClick}
      />
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems.map(
              ({ icon: subIcon, path, subItems, text: subText }, index) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  icon={subIcon}
                  path={path}
                  subItems={subItems}
                  sx={SX}
                  text={subText}
                  onClick={onClick}
                />
              )
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListItem;
