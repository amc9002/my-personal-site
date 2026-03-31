import React, { memo } from "react";
import { Card } from "../../ui/Card/Card";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";

interface Solution {
  title: string;
  idea: string;
  triz: string;
  conclusion: string;
  metrics: string;
}

interface SolutionCardProps {
  index: number;
  data: Solution;
  onChange: (index: number, field: keyof Solution, value: string) => void;
  onRemove: (index: number) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = memo(
  ({ index, data, onChange, onRemove }) => {
    return (
      <Card
        title={`Рашэнне №${index + 1}`}
        action={
          <Button variant="danger" onClick={() => onRemove(index)}>
            Выдаліць
          </Button>
        }
      >
        <Input
          label="Назва рашэння"
          value={data.title}
          onChange={(v) => onChange(index, "title", v)}
        />

        <Input
          label="Ідэя"
          value={data.idea}
          onChange={(v) => onChange(index, "idea", v)}
          textarea
        />

        <Input
          label="TRIZ прынцып"
          value={data.triz}
          onChange={(v) => onChange(index, "triz", v)}
        />

        <Input
          label="Высновы / Рызыкі"
          value={data.conclusion}
          onChange={(v) => onChange(index, "conclusion", v)}
          textarea
        />

        <Input
          label="Метрыкі / Эфект"
          value={data.metrics}
          onChange={(v) => onChange(index, "metrics", v)}
          textarea
        />
      </Card>
    );
  },
);
