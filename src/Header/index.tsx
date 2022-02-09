import { Menu as MenuIcon } from '@mui/icons-material';
import type { AppBarProps } from '@mui/material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';

interface IProps {
  className?: string;
  color?: AppBarProps['color'];
  logo?: React.ReactNode;
  pages?: { href: string; value: string }[];
  src?: string;
}

const Header = ({ className, color, logo, pages, src }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onOpen = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);
  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <AppBar className={className} color={color} position="static">
      <Container maxWidth="xl">
        <Toolbar variant="dense" disableGutters>
          {/* md: logo */}
          <Typography
            component="div"
            sx={{ display: { md: 'flex', xs: 'none' }, mr: 2 }}
            variant="h6"
            noWrap
          >
            {logo}
          </Typography>

          {/* xs: nav */}
          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <IconButton color="inherit" size="large" onClick={onOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              id="menu-appbar"
              open={Boolean(anchorEl)}
              sx={{
                display: { md: 'none', xs: 'block' },
              }}
              keepMounted
              onClose={onClose}
            >
              {pages?.map(({ href, value }) => (
                <MenuItem key={value} onClick={onClose}>
                  <Link color="inherit" href={href} underline="none">
                    <Typography textAlign="center">{value}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* xs: logo */}
          <Typography
            component="div"
            sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}
            variant="h6"
            noWrap
          >
            {logo}
          </Typography>

          {/* md: nav */}
          <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {pages?.map(({ href, value }) => (
              <Button
                key={value}
                href={href}
                sx={{ color: 'white', display: 'block', my: 2 }}
                onClick={onClose}
              >
                {value}
              </Button>
            ))}
          </Box>

          {/* all: avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Profile" src={src} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export type { IProps };
export default Header;
