import type { ReactNode } from 'react';

export interface Link {
  href: string;
  text: string;
}

export interface LinkWithIcon extends Link {
  icon?: ReactNode;
}

export type LinkHandler = (href: string, text: string) => void;
