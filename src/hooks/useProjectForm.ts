import { useState } from 'react';
import { type ProjectFormData, type Solution } from '../admin/types';

export const useProjectForm = (initialData: ProjectFormData) => {
  const [formData, setFormData] = useState<ProjectFormData>(initialData);

  const handleInputChange = (field: keyof Omit<ProjectFormData, 'solutions'>, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSolutionChange = (index: number, field: keyof Solution, value: string) => {
    setFormData((prev) => {
      const newSolutions = [...prev.solutions];
      newSolutions[index] = { ...newSolutions[index], [field]: value };
      return { ...prev, solutions: newSolutions };
    });
  };

  return { formData, handleInputChange, handleSolutionChange, setFormData };
};