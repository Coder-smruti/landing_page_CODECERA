import type { SVGProps } from "react"

export function RobotLaptopIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Laptop */}
      <rect x="18" y="34" width="28" height="18" rx="2" fill="currentColor" fillOpacity="0.18" />
      <rect x="20" y="36" width="24" height="12" rx="1" fill="currentColor" fillOpacity="0.35" />
      <path d="M14 52h36l-2.5 3H16.5L14 52z" fill="currentColor" fillOpacity="0.25" />
      <path d="M14 52h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Robot body */}
      <rect x="24" y="28" width="16" height="10" rx="3" fill="currentColor" fillOpacity="0.9" />

      {/* Arms */}
      <path
        d="M22 30c-3 0-5 2-5 4v2M42 30c3 0 5 2 5 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Head */}
      <rect x="22" y="12" width="20" height="16" rx="5" fill="currentColor" />
      <line x1="32" y1="8" x2="32" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="7" r="2" fill="currentColor" />

      {/* Face */}
      <circle cx="28" cy="20" r="2.5" fill="white" />
      <circle cx="36" cy="20" r="2.5" fill="white" />
      <circle cx="28.8" cy="20" r="1" fill="#1e293b" />
      <circle cx="36.8" cy="20" r="1" fill="#1e293b" />
      <path d="M28 25c2 2 6 2 8 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Screen glow */}
      <rect x="22" y="38" width="6" height="1.5" rx="0.75" fill="white" fillOpacity="0.7" />
    </svg>
  )
}
