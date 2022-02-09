import { Container, styled } from '@mui/material';
import { useMemo } from 'react';

interface IProps {
  children?: React.ReactNode;
  company?: string;
}

const P = styled('p')({
  margin: 0,
});

const Footer = ({ children, company: _company }: IProps) => {
  const company = useMemo(() => (_company ? ` ${_company}` : ''), [_company]);

  return (
    <Container maxWidth="xl">
      {children}
      <P>© 2022{company}. All rights reserved.</P>
    </Container>
  );
};

export type { IProps };
export default Footer;
