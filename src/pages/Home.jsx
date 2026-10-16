import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Clock, Heart, Cake, Coffee, ShieldCheck } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Home() {
  const location = useLocation();
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (!sectionId) return;

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.hash, location.pathname]);

  const categories = [
    {
      title: 'Celebration Cakes',
      category: 'Celebration Cakes',
      description: 'Handcrafted multi-layered cakes for birthdays, anniversaries & weddings.',
      image: '/images/cake-tiered.jpg',
      badge: 'From ₦22,000'
    },
    {
      title: 'Artisan Doughnuts',
      category: 'Doughnuts',
      description: '24-hour slow-proved brioche dough with crackling gourmet glazes.',
      image: '/images/doughnuts-assorted.jpg',
      badge: 'Box of 6 & 12'
    },
    {
      title: 'French Viennoiserie',
      category: 'Pastries',
      description: 'Laminated with cultured Normandy butter for delicate golden layers.',
      image: '/images/pastry-croissants.jpg',
      badge: 'Fresh Daily 7:30 AM'
    },
    {
      title: 'Gourmet Cupcakes',
      category: 'Cupcakes',
      description: 'Velvety sponges piped with Swiss meringue & cream cheese swirls.',
      image: '/images/cupcakes-chocolate.jpg',
      badge: 'Box of 6'
    },
    {
      title: 'Hearth Loaves & Bread',
      category: 'Bread',
      description: 'Naturally leavened wild sourdough and decadent banana walnut loaves.',
      image: '/images/bread-sourdough.jpg',
      badge: 'Wild Ferment'
    }
  ];

  const instagramShots = [
    {
      url: '/images/cake-chocolate-fudge-commons.jpg',
      caption: 'Rich Belgian chocolate ganache drips fresh from the marble slab'
    },
    {
      url: '/images/pastry-croissants.jpg',
      caption: 'Morning croissants hot out of the deck oven at 7:30 AM'
    },
    {
      url: '/images/cake-caramel.jpg',
      caption: 'Salted caramel crunch cake detail with handcrafted praline'
    },
    {
      url: '/images/doughnuts-assorted.jpg',
      caption: 'Brioche doughnuts resting before Madagascar vanilla glazing'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section 
        className="hero-section"
        style={{
          backgroundColor: '#FAF6F0',
          position: 'relative',
          paddingTop: 'clamp(3rem, 6vw, 6rem)',
          paddingBottom: 'clamp(3.5rem, 7vw, 6.5rem)',
          borderBottom: '1px solid var(--border-light)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Hero Copy */}
            <div style={{ maxWidth: '580px' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--accent-caramel)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <Sparkles size={14} />
                <span>Lagos Artisanal Patisserie & Cake Studio</span>
              </div>

              <h1 
                style={{
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.15
                }}
              >
                A Little Sweetness Goes a Long Way.
              </h1>

              <p 
                style={{
                  fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '2rem'
                }}
              >
                From golden morning viennoiserie baked at dawn to showstopping celebration cakes for life’s grandest milestones. Every bake is handcrafted in Lekki using pure cultured butter, Madagascar vanilla, and unhurried artisanal care.
              </p>

              {/* CTAs */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <Link to="/shop" className="btn btn-primary btn-lg">
                  <span>Shop Our Bakes</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/custom-cakes" className="btn btn-outline btn-lg">
                  <span>Order a Custom Cake</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.75rem',
                  marginTop: '2.5rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid var(--border-medium)',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Award size={18} color="var(--accent-caramel)" />
                  <span>100% Normandy Butter</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Clock size={18} color="var(--accent-caramel)" />
                  <span>Baked Fresh Every Dawn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Heart size={18} color="var(--accent-caramel)" />
                  <span>Custom Bespoke Design</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '8px solid #FFFFFF',
                  position: 'relative',
                  aspectRatio: '4/5'
                }}
              >
                <ImageWithFallback
                  src="/images/cake-tiered.jpg"
                  alt="CRUMB & BLOOM Signature Celebration Cake"
                  aspectRatio="4/5"
                />

                {/* Floating Highlight Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(253, 251, 247, 0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(198, 139, 89, 0.25)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-caramel)', fontWeight: 700 }}>
                      Featured Masterpiece
                    </span>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: 0 }}>
                      Classic Vanilla & Berry Celebration
                    </h4>
                  </div>
                  <Link 
                    to="/product/classic-vanilla-cake" 
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                  >
                    View
                  </Link>
                </div>
              </div>

              {/* Decorative accent blob behind hero */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--accent-blush)',
                  opacity: 0.35,
                  zIndex: -1,
                  filter: 'blur(20px)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HIGHLIGHTS */}
      <section id="story" className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Patisserie Menu</span>
            <h2 className="section-title">Crafted with Precision & Love</h2>
            <p className="section-subtitle">
              Explore our diverse creations, from slow-proved morning breads to decadent celebration desserts.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={`/shop?category=${encodeURIComponent(cat.category)}`}
                className="category-card card-base"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <ImageWithFallback
                    src={cat.image}
                    alt={cat.title}
                    aspectRatio="1/1"
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(32, 18, 11, 0.85)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-pill)'
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1, lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                  <span 
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-caramel)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    Explore Category &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <span className="section-eyebrow">Signature Creations</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
                Fresh From the Oven Today
              </h2>
              <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                Our most celebrated recipes, baked in limited daily batches.
              </p>
            </div>

            <Link to="/shop" className="btn btn-outline">
              <span>View Full Shop Menu ({featuredProducts.length}+)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <ProductGrid products={featuredProducts.slice(0, 8)} />
        </div>
      </section>

      {/* 4. BRAND STORY TEASER */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-eyebrow">Artisanal Heritage</span>
              <h2 className="section-title">
                Handmade Baking, Rooted in Passion & Patience.
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                At Crumb & Bloom, we believe true patisserie cannot be rushed. Every croissant requires three days of gentle lamination to build 27 buttery sheets. Our celebration cake layers are baked with real Madagascar Bourbon vanilla beans and filled with slow-cooked compotes and mousselines.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Founded with a mission to bring world-class French pastry techniques and welcoming warmth to Lagos, we cater to intimate morning rituals and grand celebratory weddings alike.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/#story" className="btn btn-primary">
                  <span>Read Our Full Story</span>
                </Link>
                <Link to="/#gallery" className="btn btn-subtle">
                  <span>View Behind The Scenes</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '4/3'
              }}>
                <ImageWithFallback
                  src="/images/pastry-pain-au-chocolat.jpg"
                  alt="Laminated French Viennoiserie layers"
                  aspectRatio="4/3"
                />
              </div>

              {/* Floating quote card */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '20px',
                backgroundColor: 'var(--bg-dark)',
                color: '#FFFFFF',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                maxWidth: '280px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.92rem', marginBottom: '0.35rem', color: '#FAF6F0' }}>
                  "Patience is our primary ingredient."
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-caramel)', fontWeight: 600 }}>
                  — Head Pastry Chef & Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BESPOKE CELEBRATION CAKES PROMO BANNER */}
      <section 
        className="section"
        style={{
          background: 'linear-gradient(135deg, #2A170F 0%, #1A0D08 100%)',
          color: '#FAF6F0'
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#E8B4B8',
                marginBottom: '0.75rem'
              }}>
                Bespoke Consultations
              </span>
              <h2 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                Planning a Wedding or Milestone Event?
              </h2>
              <p style={{ color: 'rgba(250, 246, 240, 0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Collaborate directly with our design studio. From custom tiered wedding cakes with edible gold and pressed florals to personalized birthday statements, we translate your aesthetic into unforgettable confectionery art.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/custom-cakes" className="btn btn-secondary btn-lg">
                  <Sparkles size={18} />
                  <span>Start Custom Cake Consultation</span>
                </Link>
                <Link to="/#gallery" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                  <span>View Cake Portfolio</span>
                </Link>
              </div>
            </div>

            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(198, 139, 89, 0.3)'
            }}>
              <ImageWithFallback
                src="/images/cake-strawberry-shortcake.jpg"
                alt="Custom celebratory cake with artisanal textures"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. INSTAGRAM-INSPIRED GALLERY PREVIEW */}
      <section id="gallery" className="section-tight" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Studio Glimpse</span>
            <h2 className="section-title">Follow the Aromas</h2>
            <p className="section-subtitle">
              Daily captures straight from our bakery marble counters in Lekki.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}
          >
            {instagramShots.map((shot, idx) => (
              <div 
                key={idx}
                className="card-base"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <ImageWithFallback
                  src={shot.url}
                  alt={shot.caption}
                  aspectRatio="1/1"
                />
                <div style={{
                  padding: '0.85rem',
                  backgroundColor: '#FFFFFF',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--accent-caramel)', display: 'block', marginBottom: '0.2rem' }}>
                    @crumbandbloom.ng
                  </span>
                  {shot.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HONEST NEWSLETTER DEMONSTRATION */}
      <NewsletterSection />
    </div>
  );
}
