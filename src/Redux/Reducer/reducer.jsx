export const cartData = (data = [], action) => {
  switch (action.type) {
    case "AddToCart":
      const existingItemIndex = data.findIndex(
        (item) => item._id === action.data._id
      );
      if (existingItemIndex !== -1) {
        const updatedData = [...data];
        updatedData[existingItemIndex] = {
          ...updatedData[existingItemIndex],
          quantity: updatedData[existingItemIndex].quantity + 1,
        };
        return updatedData;
      } else {
        return [ ...data,{ ...action.data, quantity: 1 }];
      }

    case "RemoveToCart":
      return data
        .map((item) =>
          item._id === action.item._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    default:
      return data;
  }
};
