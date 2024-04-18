"use client";

import { Button, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "./productCard";
import { motion } from "framer-motion";
import FlexColumn from "../flex/flexColumn";
import FlexRow from "../flex/flexRow";
import { InputBase } from "@mui/material";
import useSessionHook from "@/src/lib/useSessionHook";
import NewProduct from "./newProduct";
import { ColorNames } from "@/src/global";

const StyledButton = styled(Button)({
  borderColor: "#7EA1FF",
  color: "#7EA1FF",
  borderRadius: "16px",
  padding: "16px",
  fontSize: "17px",
});

export default function ProductList({ products }: { products: any[] }) {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [shoppingList, setShoppingList] = useState([] as any[]);

  const setProductList = (product: any) => {
    const newProducts = {
      ...product,
      id: Math.random().toString(),
      colors: product.colors.map((color: any) =>
        ColorNames.findIndex((colorName) => colorName === color)
      ),
    };
    products.push(newProducts);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const { isAdmin } = useSessionHook();

  return (
    <FlexColumn gap={3}>
      <FlexRow justifyContent="space-between" flexWrap="wrap" gap={3}>
        <InputBase
          placeholder="Search for products"
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            border: "1px solid #e3e3e3",
            borderRadius: "16px",
            padding: "12px",
            width: { xs: "100%", md: "400px" },
          }}
        />
        {isAdmin && (
          <StyledButton
            sx={{
              width: { xs: "100%", md: "200px" },
            }}
            variant="outlined"
            onClick={handleOpen}
          >
            Add new Product
          </StyledButton>
        )}
        {!isAdmin && (
          <StyledButton
            sx={{
              width: { xs: "100%", md: "200px" },
            }}
            variant="outlined"
            onClick={() => {}}
          >
            {`Buy Products (${shoppingList.length}) `}
          </StyledButton>
        )}
      </FlexRow>
      <Grid container spacing={3}>
        {filteredProducts.map((product: any) => (
          <Grid item xs={12} sm={12} md={6} lg={3} xl={2} key={product.title}>
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <ProductCard
                product={product}
                idAdmin={isAdmin}
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <NewProduct
        open={open}
        handleClose={handleClose}
        setProductList={setProductList}
      />
    </FlexColumn>
  );
}
