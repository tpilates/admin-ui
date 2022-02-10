import { Box, Container, styled } from '@mui/material';
import { useMemo } from 'react';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  company?: string;
}

const StyledContainer = styled(Container, {
  shouldForwardProp: () => true,
})({
  overflow: 'auto',
});

const Footer = ({ children, className, company: _company }: IProps) => {
  const company = useMemo(() => (_company ? ` ${_company}` : ''), [_company]);

  return (
    <StyledContainer as="footer" className={className} maxWidth={false}>
      {children}
      <Box component="p" my={3}>
        © 2022{company}. All rights reserved.
      </Box>
    </StyledContainer>
  );
};

export type { IProps };
export default Footer;
