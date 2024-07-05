const BookmarkIcon = ({ width = "24", height = "24", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6"
      y="4"
      width="13"
      height="17"
      rx="2"
      fill="#97BABA"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M15 10V8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M4 9H8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M4 13H8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M4 17H8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default BookmarkIcon;
