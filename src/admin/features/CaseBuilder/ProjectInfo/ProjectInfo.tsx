import React from "react";
import type { ProjectFormData } from "../../../types";

interface ProjectInfoProps {
  id: string;
  category: string;
  onChange: (
    field: keyof Omit<ProjectFormData, "solutions">,
    value: string,
  ) => void;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  id,
  category,
  onChange,
}) => {
  return (
    <div className="row">
      <label>Нумар праекта</label>
      <input
        placeholder="ID праекта (напр. 001)"
        value={id}
        onChange={(e) => onChange("id", e.target.value)}
      />
      <label>Сфера/Катэгорыя</label>
      <input
        placeholder="Катэгорыя"
        value={category}
        onChange={(e) => onChange("category", e.target.value)}
      />
    </div>
  );
};
