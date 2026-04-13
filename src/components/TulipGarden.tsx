import { motion } from "framer-motion";

const Tulip = ({
  x,
  color,
  stemHeight,
  delay,
  scale = 1,
}: {
  x: number;
  color: string;
  stemHeight: number;
  delay: number;
  scale?: number;
}) => {
  const petalColors: Record<string, { main: string; dark: string; light: string }> = {
    red: { main: "#c0392b", dark: "#962d22", light: "#e74c3c" },
    pink: { main: "#e84393", dark: "#b8336e", light: "#fd79a8" },
    yellow: { main: "#f1c40f", dark: "#d4ac0d", light: "#f9e854" },
    orange: { main: "#e67e22", dark: "#bf6516", light: "#f0a04b" },
    purple: { main: "#8e44ad", dark: "#6c3483", light: "#a569bd" },
    white: { main: "#ecf0f1", dark: "#bdc3c7", light: "#fdfefe" },
  };

  const c = petalColors[color] || petalColors.red;
  const stemBase = 500;
  const tulipTop = stemBase - stemHeight;

  return (
    <motion.g
      style={{ originX: `${x}px`, originY: `${stemBase}px` }}
      animate={{ rotate: [0, 1.5, -1.5, 0.8, -0.5, 0] }}
      transition={{
        duration: 5 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      transform={`translate(0, 0)`}
    >
      {/* Stem */}
      <path
        d={`M${x} ${stemBase} Q${x + 3} ${tulipTop + 60} ${x} ${tulipTop + 30}`}
        stroke="#4a7c4e"
        strokeWidth={3.5 * scale}
        fill="none"
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d={`M${x} ${stemBase - stemHeight * 0.35} Q${x - 28 * scale} ${stemBase - stemHeight * 0.5} ${x - 18 * scale} ${stemBase - stemHeight * 0.65}`}
        fill="#3d7a42"
        opacity={0.85}
      />
      <path
        d={`M${x} ${stemBase - stemHeight * 0.35} Q${x - 20 * scale} ${stemBase - stemHeight * 0.45} ${x - 18 * scale} ${stemBase - stemHeight * 0.65}`}
        fill="#6bba72"
        opacity={0.35}
      />

      {/* Right leaf */}
      <path
        d={`M${x} ${stemBase - stemHeight * 0.55} Q${x + 22 * scale} ${stemBase - stemHeight * 0.65} ${x + 14 * scale} ${stemBase - stemHeight * 0.78}`}
        fill="#3d7a42"
        opacity={0.8}
      />

      {/* Tulip head group */}
      <g transform={`translate(${x}, ${tulipTop + 25})`}>
        {/* Back petals */}
        <ellipse cx={-7 * scale} cy={-8 * scale} rx={10 * scale} ry={22 * scale} fill={c.dark} />
        <ellipse cx={7 * scale} cy={-8 * scale} rx={10 * scale} ry={22 * scale} fill={c.dark} />

        {/* Center petal */}
        <ellipse cx={0} cy={-10 * scale} rx={9 * scale} ry={24 * scale} fill={c.main} />

        {/* Front left petal */}
        <ellipse cx={-8 * scale} cy={-5 * scale} rx={11 * scale} ry={20 * scale} fill={c.main} opacity={0.9} />
        {/* Front right petal */}
        <ellipse cx={8 * scale} cy={-5 * scale} rx={11 * scale} ry={20 * scale} fill={c.main} opacity={0.9} />

        {/* Highlights */}
        <ellipse cx={-3 * scale} cy={-14 * scale} rx={4 * scale} ry={10 * scale} fill={c.light} opacity={0.4} />
        <ellipse cx={5 * scale} cy={-12 * scale} rx={3 * scale} ry={8 * scale} fill={c.light} opacity={0.25} />
      </g>
    </motion.g>
  );
};

const Firefly = ({ delay }: { delay: number }) => {
  const startX = Math.random() * 900 + 50;
  const startY = Math.random() * 300 + 100;

  return (
    <motion.circle
      cx={startX}
      cy={startY}
      r={2}
      fill="#fff8a0"
      style={{ filter: "blur(0.5px)" }}
      animate={{
        opacity: [0, 0.8, 0.3, 0.9, 0],
        cx: [startX, startX + 30, startX - 20, startX + 10],
        cy: [startY, startY - 20, startY + 15, startY - 30],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

const Moon = () => (
  <motion.div
    className="absolute top-[6vh] right-[12vw] w-[70px] h-[70px] rounded-full pointer-events-none"
    style={{
      background: "radial-gradient(circle at 40% 40%, #fffbe8, #f5e8c0 60%, #e0c878)",
      boxShadow:
        "0 0 20px 8px rgba(245,232,192,0.25), 0 0 60px 20px rgba(245,232,192,0.12), 0 0 120px 40px rgba(245,232,192,0.06)",
    }}
    animate={{
      boxShadow: [
        "0 0 20px 8px rgba(245,232,192,0.25), 0 0 60px 20px rgba(245,232,192,0.12), 0 0 120px 40px rgba(245,232,192,0.06)",
        "0 0 25px 12px rgba(245,232,192,0.3), 0 0 80px 28px rgba(245,232,192,0.16), 0 0 150px 50px rgba(245,232,192,0.08)",
        "0 0 20px 8px rgba(245,232,192,0.25), 0 0 60px 20px rgba(245,232,192,0.12), 0 0 120px 40px rgba(245,232,192,0.06)",
      ],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Stars = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: [
        "radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.35) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 22% 8%, rgba(255,255,255,0.25) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 45% 5%, rgba(255,255,255,0.3) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 67% 12%, rgba(255,255,255,0.2) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 80% 6%, rgba(255,255,255,0.28) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 92% 18%, rgba(255,255,255,0.22) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 35% 20%, rgba(255,255,255,0.18) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 58% 25%, rgba(255,255,255,0.15) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 15% 30%, rgba(255,255,255,0.12) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 75% 22%, rgba(255,255,255,0.2) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 50% 18%, rgba(255,255,255,0.16) 0%, transparent 100%)",
        "radial-gradient(1px 1px at 88% 10%, rgba(255,255,255,0.24) 0%, transparent 100%)",
      ].join(", "),
    }}
  />
);

const TulipGarden = () => {
  const tulips = [
    { x: 80, color: "purple", stemHeight: 240, delay: 0.2, scale: 0.85 },
    { x: 160, color: "red", stemHeight: 280, delay: 0.8, scale: 1 },
    { x: 240, color: "pink", stemHeight: 260, delay: 0.5, scale: 0.95 },
    { x: 320, color: "yellow", stemHeight: 300, delay: 1.2, scale: 1.05 },
    { x: 400, color: "orange", stemHeight: 270, delay: 0.3, scale: 0.9 },
    { x: 480, color: "red", stemHeight: 290, delay: 1.0, scale: 1 },
    { x: 560, color: "white", stemHeight: 250, delay: 0.6, scale: 0.88 },
    { x: 640, color: "pink", stemHeight: 285, delay: 0.9, scale: 1.02 },
    { x: 720, color: "yellow", stemHeight: 265, delay: 0.4, scale: 0.92 },
    { x: 800, color: "purple", stemHeight: 295, delay: 1.1, scale: 0.97 },
    { x: 880, color: "orange", stemHeight: 255, delay: 0.7, scale: 0.9 },
    { x: 950, color: "red", stemHeight: 275, delay: 1.3, scale: 0.85 },
    // Back row
    { x: 120, color: "yellow", stemHeight: 200, delay: 1.5, scale: 0.7 },
    { x: 200, color: "white", stemHeight: 190, delay: 1.7, scale: 0.65 },
    { x: 360, color: "pink", stemHeight: 210, delay: 1.4, scale: 0.72 },
    { x: 520, color: "purple", stemHeight: 195, delay: 1.6, scale: 0.68 },
    { x: 680, color: "red", stemHeight: 205, delay: 1.8, scale: 0.7 },
    { x: 840, color: "orange", stemHeight: 198, delay: 1.9, scale: 0.66 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Night sky */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 0%, #1e3a5f 0%, #0d1b2e 55%, #080e18 100%)",
        }}
      />

      {/* Stars */}
      <Stars />

      {/* Moon */}
      <Moon />

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "18vh",
          background: "linear-gradient(to bottom, #3d2d1e 0%, #2a1f15 100%)",
          borderTop: "1px solid rgba(100,70,40,0.4)",
        }}
      >
        {/* Soil texture line */}
        <div
          className="absolute -top-[3px] left-0 right-0 h-[6px] rounded-t-sm"
          style={{
            background:
              "linear-gradient(90deg, #3d2d1e 0%, #4a3522 15%, #3a2a18 30%, #4d3a24 45%, #382818 60%, #4a3522 75%, #3d2d1e 100%)",
          }}
        />
      </div>

      {/* Moon light cast on ground */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 85%, rgba(255,200,120,0.06) 0%, transparent 50%)",
        }}
      />

      {/* SVG tulip scene */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 w-full max-w-5xl"
      >
        <svg viewBox="0 0 1000 550" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3d2d1e" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#2a1f15" stopOpacity={0.95} />
            </linearGradient>
          </defs>

          {/* Fireflies */}
          {Array.from({ length: 8 }).map((_, i) => (
            <Firefly key={i} delay={i * 0.8} />
          ))}

          {/* Ground ellipse */}
          <ellipse cx={500} cy={520} rx={550} ry={50} fill="url(#ground)" />

          {/* Tulips */}
          {tulips
            .sort((a, b) => a.scale - b.scale)
            .map((t, i) => (
              <Tulip key={i} {...t} />
            ))}
        </svg>
      </motion.div>

      {/* Caption */}
      <motion.p
        className="fixed bottom-[3.5vh] left-1/2 -translate-x-1/2 text-xs italic font-light tracking-[0.12em] whitespace-nowrap pointer-events-none"
        style={{ color: "rgba(245,232,192,0.45)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        tulipanes &nbsp;·&nbsp; jardín nocturno
      </motion.p>
    </div>
  );
};

export default TulipGarden;
