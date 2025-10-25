import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Services />
      <Capabilities />
      <CTA />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} GoAurex. All rights reserved.</p>
      </footer>
    </div>
  );
}
