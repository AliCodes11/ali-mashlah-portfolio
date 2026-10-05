'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Database,
  LayoutDashboard,
  Maximize2,
  Monitor,
  Smartphone,
  X,
} from 'lucide-react';

type Surface = 'web' | 'admin' | 'mobile';
type Filter = 'all' | Surface;

type PocketScreen = {
  id: string;
  surface: Surface;
  title: string;
  detail: string;
  src: string;
  portrait?: boolean;
};

const screens: PocketScreen[] = [
  { id: 'web-home', surface: 'web', title: 'Storefront home', detail: 'Discovery, search, categories, and a real featured product.', src: '/images/pocket-shop/web/storefront-home.png' },
  { id: 'web-catalog', surface: 'web', title: 'Product catalog', detail: 'Search, sorting, categories, stock, and discounts.', src: '/images/pocket-shop/web/product-catalog.png' },
  { id: 'web-product', surface: 'web', title: 'Product details', detail: 'Media, variants, stock, quantity, and purchase actions.', src: '/images/pocket-shop/web/product-details.png' },
  { id: 'web-cart', surface: 'web', title: 'Shopping cart', detail: 'Shared products, color variants, coupons, and totals.', src: '/images/pocket-shop/web/shopping-cart.png' },
  { id: 'web-checkout', surface: 'web', title: 'Checkout', detail: 'Address, delivery, payment, and order review.', src: '/images/pocket-shop/web/checkout.png' },
  { id: 'web-success', surface: 'web', title: 'Order confirmation', detail: 'A complete handoff from purchase to tracking.', src: '/images/pocket-shop/web/order-success.png' },
  { id: 'web-tracking', surface: 'web', title: 'Order tracking', detail: 'A visible timeline for the customer order state.', src: '/images/pocket-shop/web/order-tracking.png' },
  { id: 'web-favorites', surface: 'web', title: 'Customer favorites', detail: 'Saved in-stock products for quick return.', src: '/images/pocket-shop/web/customer-favorites.png' },
  { id: 'web-wishlist', surface: 'web', title: 'Restock wishlist', detail: 'Out-of-stock products kept for later.', src: '/images/pocket-shop/web/customer-wishlist.png' },
  { id: 'web-profile', surface: 'web', title: 'Customer profile', detail: 'Account, contact, address, and password controls.', src: '/images/pocket-shop/web/customer-profile.png' },
  { id: 'web-login', surface: 'web', title: 'Customer sign in', detail: 'A focused entry point into saved customer data.', src: '/images/pocket-shop/web/customer-login.png' },
  { id: 'web-register', surface: 'web', title: 'Customer registration', detail: 'Account creation with profile information.', src: '/images/pocket-shop/web/customer-register.png' },

  { id: 'admin-dashboard', surface: 'admin', title: 'Operations dashboard', detail: '118 products, order revenue, status, and stock signals.', src: '/images/pocket-shop/admin/dashboard.png' },
  { id: 'admin-products', surface: 'admin', title: 'Product management', detail: 'Inventory, pricing, availability, and featured state.', src: '/images/pocket-shop/admin/products.png' },
  { id: 'admin-orders', surface: 'admin', title: 'Order management', detail: 'Customer orders, payment, line items, and status.', src: '/images/pocket-shop/admin/orders.png' },
  { id: 'admin-customers', surface: 'admin', title: 'Customer management', detail: 'Accounts, activity state, and customer orders.', src: '/images/pocket-shop/admin/customers.png' },
  { id: 'admin-categories', surface: 'admin', title: 'Category management', detail: 'Catalog structure and category availability.', src: '/images/pocket-shop/admin/categories.png' },
  { id: 'admin-coupons', surface: 'admin', title: 'Offers and coupons', detail: 'Discount rules, limits, dates, and live offers.', src: '/images/pocket-shop/admin/coupons.png' },
  { id: 'admin-login', surface: 'admin', title: 'Protected admin sign in', detail: 'A separate route for the operational workspace.', src: '/images/pocket-shop/admin/admin-login.png' },

  { id: 'mobile-home', surface: 'mobile', title: 'Flutter storefront', detail: 'Categories, offers, benefits, and product discovery.', src: '/images/pocket-shop/mobile/storefront-home.png', portrait: true },
  { id: 'mobile-catalog', surface: 'mobile', title: 'Mobile product catalog', detail: 'The same live product records in a phone-first grid.', src: '/images/pocket-shop/mobile/product-catalog.png', portrait: true },
  { id: 'mobile-product', surface: 'mobile', title: 'Mobile product details', detail: 'Real product photography, stock, and purchase controls.', src: '/images/pocket-shop/mobile/product-details.png', portrait: true },
  { id: 'mobile-cart', surface: 'mobile', title: 'Mobile cart', detail: 'The same two products and total shown by the web client.', src: '/images/pocket-shop/mobile/shopping-cart.png', portrait: true },
  { id: 'mobile-saved', surface: 'mobile', title: 'Saved products', detail: 'Favorites and wishlist data attached to the account.', src: '/images/pocket-shop/mobile/favorites-wishlist.png', portrait: true },
  { id: 'mobile-orders', surface: 'mobile', title: 'Order history', detail: 'A completed order from the shared Laravel backend.', src: '/images/pocket-shop/mobile/order-history.png', portrait: true },
  { id: 'mobile-profile', surface: 'mobile', title: 'Mobile profile', detail: 'The same customer identity used on the web.', src: '/images/pocket-shop/mobile/customer-profile.png', portrait: true },
  { id: 'mobile-settings', surface: 'mobile', title: 'Application settings', detail: 'Account, security, language, and appearance controls.', src: '/images/pocket-shop/mobile/settings.png', portrait: true },
  { id: 'mobile-login', surface: 'mobile', title: 'Mobile sign in', detail: 'Authentication for the Flutter customer client.', src: '/images/pocket-shop/mobile/customer-login.png', portrait: true },
  { id: 'mobile-onboarding', surface: 'mobile', title: 'Mobile onboarding', detail: 'A concise introduction before shopping or signing in.', src: '/images/pocket-shop/mobile/onboarding.png', portrait: true },
];

