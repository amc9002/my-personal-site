export interface MethodologyStepProps {
  index: number;
  title: string;
  text: string;
  details?: string[];
  children?: React.ReactNode; // Сюды мы потым уставім аніміраваныя схемы
}