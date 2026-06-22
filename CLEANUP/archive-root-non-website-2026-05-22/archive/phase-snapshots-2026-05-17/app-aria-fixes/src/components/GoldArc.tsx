export default function GoldArc({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={`w-[120px] h-auto opacity-60 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 25 Q100 -15 200 25"
        stroke="#C5A028"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
