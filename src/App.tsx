/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Truck, 
  ShieldCheck, 
  Quote, 
  Globe, 
  Share, 
  Camera,
  Send,
  Filter,
  ShoppingBag,
  Banknote,
  CreditCard,
  Check,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { PRODUCTS, type Product } from './types';

// --- Components ---

const Navbar = ({ onNavigate, cartCount }: { onNavigate: (page: string) => void, cartCount: number }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
    <div className="flex justify-between items-center px-8 h-20 w-full max-w-[1440px] mx-auto">
      <div 
        className="text-2xl font-black tracking-tighter text-black uppercase font-headline cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        Twinnies
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {['Men', 'Women', 'Kids', 'Sports', 'Casual'].map((item) => (
          <a 
            key={item}
            className="text-neutral-500 hover:text-black transition-colors font-headline font-bold tracking-tight cursor-pointer"
            onClick={() => onNavigate('listing')}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative hidden lg:block">
          <input 
            className="bg-surface-container border-none rounded-full px-6 py-2 text-sm w-64 focus:ring-2 focus:ring-neon transition-all outline-none" 
            placeholder="Search sneakers..." 
            type="text"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
        </div>
        <button className="hover:scale-105 transition-transform duration-200">
          <Heart className="text-neutral-900 w-6 h-6" />
        </button>
        <button 
          className="hover:scale-105 transition-transform duration-200 relative"
          onClick={() => onNavigate('checkout')}
        >
          <ShoppingCart className="text-neutral-900 w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-neon text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        </button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-black text-white w-full pt-24 pb-12 border-t border-neutral-800">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1440px] mx-auto mb-16">
      <div className="space-y-6">
        <div className="text-neon font-black text-2xl tracking-tighter uppercase font-headline">
          Twinnies
        </div>
        <p className="text-neutral-400 leading-relaxed">
          Elevating footwear culture in Sri Lanka through innovation and premium design.
        </p>
        <div className="flex space-x-4">
          <a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neon hover:text-black transition-colors" href="#">
            <span className="text-sm">IG</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neon hover:text-black transition-colors" href="#">
            <span className="text-sm">FB</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neon hover:text-black transition-colors" href="#">
            <span className="text-sm">TW</span>
          </a>
        </div>
      </div>
      <div>
        <h6 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Shop</h6>
        <ul className="space-y-4">
          {["Men's Collection", "Women's Collection", "Kid's Footwear", "Sports Gear", "New Drops"].map((item) => (
            <li key={item}><a className="text-neutral-400 hover:text-white transition-colors" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h6 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Support</h6>
        <ul className="space-y-4 font-body text-sm antialiased">
          {["Store Locator", "Size Guide", "Return Policy", "Contact Us", "Careers"].map((item) => (
            <li key={item}><a className="text-neutral-400 hover:text-white transition-colors hover:translate-x-1 inline-block" href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h6 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Join the Club</h6>
        <p className="text-neutral-400 mb-6 text-sm">Subscribe for early access to limited drops and exclusive offers.</p>
        <div className="flex">
          <input className="bg-neutral-900 border-none rounded-l-full px-6 py-3 w-full text-sm focus:ring-1 focus:ring-neon outline-none" placeholder="Email Address" type="email" />
          <button className="bg-neon text-black px-4 rounded-r-full font-bold">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="px-8 max-w-[1440px] mx-auto border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-neutral-500 text-xs font-body antialiased">
        © 2024 Twinnies Footwear Sri Lanka. All Rights Reserved.
      </p>
      <div className="flex space-x-8 text-neutral-500 text-xs">
        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
        <a className="hover:text-white transition-colors" href="#">Cookies</a>
      </div>
    </div>
  </footer>
);

const ProductCard = ({ product, onClick }: { product: Product, onClick: () => void }) => (
  <div className="group cursor-pointer" onClick={onClick}>
    <div className="aspect-[4/5] rounded-lg bg-surface-container-highest relative overflow-hidden mb-6">
      <img 
        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
        src={product.image} 
        alt={product.name}
        referrerPolicy="no-referrer"
      />
      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-neutral-900" />
      </button>
    </div>
    <div className="flex justify-between items-start">
      <div>
        {product.tag && (
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{product.tag}</p>
        )}
        <h4 className="font-headline text-lg font-bold">{product.name}</h4>
        <p className="text-neutral-500 text-sm">{product.category}</p>
      </div>
      <p className="font-bold text-lg">LKR {product.price.toLocaleString()}</p>
    </div>
  </div>
);

// --- Pages ---

const HomePage = ({ onProductClick, onNavigate }: { onProductClick: (p: Product) => void, onNavigate: (page: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="space-y-24"
  >
    {/* Hero */}
    <section className="relative h-[870px] flex items-center overflow-hidden px-8 max-w-[1440px] mx-auto">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent z-10"></div>
        <img 
          alt="Hero Banner" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEgcFwSA25rlJ6ilWXEAqh3NJW4BqCYhg-qP5myWwFQgW8J74RCHtgfGblCTMrcmkKRiinMRPyntEyrnaopH7D4j8uPDeonQtPDoC489yzQYTItlRu45gvQXpjmxybqhg14jQ6hv_WqCLDcqnzwWkTZ5KzhY--umXg-WTOsan1gtggedliC77-we5tFi87EQuIgxiLb89ymCwWj9OCIXkT4KKo9ZRAIRUwFgooURhZZJ1HL3MmGd9GsvXnN99Ahpuw5IONUGhzFwwD"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-20 w-full lg:w-1/2">
        <span className="bg-neon text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block animate-pulse">Limited Drop</span>
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none text-neutral-900 mb-8">
          Step Into <br/>
          <span className="text-secondary drop-shadow-sm">Your Style</span>
        </h1>
        <p className="text-neutral-500 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
          Engineered for performance, curated for the street. Discover the new collection that redefines Colombo's urban footwear scene.
        </p>
        <div className="flex items-center space-x-6">
          <button 
            className="bg-neon text-black font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-neon/20"
            onClick={() => onNavigate('listing')}
          >
            Shop Now
          </button>
          <button className="flex items-center space-x-2 text-neutral-900 font-bold group">
            <span>View Collection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="md:col-span-2 lg:col-span-2 aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOp_GZS_seTStgGRhF3O4HLFYEpSZd1nKDecwkCr-9L6S4rRvk1ukck2fhZ0PWjT-dPaCoGX9y6Fyp7umOI_St8oRWTyEFASwxN2CrkltnziXMiqXSE0lh7sY1DlNf1e84SgujDH-s8tQWOUiQeorktk6p_nbzZ2TXOzozbmZPhxtoYQhQfS3934UWadAdsZNd-CxUlfSK5WYSlszHKGERb94kLDNEacWTd_6Lsc3X8T5Il36VN7OqHKSEAAgW3vDmME-EahrD5gMd" alt="Men" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
            <h3 className="text-white font-headline text-3xl font-bold">Men</h3>
            <p className="text-white/80 text-sm">Performance & Lifestyle</p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-2 aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBF4KAZ04ND1JQNuaa8HMiYCR2i6saeFiDix_mavr1AP0ayFSmG5tqnrAygYvWf6CqWCkJFOctEajpFdtAuQiErpZNHpQtBfJnb-ADfGqaGYaasqW2rJ3yPd1wWnt_xbs9QAL2BwOC7CvxSC7B09F9FtteXXhCvkxdwLmi17wJRxmOIB2y6zMvrR-6D-hvMQlOPFzYMjZhsI7FnNeQJ8w30Y8Vf7P2zaQ1dVN7EAOU0Ps2nvWK5aeHP0wEIGpCCiKx5115SV27O1-n" alt="Women" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
            <h3 className="text-white font-headline text-3xl font-bold">Women</h3>
            <p className="text-white/80 text-sm">Elegant & Bold</p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-2 aspect-[4/5] md:aspect-auto md:row-span-2 rounded-lg overflow-hidden relative group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqDsHgNknxXePl65Po13d_51C_sccgLYoClAlqpMMchW73gzvr6li_0oGvj5E3cJ3B8KZFljeRuNc4VszmF7FnNW2wpUsaDbQMpCIp8XCdmsIRA7kb3S_ROYz3COKjmHNorLkQQw4B281DA1p8iXEon6Jz8hffX_IOLDSiHmmS3C8FwFi4HoFbso9eOobyy_xZIjxqy-ZfaTYSy12qOU2AVrq_ZRWHSs7CDrkTRvKyltk2FiAY84foJLT1YyH7e8R__VgDlbYFRMp-" alt="Sports" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
            <h3 className="text-white font-headline text-3xl font-bold">Sports</h3>
            <p className="text-white/80 text-sm">Athlete Grade</p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3 h-64 rounded-lg overflow-hidden relative group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd75MuqYvTQQp_UGzNIAGAIL7M1N96PunXORXks59QWCuCHn5WqDwjuYZrTm4AOfXrrQYMw54yXxOUJWmsqEEpaXMgrB6QTSeItX2hrTL7JWLD69O46k2cvfYzuv41Mn-0xLyOSphyoCQzlnrZhhcLoyxwMvKRVtasaGbPHDKQyepAu7lW51PEQoYCNDLWUw-r-qj-KU3RRXkWQc86Kd366uLxPGSj4qFRe_l5z8pqanDdc2KwyTNsDQWAPuYXh1mviF1LRdF9TtgU" alt="Casual" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
            <h3 className="text-white font-headline text-3xl font-bold">Casual</h3>
            <p className="text-white/80 text-sm">Everyday Classics</p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1 h-64 rounded-lg bg-neon flex flex-col items-center justify-center text-center p-6 group cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-4 transition-transform group-hover:-rotate-12">
            <span className="text-2xl">👶</span>
          </div>
          <h3 className="text-black font-headline text-xl font-bold">Kids</h3>
        </div>
      </div>
    </section>

    {/* New Arrivals */}
    <section className="py-12 bg-surface-container-low overflow-hidden">
      <div className="px-8 max-w-[1440px] mx-auto mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-neutral-900">New Arrivals</h2>
          <p className="text-neutral-500 mt-2">The latest heat, fresh from the workshop.</p>
        </div>
        <button 
          className="text-neutral-900 font-bold flex items-center gap-2 hover:opacity-70 transition-opacity"
          onClick={() => onNavigate('listing')}
        >
          View All <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-8 overflow-x-auto px-8 pb-12 hide-scrollbar">
        {PRODUCTS.slice(0, 4).map((product) => (
          <div key={product.id} className="flex-none w-80">
            <ProductCard product={product} onClick={() => onProductClick(product)} />
          </div>
        ))}
      </div>
    </section>

    {/* Promo Banner */}
    <section className="px-8 max-w-[1440px] mx-auto">
      <div className="bg-black rounded-lg overflow-hidden relative min-h-[400px] flex items-center">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWi66lvubjfMqq1bgLIagPC8hbEZn55pdQr5SHN-VtMZgix0q-0cF_Yq51NkaoNBYbCa_ZLKgFsNEenz8i2UsHIauu-kmqAzcYigxAwFPY1BUZ-ToJq6ElzG52-ljrmgOJp6INRSO-IRy-R1znfLFv3LELKFpK7JJNhSILcQmI0Ot4wHSqSONZQ4CYm9YDPZC9Itu8frlYxIFYrW3Ar0o7_aebLzwzhaam1a6a1TShSwql97rM_hkcYDMHc9bpVILfzgK586pK7dVU" 
          alt="Sale"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 px-12 md:px-24 text-white max-w-2xl">
          <h2 className="text-5xl font-black font-headline tracking-tighter mb-4">SEASON FINALE SALE</h2>
          <p className="text-2xl mb-8 font-medium">Up to <span className="text-neon">40% OFF</span> on selected performance gear.</p>
          <button className="bg-neon text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform">
            Claim Discount
          </button>
        </div>
      </div>
    </section>

    {/* Trending */}
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="font-headline text-5xl font-bold tracking-tighter text-neutral-900 mb-6">Trending in <br/>Sri Lanka</h2>
            <p className="text-neutral-500 text-lg mb-8">What Colombo is wearing right now. From beachside casuals to urban night-outs.</p>
            <ul className="space-y-4">
              {[
                { id: '01', name: 'Island Hopper Slides' },
                { id: '02', name: 'Urban Nomad V2' },
                { id: '03', name: 'Colombo Court Low' }
              ].map((item) => (
                <li key={item.id} className="flex items-center gap-4 group cursor-pointer">
                  <span className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center font-bold text-sm">{item.id}</span>
                  <span className="text-lg font-bold group-hover:text-neon transition-colors">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-surface-container group cursor-pointer" onClick={() => onProductClick(PRODUCTS[4])}>
              <div className="aspect-square bg-white rounded-lg mb-6 overflow-hidden relative">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" src={PRODUCTS[4].image} alt={PRODUCTS[4].name} referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-2">{PRODUCTS[4].name}</h4>
              <p className="text-neutral-500 mb-4">{PRODUCTS[4].category}</p>
              <p className="font-bold text-neutral-900 text-xl">LKR {PRODUCTS[4].price.toLocaleString()}</p>
            </div>
            <div className="p-8 rounded-lg bg-surface-container-high md:translate-y-12 group cursor-pointer" onClick={() => onProductClick(PRODUCTS[5])}>
              <div className="aspect-square bg-white rounded-lg mb-6 overflow-hidden relative">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" src={PRODUCTS[5].image} alt={PRODUCTS[5].name} referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-2">{PRODUCTS[5].name}</h4>
              <p className="text-neutral-500 mb-4">{PRODUCTS[5].category}</p>
              <p className="font-bold text-neutral-900 text-xl">LKR {PRODUCTS[5].price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-8 text-center mb-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight">The Walk Of Fame</h2>
        <p className="text-neutral-500 mt-2">What our community says about Twinnies.</p>
      </div>
      <div className="max-w-4xl mx-auto px-8">
        <div className="relative p-12 bg-white rounded-lg shadow-xl shadow-black/5 text-center">
          <div className="text-neon mb-8 flex justify-center">
            <Quote className="w-12 h-12 rotate-180" />
          </div>
          <p className="text-2xl font-medium leading-relaxed mb-8 italic">
            "Finally, a local brand that matches global quality. The comfort of the Velocity Pro is unreal, and they look stunning on the streets of Kandy!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZIhA921PzHKga3p8a_zOXORzbbZI_2Z6IWu9w7cNg-TrvvG0bN3dsvqqdymFhKzGj_XvpjQAPl0j7W_acELOpf9yuE7QolRLIL-3gFlfuC3V8JFkCLeUpjficjN0kbOPXMdmPiPPK0gVewJwD6dfI8xxpo26wdxH8YvSD2MBypGfydADjPT0Jz5RwFNcAYHdU8L8q-Yjtf5WUKU62Hs5ti59EBSzOvdB6lwyoCkiaaVMqnctxMcAHopqwBtow1H9LQCw3NmfDAnWO" alt="User" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <h5 className="font-bold">Dilshan Perera</h5>
              <p className="text-xs text-neutral-500 uppercase tracking-widest">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ListingPage = ({ onProductClick }: { onProductClick: (p: Product) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0 }}
    className="pt-28 pb-20 px-8 max-w-[1440px] mx-auto"
  >
    <header className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="inline-block px-3 py-1 bg-neon text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Limited Drops</span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none text-neutral-900">
            THE <span className="text-neon">Curation</span>
          </h1>
          <p className="mt-4 text-neutral-500 max-w-md font-medium">Explore our premium selection of footwear where high-performance engineering meets Sri Lankan street aesthetics.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-sm">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <select className="bg-transparent border-none focus:ring-0 text-sm font-bold font-headline pr-10 outline-none">
            <option>Sort: Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </header>

    <div className="flex flex-col lg:flex-row gap-12">
      <aside className="hidden lg:block w-72 flex-shrink-0 space-y-10">
        <div>
          <h3 className="font-headline font-bold text-lg mb-4">Category</h3>
          <div className="space-y-3">
            {["Men's Performance", "Women's Lifestyle", "Kids & Junior"].map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="rounded border-neutral-300 text-black focus:ring-black w-5 h-5" />
                <span className="group-hover:text-neon transition-colors font-medium">{cat}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-headline font-bold text-lg mb-4">Size (EU)</h3>
          <div className="grid grid-cols-4 gap-2">
            {[36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
              <button 
                key={size} 
                className={cn(
                  "py-2 text-xs font-bold rounded-lg border transition-all",
                  size === 38 ? "bg-neon border-neon text-black" : "border-neutral-300 hover:border-black"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-headline font-bold text-lg mb-4">Colorway</h3>
          <div className="flex flex-wrap gap-3">
            {['#000000', '#FFFFFF', '#CCFF00', '#2563EB', '#DC2626'].map((color) => (
              <button 
                key={color}
                className={cn(
                  "w-8 h-8 rounded-full border border-neutral-200",
                  color === '#000000' && "ring-2 ring-offset-2 ring-neon"
                )}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
          {/* Duplicate for grid fill */}
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id + '-dup'} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center">
          <p className="text-sm font-bold text-neutral-500 mb-6 uppercase tracking-widest">Showing 12 of 48 drops</p>
          <div className="w-full max-w-xs h-1 bg-neutral-200 rounded-full mb-8 overflow-hidden">
            <div className="w-1/4 h-full bg-neon"></div>
          </div>
          <button className="px-12 py-4 bg-black text-white rounded-full font-black font-headline uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all">
            Discover More
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const DetailPage = ({ product, onAddToCart }: { product: Product, onAddToCart: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 max-w-[1440px] mx-auto px-8"
  >
    <div className="mb-8 flex items-center gap-2 text-sm text-neutral-500">
      <span>Shop</span>
      <ChevronRight className="w-4 h-4" />
      <span>{product.category.split("'")[0]}</span>
      <ChevronRight className="w-4 h-4" />
      <span className="text-black font-semibold">{product.name}</span>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-1 flex flex-row md:flex-col gap-4 order-2 md:order-1">
          {[product.image, product.image, product.image, product.image].map((img, i) => (
            <div key={i} className={cn(
              "w-20 h-24 rounded-lg bg-surface-container overflow-hidden cursor-pointer transition-all",
              i === 0 ? "border-2 border-neon ring-offset-2" : "hover:opacity-80"
            )}>
              <img className="w-full h-full object-cover" src={img} alt="thumb" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="rounded-xl overflow-hidden bg-surface-container relative group">
            <img className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-110" src={product.image} alt={product.name} referrerPolicy="no-referrer" />
            <div className="absolute top-6 left-6">
              <span className="bg-neon text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">New Arrival</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em]">Limited Edition Series</p>
          <h1 className="text-5xl font-headline font-bold tracking-tighter leading-none text-neutral-900">{product.name}</h1>
          <div className="flex items-center gap-4 py-2">
            <div className="flex text-neon">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={cn("w-4 h-4", s <= Math.floor(product.rating) ? "fill-current" : "")} />
              ))}
            </div>
            <span className="text-sm text-neutral-500">({product.reviews} Reviews)</span>
          </div>
        </header>

        <div className="text-3xl font-headline font-bold text-neutral-900">
          LKR {product.price.toLocaleString()}
        </div>

        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Color / <span className="text-black">Magma Red</span></p>
          <div className="flex gap-4">
            {['#DC2626', '#2563EB', '#171717', '#059669'].map((c, i) => (
              <button 
                key={c}
                className={cn(
                  "w-10 h-10 rounded-full transition-transform hover:scale-110",
                  i === 0 && "ring-2 ring-neon ring-offset-2"
                )}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Select Size (EU)</p>
            <button className="text-xs font-semibold underline text-neutral-500 hover:text-black transition-colors">Size Guide</button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[36, 38, 40, 42, 44, 45].map((size) => (
              <button 
                key={size}
                className={cn(
                  "h-12 border rounded-lg flex items-center justify-center font-bold transition-all",
                  size === 40 ? "bg-black border-black text-white" : "border-neutral-300 hover:border-black",
                  size === 45 && "opacity-30 cursor-not-allowed"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            className="w-full py-5 bg-neon text-black font-headline font-extrabold rounded-full uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
          <button className="w-full py-5 bg-black text-white font-headline font-extrabold rounded-full uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all">
            Buy Now
          </button>
        </div>

        <div className="pt-8 grid grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Truck className="w-6 h-6 text-neutral-900" />
            <div>
              <p className="text-sm font-bold">Free Shipping</p>
              <p className="text-xs text-neutral-500">Islandwide delivery</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-neutral-900" />
            <div>
              <p className="text-sm font-bold">2 Year Warranty</p>
              <p className="text-xs text-neutral-500">Genuine Twinnies quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const CheckoutPage = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }} 
    animate={{ opacity: 1, scale: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 px-8 max-w-[1440px] mx-auto"
  >
    <div className="mb-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 -z-10 -translate-y-1/2"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center border-2 border-neon">
            <Check className="w-4 h-4 text-black" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-black">Cart</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center border-2 border-neon">
            <span className="text-black font-bold text-sm">02</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-black">Delivery</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
            <span className="text-neutral-500 font-bold text-sm">03</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Payment</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7 space-y-12">
        <section className="bg-white p-12 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-3">
            <Truck className="w-6 h-6 text-neutral-900" />
            Delivery Details
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">First Name</label>
                <input className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none" placeholder="Janaka" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Last Name</label>
                <input className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none" placeholder="Perera" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Street Address</label>
              <input className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none" placeholder="123 Galle Road, Colombo 03" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">District</label>
                <select className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none appearance-none">
                  <option>Colombo</option>
                  <option>Gampaha</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">City</label>
                <input className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none" placeholder="Colombo" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Zip Code</label>
                <input className="w-full bg-surface border-none rounded-xl p-4 focus:ring-2 focus:ring-neon transition-all outline-none" placeholder="00300" type="text" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-12 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-3">
            <Banknote className="w-6 h-6 text-neutral-900" />
            Payment Method
          </h2>
          <div className="space-y-4">
            <label className="relative flex items-center p-6 rounded-xl cursor-pointer border-2 border-neon bg-neon/5 group">
              <input checked className="hidden" name="payment" type="radio" />
              <div className="w-6 h-6 rounded-full border-2 border-neon flex items-center justify-center mr-4">
                <div className="w-3 h-3 bg-neon rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-black">Cash on Delivery</p>
                <p className="text-sm text-neutral-500">Pay with cash when your order arrives</p>
              </div>
              <Banknote className="w-6 h-6 text-black opacity-40" />
            </label>
            <label className="relative flex items-center p-6 rounded-xl cursor-pointer border-2 border-transparent bg-surface hover:bg-neutral-100 transition-all group">
              <input className="hidden" name="payment" type="radio" />
              <div className="w-6 h-6 rounded-full border-2 border-neutral-300 flex items-center justify-center mr-4 group-hover:border-black"></div>
              <div className="flex-1">
                <p className="font-bold text-black">Credit / Debit Card</p>
                <p className="text-sm text-neutral-500">Visa, Mastercard, Amex accepted</p>
              </div>
              <CreditCard className="w-6 h-6 text-black opacity-40" />
            </label>
          </div>
        </section>
      </div>

      <div className="lg:col-span-5">
        <div className="sticky top-32 space-y-6">
          <section className="bg-white p-8 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-bold font-headline mb-8">Order Summary</h3>
            <div className="space-y-6 mb-8">
              {PRODUCTS.slice(0, 2).map((p) => (
                <div key={p.id} className="flex gap-4">
                  <div className="w-24 h-24 bg-surface rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" src={p.image} alt={p.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-bold text-black">{p.name}</h4>
                      <p className="text-xs text-neutral-500">Size: UK 9 | Color: Magma</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-sm font-medium">Qty: 1</p>
                      <p className="font-bold text-black">LKR {p.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <div className="flex justify-between text-neutral-500">
                <span>Subtotal</span>
                <span>LKR 32,700</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Delivery Fee</span>
                <span className="text-neon font-bold">FREE</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-lg font-bold text-black">Total</span>
                <span className="text-lg font-bold text-black">LKR 32,700</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-neon text-black font-black py-5 rounded-full hover:scale-[1.02] transition-transform duration-200 uppercase tracking-widest text-sm">
              Place Order
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-neutral-500">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout via Twinnies Pay</span>
            </div>
          </section>
          <div className="bg-black p-6 rounded-lg overflow-hidden relative group cursor-pointer">
            <div className="relative z-10">
              <h4 className="text-neon font-black text-lg italic tracking-tight uppercase">Unlock 15% OFF</h4>
              <p className="text-white text-xs mt-1 font-medium">Join the Twinnies Tribe today.</p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-30 transform group-hover:scale-110 transition-transform duration-500">
              <ShoppingBag className="text-white w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(2);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // Optional: Show a toast or go to checkout
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} cartCount={cartCount} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePage 
              key="home" 
              onProductClick={handleProductClick} 
              onNavigate={handleNavigate} 
            />
          )}
          {currentPage === 'listing' && (
            <ListingPage 
              key="listing" 
              onProductClick={handleProductClick} 
            />
          )}
          {currentPage === 'detail' && selectedProduct && (
            <DetailPage 
              key="detail" 
              product={selectedProduct} 
              onAddToCart={handleAddToCart} 
            />
          )}
          {currentPage === 'checkout' && (
            <CheckoutPage key="checkout" />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
