export interface CaseStep {
  title: string;
  text: string;
  image?: string;
  type: string;
}

export interface CaseItem {
  id: string;
  title: string;
  previewImage: string;
  preview: { summary: string };
  analysis: CaseStep[];
}