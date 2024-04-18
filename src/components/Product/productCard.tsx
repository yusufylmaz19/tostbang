"use client";

import { Box, Card, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import shoe from "../../assets/shoe.png";
import FlexColumn from "../flex/flexColumn";
import FlexRow from "../flex/flexRow";
import { Colors } from "@/src/global";
import { StyledButton } from "./styles";
import { handleDecrement, handleIncrement } from "@/src/helpers";

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

export default function ProductCard({
  product,
  idAdmin,
  shoppingList,
  setShoppingList,
}: {
  product: any;
  idAdmin: boolean;
  shoppingList: any[];
  setShoppingList: (shoppingList: any) => void;
}) {
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        ":hover": {
          boxShadow: "0 0 10px #4A8EB8",
        },
      }}
    >
      {product.count === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
          }}
        >
          <Box
            sx={{
              //
              backgroundColor: "#10439F",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            Sold Out
          </Box>
        </Box>
      )}
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
                <StyledDot key={color} color={Colors[color]} />
              ))}
            </FlexColumn>
          </Box>
        </Box>
        <Divider />
        <Box>
          <h4>{product.title}</h4>
          <FlexRow justifyContent="space-between" alignItems="center">
            <p>{product.description}</p>
            <p>
              {shoppingList.find((item) => item.id === product.id)
                ?.shoppingCount || 0}
            </p>
          </FlexRow>
          <FlexRow justifyContent="space-between" alignItems="center">
            <p>{product.price}$</p>
            {!idAdmin && (
              <FlexRow gap={2}>
                <StyledButton
                  disabled={product.count === 0}
                  onClick={() => {
                    handleDecrement(shoppingList, product, setShoppingList);
                  }}
                >
                  -
                </StyledButton>
                <StyledButton
                  disabled={product.count === 0}
                  onClick={() => {
                    handleIncrement(shoppingList, product, setShoppingList);
                  }}
                >
                  +
                </StyledButton>
              </FlexRow>
            )}
          </FlexRow>
        </Box>
      </FlexColumn>
    </Card>
  );
}
