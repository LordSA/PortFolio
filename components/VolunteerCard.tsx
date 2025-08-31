import React from 'react';

interface VolunteerCardProps {
  image: string;
  name: string;
  position: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  rotation: number;
  namePosition: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  nameRotation: number;
  imageTransform?: {
    rotate?: number;
    scaleY?: number;
    backgroundSize?: string;
    backgroundPosition?: string;
  };
}

export function VolunteerCard({ 
  image, 
  name, 
  position, 
  rotation, 
  namePosition, 
  nameRotation, 
  imageTransform 
}: VolunteerCardProps) {
  return (
    <>
      {/* Volunteer Image */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          left: `${position.left}px`,
          top: `${position.top}px`,
          width: `${position.width}px`,
          height: `${position.height}px`,
        }}
      >
        <div 
          className="flex-none"
          style={{ 
            transform: `rotate(${rotation}deg)${imageTransform?.scaleY ? ` scaleY(${imageTransform.scaleY}%)` : ''}` 
          }}
        >
          <div
            className="bg-no-repeat"
            style={{
              backgroundImage: `url('${image}')`,
              width: `${position.width}px`,
              height: `${position.height}px`,
              backgroundSize: imageTransform?.backgroundSize || 'cover',
              backgroundPosition: imageTransform?.backgroundPosition || 'center',
            }}
          />
        </div>
      </div>

      {/* Name Label Background (Orange Badge) */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          left: `${namePosition.left}px`,
          top: `${namePosition.top}px`,
          width: `${namePosition.width}px`,
          height: `${namePosition.height}px`,
        }}
      >
        <div 
          className="flex-none"
          style={{ 
            transform: `rotate(${nameRotation}deg) scaleY(-100%)` 
          }}
        >
          <div className="relative">
            <div className="absolute bottom-[-7.407%] left-[-2.273%] right-[-2.273%] top-[-7.407%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 184 62"
              >
                <path 
                  d="M8.71429 8.82143L85.3214 6.89286L180 4V58L80.2143 55.5893L64.1071 52.2143L4 58L8.71429 8.82143Z" 
                  fill="#CA6D0F" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Name Text */}
      <div 
        className="absolute flex items-center justify-center translate-y-[-50%]"
        style={{
          left: `${namePosition.left + 10}px`,
          top: `${namePosition.top}px`,
          width: `${namePosition.width - 20}px`,
          height: `${namePosition.height}px`,
        }}
      >
        <div 
          className="flex-none"
          style={{ transform: `rotate(${nameRotation + 180}deg)` }}
        >
          <div className="flex flex-col font-['Mynerve:Regular',_sans-serif] justify-center leading-[0] not-italic relative text-[#ffffff] text-[27.756px] text-left text-nowrap">
            <p className="block leading-[34.695px] whitespace-pre">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
}