'use client';

import { useState } from 'react';
import { ArrowRight, LayoutDashboard, ShoppingBag, ShoppingCart, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screens = [
  { id: 'catalog', label: 'Catalog', title: 'Responsive product discovery', src: '/images/pocket-products.png', crop: '52px', icon: ShoppingBag, description: 'Search, sorting, filters, stock states and product cards adapt from desktop to tablet and mobile.' },
  { id: 'product', label: 'Product', title: 'Product decisions on a small screen', src: '/images/pocket-details.png', crop: '50px', icon: Smartphone, description: 'Product media, color selection, ratings, stock and related products stay readable on mobile.' },
  { id: 'cart', label: 'Cart', title: 'A checkout path that respects inventory', src: '/images/pocket-cart.png', crop: '50px', icon: ShoppingCart, description: 'Quantity controls, coupon handling and stock limits carry the customer from selection to checkout.' },
  { id: 'admin', label: 'Admin', title: 'The operational side of the store', src: '/images/pocket-admin.png', crop: '0px', icon: LayoutDashboard, description: 'Protected administration routes cover products, categories, orders, customers and coupons.' },
] as const;

export function PocketShowcase() {
  const [selected, setSelected] = useState<(typeof screens)[number]['id']>('catalog');
  const screen = screens.find(item => item.id === selected) ?? screens[0];
  const Icon = screen.icon;
  return <section className="pocket-showcase" aria-labelledby="pocket-showcase-heading">
    <div className="showcase-intro"><div><span className="eyebrow">REAL PROJECT CAPTURE</span><h2 id="pocket-showcase-heading">Follow the store from browsing to operations.</h2></div><p>These screens come from the working React client. The products and dashboard numbers shown are local development data.</p></div>
    <div className="showcase-tabs" role="tablist" aria-label="Pocket Shop screens">{screens.map(item => <Button key={item.id} role="tab" aria-selected={selected === item.id} variant="ghost" onClick={() => setSelected(item.id)}><item.icon size={16}/>{item.label}</Button>)}</div>
    <div className={`showcase-view showcase-${screen.id}`} role="tabpanel">
      <figure className="screen-frame"><div className="screen-browser"><span/><span/><span/><small>pocket-shop / {screen.id}</small></div><div className="screen-crop" style={{'--screen-crop': `-${screen.crop}`} as React.CSSProperties}><img src={screen.src} alt={`${screen.label} screen from the Pocket Shop React application`} loading="lazy" /></div></figure>
      <div className="showcase-copy"><Icon size={24}/><span className="eyebrow">{screen.label.toUpperCase()} VIEW</span><h3>{screen.title}</h3><p>{screen.description}</p><div className="showcase-flow"><span>React interface</span><ArrowRight size={15}/><span>Laravel API</span><ArrowRight size={15}/><span>MySQL</span></div></div>
    </div>
    <div className="proof-row"><article><strong>9</strong><span>responsive routes checked without horizontal overflow</span></article><article><strong>2</strong><span>customer clients sharing the same commerce backend: web and Flutter</span></article><article><strong>3</strong><span>layers connected across interface, API and database</span></article></div>
  </section>;
}
