import { DiagramCanvas, ProcessArrow } from "./DiagramEngine";

const AnalysisSchema = () => {
  // --- 1. ПАРАМЕТРЫ ---
  const startX = 20;
  const mainY = 110;

  // OVER-SYSTEM
  const overFrameW = 350;
  const overFrameH = 200;

  //PREFERABLY PROCESS
  const prefStartX = startX + 50;
  const prefW = 400;

  // PREFERABLY RESULT (Рамка вакол Result)
  const frameSize = 170;
  const prefFrameX = prefStartX + prefW;
  const prefFrameY = mainY - frameSize / 2;

  // --- 2. МАЛЮЕМ (Толькі гатовыя лічбы) ---
  return (
    <DiagramCanvas viewBox="0 0 750 220">
      {/* РАМКА НАДСІСТЭМЫ */}
      <rect
        x={startX}
        y={mainY - overFrameH / 2}
        width={overFrameW}
        height={overFrameH}
        rx="2"
        stroke="#2E7D32"
        strokeWidth={2}
      />
      {/**ПОДПІС*/}
      <text
        x={startX + overFrameW / 2}
        y={mainY - overFrameH / 3}
        textAnchor="middle"
        fill="#2E7D32"
        fontSize="12"
        fontWeight="900"
      >
        OVER-SYSTEM / ENVIRONMENT RESOURCES
      </text>

      {/* ФОНАВАЯ СТРЭЛКА (Залатая) */}
      <ProcessArrow
        x={prefStartX}
        y={mainY - 60}
        width={prefW}
        height={120}
        color="#B28900"
        opacity={0.06}
        label="PREFERABLY PROCESS"
        textOffsetX={20}
        textOffsetY={-75}
      />

      {/* РАМКА І ТЭКСТ */}
      <rect
        x={prefFrameX}
        y={prefFrameY}
        width={frameSize}
        height={frameSize}
        rx="2"
        stroke="#B28900"
        strokeWidth={2}
      />
      <text
        x={prefFrameX + frameSize / 2}
        y={prefFrameY + frameSize / 2}
        textAnchor="middle"
        fill="#B28900"
        fontSize="12"
        fontWeight="900"
      >
        PREFERABLY RESULT
      </text>
    </DiagramCanvas>
  );
};

export default AnalysisSchema;
