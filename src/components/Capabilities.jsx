import React from 'react';
import { BarChart3, Cog, Layers, LineChart } from 'lucide-react';

const items = [
  {
    icon: LineChart,
    title: 'Data Visualization',
    desc:
      'Turn complex datasets into clear, interactive dashboards for real‑time insights and confident decision‑making.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    desc:
      'Unify data sources and build metrics that matter. Enable stakeholders with accessible, governed analytics.',
  },
  {
    icon: Layers,
    title: 'Modern Data Stack',
    desc:
      'Composable tooling across ingestion, transformation, orchestration, and observability tailored to your needs.',
  },
  {
    icon: Cog,
    title: 'DevOps Integration',
    desc:
      'Automate, test, and ship faster with CI/CD pipelines, infrastructure-as-code, and environment parity.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">From raw data to real outcomes</h2>
            <p className="mt-4 text-slate-300">
              We design scalable systems and intuitive visuals that connect data to decisions. Whether migrating to the cloud, optimizing your databases, or launching data‑driven campaigns, we help you move faster with confidence.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-slate-900/60 p-4">
                  <p className="text-slate-400">Query Speed</p>
                  <p className="mt-1 text-2xl font-semibold text-white">2.4x faster</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4">
                  <p className="text-slate-400">Cloud Spend</p>
                  <p className="mt-1 text-2xl font-semibold text-white">-31%</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4">
                  <p className="text-slate-400">Campaign ROI</p>
                  <p className="mt-1 text-2xl font-semibold text-white">+52%</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4">
                  <p className="text-slate-400">Deployment Time</p>
                  <p className="mt-1 text-2xl font-semibold text-white">-65%</p>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">Illustrative metrics from recent client engagements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
