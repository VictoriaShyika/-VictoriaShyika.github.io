import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Text: React.FC<{ variant: any; children: any }> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <CustomTypography variant={variant} {...props}>
      {children}
    </CustomTypography>
  );
};
const CustomTypography = styled(Typography)`
  white-space: pre-line;
  display: block;
`;
