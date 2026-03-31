import { type ProjectFormData, type Solution } from "../admin/types";

export const parseMarkdownToState = (text: string): ProjectFormData => {
  // 1. Здабываем метададзеныя (Frontmatter)
  const id = text.match(/id: (.*)/)?.[1] || "";
  const title = text.match(/title: "(.*)"/)?.[1] || "";
  const category = text.match(/category: "(.*)"/)?.[1] || "";
  const keyFactor = text.match(/keyFactor: "(.*)"/)?.[1] || "";

  // 2. Здабываем блокі тэксту праз рэгулярныя выразы
  const deduction = text.match(/### Analysis\n([\s\S]*?)\n\n\*\*/)?.[1]?.trim() || "";
  const physicsChain = text.match(/\*\*Physics Chain:\*\* (.*)/)?.[1] || "";
  const problemDescription = text.match(/### Problem\n([\s\S]*?)\n\n### Solution/)?.[1]?.trim() || "";

  // 3. Здабываем рашэнні (разразаем тэкст па маркерах Solution)
  const solutions: Solution[] = [];
  const solutionBlocks = text.split("### Solution:").slice(1);

  solutionBlocks.forEach((block) => {
    solutions.push({
      title: block.split("\n")[0].trim(),
      idea: block.match(/\*\*Idea:\*\* (.*)/)?.[1] || "",
      triz: block.match(/\*\*TRIZ:\*\* (.*)/)?.[1] || "",
      conclusion: block.match(/\*\*Conclusion:\*\* (.*)/)?.[1] || "",
      metrics: block.match(/\*\*Metrics:\*\* (.*)/)?.[1] || "",
    });
  });

  return {
    id,
    title,
    category,
    keyFactor,
    deduction,
    physicsChain,
    problemDescription,
    solutions: solutions.length > 0 ? solutions : [{ title: "", idea: "", triz: "", conclusion: "", metrics: "" }],
  };
};