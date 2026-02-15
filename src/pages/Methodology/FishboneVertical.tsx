import { DiagramCanvas, SmartBone, Node } from "./DiagramEngine/DiagramEngine";

const calcAngle = (baseAngle: number, delta: number, direction: "L" | "R") => {
  return direction === "L" ? baseAngle + delta : 180 - (baseAngle + delta);
};

const FishboneVertical = () => {
  const cX = 200;
  const cY = 70;
  const spineLength = 340;
  const headY = cY + spineLength;
  const firstBonesY = headY - 40;
  const deltaY = 85;

  const baseAngle = 200;
  const angleStep = 5;

  return (
    <DiagramCanvas viewBox="0 0 400 470">
      {/* OTHERS: цяпер проста тэкст з пункцірам, без блока */}
      <text
        x={cX}
        y={25}
        fill="black"
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
      >
        OTHERS
      </text>
      <line
        x1={cX}
        y1={35}
        x2={cX}
        y2={cY}
        stroke="black"
        strokeWidth={1}
        strokeDasharray="4 4"
      />

      {/* ХРЫБЕТ */}
      <line
        x1={cX}
        y1={cY}
        x2={cX}
        y2={headY}
        stroke="black"
        strokeWidth={2}
        markerEnd="url(#head-black)"
      />

      {/* ГАЛАВА (ВЫНІК) */}
      <Node
        x={cX - 70}
        y={headY}
        label="PROBLEM"
        color="#D32F2F"
        width={140}
        height={50}
      />

      {/* ЯРУСЫ КАСЦЕЙ (застаюцца як былі) */}
      <SmartBone
        spineX={cX}
        spineY={firstBonesY}
        length={140}
        angle={calcAngle(baseAngle, 0, "L")}
        label="PEOPLE"
        textFlip
        subCauses={[
          { label: "Fatigue", dx: -100 },
          { label: "Training", dx: -50 },
        ]}
      />
      <SmartBone
        spineX={cX}
        spineY={firstBonesY}
        length={140}
        angle={calcAngle(baseAngle, 0, "R")}
        label="METHODS"
        subCauses={[
          { label: "Standard", dx: 50 },
          { label: "Process", dx: 100 },
        ]}
      />

      {/* ... (астатнія ярусы MEASURE, ENVIRON, EQUIPMENT, MATERIALS) ... */}
      <SmartBone
        spineX={cX}
        spineY={firstBonesY - deltaY}
        length={140}
        angle={calcAngle(baseAngle, angleStep, "L")}
        label="MEASURE"
        textFlip
        subCauses={[
          { label: "Precision", dx: -90 },
          { label: "Bias", dx: -45 },
        ]}
      />
      <SmartBone
        spineX={cX}
        spineY={firstBonesY - deltaY}
        length={140}
        angle={calcAngle(baseAngle, angleStep, "R")}
        label="ENVIRONMENT"
        subCauses={[
          { label: "Humidity", dx: 45 },
          { label: "Temp", dx: 95 },
        ]}
      />

      <SmartBone
        spineX={cX}
        spineY={firstBonesY - deltaY * 2}
        length={120}
        angle={calcAngle(baseAngle, angleStep * 2, "L")}
        label="EQUIPMENT"
        textFlip
        subCauses={[
          { label: "Old Tools", dx: -70 },
          { label: "Repair", dx: -30 },
        ]}
      />
      <SmartBone
        spineX={cX}
        spineY={firstBonesY - deltaY * 2}
        length={120}
        angle={calcAngle(baseAngle, angleStep * 2, "R")}
        label="MATERIALS"
        subCauses={[
          { label: "Quality", dx: 30 },
          { label: "Supply", dx: 70 },
        ]}
      />

      {/* ХВОСТ: злучае пункцірную лінію і хрыбет */}
      <path
        d={`M ${cX - 20} ${cY - 15} L ${cX} ${cY} L ${cX + 20} ${cY - 15}`}
        stroke="black"
        strokeWidth={2}
        fill="none"
      />
    </DiagramCanvas>
  );
};
export default FishboneVertical;
