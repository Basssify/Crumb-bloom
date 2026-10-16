// Form validation utilities

/**
 * Validate phone number format (accepts Nigerian and international styles)
 */
export function isValidPhone(phone) {
  if (!phone) return false;
  // Strip spaces, dashes, parentheses, plus
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  return cleaned.length >= 10 && /^\d+$/.test(cleaned);
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Check if a date string (YYYY-MM-DD) is not in the past.
 * Orders must be today or future.
 */
export function isNotPastDate(dateString) {
  if (!dateString) return false;
  const target = new Date(dateString);
  if (isNaN(target.getTime())) return false;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Set target to midnight local
  const targetDateOnly = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return targetDateOnly >= today;
}

/**
 * Get min date string for HTML date input (YYYY-MM-DD for today)
 */
export function getTodayDateString(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

/**
 * Validate checkout form
 */
export function validateCheckoutForm(form) {
  const errors = {};

  if (!form.fullName || form.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name (at least 3 characters).';
  }

  if (!form.phone || !isValidPhone(form.phone)) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.';
  }

  if (form.email && !isValidEmail(form.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (form.deliveryOption === 'delivery') {
    if (!form.address || form.address.trim().length < 6) {
      errors.address = 'Please provide a delivery street address.';
    }
    if (!form.area || !form.area.trim()) {
      errors.area = 'Please select or enter your delivery area/city.';
    }
  }

  if (!form.deliveryDate) {
    errors.deliveryDate = 'Please select a preferred delivery/pickup date.';
  } else if (!isNotPastDate(form.deliveryDate)) {
    errors.deliveryDate = 'The chosen date cannot be in the past.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate custom cake enquiry form
 */
export function validateCustomCakeForm(form) {
  const errors = {};

  if (!form.fullName || form.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name.';
  }

  if (!form.phone || !isValidPhone(form.phone)) {
    errors.phone = 'Please enter a valid WhatsApp phone number for your quote.';
  }

  if (form.email && !isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.occasion || !form.occasion.trim()) {
    errors.occasion = 'Please select the event occasion.';
  }

  if (!form.flavour || !form.flavour.trim()) {
    errors.flavour = 'Please choose a primary cake flavour.';
  }

  if (!form.servingSize || !form.servingSize.trim()) {
    errors.servingSize = 'Please specify estimated guests / cake size.';
  }

  if (!form.eventDate) {
    errors.eventDate = 'Please provide your event date.';
  } else if (!isNotPastDate(form.eventDate)) {
    errors.eventDate = 'Event date cannot be in the past.';
  }

  if (!form.budget || !form.budget.trim()) {
    errors.budget = 'Please select an approximate budget range in Naira.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate contact message form
 */
export function validateContactForm(form) {
  const errors = {};

  if (!form.fullName || form.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name.';
  }

  if (!form.email && !form.phone) {
    errors.contact = 'Please provide at least a phone or email so we can reply.';
  }

  if (form.email && !isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (form.phone && !isValidPhone(form.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Please provide your message or question (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

