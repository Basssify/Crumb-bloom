import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateTotals } from '../utils/currency';
import { getProductById } from '../data/products';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'crumb_bloom_cart_v1';
const DELIVERY_STORAGE_KEY = 'crumb_bloom_delivery_pref_v1';

export function CartProvider({ children }) {
  // Load initial cart items from localStorage safely
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed
            .filter(item => item && item.id && item.price > 0)
            .map(item => ({
              ...item,
              imageUrl: getProductById(item.id)?.imageUrl || item.imageUrl
            }));
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved cart data:', e);
    }
    return [];
  });

  // Delivery preference ('delivery' | 'pickup')
  const [deliveryOption, setDeliveryOption] = useState(() => {
    try {
      const saved = localStorage.getItem(DELIVERY_STORAGE_KEY);
      if (saved === 'pickup' || saved === 'delivery') {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'delivery';
  });

  // Toast notification state for visible user feedback
  const [toast, setToast] = useState({ message: '', type: 'info', visible: false });

  // Persist items whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }, [items]);

  // Persist delivery option
  useEffect(() => {
    try {
      localStorage.setItem(DELIVERY_STORAGE_KEY, deliveryOption);
    } catch (e) {
      // ignore
    }
  }, [deliveryOption]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3500);
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  /**
   * Add a product to the cart with optional variation option
   */
  const addToCart = (product, quantity = 1, selectedOption = null) => {
    const qty = Math.max(1, Number(quantity) || 1);
    const optionName = selectedOption ? selectedOption.name : null;
    const priceModifier = selectedOption?.priceModifier || 0;
    const effectivePrice = product.price + priceModifier;
    
    // Create unique key for item + variant
    const cartItemId = selectedOption 
      ? `${product.id}__${selectedOption.name.replace(/\s+/g, '_')}`
      : product.id;

    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(i => i.cartItemId === cartItemId);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty
        };
        return updated;
      } else {
        const newItem = {
          cartItemId,
          id: product.id,
          name: product.name,
          category: product.category,
          price: effectivePrice,
          basePrice: product.price,
          selectedOption: optionName,
          imageUrl: product.imageUrl,
          quantity: qty
        };
        return [...prevItems, newItem];
      }
    });

    showToast(`Added ${qty}× "${product.name}" to your basket!`, 'success');
  };

  /**
   * Update quantity of an item. Ensures it never falls below 1.
   */
  const updateQuantity = (cartItemId, newQty) => {
    const validQty = Math.max(1, parseInt(newQty, 10) || 1);
    setItems(prevItems =>
      prevItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: validQty } : item
      )
    );
  };

  /**
   * Remove item from cart
   */
  const removeFromCart = (cartItemId) => {
    const item = items.find(i => i.cartItemId === cartItemId);
    setItems(prevItems => prevItems.filter(i => i.cartItemId !== cartItemId));
    if (item) {
      showToast(`Removed "${item.name}" from your basket`, 'info');
    }
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setItems([]);
  };

  // Total quantity count across all items
  const cartCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Totals breakdown
  const totals = calculateTotals(items, deliveryOption);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        deliveryOption,
        setDeliveryOption,
        totals,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toast,
        showToast,
        hideToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
