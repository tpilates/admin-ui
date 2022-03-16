import type { ListItemButtonBaseProps as MuiListItemButtonBaseProps } from '@mui/material';
import { Collapse, List } from '@mui/material';
import type { VFC } from 'react';
import { useCallback, useState } from 'react';

import type { LinkHandler, LinkWithIcon } from '../types';
import type { ListItemButtonProps } from './ListItemButton';
import ListItemButton from './ListItemButton';

export interface NavListItem extends LinkWithIcon {
  subItems?: NavListItem[];
}
export interface ListItemProps extends Omit<ListItemButtonProps, 'open'> {
  subItems?: NavListItem[];
}

const SX = { pl: 4 };

const ListItem: VFC<ListItemProps> = ({
  href,
  icon,
  onClick,
  pathname,
  subItems,
  sx,
  text,
}) => {
  const [open, setOpen] = useState(() => {
    return subItems ? Boolean(pathname?.includes(href)) : undefined;
  });

  const onToggle = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleClick = subItems ? onToggle : onClick;

  return (
    <>
      <ListItemButton
        href={href}
        icon={icon}
        open={open}
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
              onChange: onClick,
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
  onChange,
  pathname,
  sx,
}: {
  onChange: LinkHandler;
  items?: NavListItem[];
  pathname?: string;
  sx?: MuiListItemButtonBaseProps['sx'];
}) => {
  return items?.map(({ href, icon, subItems, text }, index) => {
    return (
      <ListItem
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        href={href}
        icon={icon}
        pathname={pathname}
        subItems={subItems}
        sx={sx}
        text={text}
        onClick={onChange}
      />
    );
  });
};

export default ListItem;
