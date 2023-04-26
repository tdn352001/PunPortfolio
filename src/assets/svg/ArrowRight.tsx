import { ClassProps } from "~/configs/types";

const ArrowRightSVG = ({ className }: ClassProps) => {
  return (
    <svg
      className={className}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7096 0.196721L17.8122 5.54098C17.9374 5.67213 18 5.83607 18 6C18 6.19672 17.9374 6.36066 17.8122 6.45902L12.7722 11.8033C12.5217 12.0656 12.1461 12.0656 11.8957 11.8033C11.7704 11.6721 11.7078 11.5082 11.7078 11.3443C11.7078 11.1803 11.7704 10.9836 11.8957 10.8852L15.8713 6.65574H0.626087C0.281739 6.65574 0 6.36066 0 6C0 5.63935 0.281739 5.34426 0.626087 5.34426H15.8713L11.833 1.11475C11.7078 0.983606 11.6452 0.819673 11.6452 0.655738C11.6452 0.491804 11.7078 0.327869 11.833 0.196721C12.0835 -0.0655738 12.4591 -0.0655738 12.7096 0.196721Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRightSVG;
