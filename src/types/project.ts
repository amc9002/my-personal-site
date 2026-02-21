export interface Effect {
  metrics: string | string[];
  financial?: string;
}

export interface AnalysisData {
  image: string;
  deduction: string;
  physicsChain: string[];
}

export interface SolutionData {
  id: string | number;
  title: string;
  image: string;
  idea: string;
  triz: string;
  conclusion?: string;
  conclusionSolutions?: string[];
  effect: Effect[];
}

export interface ProjectCase {
  id: number;
  title: string;
  category?: string;
  keyFactor?: string;
  problem: {
    image: string;
    description: string;
  };
  analysis?: AnalysisData;
  solutions: SolutionData[];
}

// І пакінем стары для labels
export interface LabelsFile {
  labels: Record<string, string>;
}