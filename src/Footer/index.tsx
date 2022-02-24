import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import { memo, useMemo } from 'react';

export interface FooterProps {
  businessName?: string;
  children?: ReactNode;
}

const Footer = ({ businessName, children }: FooterProps) => {
  const $businessName = useMemo(
    () => (businessName ? ` ${businessName}` : ''),
    [businessName]
  );

  return (
    <Box borderTop="1px solid black" component="footer" overflow="auto" px={3}>
      {children}
      <Box component="p" my={3}>
        © 2022{$businessName}. All rights reserved.
      </Box>
    </Box>
  );
};

export default memo(Footer);
