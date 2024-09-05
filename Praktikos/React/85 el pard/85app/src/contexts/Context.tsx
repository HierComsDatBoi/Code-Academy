import { createContext, useState } from "react";

type ChildrenType = {children: React.ReactElement}

type CartItemType = {
  id: string,
  amount: number
}

type CartContextType = {
  cart: CartItemType[],
  addNewItemToCart: (itemId:string) => void
}

const CartContext = createContext(undefined);
const CartProvider = ({ children }: ChildrenType) => {

  const [cart, setCart] = useState<CartItemType[]>([]); /* cart pildymas */

  const addNewItemToCart = (itemId:string) => {
    setCart([...cart, {
      id: itemId,
      amount: 1
    }]) 
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItemToCart
      }}
    >
      {children}
    </CartContext.Provider>

  )

}

export { CartProvider };
export default CartContext;