import { type ReactNode } from "react";

// --- ТЫПЫ ---

export type DiagramColor = "#2E7D32" | "#D32F2F" | "#B28900" | "black";

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
  textOffsetX?: number; // Зрух па гарызанталі
  textOffsetY?: number; // Зрух па вертыкалі
}

// --- УТЫЛІТЫ ---

// Функцыя для атрымання ID маркера на аснове колеру
const getMarkerId = (color: string) => {
  const map: Record<string, string> = {
    "#2E7D32": "head-green",
    "#D32F2F": "head-red",
    "#B28900": "head-gold",
    black: "head-black",
  };
  return `url(#${map[color] || "head-black"})`;
};

// --- КАМПАНЕНТЫ ---

export const DiagramCanvas = ({
  children,
  viewBox, // Прыбіраем дэфолтнае значэнне адсюль!
}: {
  children: ReactNode;
  viewBox: string; // Цяпер гэта абавязкова!
}) => (
  <svg
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // preserveAspectRatio="xMidYMin meet" — прыціскае схему да верху
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    <defs>
      <marker
        id="head-green"
        markerWidth={10}
        markerHeight={7}
        refX={9}
        refY={3.5}
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#2E7D32" />
      </marker>
      <marker
        id="head-red"
        markerWidth={10}
        markerHeight={7}
        refX={9}
        refY={3.5}
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#D32F2F" />
      </marker>
      <marker
        id="head-gold"
        markerWidth={10}
        markerHeight={7}
        refX={9}
        refY={3.5}
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#B28900" />
      </marker>
      <marker
        id="head-black"
        markerWidth={10}
        markerHeight={7}
        refX={9}
        refY={3.5}
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="black" />
      </marker>
    </defs>
    <defs>
      <marker
        id="arrowhead"
        markerWidth="4" // Шырыня джала будзе ў 4 разы больш за таўшчыню лініі
        markerHeight="4"
        refX="2" // Кропка прывязкі
        refY="2"
        orient="auto"
        markerUnits="strokeWidth" // ВОСЬ ГЭТА МАГІЯ
      >
        <path d="M0,0 L4,2 L0,4 z" fill="context-fill" />
      </marker>
    </defs>
    {children}
  </svg>
);

// Node — гэта базавы блок (прастакутнік або авал)
export const Node = ({
  x,
  y,
  label,
  width = 130,
  height = 50,
  color = "black",
  type = "rect",
  strokeWidth = 2.5,
  dashed = false,
}: NodeProps) => (
  <g>
    {type === "rect" ? (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={2}
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
      fontSize={14}
      fontWeight={900}
    >
      {label}
    </text>
  </g>
);

// ProcessArrow — універсальная стрэлка-працэс (пяцікутнік)
export const ProcessArrow = ({
  x,
  y,
  width,
  height,
  label,
  color = "black",
  opacity = 1,
  textPosition = "bottom",
  textOffsetX = 0, // па змаўчанні 0
  textOffsetY = 0, // па змаўчанні 0
}: ProcessArrowProps) => {
  const arrowHeadWidth = height > 50 ? 40 : 25;
  const headExtension = height < 20 ? height * 0.6 : height * 0.1;
  const tailW = width - arrowHeadWidth;

  const d = `
    M ${x} ${y + height * 0.2} 
    H ${x + tailW} 
    V ${y - headExtension} 
    L ${x + width} ${y + height / 2} 
    L ${x + tailW} ${y + height + headExtension} 
    V ${y + height * 0.8} 
    H ${x} 
    Z
  `;

  // Разлік базавай пазіцыі тэксту
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
        x={baseTextX + textOffsetX} // Дадаем зрух
        y={baseTextY + textOffsetY} // Дадаем зрух
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

// SmartPath пакідаем ТОЛЬКІ для касмічных траекторый (калі трэба V-H павароты)
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
