"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import FlexColumn from "../flex/flexColumn";
import styled from "styled-components";
import FlexRow from "../flex/flexRow";
import { ColorNames } from "@/src/global";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

const StyledInputBase = styled(InputBase)({
  borderBottom: "1px solid #7EA1FF",
});

export default function NewProduct({
  open,
  handleClose,
  setProductList,
}: {
  open: boolean;
  handleClose: () => void;
  setProductList: (product: any) => void;
}) {
  const [productForm, setProductFrom] = React.useState<{
    colors: string[];
    title: string;
    description: string;
    count: number;
    price: number;
  }>({
    colors: [],
    title: "",
    description: "",
    count: 0,
    price: 0,
  });

  const [loading, setLoading] = React.useState(false);

  const handleChage = (e: any) => {
    setProductFrom({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropDownChange = (e: any) => {
    setProductFrom({ ...productForm, colors: e.target.value });
  };

  const handleSubmmit = async () => {
    setLoading(true);
    // should be replaced with actual api call
    try {
      if (
        productForm.title === "" ||
        productForm.description === "" ||
        productForm.count === 0 ||
        productForm.price === 0 ||
        productForm.colors.length === 0
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProductList(productForm);
    } catch (e) {
      toast.error("Something went wrong");
    } finally {
      setProductFrom({
        colors: [],
        title: "",
        description: "",
        count: 0,
        price: 0,
      });
      setLoading(false);
      handleClose();
    }
  };

  return (
    <FlexColumn gap={3}>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Create a new product</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <FlexColumn gap={3}>
            <FlexRow
              gap={3}
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <FormControl defaultValue="Title" required fullWidth>
                <div>Prodcut Name</div>
                <StyledInputBase
                  name="title"
                  value={productForm.title}
                  placeholder="Write your name here"
                  onChange={(e) => {
                    handleChage(e);
                  }}
                />
                <FormHelperText />
              </FormControl>
              <FormControl defaultValue="Name" required fullWidth>
                <div>Product Description</div>
                <StyledInputBase
                  name="description"
                  value={productForm.description}
                  placeholder="Write your desc here"
                  onChange={(e) => {
                    handleChage(e);
                  }}
                />
                <FormHelperText />
              </FormControl>
            </FlexRow>
            <FlexRow
              gap={3}
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <FormControl defaultValue="Count" required fullWidth>
                <div>Prodcut Count</div>
                <StyledInputBase
                  name="count"
                  value={productForm.count}
                  onChange={(e) => {
                    handleChage(e);
                  }}
                  type="number"
                  inputProps={{ min: 0 }}
                />
                <FormHelperText />
              </FormControl>
              <FormControl defaultValue="Price" required fullWidth>
                <div>Prodcut Price</div>
                <StyledInputBase
                  name="price"
                  value={productForm.price}
                  onChange={(e) => {
                    handleChage(e);
                  }}
                  type="number"
                  inputProps={{ min: 0 }}
                />
                <FormHelperText />
              </FormControl>
            </FlexRow>
            <FlexRow>
              <FormControl defaultValue="Colors" required fullWidth>
                <div>Product Colors</div>
                <Select
                  value={productForm.colors}
                  multiple
                  onChange={(e) => {
                    handleDropDownChange(e);
                  }}
                >
                  {ColorNames.map((color, index) => (
                    <MenuItem key={index} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormHelperText />
            </FlexRow>
          </FlexColumn>
        </DialogContent>
        <DialogActions>
          <FlexRow gap={3}>
            <Button onClick={handleClose} color="error">
              Close
            </Button>
            <LoadingButton loading={loading} onClick={handleSubmmit}>
              Submit
            </LoadingButton>
          </FlexRow>
        </DialogActions>
      </Dialog>
    </FlexColumn>
  );
}
