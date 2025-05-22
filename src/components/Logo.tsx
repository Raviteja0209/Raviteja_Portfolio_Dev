import React from 'react';

interface DevCodeLogoProps {
  width?: number;
  height?: number;
  color?: string;
  subtitleColor?: string;
}

const DevCodeLogo: React.FC<DevCodeLogoProps> = ({
  width = 220,
  height = 100,  // increased height for subtitle
  color = '#ffffff', // white color for main logo
  subtitleColor = '#bbbbbb', // lighter white/gray for subtitle
}) => {
  return (
    <>
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }

        .logoGroup {
          animation: fadeInOut 3s ease-in-out infinite;
        }

        .subtitle {
          font-family: 'Fira Code', monospace;
          font-weight: 500;
          font-size: 16px;
          fill: ${subtitleColor};
          letter-spacing: 1px;
          user-select: none;
        }
      `}</style>

      <svg
        width={width}
        height={height}
        viewBox="0 0 220 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Animated Developer RT Logo with subtitle"
      >
        <g
          className="logoGroup"
          fill={color}
          fontFamily="'Fira Code', monospace"
          fontWeight="700"
          fontSize="48"
          letterSpacing="0"
        >
          <text x="20" y="45">{'<'}</text>
          <text x="75" y="45" letterSpacing="1">RT</text>
          <text x="145" y="45">{'/>'}</text>
        </g>

        <text
          x="115"
          y="85"
          className="subtitle"
          textAnchor="middle"
        >
          Full Stack Developer
        </text>
      </svg>
    </>
  );
};

export default DevCodeLogo;
