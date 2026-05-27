import type { SVGProps } from "react"

export function ChatRobot({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Waving arm */}
      <ellipse cx="18" cy="78" rx="10" ry="8" fill="#dbeafe" />
      <path
        d="M22 72c-8-10-2-22 8-26 4-2 8 0 10 4"
        stroke="#93c5fd"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect x="34" y="72" width="52" height="44" rx="14" fill="white" />
      <rect x="42" y="82" width="36" height="24" rx="8" fill="#eff6ff" />
      <circle cx="52" cy="94" r="3" fill="#3b82f6" />
      <circle cx="68" cy="94" r="3" fill="#3b82f6" />

      {/* Head */}
      <rect x="38" y="34" width="44" height="40" rx="14" fill="white" />
      <path
        d="M48 34h24c6 0 10 4 10 10v4H38v-4c0-6 4-10 10-10z"
        fill="#dbeafe"
      />
      <circle cx="52" cy="52" r="5" fill="#2563eb" />
      <circle cx="68" cy="52" r="5" fill="#2563eb" />
      <circle cx="53.5" cy="51" r="2" fill="white" />
      <circle cx="69.5" cy="51" r="2" fill="white" />
      <path d="M54 62c4 3 8 3 12 0" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

      {/* Antenna */}
      <path d="M60 34V24" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="20" r="4" fill="#3b82f6" />

      {/* Laptop */}
      <rect x="46" y="98" width="28" height="18" rx="2" fill="#1d4ed8" />
      <rect x="48" y="100" width="24" height="12" rx="1" fill="#60a5fa" />
      <path d="M42 116h36l-2 3H44l-2-3z" fill="#1e40af" />
    </svg>
  )
}
