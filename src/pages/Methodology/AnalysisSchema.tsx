import {
  DiagramCanvas,
  Node,
  ProcessArrow,
  SmartPath,
} from "./DiagramEngine/DiagramEngine";

const AnalysisSchema = () => {
  // --- 1. ПАРАМЕТРЫ ---
  const startX = 20;
  const mainY = 110;
  const blockW = 130;
  const blockH = 50;
  const noseW = 30;

  // SUBJECT
  const sub = { x: startX, y: mainY - blockH / 2, w: blockW, h: blockH };
  const subjectNose = `M ${sub.x + sub.w} ${sub.y} L ${sub.x + sub.w + noseW} ${mainY} L ${sub.x + sub.w} ${sub.y + sub.h} Z`;

  // USEFUL PROCESS
  const usefulX = sub.x + sub.w + noseW;
  const usefulW = 100;

  // OBJECT (Пачынаецца дакладна пасля зялёнай стрэлкі)
  const objX = usefulX + usefulW;

  // RESULT
  const nextStepW = 80;
  const resultX = objX + blockW + nextStepW;
  const resultW = 110;

  // PREFERABLY RESULT (Рамка вакол Result)
  const frameSize = 170;
  const frameX = resultX + resultW / 2 - frameSize / 2;
  const frameY = mainY - frameSize / 2;

  // --- ПАРАМЕТРЫ ШКОДЫ (Адзіная крыніца праўды) ---
  const harmStartX = sub.x + 80; // Кропка, дзе авалы выраўніваюцца па левым краі
  const harmFirstY = sub.y + 220; // Дзе пачынаецца першы авал адносна суб'екта
  const harmGap = 50; // Адлегласць паміж аваламі
  const harmW = 220;
  const harmH = 44;

  const harmItems = [
    { label: "HARM FOR ENVIRONMENT", dx: 20 },
    { label: "HARM FOR STAFF", dx: 35 },
    { label: "HARM FOR EQUIPMENT", dx: 50 },
    { label: "HARM FOR REPUTATION", dx: 65 },
  ];

  // Extra Costs (прывязаны да цэнтра калоны авалаў)
  const extraCostsX = harmStartX + harmW + 90;
  const extraCostsY = harmFirstY + harmGap * 1.5;

  // --- 2. МАЛЮЕМ (Толькі гатовыя лічбы) ---
  return (
    <DiagramCanvas viewBox="0 0 750 480">
      {/* ФОНАВАЯ СТРЭЛКА (Залатая) */}
      <ProcessArrow
        x={usefulX}
        y={mainY - 60}
        width={frameX - usefulX}
        height={120}
        color="#B28900"
        opacity={0.06}
        label="PREFERABLY PROCESS"
        textOffsetX={-40}
        textOffsetY={-20}
      />

      {/* SUBJECT */}
      <g>
        <rect
          x={sub.x}
          y={sub.y}
          width={sub.w}
          height={sub.h}
          rx="2"
          stroke="black"
          strokeWidth="2.5"
          fill="white"
        />
        <path d={subjectNose} fill="white" stroke="black" strokeWidth="2.5" />
        <text
          x={sub.x + sub.w / 2}
          y={mainY + 6}
          textAnchor="middle"
          fill="black"
          fontSize="16"
          fontWeight="900"
        >
          SUBJECT
        </text>
      </g>

      {/* USEFUL PROCESS (Зялёная стрэлка) */}
      <ProcessArrow
        x={usefulX}
        y={mainY - 5}
        width={usefulW}
        height={10}
        label="USEFUL PROCESS"
        color="#2E7D32"
        textPosition="top"
      />

      {/* OBJECT */}
      <Node x={objX} y={sub.y} label="OBJECT" width={blockW} height={blockH} />

      {/* Стрэлка да RESULT */}
      <ProcessArrow
        x={objX + blockW}
        y={mainY - 5}
        width={nextStepW}
        height={10}
        label=""
        color="#2E7D32"
      />

      {/* RESULT */}
      <Node
        x={resultX}
        y={sub.y + 5}
        label="RESULT"
        color="#2E7D32"
        width={resultW}
        height={40}
      />

      {/* РАМКА І ТЭКСТ */}
      <rect
        x={frameX}
        y={frameY}
        width={frameSize}
        height={frameSize}
        rx="2"
        stroke="#B28900"
        strokeWidth={2}
        strokeDasharray="6 4"
      />
      <text
        x={frameX + frameSize / 2}
        y={frameY + frameSize + 25}
        textAnchor="middle"
        fill="#B28900"
        fontSize="12"
        fontWeight="900"
      >
        PREFERABLY RESULT
      </text>

      {/* КАСКАД ШКОДЫ — цалкам аўтаматычны */}
      <g>
        {harmItems.map((item, i) => {
          // 1. Вылічаем Y для авала (зверху ўніз)
          const currentY = harmFirstY + i * harmGap;

          // 2. Вылічаем dx для лініі (чым ніжэй авал, тым лявей павінна быць лінія)
          // Формула: самы малы dx (20) да апошняга элемента (i=3)
          const currentDx = 20 + (harmItems.length - 1 - i) * 15;

          return (
            <g key={`harm-${i}`}>
              {/* Лінія: ідзе ад вылічанага Dx да цэнтра авала па вертыкалі */}
              <SmartPath
                points={`M ${sub.x + currentDx} ${sub.y + sub.h} V ${currentY} H ${harmStartX}`}
                color="#D32F2F"
                marker={false}
              />
              {/* Авал шкоды */}
              <Node
                x={harmStartX}
                y={currentY - harmH / 2}
                label={item.label}
                type="ellipse"
                width={harmW}
                height={harmH}
                color="#D32F2F"
              />
            </g>
          );
        })}
      </g>

      {/* АВАЛЫ ШКОДЫ */}
      <g>
        {harmItems.map((item, i) => {
          // Для SmartPath targetY павінен быць ідэнтычны Node y + height/2
          const currentY = harmFirstY + i * harmGap;

          return (
            <g key={i}>
              {/* Лінія ад Subject да авала (разблытаная) */}
              <SmartPath
                points={`M ${sub.x + harmItems[harmItems.length - 1 - i].dx} ${sub.y + sub.h} 
                         V ${currentY} 
                         H ${harmStartX}`}
                color="#D32F2F"
                marker={false}
              />
              {/* Авал шкоды */}
              <Node
                x={harmStartX}
                y={currentY - harmH / 2}
                label={item.label}
                type="ellipse"
                width={harmW}
                height={harmH}
                color="#D32F2F"
              />
            </g>
          );
        })}
      </g>

      {/* EXTRA COSTS — прывязаны да калоны авалаў */}
      <SmartPath
        points={`M ${harmStartX + harmW} ${extraCostsY} H ${extraCostsX}`}
        color="#D32F2F"
        width={6}
      />
      <Node
        x={extraCostsX}
        y={extraCostsY - 55}
        label="EXTRA COSTS"
        type="ellipse"
        width={110}
        height={110}
        color="#D32F2F"
        strokeWidth={3}
      />
    </DiagramCanvas>
  );
};

export default AnalysisSchema;
