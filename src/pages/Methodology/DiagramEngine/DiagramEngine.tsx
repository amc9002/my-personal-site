import { type ReactNode } from "react";

// --- ТЫПЫ ---

export type DiagramColor = "#2E7D32" | "#D32F2F" | "#B28900" | "black" | "#666";

interface BaseProps {
  x: number;
  y: number;
  color?: DiagramColor;
}

export interface NodeProps extends BaseProps {
  label: string;
  width?: number;
  height?: number;
  type?: "rect" | "ellipse";
  strokeWidth?: number;
  dashed?: boolean;
}

export interface ProcessArrowProps extends BaseProps {
  width: number;
  height: number;
  label: string;
  opacity?: number;
  textPosition?: "top" | "bottom";
  textOffsetX?: number;
  textOffsetY?: number;
}

export interface SubCause {
  label: string;
  dx: number;
}

export interface SmartBoneProps extends Omit<BaseProps, "x" | "y"> {
  spineX: number;
  spineY: number;
  length: number;
  angle: number;
  label?: string;
  textFlip?: boolean;
  subCauses?: SubCause[];
}

export interface SmartArrowProps extends BaseProps {
  angle: number;
  length: number;
  label?: string;
  fontSize?: number;
  thickness?: number;
}

// --- УТЫЛІТЫ ---

const getMarkerId = (color: string) => {
  const map: Record<string, string> = {
    "#2E7D32": "head-green",
    "#D32F2F": "head-red",
    "#B28900": "head-gold",
    black: "head-black",
    "#666": "head-gray",
  };
  return `url(#${map[color] || "head-black"})`;
};

const getEndPoint = (x: number, y: number, angle: number, length: number) => ({
  ex: x + length * Math.cos((angle * Math.PI) / 180),
  ey: y + length * Math.sin((angle * Math.PI) / 180),
});

// --- КАМПАНЕНТЫ ---

export const DiagramCanvas = ({
  children,
  viewBox,
}: {
  children: ReactNode;
  viewBox: string;
}) => (
  <svg
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      {["#2E7D32", "#D32F2F", "#B28900", "black", "#666"].map((c) => (
        <marker
          key={c}
          id={getMarkerId(c).replace("url(#", "").replace(")", "")}
          markerWidth={10}
          markerHeight={7}
          refX={9}
          refY={3.5}
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill={c} />
        </marker>
      ))}
    </defs>
    {children}
  </svg>
);

// 1. Вярнуў SmartBone (для "Рыбы")
export const SmartBone = ({
  spineX,
  spineY,
  length,
  angle,
  label,
  color = "black",
  textFlip = false,
  subCauses = [],
}: SmartBoneProps) => {
  const rad = (angle * Math.PI) / 180;
  const startX = spineX + length * Math.cos(rad);
  const startY = spineY + length * Math.sin(rad);
  const midX = (spineX + startX) / 2;
  const midY = (spineY + startY) / 2;
  const textRot = textFlip ? angle + 180 : angle;

  return (
    <g>
      <line
        x1={startX}
        y1={startY}
        x2={spineX}
        y2={spineY}
        stroke={color}
        strokeWidth={2}
        markerEnd={getMarkerId(color)}
      />
      {label && (
        <text
          x={midX}
          y={midY}
          transform={`rotate(${textRot}, ${midX}, ${midY}) translate(0, -10)`}
          fill={color}
          fontSize="11"
          fontWeight="900"
          textAnchor="middle"
        >
          {label}
        </text>
      )}
      {subCauses.map((sc, i) => {
        const arrowX = spineX + sc.dx;
        const intersectY = spineY + sc.dx * Math.tan(rad);
        return (
          <g key={i}>
            <line
              x1={arrowX}
              y1={intersectY - 35}
              x2={arrowX}
              y2={intersectY}
              stroke="#666"
              strokeWidth={1}
              markerEnd="url(#head-black)"
            />
            <text
              x={arrowX}
              y={intersectY - 40}
              fill="#666"
              fontSize="9"
              textAnchor="middle"
              fontWeight="bold"
            >
              {sc.label}
            </text>
          </g>
        );
      })}
    </g>
  );
};

