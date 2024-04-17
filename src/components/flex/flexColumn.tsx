import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

const FlexColumn: FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" flexDirection="column" {...props}>
    {children}
  </Box>
);

export default FlexColumn;
