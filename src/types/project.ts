export interface Effect {
  metrics: string | string[];
  financial: string;
}

export interface SolutionData {
  id: number;
  title: string;
  image: string;
  idea: string;
  triz: string;
  conclusion: string;
  conclusionSolutions: string[];
  effect: Effect[];
}

export interface ProjectCase {
  id: number;
  title: string;
  problem: {
    image: string;
    description: string;
  };
  solutions: SolutionData[];
}

// І пакінем стары для labels
export interface LabelsFile {
  labels: Record<string, string>;
}