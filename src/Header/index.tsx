import {
  CallMade as CallMadeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import type { MouseEventHandler } from 'react';
import { memo, useCallback, useState } from 'react';

import type { Link } from '../types';

export interface HeaderProps {
  onOpen?: MouseEventHandler<HTMLButtonElement>;
  pages?: Link[];
  title?: string;
}

const Header = ({ title, pages = [], onOpen }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onCloseMenu = useCallback<MouseEventHandler<HTMLLIElement>>(() => {
    setAnchorEl(null);
  }, []);

  const onOpenMenu = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  return (
    <AppBar color="inherit" position="static">
      <Toolbar variant="dense">
        {/* md: title */}
        <Typography
          component="div"
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
            mr: 2,
          }}
          variant="h6"
          noWrap
        >
          {title}
        </Typography>

        {/* xs: left nav */}
        <Box
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            flexGrow: 1,
          }}
        >
          <IconButton
            color="inherit"
            id="left-header-button"
            size="large"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* xs: title */}
        <Typography
          component="div"
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            flexGrow: 1,
          }}
          variant="h6"
          noWrap
        >
          {title}
        </Typography>

        {/* md: nav */}
        <Box
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
            flexGrow: 1,
          }}
        >
          {pages.map(({ path, text }) => (
            <MuiLink
              key={text}
              color="inherit"
              href={path}
              sx={{ padding: 2 }}
              underline="hover"
            >
              {text}
            </MuiLink>
          ))}
        </Box>

        {/* xs: right nav */}
        <Box
          sx={{
            display: {
              md: 'none',
              xs: 'flex',
            },
            flexGrow: 0,
          }}
        >
          <IconButton
            color="inherit"
            id="right-header-button"
            size="large"
            onClick={onOpenMenu}
          >
            <CallMadeIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
            open={anchorEl?.id === 'right-header-button'}
            sx={{
              display: {
                md: 'none',
                xs: 'block',
              },
            }}
            keepMounted
            onClose={onCloseMenu}
          >
            {pages.map(({ path, text }) => (
              <MenuItem key={text} onClick={onCloseMenu}>
                <MuiLink color="inherit" href={path} underline="none">
                  <Typography textAlign="center">{text}</Typography>
                </MuiLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
