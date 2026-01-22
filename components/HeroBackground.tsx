'use client';

/**
 * Linear-style hero background: minimal radial gradients only.
 * No schematics, particles, or grid — speed and clarity > decoration.
 * @see https://linear.app/
 */

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
      aria-hidden="true"
    >
      {/* Linear-style angular gradients (cyan variant) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(0, 217, 255, 0.15), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 217, 255, 0.08), transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.04), transparent 70%)
          `,
        }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}
