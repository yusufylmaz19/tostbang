"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import FlexColumn from "../flex/flexColumn";
import FlexRow from "../flex/flexRow";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import shoe from "../../assets/shoe.png";
import { StyledButton } from "./styles";
import { handleDecrement, handleIncrement } from "@/src/helpers";

export default function ShoppingModal({
  open,
  handleClose,
  shoppingList,
  setShoppingList,
}: {
  open: boolean;
  handleClose: () => void;
  shoppingList: any[];
  setShoppingList: (shoppingList: any) => void;
}) {
  const [loading, setLoading] = React.useState(false);

  const handleSubmmit = async () => {
    setLoading(true);
    // should be replaced with actual api call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Your order has been taken");
      setShoppingList([]);
    } catch (e) {
      toast.error("Your order has been taken");
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <FlexColumn gap={3}>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          <FlexRow justifyContent="space-between">
            <div>Shopping List</div>
            <div>
              Total:{" "}
              {shoppingList.reduce(
                (acc, item) => acc + item.price * item.shoppingCount,
                0
              )}{" "}
              $
            </div>
          </FlexRow>
        </DialogTitle>
        <DialogContent>
          <FlexColumn gap={3} maxHeight={250}>
            {shoppingList.length !== 0 ? (
              shoppingList.map((item) => (
                <FlexRow
                  alignItems="center"
                  justifyContent="space-between"
                  key={item}
                  gap={3}
                >
                  <Image
                    src={shoe}
                    objectFit="cover"
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div>
                    {item.title} {""} ({item.price} $)
                  </div>
                  <FlexRow
                    gap={3}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <StyledButton
                      onClick={() => {
                        handleDecrement(shoppingList, item, setShoppingList);
                      }}
                    >
                      -
                    </StyledButton>
                    <div>{item.shoppingCount}</div>
                    <StyledButton
                      onClick={() => {
                        handleIncrement(shoppingList, item, setShoppingList);
                      }}
                    >
                      +
                    </StyledButton>
                  </FlexRow>
                </FlexRow>
              ))
            ) : (
              <DialogContentText textAlign="center">
                There is no product in your shopping list
              </DialogContentText>
            )}
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
