import { Box } from "@mui/material";
import React from "react";

export default function Avatar({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      }}
    >
      {children}
    </Box>
  );
}
