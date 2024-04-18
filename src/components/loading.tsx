"use client";
import FlexColumn from "@/src/components/flex/flexColumn";
import { H1 } from "@/src/components/typography";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function LoadingAnimate() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "30px",
        width: "100%",
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FlexColumn alignItems="center" justifyContent="center">
          <H1>TostBang</H1>
        </FlexColumn>
      </motion.div>
    </Box>
  );
}
