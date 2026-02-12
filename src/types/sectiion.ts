export interface SectionProps {
  className?: string;
  title?: string;
  description?: string;
  items?: string[];
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
  image?: string; // Калі трэба малюнак побач з тэкстам
  footer?: string;
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  cardPosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  cardWidth?: string;
  cardMaxWidth?: string;
  index: number;
}
