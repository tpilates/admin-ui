import CallMadeIcon from '@mui/icons-material/CallMade';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import type { MouseEventHandler, VFC } from 'react';
import { memo, useCallback, useState } from 'react';

import type { Link } from '../types';

export interface HeaderProps {
  onOpen?: MouseEventHandler<HTMLButtonElement>;
  pages?: Link[];
  title?: string;
}

const MD_SX = {
  display: {
    md: 'flex',
    xs: 'none',
  },
};

const XS_SX = {
  display: {
    md: 'none',
    xs: 'flex',
  },
};

const Div = styled('div', {
  shouldForwardProp: (prop) => prop !== 'flexGrow',
})<{ flexGrow: number }>(({ flexGrow }) => ({ flexGrow }));

const StyledHeader = styled(AppBar, {
  shouldForwardProp: () => true,
})({
  borderBottomColor: 'black',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  boxShadow: 'none',
});

const Header: VFC<HeaderProps> = ({ onOpen, pages = [], title }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onCloseMenu = useCallback<MouseEventHandler<HTMLLIElement>>(() => {
    setAnchorEl(null);
  }, []);

  const onOpenMenu = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  return (
    <StyledHeader color="inherit" position="static">
      <Toolbar variant="dense">
        {/* md: title */}
        <Typography component="div" mr={2} sx={MD_SX} variant="h6" noWrap>
          {title}
        </Typography>

        {/* xs: left nav */}
        <Div flexGrow={1} sx={XS_SX}>
          <IconButton
            color="inherit"
            id="left-header-button"
            size="large"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
        </Div>

        {/* xs: title */}
        <Typography component="div" flexGrow={1} sx={XS_SX} variant="h6" noWrap>
          {title}
        </Typography>

        {/* md: nav */}
        <Div flexGrow={1} sx={MD_SX}>
          {pages.map(({ href, text }) => (
            <MuiLink
              key={text}
              color="inherit"
              href={href}
              padding={2}
              underline="hover"
            >
              {text}
            </MuiLink>
          ))}
        </Div>

        {/* xs: right nav */}
        <Div flexGrow={0} sx={XS_SX}>
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
            open={anchorEl?.id === 'right-header-button'}
            sx={XS_SX}
            keepMounted
            onClose={onCloseMenu}
          >
            {pages.map(({ href, text }) => (
              <MenuItem key={text} onClick={onCloseMenu}>
                <MuiLink color="inherit" href={href} underline="none">
                  <Typography textAlign="center">{text}</Typography>
                </MuiLink>
              </MenuItem>
            ))}
          </Menu>
        </Div>
      </Toolbar>
    </StyledHeader>
  );
};

export default memo(Header);
