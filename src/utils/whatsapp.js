 
import { SITE_CONFIG } from '../data/siteConfig';
import { formatNaira } from './currency';

 
export function sanitizeWhatsAppPhone(phone) {
  if (!phone) return '';
  let cleaned = phone.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = '234' + cleaned.substring(1);
  }
  return cleaned;
}

/**
 * Generate a standard wa.me redirect link with URL encoded message
 */
export function buildWhatsAppLink(phone, message) {
  const cleanNumber = sanitizeWhatsAppPhone(phone || SITE_CONFIG.whatsappNumber);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Formats order items and details into a clear WhatsApp order text
 */
export function generateOrderWhatsAppMessage({ customer, items, totals, deliveryOption }) {
  const lineItems = items.map((item, index) => {
    const optionStr = item.selectedOption ? ` (${item.selectedOption})` : '';
    const itemTotal = formatNaira(item.price * item.quantity);
    return `${index + 1}. *${item.name}*${optionStr}\n   Qty: ${item.quantity} × ${formatNaira(item.price)} = ${itemTotal}`;
  }).join('\n\n');

  const deliveryMethodLabel = deliveryOption === 'pickup' 
    ? '🏪 Boutique Studio Pickup (Admiralty Way, Lekki)' 
    : '🚚 Doorstep Delivery (Lagos Coverage Zone)';

  const addressDetails = deliveryOption === 'delivery'
    ? `📍 *Delivery Address:* ${customer.address}\n🏙️ *Area:* ${customer.area}`
    : `📍 *Pickup Location:* ${SITE_CONFIG.contact.address}, ${SITE_CONFIG.contact.city}`;

  return `🧁 *NEW ORDER ENQUIRY — CRUMB & BLOOM* 🧁
----------------------------------------
Hello Crumb & Bloom Team, I would like to place an order from your website catalogue:

*CUSTOMER DETAILS:*
👤 *Name:* ${customer.fullName}
📞 *Phone:* ${customer.phone}
${customer.email ? `📧 *Email:* ${customer.email}\n` : ''}
*FULFILLMENT METHOD:*
${deliveryMethodLabel}
📅 *Preferred Date:* ${customer.deliveryDate}
${addressDetails}

*ORDER SUMMARY:*
----------------------------------------
${lineItems}
----------------------------------------
📦 *Items Subtotal:* ${formatNaira(totals.subtotal)}
🚚 *Delivery Fee:* ${totals.deliveryFee === 0 ? 'FREE / ₦0' : formatNaira(totals.deliveryFee)}
✨ *TOTAL ESTIMATE:* ${formatNaira(totals.grandTotal)}

${customer.notes ? `📝 *Special Notes:* "${customer.notes}"\n\n` : ''}
_Note: I understand this is an order request submitted for confirmation and bakery availability._`;
}

/**
 * Formats custom cake consultation request into WhatsApp message
 */
export function generateCustomCakeWhatsAppMessage(cakeData) {
  return `🎂 *BESPOKE CELEBRATION CAKE ENQUIRY* 🎂
----------------------------------------
Hello Crumb & Bloom, I would like to consult on a custom celebration cake:

*CLIENT DETAILS:*
👤 *Name:* ${cakeData.fullName}
📞 *WhatsApp:* ${cakeData.phone}
${cakeData.email ? `📧 *Email:* ${cakeData.email}\n` : ''}
*EVENT & CAKE SPECIFICATIONS:*
🎉 *Occasion:* ${cakeData.occasion}
📅 *Event Date:* ${cakeData.eventDate}
📆 *Required Date:* ${cakeData.requiredDate || cakeData.eventDate}
👥 *Serving Size / Tiers:* ${cakeData.servingSize}
🍰 *Primary Flavour:* ${cakeData.flavour}
🍓 *Preferred Filling:* ${cakeData.filling || 'Baker’s Recommendation'}
🧁 *Frosting / Finish:* ${cakeData.frosting || 'Artisan Buttercream'}
🎨 *Theme / Colour Palette:* ${cakeData.theme || 'Open to design ideas'}
💰 *Budget Range:* ${cakeData.budget}

${cakeData.inspirationUrl ? `🔗 *Inspiration Reference Link:* ${cakeData.inspirationUrl}\n` : ''}
${cakeData.notes ? `📝 *Special Design Notes / Inscription:* "${cakeData.notes}"\n\n` : ''}
_Kindly provide a consultation quote and verify bakery calendar availability. Thank you!_`;
}

/**
 * Formats contact message into WhatsApp message
 */
export function generateContactWhatsAppMessage(contactData) {
  return `💬 *GENERAL ENQUIRY — CRUMB & BLOOM*
----------------------------------------
Hello Crumb & Bloom,

👤 *Name:* ${contactData.fullName}
📞 *Contact:* ${contactData.phone || contactData.email || 'Not provided'}
${contactData.subject ? `📌 *Subject:* ${contactData.subject}\n` : ''}
📝 *Message:*
"${contactData.message}"

_Sent via website contact form._`;
}

