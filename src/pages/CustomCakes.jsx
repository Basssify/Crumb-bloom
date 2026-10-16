import React, { useState } from 'react';
import { Sparkles, Calendar, Heart, ShieldCheck, ExternalLink, HelpCircle, AlertCircle, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { validateCustomCakeForm, getTodayDateString } from '../utils/validation';
import { generateCustomCakeWhatsAppMessage } from '../utils/whatsapp';
import WhatsAppModal from '../components/WhatsAppModal';
import ImageWithFallback from '../components/ImageWithFallback';

export default function CustomCakes() {
  const minDate = getTodayDateString(2); // Minimum 48 hours notice

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occasion: 'Birthday Celebration',
    flavour: 'Rich Valrhona Chocolate Fudge',
    servingSize: '8-inch Standard (18–20 servings)',
    filling: 'Belgian Chocolate Ganache & Salted Caramel',
    frosting: 'Smooth Swiss Meringue Buttercream',
    theme: '',
    eventDate: '',
    requiredDate: '',
    budget: '₦40,000 – ₦65,000',
    inspirationUrl: '',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [modalState, setModalState] = useState({ isOpen: false, message: '' });

  const exampleCakes = [
    {
      title: 'Botanical Blush Tiered Wedding Cake',
      occasion: 'Weddings & Anniversaries',
      image: '/images/cake-tiered.jpg',
      description: 'Two-tier ivory buttercream with hand-pressed seasonal flowers and brushed edible gold leaf.'
    },
    {
      title: 'Decadent Dark Ganache Drip',
      occasion: 'Milestone Birthdays',
      image: '/images/cake-chocolate-fudge-commons.jpg',
      description: 'Single tier 8" Valrhona chocolate cake adorned with French macarons, blackberries, and chocolate shards.'
    },
    {
      title: 'Pastel Dream Cloud Cake',
      occasion: 'Baby Showers & Graduations',
      image: '/images/cake-strawberry-shortcake.jpg',
      description: 'Soft pink and cream textured palette knife frosting with fresh strawberries and vanilla bean rosettes.'
    }
  ];

  const occasions = [
    'Birthday Celebration',
    'Wedding Reception',
    'Anniversary',
    'Graduation Celebration',
    'Baby Shower / Gender Reveal',
    'Bridal Shower',
    'Corporate Gala / Brand Launch',
    'Other Intimate Milestone'
  ];

  const flavours = [
    'Rich Valrhona Chocolate Fudge',
    'Madagascar Bourbon Vanilla Bean',
    'Southern Red Velvet with Cream Cheese',
    'Meyer Lemon Zest & Berry Swirl',
    'Brown Butter Salted Caramel',
    'Pistachio Rose Water Sponge',
    'Marble (Chocolate & Vanilla Swirl)'
  ];

  const sizes = [
    '6-inch Mini Tier (Feeds 10–12)',
    '8-inch Standard (Feeds 18–20)',
    '10-inch Party Tier (Feeds 28–30)',
    '2-Tier Petite (Feeds 35–40)',
    '2-Tier Grand Celebration (Feeds 55–65)',
    '3-Tier Signature Wedding (Feeds 90–110)'
  ];

  const fillings = [
    'Belgian Chocolate Ganache & Salted Caramel',
    'Madagascar Vanilla Mousseline',
    'Homemade Raspberry & Strawberry Compote',
    'Tangy Passionfruit Curd',
    'Espresso Mascarpone Cream',
    'Baker’s Custom Recommendation'
  ];

  const frostings = [
    'Smooth Swiss Meringue Buttercream',
    'Textured Rustic Palette Knife Finish',
    'Semi-Naked Minimalist Scrape',
    'Velvety Cream Cheese Frosting',
    'Luxe Rolled Fondant Presentation'
  ];

  const budgetRanges = [
    '₦30,000 – ₦45,000 (Single Tier)',
    '₦45,000 – ₦70,000 (Detailed Single Tier / Petite 2-Tier)',
    '₦70,000 – ₦120,000 (2-Tier Bespoke / Sugar Florals)',
    '₦120,000 – ₦250,000+ (Multi-Tier Wedding & Grand Showpieces)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = validateCustomCakeForm(formData);
    if (!isValid) {
      setFormErrors(errors);
      // Scroll to first error
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }

    // Build the formatted WhatsApp message
    const formattedMessage = generateCustomCakeWhatsAppMessage(formData);

    setModalState({
      isOpen: true,
      message: formattedMessage
    });
  };

  return (
    <div className="custom-cakes-page" style={{ paddingBottom: '6rem' }}>
      {/* 1. HERO SECTION */}
      <section 
        style={{
          backgroundColor: '#FAF6F0',
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#FFFFFF',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.82rem',
            color: 'var(--accent-caramel)',
            fontWeight: 600,
            marginBottom: '1rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Sparkles size={14} />
            <span>Crumb & Bloom Bespoke Cake Atelier</span>
          </div>

          <h1 style={{ marginBottom: '1rem' }}>Bespoke Celebration Cakes</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Every celebration has a rhythm, a memory, and a feeling. We design custom tiered cakes that taste even more extraordinary than they look. Submit your vision below for a direct consultation quote.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--accent-blush-light)',
            color: 'var(--accent-blush-dark)',
            padding: '0.55rem 1.15rem',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.84rem',
            fontWeight: 600
          }}>
            <Calendar size={15} />
            <span>Kindly note: Custom cakes require at least 48 to 72 hours advance booking</span>
          </div>
        </div>
      </section>

      {/* 2. GALLERY OF EXAMPLE CAKES */}
      <section className="section-tight" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Design Portfolio</span>
            <h2 className="section-title">Inspiration From Our Past Commissions</h2>
            <p className="section-subtitle">
              Browse examples of custom finishes, sugar blooms, and sculptural silhouettes.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {exampleCakes.map((cake, idx) => (
              <div 
                key={idx}
                className="card-base"
                style={{
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <ImageWithFallback
                  src={cake.image}
                  alt={cake.title}
                  aspectRatio="4/3"
                />
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-caramel)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {cake.occasion}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                    {cake.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {cake.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CUSTOM CAKE CONSULTATION BUILDER FORM */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-eyebrow">Interactive Consultation</span>
            <h2 className="section-title">Design Your Dream Cake</h2>
            <p className="section-subtitle">
              Share your preferences and event details. We will calculate estimated pricing and verify baker availability via WhatsApp.
            </p>
          </div>

          {/* Form Notice Alert */}
          <div 
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)'
            }}
          >
            <ShieldCheck size={20} color="var(--accent-caramel)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Order Confirmation Policy:</strong> Submitting this design enquiry prepares a detailed WhatsApp message for our lead cake artist. Custom orders require mutual date confirmation, design approval, and invoice payment before they are officially scheduled into our baking calendar.
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="card-base"
            style={{
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              backgroundColor: '#FFFFFF'
            }}
          >
            {/* Step 1: Occasion & Dates */}
            <h3 style={{ fontSize: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--accent-caramel)', color: '#FFFFFF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
              Event Details & Timeline
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">
                  Celebration Occasion <span className="req">*</span>
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="form-select"
                >
                  {occasions.map(occ => <option key={occ} value={occ}>{occ}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Event Date <span className="req">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  min={minDate}
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`form-input ${formErrors.eventDate ? 'error' : ''}`}
                />
                {formErrors.eventDate && (
                  <span className="form-error"><AlertCircle size={13} /> {formErrors.eventDate}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Required Delivery / Collection Date
                </label>
                <input
                  type="date"
                  name="requiredDate"
                  min={minDate}
                  value={formData.requiredDate}
                  onChange={handleChange}
                  className="form-input"
                />
                <span className="form-hint">Usually same day or day before event</span>
              </div>
            </div>

            {/* Step 2: Flavours, Sizes & Styling */}
            <h3 style={{ fontSize: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', margin: '2rem 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--accent-caramel)', color: '#FFFFFF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
              Flavours, Size & Finish
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">
                  Estimated Serving Size / Tiers <span className="req">*</span>
                </label>
                <select
                  name="servingSize"
                  value={formData.servingSize}
                  onChange={handleChange}
                  className="form-select"
                >
                  {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Primary Cake Flavour <span className="req">*</span>
                </label>
                <select
                  name="flavour"
                  value={formData.flavour}
                  onChange={handleChange}
                  className="form-select"
                >
                  {flavours.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Gourmet Filling
                </label>
                <select
                  name="filling"
                  value={formData.filling}
                  onChange={handleChange}
                  className="form-select"
                >
                  {fillings.map(fil => <option key={fil} value={fil}>{fil}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Frosting & Exterior Style
                </label>
                <select
                  name="frosting"
                  value={formData.frosting}
                  onChange={handleChange}
                  className="form-select"
                >
                  {frostings.map(fr => <option key={fr} value={fr}>{fr}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">
                  Estimated Budget Range in Naira <span className="req">*</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                >
                  {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Theme & Colour Palette
                </label>
                <input
                  type="text"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  placeholder="e.g. Sage green, ivory, blush with gold accents"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Inspiration Image Link (Pinterest, Instagram or Cloud URL)
              </label>
              <input
                type="url"
                name="inspirationUrl"
                value={formData.inspirationUrl}
                onChange={handleChange}
                placeholder="https://pinterest.com/pin/... or image URL"
                className="form-input"
              />
              <span className="form-hint">
                Provide any web link to an inspiration photo you love (optional).
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">
                Additional Design Notes / Cake Inscription
              </label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Include custom piping messages (e.g. 'Happy 30th Funke'), floral preferences, or dietary requirements..."
                className="form-textarea"
              />
            </div>

            {/* Step 3: Contact Details */}
            <h3 style={{ fontSize: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', margin: '2rem 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--accent-caramel)', color: '#FFFFFF', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
              Your Contact Information
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div className="form-group">
                <label className="form-label">
                  Your Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Chioma Nwosu"
                  className={`form-input ${formErrors.fullName ? 'error' : ''}`}
                />
                {formErrors.fullName && (
                  <span className="form-error"><AlertCircle size={13} /> {formErrors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  WhatsApp Phone Number <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0803 123 4567"
                  className={`form-input ${formErrors.phone ? 'error' : ''}`}
                />
                {formErrors.phone && (
                  <span className="form-error"><AlertCircle size={13} /> {formErrors.phone}</span>
                )}
                <span className="form-hint">Used for sending design sketches & consultation quotes</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. chioma@example.com"
                  className={`form-input ${formErrors.email ? 'error' : ''}`}
                />
                {formErrors.email && (
                  <span className="form-error"><AlertCircle size={13} /> {formErrors.email}</span>
                )}
              </div>
            </div>

            {/* Submission Button */}
            <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <button 
                type="submit" 
                className="btn btn-secondary btn-lg"
                style={{ minWidth: '280px', margin: '0 auto' }}
              >
                <Sparkles size={18} />
                <span>Submit Custom Cake Enquiry &rarr;</span>
              </button>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                Prepares a complete WhatsApp consultation dispatch. No payment required upfront.
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* WhatsApp Preview & Dispatch Modal */}
      <WhatsAppModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, message: '' })}
        messageText={modalState.message}
        title="Custom Cake Consultation Ready"
        subtitle="Review your cake specification before dispatching to our WhatsApp studio desk"
      />
    </div>
  );
}
