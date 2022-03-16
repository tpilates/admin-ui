export interface Link {
  href: string;
  text: string;
}

export type LinkHandler = (href: string, text: string) => void;
