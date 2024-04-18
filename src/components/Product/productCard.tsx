"use client";

import { Box, Button, Card, Divider, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import shoe from "../../assets/shoe.png";
import FlexColumn from "../flex/flexColumn";
import FlexRow from "../flex/flexRow";
import { Colors } from "@/src/global";

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
  const [productCount, setProductCount] = React.useState(0);

  const handleDecrement = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
      const existingProductIndex = shoppingList.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        if (shoppingList[existingProductIndex].shoppingCount > 1) {
          const updatedShoppingList = [...shoppingList];
          updatedShoppingList[existingProductIndex].shoppingCount -= 1;
          setShoppingList(updatedShoppingList);
        } else {
          const updatedShoppingList = shoppingList.filter(
            (item) => item.id !== product.id
          );
          setShoppingList(updatedShoppingList);
        }
      }
    }
  };

  const handleIncrement = () => {
    const existingProductIndex = shoppingList.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedShoppingList = [...shoppingList];
      updatedShoppingList[existingProductIndex].shoppingCount += 1;
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, { ...product, shoppingCount: 1 }]);
    }

    setProductCount(productCount + 1);
  };

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
            <p>{productCount}</p>
          </FlexRow>
          <FlexRow justifyContent="space-between" alignItems="center">
            <p>{product.price}$</p>
            {!idAdmin && (
              <FlexRow gap={2}>
                <StyledButton
                  disabled={product.count === 0}
                  onClick={handleDecrement}
                >
                  -
                </StyledButton>
                <StyledButton
                  disabled={product.count === 0}
                  onClick={handleIncrement}
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
