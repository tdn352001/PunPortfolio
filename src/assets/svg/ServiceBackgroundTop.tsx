import { ClassProps } from "~/configs/types";

const ServiceBackgroundTopSVG = ({ className }: ClassProps) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 260 352"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_132_2005)">
        <rect width="260" height="352" rx="8" fill="black" fillOpacity="0.2" />
        <rect
          x="0.25"
          y="0.25"
          width="259.5"
          height="351.5"
          rx="7.75"
          stroke="url(#paint0_linear_132_2005)"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_132_2005"
          x="-21"
          y="-21"
          width="302"
          height="394"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_132_2005" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_132_2005"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_132_2005"
          x1="0"
          y1="0"
          x2="183.5"
          y2="106.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ServiceBackgroundTopSVG;