const featured = [
  { id: 'web-home', label: 'React storefront', icon: Monitor, note: 'Customer discovery and purchase' },
  { id: 'admin-dashboard', label: 'React admin', icon: LayoutDashboard, note: 'Catalog and order operations' },
  { id: 'mobile-product', label: 'Flutter mobile', icon: Smartphone, note: 'Phone-first shopping client' },
] as const;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All 29' },
  { id: 'web', label: 'Storefront 12' },
  { id: 'admin', label: 'Admin 7' },
  { id: 'mobile', label: 'Mobile 10' },
];

const surfaceLabel: Record<Surface, string> = {
  web: 'React storefront',
  admin: 'React admin',
  mobile: 'Flutter mobile',
};

export function PocketShowcase() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeId, setActiveId] = useState<string | null>(null);
  const filteredScreens = useMemo(
    () => filter === 'all' ? screens : screens.filter((screen) => screen.surface === filter),
    [filter],
  );
  const activeIndex = activeId ? filteredScreens.findIndex((screen) => screen.id === activeId) : -1;
  const activeScreen = activeIndex >= 0 ? filteredScreens[activeIndex] : null;

  const move = (direction: number) => {
    if (!filteredScreens.length || activeIndex < 0) return;
    const next = (activeIndex + direction + filteredScreens.length) % filteredScreens.length;
    setActiveId(filteredScreens[next].id);
  };

  useEffect(() => {
    if (!activeScreen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return <section className="pocket-showcase" aria-labelledby="pocket-showcase-heading">
    <div className="showcase-intro">
      <div><span className="eyebrow">WORKING PROJECT / REAL DATA</span><h2 id="pocket-showcase-heading">One product, shown from every side.</h2></div>
      <p>I ran the customer website, administration dashboard, and Flutter client against the same Laravel API and MySQL database. Every image below comes from that working local environment.</p>
    </div>

    <div className="pocket-proof-row" aria-label="Pocket Shop project facts">
      <article><strong>118</strong><span>product records in the captured catalog</span></article>
      <article><strong>3</strong><span>connected interfaces for customer and operations work</span></article>
      <article><Database size={22}/><span>one Laravel API and MySQL source of truth</span></article>
    </div>

    <div className="platform-showcase" aria-label="Pocket Shop platform highlights">
      {featured.map((item) => {
        const screen = screens.find((candidate) => candidate.id === item.id)!;
        return <button className={`platform-card platform-${screen.surface}`} key={item.id} onClick={() => { setFilter('all'); setActiveId(item.id); }} type="button">
          <span className="platform-card-label"><item.icon size={17}/><span><strong>{item.label}</strong><small>{item.note}</small></span></span>
          <span className="platform-image"><img src={screen.src} alt={screen.title} loading="eager"/></span>
          <span className="platform-open">Open screen <Maximize2 size={15}/></span>
        </button>;
      })}
    </div>

    <div className="pocket-gallery-heading">
      <div><span className="eyebrow">THE COMPLETE WALKTHROUGH</span><h3>See every captured screen.</h3></div>
      <p>Filter by client, then open any image at full size. The shared customer, products, cart, and order make the connection between the three applications visible.</p>
    </div>

    <div className="pocket-gallery-filters" aria-label="Filter Pocket Shop screenshots">
      {filters.map((item) => <button aria-pressed={filter === item.id} key={item.id} onClick={() => { setFilter(item.id); setActiveId(null); }} type="button">{item.label}</button>)}
    </div>

    <div className="pocket-gallery" aria-live="polite">
      {filteredScreens.map((screen) => <button className={`gallery-screen ${screen.portrait ? 'gallery-screen-portrait' : ''}`} key={screen.id} onClick={() => setActiveId(screen.id)} type="button">
        <span className="gallery-screen-image"><img src={screen.src} alt="" loading="lazy"/></span>
        <span className="gallery-screen-copy"><small>{surfaceLabel[screen.surface]}</small><strong>{screen.title}</strong><span>{screen.detail}</span></span>
        <Maximize2 className="gallery-screen-open" size={17}/>
      </button>)}
    </div>

    {activeScreen && <dialog className="screen-lightbox" aria-label={`${activeScreen.title} screenshot`} open>
      <div className={`screen-lightbox-panel ${activeScreen.portrait ? 'is-portrait' : ''}`}>
        <div className="screen-lightbox-bar">
          <div><small>{surfaceLabel[activeScreen.surface]} · {activeIndex + 1} of {filteredScreens.length}</small><strong>{activeScreen.title}</strong></div>
          <button aria-label="Close screenshot" onClick={() => setActiveId(null)} type="button"><X size={20}/></button>
        </div>
        <div className="screen-lightbox-image"><img src={activeScreen.src} alt={`${activeScreen.title}. ${activeScreen.detail}`}/></div>
        <div className="screen-lightbox-controls">
          <button aria-label="Previous screenshot" onClick={() => move(-1)} type="button"><ArrowLeft size={17}/> Previous</button>
          <p>{activeScreen.detail}</p>
          <button aria-label="Next screenshot" onClick={() => move(1)} type="button">Next <ArrowRight size={17}/></button>
        </div>
      </div>
    </dialog>}
  </section>;
}
