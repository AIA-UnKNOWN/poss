export type Nav = {
  label: string;
  onClick: (navLabel: string) => any;
}

export interface NavigationBarProps {
  logoUrl: string;
  companyName: string;
  upperNav: Nav[];
  lowerNav: Nav[];
}