import { Box, Container, styled } from '@mui/material';
import { useMemo } from 'react';

interface IProps {
  children?: React.ReactNode;
  company?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  marginBlock: theme.spacing(3),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  overflow: 'auto',
  paddingInline: theme.spacing(3),
}));

const Footer = ({ children, company: _company }: IProps) => {
  const company = useMemo(() => (_company ? ` ${_company}` : ''), [_company]);

  return (
    <StyledContainer as="footer" maxWidth="xl">
      {children}
      <StyledBox as="p">© 2022{company}. All rights reserved.</StyledBox>
    </StyledContainer>
  );
};

export type { IProps };
export default Footer;
