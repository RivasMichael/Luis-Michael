
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 100, className = "", showText = false }) => {
  return (
    <div className={`relative flex items-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer thin ring */}
        <circle cx="100" cy="100" r="95" stroke="#E8DCC4" strokeWidth="1.5" />
        
        {/* Inner circle area */}
        <circle cx="100" cy="100" r="75" stroke="#E8DCC4" strokeWidth="1" />

        {/* Text Paths */}
        <defs>
          <path id="topTextPath" d="M 30,100 A 70,70 0 1,1 170,100" />
          <path id="bottomTextPath" d="M 30,100 A 70,70 0 1,0 170,100" />
        </defs>

        {/* Top Text: LEX CORPORATIVA */}
        <text fill="#E8DCC4" className="serif" style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.1em' }}>
          <textPath xlinkHref="#topTextPath" startOffset="50%" textAnchor="middle">
            LEX CORPORATIVA
          </textPath>
        </text>

        {/* Bottom Text: REVISTA JURÍDICA */}
        <text fill="#E8DCC4" className="serif" style={{ fontSize: '18px', letterSpacing: '0.05em' }}>
          <textPath xlinkHref="#bottomTextPath" startOffset="50%" textAnchor="middle" side="right">
            REVISTA JURÍDICA
          </textPath>
        </text>

        {/* Monogram: LC */}
        <text
          x="100"
          y="115"
          fill="#E8DCC4"
          textAnchor="middle"
          className="serif"
          style={{ fontSize: '75px', fontWeight: '400' }}
        >
          LC
        </text>

        {/* EST and 2025 */}
        <text x="35" y="105" fill="#E8DCC4" style={{ fontSize: '10px', letterSpacing: '0.1em' }} textAnchor="middle">EST</text>
        <text x="165" y="105" fill="#E8DCC4" style={{ fontSize: '10px', letterSpacing: '0.1em' }} textAnchor="middle">2025</text>
      </svg>
    </div>
  );
};

export default Logo;
