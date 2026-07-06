"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Wifi, Star, Menu, X, Coffee, ArrowRight } from "lucide-react";

const ESPRESSO = "#1C0F08";
const CREAM = "#F8F2E9";
const TERRACOTTA = "#C4612A";
const GOLD = "#D4A853";

const menuItems = [
  {
    category: "Espresso",
    items: [
      { name: "Espresso", desc: "Double shot, smooth and intense", price: "€2.80" },
      { name: "Flat White", desc: "Ristretto with velvety microfoam", price: "€3.60" },
      { name: "Cappuccino", desc: "Classic Italian, dry or wet", price: "€3.40" },
      { name: "Cortado", desc: "Equal parts espresso and warm milk", price: "€3.20" },
    ],
  },
  {
    category: "Specialty",
    items: [
      { name: "Oat Latte", desc: "House blend, Oatly barista, perfectly steamed", price: "€4.20" },
      { name: "Honey Lavender Latte", desc: "Seasonal favourite, local honey", price: "€4.80" },
      { name: "Cold Brew Tonic", desc: "12h cold brew over fever-tree tonic", price: "€5.20" },
      { name: "Matcha Latte", desc: "Ceremonial grade, oat or whole milk", price: "€4.60" },
    ],
  },
  {
    category: "Food",
    items: [
      { name: "Avocado Toast", desc: "Sourdough, smashed avo, chilli flakes, poached egg", price: "€9.50" },
      { name: "Granola Bowl", desc: "House granola, seasonal fruit, Greek yoghurt", price: "€7.80" },
      { name: "Banana Bread", desc: "Warm, with brown butter", price: "€4.50" },
      { name: "Croissant", desc: "Freshly baked, butter or almond", price: "€3.80" },
    ],
  },
];

const perks = [
  { icon: <Wifi className="w-5 h-5" />, title: "Fast WiFi", desc: "500 Mbps fibre, no time limit" },
  { icon: <Coffee className="w-5 h-5" />, title: "Single Origin", desc: "Beans rotated monthly from top roasters" },
  { icon: <Star className="w-5 h-5" />, title: "Loyalty Card", desc: "10th coffee on us, every time" },
  { icon: <MapPin className="w-5 h-5" />, title: "3 Locations", desc: "City centre, Prenzlauer Berg, Mitte" },
];

const reviews = [
  { name: "Sofia K.", stars: 5, text: "Best flat white in Vienna. Full stop. The honey lavender latte is absolutely life-changing." },
  { name: "Marcus T.", stars: 5, text: "I work from here three days a week. Staff is incredible, never made me feel rushed even after 4 hours." },
  { name: "Anna W.", stars: 5, text: "The cold brew tonic is a revelation. Also their banana bread is dangerously good." },
];

