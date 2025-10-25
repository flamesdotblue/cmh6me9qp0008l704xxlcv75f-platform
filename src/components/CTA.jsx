import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Let’s accelerate your data‑driven growth</h3>
              <p className="mt-3 text-slate-300">
                Tell us about your goals in data, cloud, or marketing. We’ll propose a clear roadmap with quick wins and a scalable foundation.
              </p>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));
                console.log('Lead submitted:', data);
                alert('Thanks! We\'ll be in touch shortly.');
                form.reset();
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50"
                />
              </div>
              <input
                name="company"
                placeholder="Company"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-cyan-400/50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90"
              >
                Request a consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
