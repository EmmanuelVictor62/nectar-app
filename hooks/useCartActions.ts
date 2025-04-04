import { useAlert } from "@/context/alertContext";
import { Product } from "@/data/mock-data";
import { useCartStore } from "@/stores/useCartStore";

export const useCartActions = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProductFromCart = useCartStore((state) => state.removeFromCart);

  const { showAlert } = useAlert();

  const getProductQuantity = (id: string) => {
    const item = cart?.find((item) => item?.id === id);
    return item ? item?.quantity : 0;
  };

  const handleAddProductToCart = (item: Product) => {
    const cartItem = {
      name: item.name,
      id: item.id,
      quantity: 1,
      price: item.price,
      weight: item.weight!,
      image: item.image,
    };
    addToCart(cartItem);
    showAlert(`${cartItem.name} added to cart successfully`, "success");
  };

  const handleUpdateProductQuantity = (
    id: string,
    quantity: number,
    itemName: string
  ) => {
    if (quantity > 0) {
      updateProductQuantity(id, quantity);
    } else {
      removeProductFromCart(id);
      showAlert(`${itemName} removed from cart successfully`, "success");
    }
  };

  return {
    handleAddProductToCart,
    getProductQuantity,
    handleUpdateProductQuantity,
    removeProductFromCart,
  };
};
