"use client";

import { Box, Button, Card, Divider, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import shoe from "../../assets/shoe.png";
import FlexColumn from "../flex/flexColumn";
import FlexRow from "../flex/flexRow";

const StyledDot = ({ color }: { color: string }) => (
  <Box
    style={{
      width: "14px",
      height: "14px",
      borderRadius: "50%",
      backgroundColor: color,
    }}
  ></Box>
);

const StyledButton = styled(Button)({
  borderColor: "#7EA1FF",
  color: "#7EA1FF",
  borderRadius: "16px",
  padding: "0px",
  fontSize: "24px",
});

const colors = [
  "#D20062",
  "#C4E4FF",
  "#8DECB4",
  "#FFF5E0",
  "#102C57",
  "#FFC94A",
  "#795458",
  "#8576FF",
];

export default function ProductCard({ product }: { product: any }) {
  const [productCount, setProductCount] = React.useState(0);

  const handleDecrement = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  return (
    <Card
      sx={{
        cursor: "pointer",
        ":hover": {
          boxShadow: "0 0 10px #4A8EB8",
        },
      }}
    >
      <FlexColumn>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <FlexRow justifyContent="center">
            <Image
              src={shoe}
              objectFit="cover"
              alt={product.title}
              width={200}
              height={160}
            />
          </FlexRow>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translateX(-50%)",
            }}
          >
            <FlexColumn gap={1}>
              {product.colors.slice(0, 3).map((color: number) => (
                <StyledDot key={color} color={colors[color]} />
              ))}
            </FlexColumn>
          </Box>
        </Box>
        <Divider />
        <Box>
          <h4>{product.title}</h4>
          <FlexRow justifyContent="space-between" alignItems="center">
            <p>{product.description}</p>
            <p>{productCount}</p>
          </FlexRow>
          <FlexRow justifyContent="space-between" alignItems="center">
            <p>{product.price}$</p>
            <FlexRow gap={2}>
              <StyledButton onClick={handleDecrement}>-</StyledButton>
              <StyledButton onClick={handleIncrement}>+</StyledButton>
            </FlexRow>
          </FlexRow>
        </Box>
      </FlexColumn>
    </Card>
  );
}
