// Currency formatting and financial utilities for Nigerian Naira (NGN)
import { SITE_CONFIG } from '../data/siteConfig';

/**
 * Format a numeric amount into Nigerian Naira currency format (e.g., ₦25,000)
 * @param {number|string} amount 
 * @returns {string} Formatted string with Naira symbol
 */
export function formatNaira(amount) {
  const numericAmount = Number(amount);
  if (isNaN(numericAmount) || numericAmount < 0) {
    return '₦0';
  }

  // Format with standard comma grouping and no decimals for integer prices
  const formattedNumber = new Intl.NumberFormat('en-NG', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(numericAmount);

  return `₦${formattedNumber}`;
}

/**
 * Calculate order totals including subtotal, delivery fees, and grand total.
 * @param {Array} items - Array of cart items with price and quantity
 * @param {'delivery'|'pickup'} deliveryOption - Delivery method
 * @returns {Object} { subtotal, deliveryFee, grandTotal, isFreeDelivery }
 */
export function calculateTotals(items = [], deliveryOption = 'delivery') {
  const subtotal = items.reduce((acc, item) => {
    const itemPrice = Number(item.price) || 0;
    const itemQty = Math.max(1, Number(item.quantity) || 1);
    return acc + (itemPrice * itemQty);
  }, 0);

  let deliveryFee = 0;
  if (deliveryOption === 'delivery') {
    if (subtotal >= SITE_CONFIG.delivery.freeThreshold) {
      deliveryFee = 0;
    } else {
      deliveryFee = items.length > 0 ? SITE_CONFIG.delivery.standardFee : 0;
    }
  }

  const grandTotal = subtotal + deliveryFee;

  return {
    subtotal,
    deliveryFee,
    grandTotal,
    isFreeDelivery: deliveryOption === 'delivery' && subtotal >= SITE_CONFIG.delivery.freeThreshold && subtotal > 0
  };
}

