import { Link, Route, Routes } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider, useCart } from './context/CartContext';
import Cart from './pages/Cart';
import CustomCakes from './pages/CustomCakes';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';

function NotFound() {
  return (
    <section className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
      <p className="section-eyebrow">Fresh from the oven</p>
      <h1 style={{ marginBottom: '1rem' }}>This page isn&apos;t on today&apos;s menu.</h1>
      <p style={{ margin: '0 auto 2rem', maxWidth: '34rem' }}>
        The page may have moved. Head back to the bakery and explore our latest bakes.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </section>
  );
}

function AppContent() {
  const { toast, hideToast } = useCart();

  return (
    <div className="app-container">
      <AnnouncementBar />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/custom-cakes" element={<CustomCakes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {toast.visible && (
        <div className={`toast-banner ${toast.type}`} role="status" aria-live="polite">
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={hideToast}
            aria-label="Dismiss notification"
            style={{ color: 'inherit', background: 'none', border: 0, cursor: 'pointer', fontSize: '1.25rem' }}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