export default function CoffeeDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [orderName, setOrderName] = useState("");
  const [orderLocation, setOrderLocation] = useState("Prenzlauer Berg");
  const [orderTime, setOrderTime] = useState("09:00");
  const [orderNote, setOrderNote] = useState("");
  const [orderDone, setOrderDone] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, fontFamily: "'Georgia', serif", color: ESPRESSO }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: `${CREAM}F5`, borderColor: `${ESPRESSO}15`, backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: ESPRESSO }}>
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ color: ESPRESSO }}>Tempo</div>
              <div className="text-xs tracking-widest uppercase font-sans" style={{ color: TERRACOTTA }}>Café</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium" style={{ color: `${ESPRESSO}70` }}>
            {["Menu", "Our Story", "Locations", "Loyalty"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:opacity-100 transition-opacity" style={{ color: ESPRESSO }}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#order" className="hidden md:inline-flex items-center gap-2 text-sm font-sans font-semibold h-10 px-5 rounded-xl text-white transition-colors" style={{ backgroundColor: TERRACOTTA }}>
              Order Ahead
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)} style={{ color: ESPRESSO }}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: ESPRESSO }}>
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-bold text-white text-lg">Tempo Café</span>
            <button onClick={() => setMobileOpen(false)} className="text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6">
            {["Menu", "Our Story", "Locations", "Loyalty"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileOpen(false)}
                className="text-2xl text-white py-4 border-b border-white/10 hover:opacity-70 transition-opacity">{l}</a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <a href="#order" className="flex items-center justify-center h-12 rounded-xl text-white font-sans font-semibold text-sm w-full" style={{ backgroundColor: TERRACOTTA }}>
              Order Ahead
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-16">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=90"
          alt="Tempo Café"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${ESPRESSO}EE 0%, ${ESPRESSO}55 50%, ${ESPRESSO}22 100%)` }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-5" style={{ color: GOLD }}>
              Est. 2019 · Berlin
            </p>
            <h1 className="text-5xl lg:text-7xl text-white leading-[1.0] mb-6">
              Coffee worth<br />
              <em style={{ color: GOLD }}>slowing down</em><br />
              for.
            </h1>
            <p className="font-sans text-white/70 text-base leading-relaxed mb-10 max-w-md">
              Specialty coffee, seasonal food, and a space where time moves at your pace. No laptop shame. No rush.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm text-white" style={{ backgroundColor: TERRACOTTA }}>
                View Menu <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#locations" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-8 rounded-xl text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
                Find a Location
              </a>
            </div>
          </div>
        </div>
        {/* Hours strip */}
        <div className="absolute top-20 right-6 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 backdrop-blur-md hidden lg:block">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-white/60" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60">Today</span>
          </div>
          {[["Mon–Fri", "7:00 – 20:00"], ["Sat–Sun", "8:00 – 19:00"]].map(([day, hrs]) => (
            <div key={day} className="flex justify-between gap-8 font-sans text-sm text-white/90">
              <span className="text-white/50">{day}</span>
              <span className="font-semibold">{hrs}</span>
            </div>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-sans text-xs text-emerald-400 font-semibold">Open now</span>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 px-6 border-b" style={{ backgroundColor: ESPRESSO, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {perks.map((p, i) => (
            <div key={i} className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${TERRACOTTA}25`, color: TERRACOTTA }}>
                {p.icon}
              </div>
              <div>
                <div className="font-sans font-bold text-sm text-white mb-1">{p.title}</div>
                <div className="font-sans text-xs text-white/50 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRACOTTA }}>What we serve</p>
            <h2 className="text-4xl" style={{ color: ESPRESSO }}>The Menu</h2>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mb-10 justify-center flex-wrap">
            {menuItems.map((cat, i) => (
              <button key={i} onClick={() => setActiveMenu(i)}
                className="font-sans text-sm font-semibold h-10 px-6 rounded-xl transition-colors"
                style={{
                  backgroundColor: activeMenu === i ? ESPRESSO : "transparent",
                  color: activeMenu === i ? "white" : `${ESPRESSO}60`,
                  border: `1px solid ${activeMenu === i ? ESPRESSO : `${ESPRESSO}25`}`,
                }}>
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-0">
            {menuItems[activeMenu].items.map((item, i) => (
              <div key={i} className="flex items-baseline justify-between py-5 border-b gap-6" style={{ borderColor: `${ESPRESSO}12` }}>
                <div className="flex-1">
                  <span className="text-lg" style={{ color: ESPRESSO }}>{item.name}</span>
                  <span className="font-sans text-sm ml-3" style={{ color: `${ESPRESSO}55` }}>{item.desc}</span>
                </div>
                <span className="font-sans text-sm font-bold shrink-0" style={{ color: TERRACOTTA }}>{item.price}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-center mt-8" style={{ color: `${ESPRESSO}45` }}>
            All coffee available with oat, soy, or whole milk · Decaf available
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="our-story" className="grid lg:grid-cols-2 min-h-[520px]">
        <div className="relative min-h-72">
          <Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85" alt="Barista at work" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-20" style={{ backgroundColor: ESPRESSO, color: CREAM }}>
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-6" style={{ color: `${CREAM}55` }}>Our Story</p>
          <h2 className="text-4xl leading-tight mb-6" style={{ color: CREAM }}>
            Started with one<br />
            <em style={{ color: GOLD }}>perfect espresso.</em>
          </h2>
          <p className="font-sans leading-relaxed mb-4 text-sm" style={{ color: `${CREAM}75` }}>
            In 2019, two friends with backgrounds in specialty roasting and interior design opened a 30-seat café in Prenzlauer Berg. The idea was simple: make great coffee in a space worth staying in.
          </p>
          <p className="font-sans leading-relaxed mb-8 text-sm" style={{ color: `${CREAM}75` }}>
            Five years and three locations later, we still hand-pick every bean and train every barista for three months before they touch the machine.
          </p>
          <a href="#loyalty" className="inline-flex items-center gap-2 font-sans text-sm font-semibold hover:gap-4 transition-all" style={{ color: GOLD }}>
            Join our loyalty programme <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRACOTTA }}>Reviews</p>
            <h2 className="text-4xl" style={{ color: ESPRESSO }}>What regulars say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "white", border: `1px solid ${ESPRESSO}10` }}>
                <div className="flex gap-0.5 mb-4">
                  {Array(r.stars).fill(0).map((_, j) => (
                    <span key={j} style={{ color: GOLD }}>★</span>
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: `${ESPRESSO}70` }}>&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white font-sans" style={{ backgroundColor: TERRACOTTA }}>
                    {r.name[0]}
                  </div>
                  <span className="font-sans text-sm font-semibold" style={{ color: ESPRESSO }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty */}
      <section id="loyalty" className="py-24 px-6" style={{ backgroundColor: ESPRESSO }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>For regulars</p>
          <h2 className="text-4xl text-white mb-5">
            10th coffee? <em style={{ color: GOLD }}>On us.</em>
          </h2>
          <p className="font-sans text-white/60 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Scan your digital card with every visit. No expiry. Works across all three locations.
          </p>
          <a href="#order" className="inline-flex items-center gap-2 font-sans font-semibold h-12 px-10 rounded-xl text-white text-sm" style={{ backgroundColor: TERRACOTTA }}>
            Get your card
          </a>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: TERRACOTTA }}>Find us</p>
            <h2 className="text-4xl" style={{ color: ESPRESSO }}>3 locations in Berlin</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Prenzlauer Berg", addr: "Schönhauser Allee 47", note: "Original location · Bike parking" },
              { name: "Mitte", addr: "Rosenthaler Str. 22", note: "Busiest · Open until 20:00" },
              { name: "Kreuzberg", addr: "Urbanstr. 89", note: "Newest · Dog-friendly garden" },
            ].map((loc, i) => (
              <div key={i} className="rounded-2xl p-6 border" style={{ backgroundColor: "white", borderColor: `${ESPRESSO}10` }}>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TERRACOTTA }} />
                  <div>
                    <div className="font-bold text-base" style={{ color: ESPRESSO }}>{loc.name}</div>
                    <div className="font-sans text-sm" style={{ color: `${ESPRESSO}60` }}>{loc.addr}</div>
                  </div>
                </div>
                <p className="font-sans text-xs ml-7" style={{ color: `${ESPRESSO}45` }}>{loc.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Ahead */}
      <section id="order" className="py-24 px-6" style={{ backgroundColor: ESPRESSO }}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: GOLD }}>Skip the queue</p>
            <h2 className="text-4xl text-white mb-3">Order Ahead</h2>
            <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Place your order online and pick it up ready in 10 minutes.</p>
          </div>
          {orderDone ? (
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-2xl text-white mb-2">Order placed!</h3>
              <p className="font-sans text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                Your order will be ready in ~10 minutes at <strong className="text-white">{orderLocation}</strong> around <strong className="text-white">{orderTime}</strong>.
              </p>
              <button onClick={() => { setOrderDone(false); setOrderNote(""); }} className="font-sans font-semibold h-11 px-8 rounded-xl text-sm text-white" style={{ backgroundColor: TERRACOTTA }}>
                Place another order
              </button>
            </div>
          ) : (
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <div className="space-y-4">
                <div>
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Your name</label>
                  <input value={orderName} onChange={e => setOrderName(e.target.value)} placeholder="Name for the order" className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none text-white placeholder-white/30 bg-white/10" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Pickup location</label>
                    <select value={orderLocation} onChange={e => setOrderLocation(e.target.value)} className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none text-white bg-white/10" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                      <option>Prenzlauer Berg</option>
                      <option>Mitte</option>
                      <option>Kreuzberg</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Pickup time</label>
                    <select value={orderTime} onChange={e => setOrderTime(e.target.value)} className="w-full h-11 rounded-xl border px-3 font-sans text-sm outline-none text-white bg-white/10" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                      {["08:00","08:30","09:00","09:30","10:00","10:30","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Your order</label>
                  <textarea value={orderNote} onChange={e => setOrderNote(e.target.value)} rows={4} placeholder={`e.g. "Flat White with oat milk, Banana Bread — warm please"`} className="w-full rounded-xl border px-3 py-2.5 font-sans text-sm outline-none resize-none text-white placeholder-white/30 bg-white/10" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
                  <p className="font-sans text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Tell us exactly what you'd like. We'll confirm via the buzzer at pickup.</p>
                </div>
                <button onClick={() => setOrderDone(true)} disabled={!orderName || !orderNote} className="w-full font-sans font-semibold h-12 rounded-xl text-sm text-white disabled:opacity-40" style={{ backgroundColor: TERRACOTTA }}>
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t font-sans" style={{ backgroundColor: ESPRESSO, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4" style={{ color: GOLD }} />
            <span className="font-bold text-sm text-white">Tempo Café</span>
          </div>
          <span>Demo site — <a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>built by Vladimir Rusacov</a></span>
          <span>© 2026 Tempo Café GmbH</span>
        </div>
      </footer>
    </div>
  );
}
