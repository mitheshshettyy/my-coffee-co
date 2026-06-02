import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Lock, Truck } from "lucide-react";
import { useCart } from "../../context/CartContext";

export function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  const FREE_SHIPPING_THRESHOLD = 599;
  const shippingDifference = FREE_SHIPPING_THRESHOLD - subtotal;
  const progressPercent = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-50 flex h-full w-full flex-col bg-white text-left text-[#112BFF] shadow-2xl sm:max-w-md"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#112BFF]/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">Your Cart</h2>
                <span className="rounded-full bg-[#112BFF]/10 px-2.5 py-0.5 text-xs font-bold">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 transition duration-300 hover:bg-[#112BFF]/5"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Shipping Progress */}
            {cartItems.length > 0 && (
              <div className="bg-[#F5F3EE] px-6 py-4 border-b border-[#112BFF]/5">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Truck className="h-4 w-4 text-[#F8B32B]" />
                  {shippingDifference > 0 ? (
                    <span>
                      Add <span className="font-black text-[#F8B32B]">Rs. {shippingDifference}</span> more for <span className="uppercase text-[#F8B32B]">Free Shipping</span>!
                    </span>
                  ) : (
                    <span className="text-[#F8B32B] uppercase tracking-wide">
                      Free Shipping unlocked! 🚚
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-[#112BFF]/10">
                  <div
                    style={{ width: `${progressPercent}%` }}
                    className="h-full rounded-full bg-[#F8B32B] transition-all duration-500 ease-out"
                  />
                </div>
              </div>
            )}

            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F3EE]">
                    <ShoppingBag className="h-10 w-10 text-[#112BFF]/40" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#112BFF]/80">
                    Your cart is empty
                  </h3>
                  <p className="max-w-xs text-sm text-[#112BFF]/60">
                    Looks like you haven't added any coffees or brewing tools yet.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 rounded-full bg-[#112BFF] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#F8B32B] hover:text-[#112BFF] transition duration-300"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-[#112BFF]/5 p-3 hover:border-[#112BFF]/10 transition duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 rounded-xl object-cover bg-[#F5F3EE]"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-sm uppercase truncate pr-2">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="text-[#112BFF]/40 hover:text-red-500 transition duration-300 p-1"
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#112BFF]/60 truncate">{item.subtitle}</p>
                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity Counter */}
                        <div className="flex items-center rounded-full border border-[#112BFF]/15 px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.title, item.quantity - 1)}
                            className="p-1 hover:text-[#F8B32B]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.title, item.quantity + 1)}
                            className="p-1 hover:text-[#F8B32B]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-black text-sm">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-[#112BFF]/10 bg-[#F5F3EE] p-6 space-y-4">
                <div className="flex justify-between items-center font-bold text-sm">
                  <span className="text-[#112BFF]/70 font-semibold uppercase tracking-wider">Subtotal</span>
                  <span className="text-xl font-black">Rs. {subtotal.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-xs text-[#112BFF]/60">
                  Taxes and shipping calculated at checkout.
                </p>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#112BFF] py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-[#112BFF]/20 transition duration-300 hover:bg-[#F8B32B] hover:text-[#112BFF]"
                >
                  <Lock className="h-4 w-4" /> Secure Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs font-bold uppercase tracking-wider text-[#112BFF]/70 hover:text-[#112BFF] transition duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
