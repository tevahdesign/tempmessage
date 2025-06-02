
export default function EmptyInboxImage() {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(35, 0)">
        {/* Stars */}
        <circle cx="85" cy="20" r="2" fill="white" />
        <circle cx="120" cy="35" r="2" fill="white" />
        <circle cx="50" cy="40" r="1.5" fill="white" />
        <circle cx="130" cy="15" r="1.5" fill="white" />
        
        {/* Planets */}
        <circle cx="25" cy="50" r="15" fill="#D9D9D9" />
        <ellipse cx="25" cy="50" rx="15" ry="3" fill="#BBBBBB" />
        
        <circle cx="145" cy="85" r="10" fill="#D9D9D9" />
        <ellipse cx="145" cy="85" rx="10" ry="2" fill="#BBBBBB" />
        
        {/* Ground */}
        <ellipse cx="80" cy="130" rx="50" ry="10" fill="white" />
        
        {/* Signpost */}
        <rect x="75" y="60" width="10" height="70" fill="#555" />
        
        {/* Signs */}
        <g transform="rotate(-10, 80, 75)">
          <rect x="80" y="70" width="40" height="12" rx="2" fill="#3b82f6" />
          <path d="M120 76 L125 76 L120 82 L120 76Z" fill="#3b82f6" />
        </g>
        
        <g transform="rotate(10, 80, 90)">
          <rect x="80" y="85" width="40" height="12" rx="2" fill="#3b82f6" />
          <path d="M120 91 L125 91 L120 97 L120 91Z" fill="#3b82f6" />
        </g>
      </g>
    </svg>
  );
}
