import React, { useState } from "react";
import { AdminLayout } from "./layout/AdminLayout";
import { SolutionCard } from "./features/CaseBuilder/SolutionCard";
import { useProjectForm } from "../hooks/useProjectForm";
import { generateProjectMarkdown } from "../utils/markdownGenerator";
import { type ProjectFormData } from "./types";
import { MainContentForm } from "./features/CaseBuilder/MainContentForm";
import { ProjectInfo } from "./features/CaseBuilder/ProjectInfo/ProjectInfo";
import { parseMarkdownToState } from "../utils/markdownParser";
import layoutStyles from "./layout/AdminLayout.module.css";
import { Button } from "./ui/Button/Button";

const initialData: ProjectFormData = {
  id: "001",
  title: "",
  category: "Industrial Engineering / TRIZ",
  keyFactor: "",
  deduction: "",
  physicsChain: "",
  problemDescription: "",
  solutions: [{ title: "", idea: "", triz: "", conclusion: "", metrics: "" }],
};

const AdminPage: React.FC = () => {
  const [lang, setLang] = useState<"be" | "en" | "de" | "pl" | "ru">("be");

  const { formData, handleSolutionChange, handleInputChange, setFormData } =
    useProjectForm(initialData);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setFormData(parseMarkdownToState(text));
    };

    reader.readAsText(file);
  };

  return (
    <AdminLayout
      topBar={
        <>
          <input
            id="md-upload"
            type="file"
            accept=".md"
            className={layoutStyles.hiddenInput}
            onChange={handleFileUpload}
          />

          <label htmlFor="md-upload">
            <Button variant="ghost">Загрузіць .md</Button>
          </label>

          <select
            aria-label="Language"
            value={lang}
            onChange={(e) =>
              setLang(e.target.value as "be" | "en" | "de" | "pl" | "ru")
            }
          >
            <option value="be">BE</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="pl">PL</option>
            <option value="ru">RU</option>
          </select>
        </>
      }
    >
      <h1>Case Builder</h1>

      <ProjectInfo
        id={formData.id}
        category={formData.category}
        onChange={handleInputChange}
      />

      <MainContentForm
        formData={formData}
        onChange={handleInputChange}
        onTranslate={() => {}}
      />

      <div>Рашэнні</div>

      {formData.solutions.map((sol, index) => (
        <SolutionCard
          key={index}
          index={index}
          data={sol}
          onChange={handleSolutionChange}
          onRemove={(idx) => {
            const newSols = formData.solutions.filter((_, i) => i !== idx);
            setFormData({ ...formData, solutions: newSols });
          }}
        />
      ))}

      <Button
        variant="primary"
        onClick={() =>
          setFormData({
            ...formData,
            solutions: [
              ...formData.solutions,
              { title: "", idea: "", triz: "", conclusion: "", metrics: "" },
            ],
          })
        }
      >
        Дадаць рашэнне
      </Button>

      <Button
        variant="primary"
        onClick={() => {
          const content = generateProjectMarkdown(formData);
          const blob = new Blob([content], { type: "text/markdown" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `project${formData.id}_${lang}.md`;
          a.click();
        }}
      >
        Захаваць файл
      </Button>
    </AdminLayout>
  );
};

export default AdminPage;
