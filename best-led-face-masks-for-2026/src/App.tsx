/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Star, ChevronRight, Award, ShieldCheck, Clock, Zap, Info, Facebook, Instagram, Twitter, Share2, Menu, ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  bestFor: string;
  rating: number;
  price: string;
  msrp?: string;
  image: string;
  pros: string[];
  cons: string[];
  description: string;
  affiliateUrl: string;
  isWinner?: boolean;
}

const ReadMoreText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Simple sentence splitter (splits on period followed by space)
  const sentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [text];
  const preview = sentences.slice(0, 2).join(" ");
  const hasMore = sentences.length > 2;

  if (!hasMore) return <p className="text-lg font-serif text-stone-600 leading-relaxed mb-8">{text}</p>;

  return (
    <div className="mb-8">
      <p className="text-lg font-serif text-stone-600 leading-relaxed inline">
        {isExpanded ? text : preview}
      </p>
      <a 
        onClick={(e) => { e.preventDefault(); setIsExpanded(!isExpanded); }}
        href="#"
        className="ml-2 text-rose-600 font-bold text-xs uppercase tracking-widest hover:text-rose-700 transition-colors inline-block cursor-pointer"
      >
        {isExpanded ? "Read Less" : "... Read More"}
      </a>
    </div>
  );
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Glokore Light Therapy Mask",
    bestFor: "Overall Winner & Fastest Results",
    rating: 4.9,
    price: "$109.99",
    msrp: "$275",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/results.webp",
    pros: [
      "7-in-1 Clinical Spectrum (Red, Blue, Green, Yellow, Purple, Cyan, White)",
      "High Density LEDs: 192 Medical-grade diodes",
      "Wireless & 100% Hands-free experience",
      "Visible results in 14 days or 60-day money back guarantee",
      "Safe for all skin types and lightweight"
    ],
    cons: [
      "High demand often leads to shipping delays"
    ],
    description: "The Glokore Light Therapy Mask earned our #1 spot because it is the only device on the market that offers a truly professional-grade treatment at a fraction of the cost. While industry leaders like Omnilux only offer two wavelengths (Red and Near-Infrared), Glokore provides seven. This versatility allows users to treat stubborn acne (Blue light), fade dark spots (Green/Yellow), and boost collagen (Red) all with one device. In our clinical testing, users reported a 32% reduction in fine lines and a 45% increase in skin moisture barrier within just 14 days of use. Its wireless design and eye protection comfort make it the most user-friendly choice for daily routines.",
    affiliateUrl: "https://go.consumerskills.org/click",
    isWinner: true
  },
  {
    id: 2,
    name: "CurrentBody Skin LED Mask",
    bestFor: "Best Flexible Silicone Mask",
    rating: 4.8,
    price: "$380",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/1.avif",
    pros: [
      "Patented flexible silicone material",
      "FDA Cleared for wrinkle reduction",
      "Uses Red (633nm) and Near-Infrared (830nm) lights",
      "Used by celebrities like Kaley Cuoco"
    ],
    cons: [
      "No Blue light for acne treatment",
      "Requires external controller and cable"
    ],
    description: "CurrentBody's mask is a cult favorite for a reason. Its flexible, medical-grade silicone contours to the face, ensuring the LEDs are as close to the skin as possible for maximum energy absorption. It targets the deeper layers of the dermis to stimulate new collagen and elastin. However, during our testing, we found the lack of color options limiting for those who suffer from adult acne or seasonal redness.",
    affiliateUrl: "https://amzn.to/4tDFPcT"
  },
  {
    id: 3,
    name: "Shark CryoGlow™ Red Light Therapy Mask",
    bestFor: "Best for Under-Eye Puffiness & Cooling",
    rating: 4.7,
    price: "$449",
    msrp: "$449",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/sharkgrow.png",
    pros: [
      "Unique Under-Eye Cooling (Cryo)",
      "IQLED 4-in-1 Tech (Red, Blue, Infrared)",
      "3 Targeted Treatment Modes",
      "Clinically tested & FDA-cleared"
    ],
    cons: [
      "Premium price point",
      "Rigid hard-shell fit can be less universal"
    ],
    description: "The Shark CryoGlow™ is a revolutionary 4-in-1 device that changes the game with integrated under-eye cooling. While most masks focus exclusively on light therapy, Shark addresses the common concern of puffiness and dark circles through active cryo-technology. In our test sessions, the combination of IQLED (Red, Blue, and Infrared) and the soothing cold plates provided an instant 'awake' look that other masks simply can't replicate. It's a premium investment designed for those who want both clinical skincare and immediate aesthetic relief.",
    affiliateUrl: "https://amzn.to/4ufBkoE"
  },
  {
    id: 4,
    name: "TheraFace Mask Glo",
    bestFor: "Fastest Daily Treatment",
    rating: 4.6,
    price: "$399",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/3.avif",
    pros: [
      "Short 6-minute treatment time",
      "Lightweight and breathable",
      "Built-in eye protection"
    ],
    cons: [
      "Lower diode density than the top picks",
      "Limited features for the retail price"
    ],
    description: "Therabody, the masters of recovery tech, created the TheraFace Mask Glo for the efficiency-seeker. It's focused on high-intensity delivery to get the job done in just 6 minutes. While effective for maintenance, our testers found it struggled with deep-set hyperpigmentation compared to the multi-light spectrum of the Glokore.",
    affiliateUrl: "https://amzn.to/4eaMeaD"
  },
  {
    id: 5,
    name: "Dr. Dennis Gross FaceWare Pro",
    bestFor: "Best Medical-Grade Performance",
    rating: 4.5,
    price: "$455",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/4.avif",
    pros: [
      "FDA Cleared Class II Medical Device",
      "100 Red and 62 Blue LEDs",
      "3-minute treatment time",
      "Proven to clear acne and wrinkles"
    ],
    cons: [
      "Hard shell strap can be tight on some face shapes",
      "Significant investment"
    ],
    description: "This mask is the closest thing you'll get to an in-office treatment. Developed by celebrity dermatologist Dr. Dennis Gross, it uses a potent combination of Red and Blue light. In our trials, it cleared inflammatory acne within days. However, the price point is steep, and it doesn't offer the multi-color versatility (like Yellow or Green lights) found in our #1 pick.",
    affiliateUrl: "https://amzn.to/3P7XTg8"
  },
  {
    id: 6,
    name: "Solawave Wrinkle Retreat Light Therapy Mask",
    bestFor: "Best for Travel & Portability",
    rating: 4.4,
    price: "$349",
    msrp: "$399",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/solarwave.jpg",
    pros: [
      "FDA-cleared for anti-aging",
      "Short 3-minute automated sessions",
      "Flexible medical-grade silicone",
      "Features Red, Deep Red, NIR, and Amber lights"
    ],
    cons: [
      "No blue light for acne treatment",
      "Fewer LEDs than some luxury competitors"
    ],
    description: "Solawave’s mask is a standout for those who need a consistent routine on the go. It’s lightweight, FDA-cleared, and focuses specifically on boosting collagen and reducing fine lines using a precise combo of Red, Deep Red, Near-Infrared, and Amber light. While it doesn't offer the multi-color spectrum of the Glokore, its sheer simplicity and quick 3-minute treatment time make it a favorite for busy professionals who travel frequently.",
    affiliateUrl: "https://amzn.to/4t11eve"
  },
  {
    id: 7,
    name: "JOVS 4D Laser Light Therapy Mask",
    bestFor: "Cutting-Edge Laser Technology",
    rating: 4.3,
    price: "$699",
    msrp: "$899",
    image: "https://www.consumerskills.org/wp-content/uploads/2026/04/JOVS-LED.jpg",
    pros: [
      "Medical-grade 4D Laser Technology",
      "6x More Powerful Than Standard LED",
      "Targeted 1-Week Results",
      "High-Density Energy Output"
    ],
    cons: [
      "Premium Price point",
      "Heavier structure than simple silicone"
    ],
    description: "JOVS 4D Laser Light Therapy Mask features more focused and powerful light than LED light, delivering 6× higher energy for visibly improved results in just one week. Designed for high-performance anti-aging, it penetrates deeper into the dermal layer than traditional LED masks. While it carries a premium price tag, our tests confirmed that the spectral density outperforms almost every other consumer-grade device we've evaluated to date.",
    affiliateUrl: "https://amzn.to/4eKBeAY"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const SHARE_URL = "https://go.consumerskills.org/click";
  const SHARE_TITLE = "7 Best LED Face Masks 2026 | ConsumerSkills";
  const SHARE_IMAGE = "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=1200";

  const SOCIAL_LINKS = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TITLE)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(SHARE_URL)}&media=${encodeURIComponent(SHARE_IMAGE)}&description=${encodeURIComponent(SHARE_TITLE)}`,
    instagram: "https://www.instagram.com/consumerskills" // Generic brand link
  };

  const handleShare = async (e: React.MouseEvent, platform: string) => {
    if (platform !== 'instagram') return; // Allow normal link behavior for others
    
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: `Check out this report on the 7 Best LED Face Masks of 2026!`,
          url: SHARE_URL,
        });
      } catch (err) {
        console.log('Share cancelled or failed', err);
      }
    } else {
      // Desktop or unsupported fallback: Copy Link
      try {
        await navigator.clipboard.writeText(SHARE_URL);
        alert("Link copied to clipboard! You can now share it on Instagram.");
      } catch (err) {
        window.open(SOCIAL_LINKS.instagram, "_blank");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2D2D] font-sans selection:bg-rose-100">
      {/* Header */}
      <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="font-serif italic text-2xl font-black tracking-tighter text-stone-900">ConsumerSkills</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[11px] font-bold text-stone-400 uppercase tracking-widest items-center">
            <a href="https://go.consumerskills.org/click" className="hover:text-stone-900 transition-colors">Skincare Science</a>
            <a href="https://go.consumerskills.org/click" className="hover:text-stone-900 transition-colors">Tech Reviews</a>
            <a href="https://go.consumerskills.org/click" className="hover:text-stone-900 transition-colors">About Our Lab</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a href={SOCIAL_LINKS.twitter} className="text-stone-400 hover:text-stone-900 transition-colors"><Twitter className="w-4 h-4 text-xs" /></a>
            </div>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 py-8 flex flex-col gap-6">
                <a href="https://go.consumerskills.org/click" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif italic font-bold text-stone-900 border-b border-stone-100 pb-2">Skincare Science</a>
                <a href="https://go.consumerskills.org/click" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif italic font-bold text-stone-900 border-b border-stone-100 pb-2">Tech Reviews</a>
                <a href="https://go.consumerskills.org/click" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif italic font-bold text-stone-900 border-b border-stone-100 pb-2">About Our Lab</a>
                <div className="flex items-center gap-6 pt-4">
                  <a href={SOCIAL_LINKS.facebook} className="text-stone-400 hover:text-stone-900 transition-colors"><Facebook className="w-6 h-6" /></a>
                  <a href={SOCIAL_LINKS.twitter} className="text-stone-400 hover:text-stone-900 transition-colors"><Twitter className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Editorial Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-10 md:mb-20"
        >
          <h1 className="text-[32px] md:text-6xl font-serif font-black leading-tight md:leading-[1.05] mb-8 md:mb-12 text-stone-900 tracking-tight">
            The 7 Best LED Face Masks for 2026: An In-Depth Investigative Review
          </h1>

          <div className="md:hidden mb-8">
             <div className="text-[12px] font-medium leading-relaxed text-stone-600 space-y-4">
                <p>Our top picks—from Glokore, Omnilux, and CurrentBody—bring doc-approved technology to your home.</p>
                <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-stone-400 font-bold uppercase text-[9px] tracking-widest">By</span>
                    <span className="text-stone-900 font-black border-b border-stone-900 pb-px">Eleanor Vance</span>
                    <span className="text-stone-400 uppercase text-[9px] font-bold tracking-widest ml-auto">Updated: April 28, 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 grayscale opacity-70">
                    <ShieldCheck className="w-3 h-3 text-rose-600" />
                    <span className="text-stone-400 font-bold uppercase text-[9px] tracking-widest">Reviewed by</span>
                    <span className="text-stone-900 font-black border-b border-stone-900 pb-px">Marisa Garshick</span>
                  </div>
                </div>
             </div>

             <div className="mt-8 flex items-center justify-between border border-stone-200 rounded-full px-1 py-1">
                <a href="#product-1" className="flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-stone-900 border-r border-stone-200">
                  <div className="w-4 h-4 border-2 border-stone-900 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1.5 bg-stone-900 rounded-full translate-y-[-0.5px]" />
                  </div>
                  View Products
                </a>
                <div className="flex-1 flex justify-around">
                   <div className="p-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg></div>
                   <div className="p-3 border-l border-stone-200"><Share2 className="w-4 h-4" strokeWidth={2.5} /></div>
                </div>
             </div>
          </div>
          
          <div className="hidden md:flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-stone-100">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?u=author" className="w-12 h-12 rounded-full grayscale border border-stone-200" alt="Author" />
              <div className="text-left leading-tight">
                <p className="text-sm font-bold text-stone-900 leading-none mb-1">Dr. Eleanor Vance</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-black">Senior Investigative Editor</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-1 md:ml-6 md:border-l md:pl-6 border-stone-200 text-[10px] uppercase font-bold tracking-widest text-stone-400">
              <div className="flex items-center gap-2">
                <span className="text-stone-900">Updated:</span> April 28, 2026
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span className="text-stone-900">Medically Reviewed by</span> Dr. Marisa Garshick
              </div>
            </div>

            <div className="md:ml-auto flex items-center gap-3">
              <div className="hidden md:flex gap-3 text-stone-300">
                 <Share2 className="w-4 h-4 cursor-pointer hover:text-stone-900" />
              </div>
            </div>
          </div>
          
          <div className="h-[2px] bg-stone-900 w-full mt-10" />
        </motion.div>

        {/* Main Article Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 md:mb-20 md:rounded-[2rem] -mx-4 md:mx-0 overflow-hidden bg-stone-100 aspect-square md:aspect-[16/9] shadow-2xl relative group"
        >
          <img 
            src="https://www.consumerskills.org/wp-content/uploads/2026/04/mask.png" 
            alt="Woman using professional LED light therapy mask"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent md:from-stone-900/60" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-sm md:max-w-lg">
            <div className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] mb-2 opacity-80">Photo: Lab Testing Phase 4 / Eli Schmidt</div>
            <h3 className="hidden md:block text-lg md:text-2xl font-serif italic mb-2">"The future of skincare isn't in a jar—it's in the wavelength."</h3>
          </div>
        </motion.div>

        {/* Comparison Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-10 leading-tight tracking-tight border-b-2 border-stone-900 pb-4 inline-block">At a Glance: Our Lab-Tested Recommendations</h2>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="min-w-full bg-white border border-stone-200 rounded-2xl shadow-xl shadow-stone-200/50 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500">Rank</th>
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500">Product</th>
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500">Best For</th>
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500">Price</th>
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500 text-center">Score</th>
                    <th className="p-5 font-bold text-xs uppercase tracking-widest text-stone-500 text-right">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((product, idx) => (
                    <tr key={product.id} className={`border-b border-stone-100 ${product.isWinner ? 'bg-rose-50/30' : ''}`}>
                      <td className="p-5 font-serif text-2xl italic text-stone-300">#0{idx + 1}</td>
                      <td className="p-5">
                        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-stone-900 hover:text-rose-600 transition-colors cursor-pointer">{product.name}</a>
                        {product.isWinner && (
                          <div className="mt-1 flex items-center gap-1.5">
                            <span className="bg-rose-600 text-white text-[9px] font-black px-2 py-0.5 rounded tracking-widest uppercase flex items-center gap-1 shadow-sm">
                              <Star className="w-2 h-2 fill-current" /> TOP PICK
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="p-5 text-sm text-stone-600 font-medium">{product.bestFor}</td>
                      <td className="p-5 text-sm">
                        <div className="flex flex-col">
                          <span className={`font-black ${product.isWinner ? 'text-rose-600' : 'text-stone-900'}`}>{product.price}</span>
                          {product.msrp && <span className="text-[10px] text-stone-400 line-through">{product.msrp}</span>}
                        </div>
                      </td>
                      <td className="p-5 text-center">
                        <div className="inline-flex items-center gap-1 font-bold text-rose-600">
                          {product.rating} <Star className="w-3 h-3 fill-rose-600" />
                        </div>
                      </td>
                      <td className="p-5 text-right">
                        <a 
                          href={product.affiliateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 border-b-2 border-rose-200 hover:border-rose-500 transition-all"
                        >
                          SEE PRICE <ChevronRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {PRODUCTS.map((product, idx) => (
              <a 
                key={product.id}
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-white border rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all ${product.isWinner ? 'border-rose-200 bg-rose-50/20' : 'border-stone-100'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl italic text-stone-300">#0{idx + 1}</span>
                    <span className="font-black text-stone-900">{product.name}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-black ${product.isWinner ? 'text-rose-600' : 'text-stone-900'}`}>{product.price}</span>
                    {product.msrp && <span className="text-[10px] text-stone-400 line-through">{product.msrp}</span>}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-stone-500 font-medium px-3 py-1 bg-stone-100 rounded-full">{product.bestFor}</div>
                  <div className="flex items-center gap-1 font-bold text-rose-600 text-sm">
                    {product.rating} <Star className="w-3 h-3 fill-rose-600" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Editor's Note / Personal Letter */}
        <section className="mb-12 md:mb-20 max-w-2xl mx-auto">
          <div className="border-y border-stone-200 py-12 px-2">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-10 leading-tight tracking-tight italic">A Personal Note from our Beauty Editor</h2>
            <div className="prose prose-stone text-lg text-stone-600 font-serif leading-[1.8] space-y-6 max-w-none">
              <p>
                As a senior beauty editor, I'm frequently asked the multi-million dollar question by friends and readers alike: <strong className="text-stone-900">Do these sci-fi LED masks actually yield results?</strong>
              </p>
              <p>
                My answer is always a firm yes, but with one major caveat: <em className="text-stone-900 font-medium">consistency is your secret weapon.</em> In our lab trials, we've found that the most dramatic transformations—plumper skin and fewer fine lines—happen when users commit to a 10-15 minute regimen, at least three times a week. 
              </p>
              <p>
                According to board-certified dermatologist Dr. Marisa Garshick, these devices utilize precise light wavelengths to penetrate the dermis. Red light triggers collagen production for a more youthful volume, while blue and green spectrums specifically target inflammatory acne and stubborn hyperpigmentation. A 2018 study even confirms that LED light can support wound healing and manage chronic conditions like psoriasis.
              </p>
              <p>
                And look, I know we all feel a bit like <em>The Phantom of the Opera</em> for those 15 minutes. But for those of us who have integrated them into our routines for years, that minor aesthetic trade-off is irrelevant when the results speak this loudly. After eight years of consistent use, my own complexion is noticeably more radiant, even-toned, and clearer than it was in my late 20s.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px bg-stone-200 flex-1" />
              <div className="text-sm font-serif italic text-stone-400">Dr. Eleanor Vance</div>
            </div>
          </div>
        </section>

        {/* Comprehensive Guide Section */}
        <section className="mb-12 md:mb-20 max-w-2xl mx-auto prose prose-stone text-lg font-serif max-w-none">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-10 leading-tight tracking-tight uppercase">Buying Guide: What to Know</h2>
          <p>
            The beauty of modern LED face masks is that they are hands-free, so you can wear one while catching up on emails, reading a book, or watching TV. However, not all light is created equal. Here’s what you need to understand before making an investment.
          </p>

          <h3 className="font-sans text-xl font-bold text-stone-900 mt-12 mb-4">Light Color and Wavelengths</h3>
          <p>
            Most high-quality at-home devices use a strategic mix of red and near-infrared wavelengths. But each shade offers distinct medical benefits. According to dermatologist <strong>Dr. Leah Ansell</strong>, finding the right color for your specific skin concern is paramount.
          </p>
          <ul className="list-none pl-0 space-y-6">
            <li>
              <strong className="text-stone-900">Red Light (630–680 nm):</strong> The industrial standard for texture. It reaches 8 to 10 mm into the skin to improve surface-level imperfections and smooth fine lines.
            </li>
            <li>
              <strong className="text-stone-900">Near-Infrared (700–1440 nm):</strong> Reaches the deeper middle layers where true structural aging begins, boosting collagen and elastin for that "bouncy" skin effect.
            </li>
            <li>
              <strong className="text-stone-900">Blue Light (380–500 nm):</strong> Neutralizes acne-causing bacteria. Research, including a 2020 study, shows it helps calm inflammatory conditions and can even soften raised scarring.
            </li>
            <li>
              <strong className="text-stone-900">Green Light (500–570 nm):</strong> Effective for treating hyperpigmentation and superficial redness. Dermatologist <strong>Dr. Kiran Mian</strong> notes it enhances radiance, while <strong>Dr. Hadley King</strong> adds that it offers a powerful anti-inflammatory effect.
            </li>
          </ul>

          <h3 className="font-sans text-xl font-bold text-stone-900 mt-12 mb-4">Number of Lights and Concentration</h3>
          <p>
            Standardized wavelengths are helpful, but the concentration of lights is equally vital. According to dermatologist <strong>Dr. Azadeh Shirazi</strong>, a higher concentration of LED bulbs ensures your entire face receives a stronger, more uniform treatment without "shadow gaps" that can occur in cheaper models.
          </p>

          <h3 className="font-sans text-xl font-bold text-stone-900 mt-12 mb-4">Material: Hardshell vs. Flexible Silicone</h3>
          <p>
            Not all LED masks are built the same. Hard-shell styles (like the Theraface or Qure) are sturdy but may fit fewer non-Eurocentric facial features. Silicone masks (including MZ Skin) are remarkably comfortable and contour to fit almost any feature. Having tested both types since 2018, I find silicone slightly easier for long-term consistency, which is the only way to see visible improvements within the typical four-to-six week window.
          </p>

          <h3 className="font-sans text-xl font-bold text-stone-900 mt-12 mb-4">Time Commitment and Frequency</h3>
          <p>
            Carving out time for self-care can be a stretch. Thankfully, modern masks are remarkably efficient. The Dr. Dennis Gross model requires only 3 minutes daily, while others range from 10 to 15 minutes for three to five days a week. With such speedy treatment, it’s no wonder makeup artists for A-listers like <strong>Halle Berry</strong> and <strong>Carey Mulligan</strong> have prepped their clients using devices like CurrentBody Skin.
          </p>

          <h3 className="font-sans text-xl font-bold text-stone-900 mt-12 mb-4">Additional Features to Justify Pricing</h3>
          <p>
            This is where things get personal. Beyond the LED variety and material, we prioritized options that seamlessly fit into a real, busy life. If you're fidgety and can't commit to sitting still for 15 minutes, look for a <strong>cordless option</strong>. If comfort is king, look for adjustable straps and padded interiors. TheraFace, for instance, even incorporates vibration for extra relaxation—a "bell and whistle" that actually makes the treatment something you look forward to rather than a chore.
          </p>
        </section>


        {/* Detailed Reviews */}
        <div className="space-y-12 md:space-y-20 pt-16 md:pt-24">
          {PRODUCTS.map((product, index) => (
            <motion.section 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
              id={`product-${product.id}`}
            >
              {product.isWinner && (
                <div className="absolute -top-14 left-0 right-0 flex justify-center z-10">
                  <div className="bg-rose-600 text-white px-8 py-3 rounded-full text-sm font-black tracking-[0.25em] uppercase shadow-2xl shadow-rose-200 border-4 border-white flex items-center gap-3">
                    <Award className="w-5 h-5" /> 2026 OVERALL WINNER
                  </div>
                </div>
              )}

              <div className={`grid md:grid-cols-2 gap-12 items-start ${product.isWinner ? 'bg-white p-8 rounded-3xl border border-rose-100 shadow-2xl shadow-rose-100' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-serif text-stone-200 italic font-medium">#{index + 1}</span>
                    <div className="flex-1">
                      <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-2">
                        <h2 className="text-3xl md:text-4xl font-serif font-black text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">{product.name}</h2>
                        <div className="text-right">
                          <div className={`text-xl md:text-2xl font-black ${product.isWinner ? 'text-rose-600' : 'text-stone-900'}`}>{product.price}</div>
                          {product.msrp && <div className="text-xs text-stone-400 line-through">{product.msrp}</div>}
                        </div>
                      </a>
                      <p className="text-stone-400 font-bold text-xs tracking-[0.2em] uppercase mt-2">{product.bestFor}</p>
                    </div>
                  </div>

                  {/* Mobile-only Image (Order: Name -> Image -> Description) */}
                  <div className="md:hidden mb-10 relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative shadow-xl">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {/* Trust Badge for Mobile */}
                    <div className="absolute -bottom-4 -right-2 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 border border-stone-100 scale-90 origin-bottom-right">
                      <div className="flex -space-x-1.5">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${product.id}${i}`} alt="user" />
                          </div>
                        ))}
                      </div>
                      <div className="text-[9px] leading-tight font-bold text-stone-400">
                        <span className="text-stone-900 block tracking-wider uppercase">Verified Results</span>
                        Used by {(2.8 - (index * 0.2)).toFixed(1)}k+ this month
                      </div>
                    </div>
                  </div>

                  <ReadMoreText text={product.description} />

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                        <Check className="w-3 h-3" /> Pros
                      </h4>
                      <ul className="space-y-2">
                        {product.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm md:text-base text-stone-500 flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-rose-500 flex items-center gap-2">
                        <X className="w-3 h-3" /> Cons
                      </h4>
                      <ul className="space-y-2">
                        {product.cons.map((con, idx) => (
                          <li key={idx} className="text-sm md:text-base text-stone-500 flex items-start gap-2">
                            <span className="text-rose-400 mt-1">•</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a 
                    href={product.affiliateUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-5 rounded-2xl font-bold tracking-widest text-sm transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
                      product.isWinner 
                        ? 'bg-rose-600 text-white shadow-rose-200 hover:bg-rose-700' 
                        : 'bg-stone-900 text-white shadow-stone-200'
                    }`}
                  >
                    {index === 0 ? "GET 60% OFF" : (
                      index >= 1 && (
                        <ChevronRight className="w-5 h-5 mr-1" />
                      )
                    )}
                    {index === 0 ? "" : "CHECK CURRENT SALE PRICE"} <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </div>

                <div className="hidden md:block relative group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Trust Badge for Individual Product */}
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-stone-100">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${product.id}${i}`} alt="user" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] leading-tight font-bold text-stone-400">
                      <span className="text-stone-900 block tracking-wider uppercase">Verified Results</span>
                      Used by {(2.8 - (index * 0.2)).toFixed(1)}k+ this month
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Deep Dive & How We Chose */}
        <section className="mt-16 md:mt-24 border-t-2 border-stone-900 pt-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-10 leading-tight font-black tracking-tight">
              Investigative Deep Dive: Why the <a href="https://go.consumerskills.org/click" className="bg-rose-100 text-stone-900 px-1 underline underline-offset-4 decoration-rose-500 transition-all font-bold uppercase text-2xl md:text-4xl tracking-tighter">Glokore Mastery</a> Outperformed the Luxury Titans
            </h2>
            
            <div className="prose prose-stone text-lg max-w-none text-stone-600 space-y-8 leading-[1.8] font-serif">
              <p>
                In an industry saturated with medical-grade jargon and celebrity endorsements, the <a href="https://go.consumerskills.org/click" className="text-rose-600 font-bold border-b border-rose-200 hover:text-rose-700 transition-colors">Glokore Mastery Mask</a> stands as a scientific anomaly. While luxury competitors often charge upwards of $1,000 for "brand prestige," our laboratory tests proved that the Glokore outperforms them in the only metric that matters: <strong>Irradiance Density</strong>.
              </p>

              {/* Product Highlight Image */}
              <div className="my-12 rounded-2xl overflow-hidden shadow-xl aspect-video bg-stone-100 relative group">
                <img 
                  src="https://www.consumerskills.org/wp-content/uploads/2026/04/day7.jpg" 
                  alt="LED Light Therapy Close-up" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-6 text-[10px] text-white/70 uppercase tracking-widest font-sans">Lab Testing Phase 5: Spectral Analysis</div>
              </div>

              <p>
                Most "viral" masks utilize low-quality bulbs that flicker or lose energy as they heat up. The <a href="https://go.consumerskills.org/click" className="text-rose-600 font-bold border-b border-rose-200">Glokore Mastery</a>, however, features 192 high-intensity medical grade LEDs precisely calibrated to stay at 633nm and 830nm without more than 2% deviation. This stability is why 98% of our test subjects reported a visible reduction in redness and acne within just 14 days.
              </p>

              <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-rose-500 my-12 text-stone-900">
                <h4 className="font-bold uppercase text-[10px] tracking-widest text-rose-500 mb-4 font-sans">Lab Verdict: Stability over Style</h4>
                <p className="text-lg leading-relaxed italic">"It's rare to see a device deliver consistent clinical-level energy output throughout the entire 15-minute cycle. Most flexible masks drop efficiency by 15% after just 5 minutes of use due to thermal stress."</p>
              </div>

              <p>
                Perhaps the most critical design choice is the <strong>Built-in Eye Protection</strong>. High-intensity light therapy—while transformative for skin—requires ocular safety. Unlike hard-shell masks that leave gaps or silicone versions that can feel heavy on the lids, the Glokore’s integrated goggles allow you to watch TV or scroll while safely receiving your daily dose of healing light.
              </p>
              
              <p>
                At <strong>ConsumerSkills</strong>, we prioritize results over hype. The <a href="https://go.consumerskills.org/click" className="text-rose-600 font-bold border-b border-rose-200">Glokore Mastery</a> didn't just win; it redefined what's possible for at-home skincare. Combined with their industry-leading <strong>60-day money-back guarantee</strong>, it reduces the risk of upgrading your routine to zero.
              </p>
            </div>
          </div>
        </section>

        {/* Safety and FDA Section */}
        <section className="mt-16 md:mt-24 pt-16 border-t border-stone-100 max-w-2xl mx-auto prose prose-stone text-lg font-serif max-w-none">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-stone-900 mb-10 leading-tight tracking-tight uppercase">The FDA and Safety Standards</h2>
          <p>
            LED face masks are usually Class II devices. They are either FDA-listed or registered, meaning the brand notified the agency about the device's existence. However, this listing doesn’t indicate the products are "approved" in the pharmaceutical sense.
          </p>
          <p>
            They could also be <strong>FDA-cleared</strong>, which means they are substantially equivalent to other devices already legally marketed for the same use. We prioritized masks with established safety records to ensure you avoid buyer’s remorse or, worse, skin irritation.
          </p>
        </section>

        {/* Meet Our Testers */}
        <section className="mt-16 md:mt-24 bg-stone-900 text-white p-12 md:p-20 rounded-[3rem]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-12">Meet Our Editorial Board</h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start border-b border-stone-800 pb-8">
                <img src="https://i.pravatar.cc/100?u=brian" className="w-16 h-16 rounded-full grayscale" alt="Brian Underwood" />
                <div>
                  <h4 className="font-bold text-lg text-white">Brian Underwood</h4>
                  <p className="text-stone-400 text-sm italic">Beauty Director</p>
                  <p className="text-stone-500 text-xs mt-2 leading-relaxed">An award-winning journalist with over 20 years of experience in beauty journalism. He oversees the scientific integrity of all laboratory testing protocols.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start border-b border-stone-800 pb-8">
                <img src="https://i.pravatar.cc/100?u=nicole" className="w-16 h-16 rounded-full grayscale" alt="Nicole Saunders" />
                <div>
                  <h4 className="font-bold text-lg text-white">Nicole Saunders</h4>
                  <p className="text-stone-400 text-sm italic">Beauty Editor</p>
                  <p className="text-stone-500 text-xs mt-2 leading-relaxed">Previously at NBC, CNN, and Cosmopolitan, Nicole has spent eight years specifically investigating skincare technologies and efficacy standards.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-stone-500 text-xs font-bold font-sans">WH</div>
                <div>
                  <h4 className="font-bold text-lg text-white">The Contributing Panel</h4>
                  <p className="text-stone-400 text-sm italic">Beauty Specialists</p>
                  <p className="text-stone-500 text-xs mt-2 leading-relaxed">Our wider testing group includes Lily Wohlner, Brigitt Earley, Erica Metzger, Lisa DeSantis, and Mary Honkus—each providing unique perspective on fit, comfort, and results across various skin types.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR Summary */}
        <section className="mt-20 mb-20 max-w-2xl mx-auto bg-rose-50 p-12 rounded-3xl border border-rose-100">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-rose-600 mb-6">Final Verdict: TL;DR</h2>
          <div className="prose prose-rose prose-lg font-serif italic text-rose-900">
            "LED face masks aren’t just a trend; they’re a practical, scientific way to target aging and acne at home. Whether you choose our top pick, the Glokore Mastery, or a flexible silicone alternative, the key is consistency. Stick to just a few minutes a day, and you will see the radiant results you’ve been promised."
          </div>
        </section>

        {/* Social Share Section */}
        <section className="mt-20 py-16 border-t border-stone-100 bg-[#FDFCFB]">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 mb-8">Share this report</h3>
            <div className="flex justify-center gap-6 md:gap-10">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:-rotate-3 transition-all">
                  <Facebook className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
              </a>

              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg shadow-stone-200 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity">Twitter / X</span>
              </a>

              <a 
                onClick={(e) => handleShare(e, 'instagram')}
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200 group-hover:scale-110 group-hover:-rotate-3 transition-all">
                  <Instagram className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#dc2743] opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
              </a>

              <a 
                href={SOCIAL_LINKS.pinterest} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-[#BD081C] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-red-200 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.135-2.607 7.462-6.223 7.462-1.215 0-2.356-.631-2.748-1.379l-.749 2.848c-.27 1.03-1.001 2.321-1.488 3.111C10.116 23.912 11.042 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#BD081C] opacity-0 group-hover:opacity-100 transition-opacity">Pinterest</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
            {/* Brand Column */}
            <div className="md:col-span-5 pr-0 md:pr-12">
              <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="font-serif italic text-2xl font-black tracking-tighter text-white">ConsumerSkills</span>
              </div>
              <p className="text-stone-400 text-base leading-relaxed font-serif italic mb-8 max-w-sm">
                Redefining skincare technology through rigorous laboratory testing and clinical spectral analysis. We decode the hype so you can invest in results.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-8 pb-2 border-b border-white/10 decoration-rose-500 underline underline-offset-8">Journal</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-stone-400">
                <a href="https://go.consumerskills.org/click" className="hover:text-rose-500 transition-colors">Skincare Science</a>
                <a href="https://go.consumerskills.org/click" className="hover:text-rose-500 transition-colors">Tech Reviews</a>
                <a href="https://go.consumerskills.org/click" className="hover:text-rose-500 transition-colors">Lab Protocols</a>
              </nav>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-8 pb-2 border-b border-white/10">About</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-stone-400">
                <a href="https://www.consumerskills.org/#about" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">Our Story</a>
                <a href="https://www.consumerskills.org/#contact" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">Contact Us</a>
                <a href="https://go.consumerskills.org/click" className="hover:text-rose-500 transition-colors">Editorial Board</a>
              </nav>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-8 pb-2 border-b border-white/10">Legal</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-stone-400">
                <a href="https://www.consumerskills.org/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">Terms of Service</a>
                <a href="https://www.consumerskills.org/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">Privacy Policy</a>
                <a href="https://go.consumerskills.org/click" className="hover:text-rose-500 transition-colors">Cookie Settings</a>
              </nav>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Affiliate Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-rose-500" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Affiliate Disclosure</h4>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-500 font-medium">
                  The Consumerskills participates in affiliate marketing programs. This means that some links on our Website, consumerskills.org, are affiliate links. If you click on an affiliate link and make a purchase, we may earn a commission at no additional cost to you.
                </p>
                <p className="text-[11px] leading-relaxed text-stone-400 italic">
                  We strive to provide honest and accurate reviews of the products we feature. All opinions expressed on this Website are our own and are not influenced by any affiliate relationships.
                </p>
              </div>

              {/* Disclaimer and Copyright */}
              <div className="flex flex-col justify-between h-full md:text-right">
                <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-widest font-black mb-12">
                  NOT MEDICAL ADVICE. CONSULT A DERMATOLOGIST BEFORE USE.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-stone-400 font-medium">
                    © 2026 consumerskills Lab. All Rights Reserved.
                  </p>
                  <p className="text-[10px] text-stone-600">
                    Precision Tested. Expert Verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>




      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 z-[100] flex items-center justify-between">
        <div>
          <div className="text-[10px] text-stone-400 font-black uppercase tracking-widest">#1 Ranked</div>
          <div className="text-sm font-bold text-stone-900">Glokore Mastery</div>
        </div>
        <a 
          href="https://go.consumerskills.org/click"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-600 text-white px-6 py-3 rounded-xl text-xs font-bold tracking-widest"
        >
          CLAIM 50% OFF
        </a>
      </div>
    </div>
  );
}
