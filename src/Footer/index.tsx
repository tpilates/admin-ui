import { styled } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { memo, useMemo } from 'react';

export interface FooterProps {
  businessName?: string;
  children?: ReactNode;
}

const Container = styled('footer')(({ theme }) => ({
  borderTopColor: 'black',
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  overflow: 'auto',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

const P = styled('p')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const Footer: FC<FooterProps> = ({ businessName, children }) => {
  const $businessName = useMemo(
    () => (businessName ? ` ${businessName}` : ''),
    [businessName]
  );

  return (
    <Container>
      {children}
      <P>© 2022{$businessName}. All rights reserved.</P>
    </Container>
  );
};

export default memo(Footer);
