import { ClassProps } from "~/configs/types";

const ArrowRightCircle = ({ className }: ClassProps) => {
  return (
    <svg
      className={className}
      width="153"
      height="84"
      viewBox="0 0 153 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="111" cy="42" r="41" stroke="#F4496F" strokeWidth="2" />
      <path
        d="M121.414 43.4142C122.195 42.6332 122.195 41.3668 121.414 40.5858L108.686 27.8579C107.905 27.0768 106.639 27.0768 105.858 27.8579C105.077 28.6389 105.077 29.9052 105.858 30.6863L117.172 42L105.858 53.3137C105.077 54.0948 105.077 55.3611 105.858 56.1421C106.639 56.9232 107.905 56.9232 108.686 56.1421L121.414 43.4142ZM0 44H120V40H0V44Z"
        fill="#F4496F"
      />
    </svg>
  );
};

export default ArrowRightCircle;
