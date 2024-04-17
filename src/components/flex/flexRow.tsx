import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

const FlexRow: FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexRow;
