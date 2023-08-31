export function Square({fill,stroke}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_1_473)">
    <rect x="1" y="1" width="22" height="22" rx="2" stroke={stroke} strokeWidth="2"/>
    <rect x="4" y="4" width="16" height="16" rx="1" fill={fill}/>
    </g>
    <defs>
    <clipPath id="clip0_1_473">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  )
}
