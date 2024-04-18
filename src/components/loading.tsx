"use client";
import FlexColumn from "@/src/components/flex/flexColumn";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function LoadingAnimate() {
  return (
    <FlexColumn alignItems="center" justifyContent="center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Box textAlign="center" fontSize={40}>
          <div>TostBang</div>
        </Box>
      </motion.div>
    </FlexColumn>
  );
}
