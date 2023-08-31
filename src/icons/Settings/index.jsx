export function Settings({className,stroke}) {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M12 7L20 7" stroke={stroke} strokeLinecap="round" />
      <path d="M4 7L8 7" stroke={stroke} strokeLinecap="round" />
      <path d="M17 17L20 17" stroke={stroke} strokeLinecap="round" />
      <path d="M4 17L12 17" stroke={stroke} strokeLinecap="round" />
      <circle
        cx="10"
        cy="7"
        r="2"
        transform="rotate(90 10 7)"
        stroke={stroke}
        strokeLinecap="round"
      />
      <circle
        cx="15"
        cy="17"
        r="2"
        transform="rotate(90 15 17)"
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}
