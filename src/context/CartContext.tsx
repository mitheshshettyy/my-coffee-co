import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react";

export interface CartItem {
  title: string;
  subtitle?: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
}

interface CartActions {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (title: string) => void;
  updateQuantity: (title: string, quantity: number) => void;
  clearCart: () => void;
  setIsCartOpen: (open: boolean) => void;
}

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartActionsContext = createContext<CartActions | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("mycoffee_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("mycoffee_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const parsePrice = useCallback((priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
  }, []);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((title: string) => {
    setCartItems((prev) => prev.filter((i) => i.title !== title));
  }, []);

  const updateQuantity = useCallback((title: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((i) => i.title !== title));
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.title === title ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + parsePrice(item.price) * item.quantity,
      0
    );
  }, [cartItems, parsePrice]);

  // Memoized state value (changes when cartItems or isCartOpen changes)
  const stateValue = useMemo(() => ({
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
  }), [cartItems, cartCount, subtotal, isCartOpen]);

  // Static action value (never changes throughout the session!)
  const actionsValue = useMemo(() => ({
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setIsCartOpen,
  }), [addToCart, removeFromCart, updateQuantity, clearCart, setIsCartOpen]);

  return (
    <CartStateContext.Provider value={stateValue}>
      <CartActionsContext.Provider value={actionsValue}>
        {children}
      </CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

export function useCartActions() {
  const context = useContext(CartActionsContext);
  if (!context) {
    throw new Error("useCartActions must be used within a CartProvider");
  }
  return context;
}

// Retain useCart for compatibility
export function useCart() {
  const state = useCartState();
  const actions = useCartActions();
  return useMemo(() => ({
    ...state,
    ...actions,
  }), [state, actions]);
}
