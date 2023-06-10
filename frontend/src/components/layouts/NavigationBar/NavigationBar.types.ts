import { PageName } from "src/store/navigation";

export type Nav = {
  label: PageName;
  onClick: (navLabel: PageName) => any;
}

export interface NavigationBarProps {
  logoUrl: string;
  companyName: string;
  upperNav: Nav[];
  lowerNav: Nav[];
}