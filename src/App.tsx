import React, { useState } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValuesBar } from './components/TrustValuesBar';
import { ProductCatalog } from './components/ProductCatalog';
import { RadiantRefinement } from './components/RadiantRefinement';
import { WatchCollection } from './components/WatchCollection';
import { Testimonials } from './components/Testimonials';
import { InstagramGallery } from './components/InstagramGallery';
import { FAQSection } from './components/FAQSection';
import { ShopPage } from './components/ShopPage';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { BoutiqueBooking } from './components/BoutiqueBooking';
import { CartDrawer } from './components/CartDrawer';
import { Wishlist } from './components/Wishlist';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';

const MainContent: React.FC = () => {
  const { currentPage } = useShop();

  return (
    <main>
      {currentPage === 'home' ? (
        <>
          {/* Section 1: Hero Carousel Section */}
          <Hero />

          {/* Section 2: Icon Boxes Section */}
          <TrustValuesBar />

          {/* Section 3: Product Catalog Section */}
          <ProductCatalog />

          {/* Section 4: "Crafted For Every Special Moment" Section */}
          <RadiantRefinement />

          {/* Section 5: Signature Watch Product Cards Section */}
          <WatchCollection />

          {/* Section 6: Client Reviews & Testimonials Section */}
          <Testimonials />

          {/* Section 7: Instagram Gallery Showcase Section */}
          <InstagramGallery />

          {/* Section 8: Frequently Asked Questions (FAQ) Section */}
          <FAQSection />
        </>
      ) : (
        /* Dedicated Shop Page with Category Filters & Search */
        <ShopPage />
      )}
    </main>
  );
};

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ShopProvider>
      {/* Site Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible', minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Header / Navbar */}
        <Navbar />

        {/* Dynamic Main Page Content */}
        <MainContent />

        {/* Luxury Footer */}
        <Footer />

        {/* Global Modals & Overlays */}
        <ProductModal />
        <BoutiqueBooking />
        <CartDrawer />
        <Wishlist />
        <SearchModal />
        <Toast />
      </div>
    </ShopProvider>
  );
};

export default App;
