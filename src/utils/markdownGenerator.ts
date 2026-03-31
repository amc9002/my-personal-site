import { type ProjectFormData } from '../admin/types';

export const generateProjectMarkdown = (formData: ProjectFormData): string => {
  return `---
id: ${formData.id}
title: "${formData.title}"
category: "${formData.category}"
keyFactor: "${formData.keyFactor}"
---

### Analysis
${formData.deduction}

**Physics Chain:** ${formData.physicsChain}

### Problem
${formData.problemDescription}

${formData.solutions
  .map((sol) => `
### Solution: ${sol.title}
**Idea:** ${sol.idea}
**TRIZ:** ${sol.triz}
**Conclusion:** ${sol.conclusion}
**Metrics:** ${sol.metrics}
`).join('\n\n')}
`;
};