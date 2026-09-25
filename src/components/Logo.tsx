export default function Logo({ size = 72 }: { size?: number }) {
  const radius = size >= 48 ? 18 : 12;

  return (
    <span
      style={{
        display: "inline-flex",
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        background: "transparent",
        boxShadow: "none",
        flexShrink: 0,
      }}
    >
      <img
        src="/assets/icon.png"
        alt="SanGlow logo"
        width={size}
        height={size}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          border: 0,
          padding: 0,
          margin: 0,
          background: "transparent",
        }}
      />
    </span>
  );
}
