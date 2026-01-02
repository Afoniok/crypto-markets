"use client";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { fetchStats } from '@/lib/api';

type Stat = {
  title: string;
  description: string;
  highlight?: boolean;
};

export default function About() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetchStats().then(setStats);
  }, []);

  return (
    <section className="w-full bg-[#0b0e13] px-6 py-[140px] text-white">
      <div className="mx-auto max-w-[calc(100%-55px)] text-center">
        <h2 className="mb-8 text-[40px] font-bold">About Gravity Team</h2>

        <p className="mx-auto mb-20 max-w-[800px] text-base leading-relaxed text-[#b5bcc7]">
          At Gravity Team, we are on the mission to balance the supply and demand
          across crypto markets worldwide...
        </p>

        <div className="grid gap-8 text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'border border-[#1f2430] px-6 py-8',
                stat.highlight && 'bg-gradient-to-br from-[#6aa9ff] via-[#9b6cff] to-[#f4d06f] text-white'
              )}
            >
              <h3 className="mb-3 text-[28px] font-bold">{stat.title}</h3>
              <p className={cn('text-sm text-[#b5bcc7]', stat.highlight && 'text-white')}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}