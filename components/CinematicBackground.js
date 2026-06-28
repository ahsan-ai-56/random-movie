// components/CinematicBackground.js
// A pure-CSS, GPU-friendly animated 3D backdrop used behind every tool page.
// Each genre gets its own color palette, shape set, and motion speed so the
// background actually feels distinct per genre rather than reusing one look.
//
// variant: "hub" | "action" | "comedy" | "horror" | "romance" | "scifi" |
//          "thriller" | "animated" | "documentary"

const VARIANTS = {
  hub: {
    shapes: ["reel", "star", "clapper", "film-strip"],
    icons: [],
  },
  action: {
    shapes: ["burst", "shard", "shard", "burst"],
    icons: ["💥", "🔥"],
  },
  comedy: {
    shapes: ["confetti", "star", "confetti", "star"],
    icons: ["😂", "🎭"],
  },
  horror: {
    shapes: ["jagged", "moon", "crack", "jagged"],
    icons: ["🎃", "🦇"],
  },
  romance: {
    shapes: ["heart", "petal", "petal", "heart"],
    icons: ["❤️", "🌹"],
  },
  scifi: {
    shapes: ["ring", "hexagon", "orbit-dot", "ring"],
    icons: ["🚀", "🪐"],
  },
  thriller: {
    shapes: ["crosshair", "shard", "zigzag", "shard"],
    icons: ["🔪", "🕵️"],
  },
  animated: {
    shapes: ["splash", "confetti", "star", "splash"],
    icons: ["🎨", "🖌️"],
  },
  documentary: {
    shapes: ["reel", "lens", "film-strip", "lens"],
    icons: ["🎥", "🌍"],
  },
};

// Fixed positions reused across variants so layout never shifts —
// only the shapes/colors/speed (driven by the variant class) differ.
const FAR_POS = [
  { top: "12%", left: "8%" },
  { top: "62%", left: "85%" },
  { top: "20%", left: "78%" },
  { top: "75%", left: "15%" },
];
const MID_POS = [
  { top: "30%", left: "92%" },
  { top: "70%", left: "4%" },
  { top: "8%", left: "45%" },
];
const NEAR_DELAYS = ["0s", "-3s", "-6s", "-2s", "-5s"];
const NEAR_POS = [
  { top: "18%", left: "22%" },
  { top: "55%", left: "68%" },
  { top: "82%", left: "38%" },
  { top: "35%", left: "90%" },
  { top: "65%", left: "10%" },
];

export default function CinematicBackground({ variant = "hub" }) {
  const config = VARIANTS[variant] || VARIANTS.hub;
  const farShapes = [config.shapes[0], config.shapes[1] || config.shapes[0]];
  const midShapes = [config.shapes[2] || config.shapes[0], config.shapes[3] || config.shapes[1]];

  return (
    <div className={`cine-bg cine-bg--${variant}`} aria-hidden="true">
      <div className="cine-bg-scene">
        <div className="cine-spotlight cine-spotlight--a" />
        <div className="cine-spotlight cine-spotlight--b" />

        <div className="cine-layer cine-layer--far">
          <span className={`cine-shape cine-shape--${farShapes[0]}`} style={FAR_POS[0]} />
          <span className={`cine-shape cine-shape--${farShapes[0]} cine-shape--sm`} style={FAR_POS[1]} />
          <span className={`cine-shape cine-shape--${farShapes[1]}`} style={FAR_POS[2]} />
          <span className={`cine-shape cine-shape--${farShapes[1]} cine-shape--sm`} style={FAR_POS[3]} />
        </div>

        <div className="cine-layer cine-layer--mid">
          <span className={`cine-shape cine-shape--${midShapes[0]}`} style={MID_POS[0]} />
          <span className={`cine-shape cine-shape--${midShapes[1]}`} style={MID_POS[1]} />
          <span className={`cine-shape cine-shape--${farShapes[1]} cine-shape--sm`} style={MID_POS[2]} />
        </div>

        <div className="cine-layer cine-layer--near">
          {NEAR_POS.map((pos, i) => (
            <span
              key={i}
              className="cine-particle"
              style={{ ...pos, animationDelay: NEAR_DELAYS[i] }}
            />
          ))}
        </div>

        {config.icons.length > 0 && (
          <div className="cine-layer cine-layer--icons">
            <span className="cine-icon cine-icon--a">{config.icons[0]}</span>
            <span className="cine-icon cine-icon--b">{config.icons[1]}</span>
          </div>
        )}
      </div>
      <div className="cine-bg-vignette" />
      <div className="cine-bg-grain" />
    </div>
  );
}
