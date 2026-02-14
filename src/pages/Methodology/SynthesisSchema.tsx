import styles from "./AnalysisSchema.module.css";

const SynthesisSchema = () => {
  return (
    <div className={styles.media}>
      <svg
        viewBox="0 0 800 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {/* OVER-SYSTEM / ENVIRONMENT (Вялікі прастакутнік на фоне) */}
        <rect
          x="10"
          y="40"
          width="780"
          height="200"
          rx="15"
          fill="#f1f5f9"
          stroke="#e2e8f0"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
        <text
          x="30"
          y="30"
          fill="#64748b"
          fontSize="12"
          fontWeight="bold"
          letterSpacing="0.1em"
        >
          OVER-SYSTEM / ENVIRONMENT (EXTERNAL RESOURCES)
        </text>

        {/* LIGHT SUBJECT (Прывідная крыніца) */}
        <rect
          x="60"
          y="110"
          width="120"
          height="60"
          rx="8"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="white"
          fillOpacity="0.6"
        />
        <text
          x="120"
          y="145"
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="14"
          fontWeight="bold"
        >
          SUBJECT
        </text>

        {/* IDEAL PROCESS (Стрэлка выходзіць з фону надсістэмы) */}
        <path
          d="M10 140H600"
          stroke="#10b981"
          strokeWidth="5"
          markerEnd="url(#arrowhead-green)"
        />
        <text
          x="340"
          y="125"
          textAnchor="middle"
          fill="#059669"
          fontSize="16"
          fontWeight="bold"
          fontStyle="italic"
        >
          IDEAL PROCESS (POWERED BY ENVIRONMENT)
        </text>

        {/* LIGHT OBJECT (Аб'ект, які трансфармуецца) */}
        <rect
          x="610"
          y="110"
          width="120"
          height="60"
          rx="8"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="white"
          fillOpacity="0.6"
        />
        <text
          x="670"
          y="145"
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="14"
          fontWeight="bold"
        >
          OBJECT
        </text>

        {/* PREFERABLY RESULT (Мэтавая кропка) */}
        <circle
          cx="670"
          cy="270"
          r="45"
          stroke="#f59e0b"
          strokeWidth="3"
          fill="#fffbeb"
        />
        <text
          x="670"
          y="265"
          textAnchor="middle"
          fill="#b45309"
          fontSize="12"
          fontWeight="bold"
        >
          PREFERABLY
        </text>
        <text
          x="670"
          y="282"
          textAnchor="middle"
          fill="#b45309"
          fontSize="14"
          fontWeight="bold"
        >
          RESULT
        </text>

        {/* Стрэлка выніку */}
        <path
          d="M670 170V225"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="4 2"
          markerEnd="url(#arrowhead-gold)"
        />

        <defs>
          <marker
            id="arrowhead-green"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
          <marker
            id="arrowhead-gold"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default SynthesisSchema;