// 2. Вярнуў ProcessArrow
export const ProcessArrow = ({
  x,
  y,
  width,
  height,
  label,
  color = "black",
  opacity = 1,
  textPosition = "bottom",
  textOffsetX = 0,
  textOffsetY = 0,
}: ProcessArrowProps) => {
  const arrowHeadWidth = height > 50 ? 40 : 25;
  const headExtension = height < 20 ? height * 0.6 : height * 0.1;
  const tailW = width - arrowHeadWidth;
  const d = `M ${x} ${y + height * 0.2} H ${x + tailW} V ${y - headExtension} L ${x + width} ${y + height / 2} L ${x + tailW} ${y + height + headExtension} V ${y + height * 0.8} H ${x} Z`;
  const baseTextX = x + tailW / 2;
  const baseTextY = textPosition === "bottom" ? y + height + 20 : y - 12;

  return (
    <g>
      <path
        d={d}
        fill={color}
        fillOpacity={opacity}
        stroke={color}
        strokeWidth={1.5}
      />
      <text
        x={baseTextX + textOffsetX}
        y={baseTextY + textOffsetY}
        fill={color}
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
};

// 3. Вярнуў SmartPath
export const SmartPath = ({
  points,
  color = "black",
  width = 2,
  marker = true,
  dashed = false,
}: {
  points: string;
  color?: string;
  width?: number;
  marker?: boolean;
  dashed?: boolean;
}) => (
  <path
    d={points}
    stroke={color}
    strokeWidth={width}
    fill="none"
    strokeDasharray={dashed ? "5 5" : undefined}
    markerEnd={marker ? getMarkerId(color) : undefined}
  />
);

// 4. SmartArrow (новы, для вектараў)
export const SmartArrow = ({
  x,
  y,
  angle,
  length,
  label,
  color = "black",
  fontSize = 12,
  thickness = 2,
}: SmartArrowProps) => {
  const { ex, ey } = getEndPoint(x, y, angle, length);
  const midX = (x + ex) / 2;
  const midY = (y + ey) / 2;
  const textRot = angle > 90 && angle < 270 ? angle + 180 : angle;

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={ex}
        y2={ey}
        stroke={color}
        strokeWidth={thickness}
        markerEnd={getMarkerId(color)}
      />
      {label && (
        <text
          x={midX}
          y={midY}
          transform={`rotate(${textRot}, ${midX}, ${midY}) translate(0, -8)`}
          fill={color}
          fontSize={fontSize}
          fontWeight="bold"
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  );
};

export const Node = ({
  x,
  y,
  label,
  width = 130,
  height = 40,
  color = "black",
  type = "rect",
  strokeWidth = 2,
  dashed = false,
}: NodeProps) => (
  <g>
    {type === "rect" ? (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="white"
        strokeDasharray={dashed ? "5 5" : undefined}
      />
    ) : (
      <ellipse
        cx={x + width / 2}
        cy={y + height / 2}
        rx={width / 2}
        ry={height / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="white"
        strokeDasharray={dashed ? "5 5" : undefined}
      />
    )}
    <text
      x={x + width / 2}
      y={y + height / 2}
      textAnchor="middle"
      dominantBaseline="middle"
      fill={color}
      fontSize={12}
      fontWeight="bold"
    >
      {label}
    </text>
  </g>
);

export const PointOfFocus = ({ x, y, color = "#D32F2F" }: BaseProps) => (
  <g>
    <circle cx={x} cy={y} r={6} fill="white" stroke={color} strokeWidth={2} />
    <circle cx={x} cy={y} r={2} fill={color} />
  </g>
);
