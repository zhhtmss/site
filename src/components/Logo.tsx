export default function Logo({ size = 64 }: { size?: number }) {
  const h = [12, 28, 44, 24, 10];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        fill="var(--bg2)"
        stroke="var(--line)"
        strokeWidth="2"
      />
      {h.map((v, i) => (
        <rect
          key={i}
          x={12 + i * 8}
          y={32 - v / 2}
          width="5"
          height={v}
          fill="var(--acc)"
          opacity={i === 2 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}
