import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function SectionShell({ id, title, children }: SectionShellProps) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
