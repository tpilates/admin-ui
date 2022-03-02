// import styled from '@emotion/styled';
import type { StackProps } from '@mui/material';
import { Stack } from '@mui/material';

// TODO: styled
// #region
const Row = (props: StackProps) => (
  <Stack
    alignItems="center"
    direction="row"
    flexWrap="wrap"
    gap={3}
    {...props}
  />
);

const Col = (props: StackProps) => (
  <Stack
    alignItems="center"
    flexDirection="row"
    flexWrap="wrap"
    gap={2}
    {...props}
  />
);
// #endregion

const WhiteBoard = (props: StackProps) => {
  return (
    <Stack
      bgcolor="white"
      border="1px solid black"
      gap={3}
      maxWidth={1200}
      padding={3}
      {...props}
    />
  );
};

WhiteBoard.Col = Col;
WhiteBoard.Row = Row;
export default WhiteBoard;
