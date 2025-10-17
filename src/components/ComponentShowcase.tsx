import { ReactNode } from "react";

interface ComponentShowcaseProps {
  title: string;
  children: ReactNode;
}

export function ComponentShowcase({ title, children }: ComponentShowcaseProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">
        {title}
      </h1>
      <div className="space-y-12">{children}</div>
    </div>
  );
}
