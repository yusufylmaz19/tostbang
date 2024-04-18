export const handleIncrement = (
  shoppingList: any,
  product: any,
  setShoppingList: any
) => {
  const existingProductIndex = shoppingList.findIndex(
    (item: any) => item.id === product.id
  );
  if (existingProductIndex !== -1) {
    const updatedShoppingList = [...shoppingList];
    updatedShoppingList[existingProductIndex].shoppingCount += 1;
    setShoppingList(updatedShoppingList);
  } else {
    setShoppingList([...shoppingList, { ...product, shoppingCount: 1 }]);
  }
};

export const handleDecrement = (
  shoppingList: any,
  product: any,
  setShoppingList: any
) => {
  const existingProductIndex = shoppingList.findIndex(
    (item: any) => item.id === product.id
  );
  if (existingProductIndex !== -1) {
    if (shoppingList[existingProductIndex].shoppingCount > 1) {
      const updatedShoppingList = [...shoppingList];
      updatedShoppingList[existingProductIndex].shoppingCount -= 1;
      setShoppingList(updatedShoppingList);
    } else {
      const updatedShoppingList = shoppingList.filter(
        (item: any) => item.id !== product.id
      );
      setShoppingList(updatedShoppingList);
    }
  }
};
