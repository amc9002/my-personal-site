import { Input } from "../../ui/Input/Input";
import type { ProjectFormData } from "../../types";

interface MainContentProps {
  formData: ProjectFormData;
  onChange: (
    field: keyof Omit<ProjectFormData, "solutions">,
    value: string,
  ) => void;
  onTranslate: () => void;
}

export const MainContentForm: React.FC<MainContentProps> = ({
  formData,
  onChange,
  onTranslate,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Input
        label="Назва праекта"
        value={formData.title}
        onChange={(v) => onChange("title", v)}
      />

      <div>
        <button type="button" onClick={onTranslate}>
          AI Пераклад
        </button>
      </div>
    </div>
  );
};
