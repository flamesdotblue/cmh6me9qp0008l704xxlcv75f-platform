import React from 'react';
import { Cloud, Database, Mail, Shield } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Solutions',
    desc:
      'Manage, integrate, and optimize your data through warehousing, ETL, migration, and database optimization — unlocking insights and efficiency.',
    bullets: ['Data Warehousing', 'ETL & Integration', 'Database Optimization', 'Data Migration'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc:
      'Scalable infrastructure and seamless migration across AWS, Azure, and GCP, with DevOps integration and robust cloud security.',
    bullets: ['AWS • Azure • GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Cost Optimization'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc:
      'Strategic, data‑driven campaigns that engage audiences, boost conversions, and build long‑term loyalty with advanced automation.',
    bullets: ['Lifecycle Automation', 'Personalization', 'Deliverability', 'Campaign Optimization'],
  },
  {
    icon: Shield,
    title: 'Cloud Security',
    desc:
      'Protect infrastructure and data with policy, monitoring, and remediation baked into your cloud and data workflows.',
    bullets: ['IAM & Policies', 'Compliance & Audit', 'Monitoring & Alerts', 'Risk Management'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/10">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),transparent_45%),radial-gradient(ellipse_at_bottom,_rgba(217,70,239,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Solutions designed for impact</h2>
          <p className="mt-3 text-slate-300">
            From data foundations to cloud scale and marketing execution—deliver measurable outcomes across your business.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition hover:bg-white/[0.04]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
