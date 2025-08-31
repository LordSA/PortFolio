import React from 'react';
import svgPaths from "../imports/svg-bwo2w2km5l";
import imgPaper18 from "figma:asset/b2576c4c4e3fc546f687623c461a8f95b9c2ef8b.png";
import imgImg9165 from "figma:asset/a60752815b7af12e714d91b04de200b61957c985.png";
import imgWhatsAppImage20250720At34029Pm from "figma:asset/79a7e30e023c5daac9583c9c0f03e226b5300c8f.png";
import imgWhatsAppImage20250716At65735Pm from "figma:asset/2e6d34f9124fd75b48637ecd4bea09dcdb826535.png";
import img10000377931 from "figma:asset/b9f1ef4a69e5553ee7ac27e29a7652b839d1df6b.png";
import img1000036115 from "figma:asset/575faa5a07db14433e392a2892f7ae6f1914176a.png";
import img1000130340 from "figma:asset/f7bcd6b1621eb1405aa809a0731b6a9d3debd081.png";
import imgWhatsAppImage20250720At23525Pm from "figma:asset/0fabb8c557cff3bd9271630c212b9e9dc035063d.png";
import { TitleSection } from './TitleSection';
import { VolunteerCard } from './VolunteerCard';

export function Volunteers() {
  const volunteers = [
    {
      name: "Anvar Sadath",
      image: imgImg9165,
      position: { left: 305, top: 199, width: 528, height: 872 },
      rotation: 355,
      namePosition: { left: 623, top: 424, width: 184, height: 92 },
      nameRotation: 167,
      imageTransform: {
        backgroundSize: "177.24% 129.34%",
        backgroundPosition: "68.84% 100%"
      }
    },
    {
      name: "Rida Waseem",
      image: imgWhatsAppImage20250720At34029Pm,
      position: { left: 570, top: 423, width: 450, height: 841 },
      rotation: 180,
      namePosition: { left: 816, top: 696, width: 184, height: 98 },
      nameRotation: 165,
      imageTransform: {
        scaleY: -100,
        backgroundSize: "191.49% 136.71%",
        backgroundPosition: "74.68% 100%"
      }
    },
    {
      name: "Muhsin p",
      image: img10000377931,
      position: { left: 294, top: 461, width: 455, height: 1085 },
      rotation: 0,
      namePosition: { left: 461, top: 746, width: 186, height: 84 },
      nameRotation: 191,
      imageTransform: {
        backgroundSize: "238.69% 133.02%",
        backgroundPosition: "43.22% 100%"
      }
    },
    {
      name: "Aswandha RJ",
      image: img1000130340,
      position: { left: 59, top: 778, width: 468, height: 878 },
      rotation: 180,
      namePosition: { left: 55, top: 768, width: 194, height: 88 },
      nameRotation: 189,
      imageTransform: {
        scaleY: -100,
        backgroundSize: "181.92% 129.19%",
        backgroundPosition: "83.62% 100%"
      }
    },
    {
      name: "Nandhana ts",
      image: imgWhatsAppImage20250716At65735Pm,
      position: { left: 102, top: 490, width: 451, height: 562 },
      rotation: 0,
      namePosition: { left: 29, top: 1203, width: 184, height: 103 },
      nameRotation: 163,
      imageTransform: {
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    },
    {
      name: "Ziyan mp",
      image: imgWhatsAppImage20250720At23525Pm,
      position: { left: 317, top: 629, width: 559, height: 806 },
      rotation: 0,
      namePosition: { left: 582, top: 1224, width: 184, height: 98 },
      nameRotation: 165,
      imageTransform: {
        backgroundSize: "193.9% 175.61%",
        backgroundPosition: "43.75% 100%"
      }
    },
    {
      name: "Swathi K",
      image: img1000036115,
      position: { left: 675, top: 748, width: 347, height: 704 },
      rotation: 0,
      namePosition: { left: 890, top: 1195, width: 155, height: 91 },
      nameRotation: 197,
      imageTransform: {
        backgroundSize: "166.67% 109.42%",
        backgroundPosition: "60.49% 100%"
      }
    }
  ];

  return (
    <div
      className="relative size-full"
      data-name="volunteers"
      style={{
        backgroundImage:
          "linear-gradient(43.332deg, rgba(190, 152, 0, 0.3) 14.875%, rgba(7, 7, 255, 0.3) 113.42%), linear-gradient(153.968deg, rgb(30, 255, 0) 5.531%, rgb(252, 44, 12) 104.21%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[1672px] left-[-260px] mix-blend-multiply top-[-109px] w-[1600px]"
        data-name="Paper 18"
        style={{ backgroundImage: `url('${imgPaper18}')` }}
      />

      {/* Logo */}
      <div
        className="absolute h-[65px] left-[35px] top-[35px] w-[221.919px]"
        data-name="THCEV W"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 222 65"
        >
          <g id="THCEV W">
            <path d="M0 0H221.919V65H0V0Z" />
            <path d={svgPaths.p10a6ee80} fill="white" />
            <path d={svgPaths.pb856a00} fill="white" />
            <path d={svgPaths.p213ab600} fill="white" />
            <path d={svgPaths.p2cd87020} fill="white" />
            <path d={svgPaths.p3e452200} fill="white" />
            <path d={svgPaths.p7f5c3f0} fill="white" />
          </g>
        </svg>
      </div>

      {/* Title Section */}
      <TitleSection />

      {/* Volunteers */}
      {volunteers.map((volunteer, index) => (
        <VolunteerCard
          key={index}
          name={volunteer.name}
          image={volunteer.image}
          position={volunteer.position}
          rotation={volunteer.rotation}
          namePosition={volunteer.namePosition}
          nameRotation={volunteer.nameRotation}
          imageTransform={volunteer.imageTransform}
        />
      ))}
    </div>
  );
}