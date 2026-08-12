export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const footerContactLines = [
  {
    label: "Franz Josef-Strasse 18, 8700 Leoben",
    href: "https://www.google.com/maps/search/?api=1&query=Franz+Josef-Strasse+18,+8700+Leoben",
  },
  { label: "+43 3842 402-7601", href: "tel:+4338424027601" },
  { label: "ric-leoben@unileoben.ac.at", href: "mailto:ric-leoben@unileoben.ac.at" },
  {
    label: "LinkedIn - Resources Innovation Centre",
    href: "https://www.linkedin.com/company/ric-leoben/",
  },
] as const;
