export interface Solution {
  title: string;
  idea: string;
  triz: string;
  conclusion: string;
  metrics: string;
}

export interface ProjectFormData {
  id: string;
  title: string;
  category: string;
  keyFactor: string;
  deduction: string;
  physicsChain: string;
  problemDescription: string;
  solutions: Solution[];
}