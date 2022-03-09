import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import { Collapse, List } from '@mui/material';
import { useCallback, useState } from 'react';

import type { ListItemButtonBase, ListItemButtonProps } from './ListItemButton';
import ListItemButton from './ListItemButton';

export interface ListItemBase extends ListItemButtonBase {
  subItems?: ListItemBase[];
}
export interface ListItemProps
  extends Pick<
    ListItemButtonProps,
    'icon' | 'path' | 'pathname' | 'onClick' | 'sx' | 'text'
  > {
  subItems?: ListItemBase[];
}

const SX = { pl: 4 };

const ListItem = ({
  icon,
  onClick,
  path,
  pathname,
  subItems,
  sx,
  text,
}: ListItemProps) => {
  const [open, setOpen] = useState(() => {
    return subItems ? Boolean(pathname?.includes(path)) : undefined;
  });

  const onToggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleClick = subItems ? onToggle : onClick;

  return (
    <>
      <ListItemButton
        icon={icon}
        open={open}
        path={path}
        pathname={pathname}
        sx={sx}
        text={text}
        onClick={handleClick}
      />
      {subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
            {renderListItems({
              items: subItems,
              onClickItem: onClick,
              pathname,
              sx: SX,
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

export const renderListItems = ({
  items,
  onClickItem,
  pathname,
  sx,
}: {
  onClickItem: ListItemProps['onClick'];
  items?: ListItemBase[];
  pathname?: string;
  sx?: MuiListItemButtonBaseProps['sx'];
}) => {
  return items?.map(({ icon, path, subItems, text }, index) => {
    return (
      <ListItem
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        icon={icon}
        path={path}
        pathname={pathname}
        subItems={subItems}
        sx={sx}
        text={text}
        onClick={onClickItem}
      />
    );
  });
};

export default ListItem;
