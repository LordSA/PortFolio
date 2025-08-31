import svgPaths from "./svg-hezwh32ht5";
import imgRectangle8 from "figma:asset/4c75d8672f884fe0b9eb28afc4eb96a5ed37db61.png";
import imgChatGptImageJul52025041018Pm11 from "figma:asset/275c75931f23f1bacb39b3de0c9a32abd972c667.png";
import imgBbe751A2160A413De436Abafeebcf4Ee1 from "figma:asset/a41b9bc5e48fab193bf8f56007277ccf73371b62.png";
import imgRectangle9 from "figma:asset/609a99ef3ba908fc12f4e4718f2f542114000b5c.png";
import imgRectangle10 from "figma:asset/ef59fdbd89a0ec58aa3f09e6410d8c32f71fc09f.png";
import imgRectangle11 from "figma:asset/3a79b910580814f0e3af54c94fb92dfc81a88d73.png";
import imgHctmmLogo from "figma:asset/d24e2f8ccf78067a808e5377a8cf842a580e7b49.png";

function WhoWeAre() {
  return (
    <div
      className="absolute h-[194.309px] leading-[0] left-0 not-italic text-[#1c2341] text-left top-0 w-[744px]"
      data-name="Who we are"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-[61.309px] left-0 text-[45px] top-0 w-[744px]">
        <p className="block leading-[normal]">Who We Are:</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[133px] left-0 text-[20.6px] top-[61.309px] w-[744px]">
        <p className="block leading-[normal]">
          HCTMM Medtech is a forward-thinking health-tech startup focused on
          solving the challenge of healthcare inaccessibility. Through our
          innovative ATM (Any Time Medicine) kiosks, we aim to bring essential
          health services to underserved populations.
        </p>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div
      className="absolute h-[104px] leading-[0] left-0 not-italic text-[#1c2341] text-left top-[194.309px] w-[744px]"
      data-name="Mission"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-[61px] left-0 text-[45px] top-0 w-[744px]">
        <p className="block leading-[normal]">Mission:</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[43px] left-0 text-[20.6px] top-[61px] w-[744px]">
        <p className="block leading-[normal]">
          To ensure affordable and accessible healthcare anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div
      className="absolute h-[138px] leading-[0] left-0 not-italic text-[#1c2341] text-left top-[298.309px] w-[744px]"
      data-name="Vision"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-[61px] left-0 text-[45px] top-0 w-[744px]">
        <p className="block leading-[normal]">Vision:</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[77px] left-0 text-[20.6px] top-[61px] w-[744px]">
        <p className="block leading-[normal]">
          To deploy smart medical kiosks across the nation and bridge the
          healthcare gap.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="h-[436.309px] mb-[-4px] relative shrink-0 w-full"
      data-name="content"
    >
      <WhoWeAre />
      <Mission />
      <Vision />
    </div>
  );
}

function B2S2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start pb-1 pt-0 px-0 right-[47px] top-[42px] w-[744px]"
      data-name="B2S2"
    >
      <div className="font-['Poppins:Bold',_sans-serif] h-[138px] leading-[0] mb-[-4px] not-italic relative shrink-0 text-[#1c2341] text-[94.244px] text-left w-full">
        <p className="block leading-[normal]">About Us</p>
      </div>
      <Content />
    </div>
  );
}

function B2() {
  return (
    <div
      className="absolute h-[654.309px] left-1/2 overflow-clip top-[783px] translate-x-[-50%] w-[1440px]"
      data-name="B2"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[551px] left-[-38px] top-[72px] w-[545px]"
        style={{ backgroundImage: `url('${imgRectangle8}')` }}
      />
      <B2S2 />
    </div>
  );
}

function Text() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] left-[35px] not-italic p-0 text-[#1c2341] text-left top-[63px] w-[897px]"
      data-name="Text"
    >
      <div className="font-['Poppins:Bold',_sans-serif] h-[131px] relative shrink-0 text-[48.327px] w-full">
        <p className="block leading-[normal]">
          Revolutionizing Healthcare Access with 24/7 Smart Medical Kiosks
        </p>
      </div>
      <div className="font-['Poppins:Medium',_sans-serif] h-[108px] relative shrink-0 text-[24px] w-[777px]">
        <p className="block leading-[54px]">
          Bringing affordable, reliable, and instant healthcare services to your
          neighborhood.
        </p>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7.2px] h-[72px] items-center justify-center px-[66.96px] py-[16.56px] relative rounded-[10.8px] shrink-0 w-[254.16px]"
      data-name="Btn"
    >
      <div className="absolute border-[#00aeef] border-[2.16px] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00aeef] text-[25.92px] text-left text-nowrap">
        <p className="block leading-[38.88px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <button
      className="box-border content-stretch cursor-pointer flex flex-row gap-[7.2px] h-[72px] items-center justify-center overflow-visible px-[66.96px] py-[16.56px] relative rounded-[10.8px] shrink-0 w-[254.16px]"
      data-name="Btn"
    >
      <div className="absolute border-[#00aeef] border-[2.16px] border-solid inset-0 pointer-events-none rounded-[10.8px]" />
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00aeef] text-[25.92px] text-left text-nowrap">
        <p className="block leading-[38.88px] whitespace-pre">Contact Us</p>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[17.28px] items-center justify-start left-[142px] p-0 top-[422px]"
      data-name="Buttons"
    >
      <Btn />
      <Btn1 />
    </div>
  );
}

function B1() {
  return (
    <div
      className="absolute bg-[rgba(249,250,251,0)] h-[601px] mix-blend-screen top-0 translate-x-[-50%] w-[1439px]"
      data-name="B1"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Text />
      <Buttons />
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-[920px] size-[519px] top-[57px]"
        data-name="ChatGPT Image Jul 5, 2025, 04_10_18 PM (1) 1"
        style={{
          backgroundImage: `url('${imgChatGptImageJul52025041018Pm11}')`,
        }}
      />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[601px] left-0 overflow-clip top-[122px] w-[1440px]">
      <B1 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[97px] left-0 rounded-[7px] top-0 w-[926px]"
      data-name="Card"
    >
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[30.736px] text-left text-nowrap"
        style={{ top: "calc(50% - 23.5px)", left: "calc(50% - 440px)" }}
      >
        <ul className="css-ed5n1g">
          <li className="list-disc ms-[46.104px]">
            <span className="leading-[normal]">
              Free health checkups (BP, sugar, temp, SpO2)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[97px] left-0 rounded-[7px] top-[105px] w-[926px]"
      data-name="Card"
    >
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[30.736px] text-left text-nowrap"
        style={{ top: "calc(50% - 23.5px)", left: "calc(50% - 440px)" }}
      >
        <ul className="css-ed5n1g">
          <li className="list-disc ms-[46.104px]">
            <span className="leading-[normal]">
              Telemedicine consultations with certified doctors
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[97px] left-0 rounded-[7px] top-[210px] w-[926px]"
      data-name="Card"
    >
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[30.736px] text-left text-nowrap"
        style={{ top: "calc(50% - 23.5px)", left: "calc(50% - 440px)" }}
      >
        <ul className="css-ed5n1g">
          <li className="list-disc ms-[46.104px]">
            <span className="leading-[normal]">
              On-site automated medicine dispensing
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[97px] left-0 rounded-[7px] top-[315px] w-[926px]"
      data-name="Card"
    >
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[30.736px] text-left text-nowrap"
        style={{ top: "calc(50% - 23.5px)", left: "calc(50% - 440px)" }}
      >
        <ul className="css-ed5n1g">
          <li className="list-disc ms-[46.104px]">
            <span className="leading-[normal]">
              Multilingual interface for broader accessibility
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[97px] left-0 rounded-[7px] top-[420px] w-[926px]"
      data-name="Card"
    >
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[30.736px] text-left text-nowrap"
        style={{ top: "calc(50% - 23.5px)", left: "calc(50% - 440px)" }}
      >
        <ul className="css-ed5n1g">
          <li className="list-disc ms-[46.104px]">
            <span className="leading-[normal]">
              Secure health record generation and printing
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div
      className="absolute h-[517px] top-[114px] translate-x-[-50%] w-[926px]"
      data-name="Cards"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[122.383px] leading-[0] left-0 not-italic overflow-clip text-[#1c2341] text-left top-0 w-[825px]">
      <div
        className="absolute font-['Poppins:Bold',_sans-serif] h-[107px] text-[73.335px] top-[-1px] w-[469px]"
        style={{ left: "calc(50% - 234.5px)" }}
      >
        <p className="block leading-[normal]">Our Solution</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] h-[43px] text-[20.6px] top-[78.383px] w-[825px]"
        style={{ left: "calc(50% - 412.5px)" }}
      >
        <p className="block leading-[normal]">
          The Any Time Medicine (ATM) machine is a 24/7 smart healthcare kiosk
          offering:
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="absolute h-[122.383px] left-1/2 top-px translate-x-[-50%] w-[825px]"
      data-name="Text"
    >
      <Frame2 />
    </div>
  );
}

function B3() {
  return (
    <div
      className="absolute bg-[rgba(249,250,251,0)] h-[632.383px] overflow-clip top-[1497.31px] translate-x-[-50%] w-[1441px]"
      data-name="B3"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <Cards />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="absolute h-[117.296px] leading-[0] left-[13px] not-italic text-[#1c2341] text-center top-[303.704px] w-[243px]"
      data-name="Text"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[19.495px] top-0 translate-x-[-50%] w-[243px]">
        <p className="block leading-[normal]">Instant vital sign checks</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[13.207px] top-[57.296px] translate-x-[-50%] w-[236px]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal]">(BP, sugar, SpO2, temp)</p>
      </div>
    </div>
  );
}

function Breathe() {
  return (
    <div
      className="absolute h-[304px] left-[-1px] top-0 w-[270px]"
      data-name="Breathe"
    >
      <div
        className="[background-size:133.7%_118.75%] absolute bg-[47.08%_56.23%] bg-no-repeat h-[304px] left-0 top-[-10px] w-[270px]"
        data-name="bbe751a2160a413de436abafeebcf4ee 1"
        style={{
          backgroundImage: `url('${imgBbe751A2160A413De436Abafeebcf4Ee1}')`,
        }}
      />
    </div>
  );
}

function Services1() {
  return (
    <div
      className="absolute bg-[rgba(131,199,236,0.3)] h-[478px] left-0 rounded-[13px] top-0 w-[270px]"
      data-name="Services 1"
    >
      <Text2 />
      <Breathe />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="absolute h-[117.296px] leading-[0] left-[13px] not-italic text-[#1c2341] text-center top-[303.704px] w-[243px]"
      data-name="Text"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[19.495px] top-0 translate-x-[-50%] w-[243px]">
        <p className="block leading-[normal]">
          Doctor consultation via video/voice
        </p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[13.207px] top-[57.296px] translate-x-[-50%] w-[236px]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal]">
          Instant doctor consultation via secure video or voice call with
          certified medical professionals.
        </p>
      </div>
    </div>
  );
}

function Services2() {
  return (
    <div
      className="absolute bg-[rgba(131,199,236,0.3)] h-[478px] left-[275px] rounded-[13px] top-0 w-[270px]"
      data-name="Services 2"
    >
      <Text3 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[304px] left-1/2 top-0 translate-x-[-50%] w-[270px]"
        style={{ backgroundImage: `url('${imgRectangle9}')` }}
      />
    </div>
  );
}

function Text4() {
  return (
    <div
      className="absolute h-[117.296px] leading-[0] left-[13px] not-italic text-[#1c2341] text-center top-[303.704px] w-[243px]"
      data-name="Text"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[19.495px] top-0 translate-x-[-50%] w-[243px]">
        <p className="block leading-[normal]">Prescription printout</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[13.207px] top-[57.296px] translate-x-[-50%] w-[236px]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal]">
          Get an instant prescription printout after your consultation, ready
          for use or record-keeping.
        </p>
      </div>
    </div>
  );
}

function Services3() {
  return (
    <div
      className="absolute bg-[rgba(131,199,236,0.3)] h-[478px] left-[550px] rounded-[13px] top-0 w-[270px]"
      data-name="Services 2"
    >
      <Text4 />
      <div
        className="[background-size:75.22%_69.22%] absolute bg-[57.05%_52.41%] bg-no-repeat h-[304px] left-1/2 top-0 translate-x-[-50%] w-[270px]"
        style={{ backgroundImage: `url('${imgRectangle10}')` }}
      />
    </div>
  );
}

function Text5() {
  return (
    <div
      className="absolute h-[117.296px] leading-[0] left-[13px] not-italic text-[#1c2341] text-center top-[303.704px] w-[243px]"
      data-name="Text"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[19.495px] top-0 translate-x-[-50%] w-[243px]">
        <p className="block leading-[normal]">
          Medicine vending with easy instructions
        </p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[13.207px] top-[57.296px] translate-x-[-50%] w-[236px]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal]">
          Receive prescribed medicines instantly from the kiosk with clear,
          step-by-step instructions.
        </p>
      </div>
    </div>
  );
}

function Services4() {
  return (
    <div
      className="absolute bg-[rgba(131,199,236,0.3)] h-[478px] left-[825px] rounded-[13px] top-0 w-[270px]"
      data-name="Services 2"
    >
      <Text5 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[304px] left-1/2 top-0 translate-x-[-50%] w-[270px]"
        style={{ backgroundImage: `url('${imgRectangle8}')` }}
      />
    </div>
  );
}

function Text6() {
  return (
    <div
      className="absolute h-[117.296px] leading-[0] left-[13px] not-italic text-[#1c2341] text-center top-[303.704px] w-[243px]"
      data-name="Text"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[19.495px] top-0 translate-x-[-50%] w-[243px]">
        <p className="block leading-[normal]">Health summary report</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[13.207px] top-[57.296px] translate-x-[-50%] w-[236px]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal]">
          Download or print a personalized health summary report for easy
          tracking and future reference.
        </p>
      </div>
    </div>
  );
}

function Services5() {
  return (
    <div
      className="absolute bg-[rgba(131,199,236,0.3)] h-[478px] left-[1100px] rounded-[13px] top-0 w-[270px]"
      data-name="Services 2"
    >
      <Text6 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[304px] left-1/2 top-0 translate-x-[-50%] w-[270px]"
        style={{ backgroundImage: `url('${imgRectangle11}')` }}
      />
    </div>
  );
}

function B4S2() {
  return (
    <div
      className="absolute h-[478px] left-[35px] overflow-clip top-[141px] w-[1370px]"
      data-name="B4S2"
    >
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
      <Services5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[133px] leading-[0] left-0 not-italic overflow-clip text-[#1c2341] top-0 w-[643px]">
      <div className="absolute font-['Poppins:Bold',_sans-serif] h-[107px] left-[321.5px] text-[73.335px] text-center top-0 translate-x-[-50%] w-[643px]">
        <p className="block leading-[normal]">Services</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[43px] left-0 text-[20.6px] text-left top-[90px] w-[643px]">
        <p className="block leading-[normal]">
          Transforming Healthcare with Innovation - Anytime, Anywhere
        </p>
      </div>
    </div>
  );
}

function B4S1() {
  return (
    <div
      className="absolute h-[133px] left-[398.5px] top-px w-[643px]"
      data-name="B4S1"
    >
      <Frame3 />
    </div>
  );
}

function B4() {
  return (
    <div
      className="absolute h-[620px] left-1/2 overflow-clip top-[2189.69px] translate-x-[-50%] w-[1440px]"
      data-name="B4"
    >
      <B4S2 />
      <B4S1 />
    </div>
  );
}

function B5S1() {
  return (
    <div
      className="absolute h-[121px] leading-[0] left-[35px] not-italic overflow-clip text-[#1c2341] top-2.5 w-[1370px]"
      data-name="B5S1"
    >
      <div className="absolute font-['Poppins:Bold',_sans-serif] left-[685px] text-[64.028px] text-center top-0 translate-x-[-50%] w-[948px]">
        <p className="block leading-[normal]">Bridging the Healthcare Gap</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] left-[472px] text-[20.6px] text-left text-nowrap top-[90px]">
        <p className="block leading-[normal] whitespace-pre">
          Accessible care for everyone, everywhere
        </p>
      </div>
    </div>
  );
}

function Bl() {
  return (
    <div
      className="bg-[#00aeef] h-[468px] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-center w-[442px]"
      data-name="Bl"
    >
      <div
        className="absolute font-['Poppins:SemiBold',_sans-serif] text-[52.291px] text-nowrap top-[41px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">PROBLEM</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] top-[118px] translate-x-[-50%] w-[406.814px]"
        style={{ left: "calc(50% + 0.407px)" }}
      >
        <p className="block leading-[normal]">
          Millions lack access to basic healthcare, especially in rural and
          remote areas.
        </p>
      </div>
    </div>
  );
}

function Bl1() {
  return (
    <div
      className="bg-[#797979] h-[468px] leading-[0] not-italic relative shrink-0 text-center text-gray-50 w-[442px]"
      data-name="Bl"
    >
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] left-1/2 text-[52.291px] text-nowrap top-[41px] translate-x-[-50%]">
        <p className="block leading-[normal] whitespace-pre">Solution</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] top-[118px] translate-x-[-50%] w-[406.814px]"
        style={{ left: "calc(50% + 0.407px)" }}
      >
        <p className="block leading-[normal]">
          Deploying smart, self-service medical kiosks to eliminate travel time,
          reduce costs, and provide real-time consultations.
        </p>
      </div>
    </div>
  );
}

function Bl2() {
  return (
    <div
      className="bg-[#1c2341] h-[468px] leading-[0] not-italic relative shrink-0 text-[#ffffff] w-[442px]"
      data-name="Bl"
    >
      <div
        className="absolute font-['Poppins:SemiBold',_sans-serif] text-[52.291px] text-center text-nowrap top-[41px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">Why It Matters</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] text-left top-[118px] w-[406.814px]"
        style={{ left: "calc(50% - 203px)" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-[41.595px]">
            <span className="leading-[normal]">{`Reduces dependency on unregulated pharmacies `}</span>
          </li>
          <li className="mb-0 ms-[41.595px]">
            <span className="leading-[normal]">
              Improves early diagnosis and preventive care
            </span>
          </li>
          <li className="ms-[41.595px]">
            <span className="leading-[normal]">
              Enables healthcare in critical or remote locations
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function B5S2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[15px] items-center justify-start left-[42px] p-0 top-[143px]"
      data-name="B5S2"
    >
      <Bl />
      <Bl1 />
      <Bl2 />
    </div>
  );
}

function B5() {
  return (
    <div
      className="absolute h-[631px] overflow-clip top-[2869.69px] translate-x-[-50%] w-[1440px]"
      data-name="B5"
      style={{ left: "calc(50% - 1px)" }}
    >
      <B5S1 />
      <B5S2 />
    </div>
  );
}

function B6S1() {
  return (
    <div
      className="absolute h-[113px] leading-[0] left-[35px] not-italic overflow-clip text-[#1c2341] text-nowrap top-2.5 w-[1370px]"
      data-name="B6S1"
    >
      <div className="absolute font-['Poppins:Bold',_sans-serif] left-[685px] text-[64.028px] text-center top-0 translate-x-[-50%]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Where It Makes the Difference
        </p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] left-[430.5px] text-[20.6px] text-left top-[82px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Versatile deployment in key community locations
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 text-[#1c2341] text-left text-nowrap translate-x-[-50%] translate-y-[-50%] w-[434px]"
      data-name="Text"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 90.5px)" }}
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[42.175px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Rural Villages
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[22.153px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Bringing healthcare to the underserved
        </p>
      </div>
    </div>
  );
}

function Sl() {
  return (
    <div className="absolute h-[122px] left-0 top-0 w-[675px]" data-name="SL">
      <div className="absolute border-[#1c2341] border-[3px] border-solid inset-0 pointer-events-none" />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 text-[#1c2341] text-left text-nowrap translate-x-[-50%] translate-y-[-50%] w-[434px]"
      data-name="Text"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 90.5px)" }}
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[42.175px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          College Campuses
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[22.153px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">{`Accessible care for students & staff`}</p>
      </div>
    </div>
  );
}

function Sl1() {
  return (
    <div
      className="absolute h-[122px] left-[692.5px] top-0 w-[675px]"
      data-name="SL"
    >
      <div className="absolute border-[#1c2341] border-[3px] border-solid inset-0 pointer-events-none" />
      <Text8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[122px] left-0 overflow-clip top-0 w-[1367.5px]">
      <Sl />
      <Sl1 />
    </div>
  );
}

function Text9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 text-[#1c2341] text-left text-nowrap translate-x-[-50%] translate-y-[-50%] w-[434px]"
      data-name="Text"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 90.5px)" }}
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[42.175px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">{`Bus & Railway Stations`}</p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[22.153px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Quick aid for travelers
        </p>
      </div>
    </div>
  );
}

function Sl2() {
  return (
    <div className="absolute h-[122px] left-0 top-0 w-[675px]" data-name="SL">
      <div className="absolute border-[#1c2341] border-[3px] border-solid inset-0 pointer-events-none" />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 text-[#1c2341] text-left text-nowrap translate-x-[-50%] translate-y-[-50%] w-[434px]"
      data-name="Text"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 90.5px)" }}
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[42.175px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Tourist Spots
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[22.153px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Essential help away from home
        </p>
      </div>
    </div>
  );
}

function Sl3() {
  return (
    <div
      className="absolute h-[122px] left-[692.5px] top-0 w-[675px]"
      data-name="SL"
    >
      <div className="absolute border-[#1c2341] border-[3px] border-solid inset-0 pointer-events-none" />
      <Text10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[122px] left-0 overflow-clip top-[147px] w-[1367.5px]">
      <Sl2 />
      <Sl3 />
    </div>
  );
}

function Text11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 text-[#1c2341] text-left text-nowrap translate-x-[-50%] translate-y-[-50%] w-[434px]"
      data-name="Text"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 90.5px)" }}
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] relative shrink-0 text-[42.175px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Community Centers
        </p>
      </div>
      <div className="font-['Poppins:Regular',_sans-serif] relative shrink-0 text-[22.153px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Centralized wellness points in local neighborhoods
        </p>
      </div>
    </div>
  );
}

function Sl4() {
  return (
    <div
      className="absolute h-[122px] left-[348px] top-[294px] w-[675px]"
      data-name="SL"
    >
      <div className="absolute border-[#1c2341] border-[3px] border-solid inset-0 pointer-events-none" />
      <Text11 />
    </div>
  );
}

function B6S2() {
  return (
    <div
      className="absolute h-[416px] left-[35px] overflow-clip top-[159px] w-[1370px]"
      data-name="B6S2"
    >
      <Frame4 />
      <Frame5 />
      <Sl4 />
    </div>
  );
}

function B6() {
  return (
    <div
      className="absolute h-[585px] left-1/2 overflow-clip top-[3560.69px] translate-x-[-50%] w-[1440px]"
      data-name="B6"
    >
      <B6S1 />
      <B6S2 />
    </div>
  );
}

function B7S1() {
  return (
    <div
      className="absolute h-36 leading-[0] left-8 not-italic overflow-clip text-[#1c2341] text-nowrap top-2.5 w-[1376px]"
      data-name="B7S1"
    >
      <div className="absolute font-['Poppins:Bold',_sans-serif] left-[255.5px] text-[64.028px] text-center top-0 translate-x-[-50%]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Partner With Us
        </p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] left-0 text-[20.6px] text-left top-[89px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Let’s build a healthier tomorrow, together
        </p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] left-0 text-[20.6px] text-left top-[113px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          We are looking for visionary collaborators to scale impact.
        </p>
      </div>
    </div>
  );
}

function Bl3() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[193px] leading-[0] left-0 not-italic rounded-[10px] text-[#ffffff] text-center top-0 w-[448px]"
      data-name="Bl"
    >
      <div
        className="absolute font-['Poppins:SemiBold',_sans-serif] text-[52.291px] text-nowrap top-[41px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">Investors</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] top-[118px] translate-x-[-50%] w-[406.814px]"
        style={{ left: "calc(50% + 0.407px)" }}
      >
        <p className="block leading-[normal]">Fuel growth and Scaling</p>
      </div>
    </div>
  );
}

function Bl4() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[193px] leading-[0] left-[463px] not-italic rounded-[10px] text-[#ffffff] text-center top-0 w-[449px]"
      data-name="Bl"
    >
      <div
        className="absolute font-['Poppins:SemiBold',_sans-serif] text-[52.291px] text-nowrap top-[41px] translate-x-[-50%]"
        style={{ left: "calc(50% + 1px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">Government</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] top-[118px] translate-x-[-50%] w-[406.814px]"
        style={{ left: "calc(50% + 0.907px)" }}
      >
        <p className="block leading-[normal]">Public health initiatives</p>
      </div>
    </div>
  );
}

function Bl5() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[193px] leading-[0] left-[927px] not-italic rounded-[10px] text-[#ffffff] text-center top-0 w-[448px]"
      data-name="Bl"
    >
      <div
        className="absolute font-['Poppins:SemiBold',_sans-serif] text-[52.291px] text-nowrap top-[41px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[normal] whitespace-pre">NGOs</p>
      </div>
      <div
        className="absolute font-['Poppins:Regular',_sans-serif] text-[27.73px] top-[118px] translate-x-[-50%] w-[406.814px]"
        style={{ left: "calc(50% + 0.407px)" }}
      >
        <p className="block leading-[normal]">Healthcare Partners</p>
      </div>
    </div>
  );
}

function B7S2() {
  return (
    <div
      className="absolute h-[193px] left-8 overflow-clip top-[173px] w-[1376px]"
      data-name="B7S2"
    >
      <Bl3 />
      <Bl4 />
      <Bl5 />
    </div>
  );
}

function Btn2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 h-[100px] items-center justify-center left-1/2 px-[93px] py-[23px] rounded-[59px] top-0 translate-x-[-50%] w-[548px]"
      data-name="Btn"
    >
      <div className="absolute border-[#00aeef] border-[3px] border-solid inset-0 pointer-events-none rounded-[59px]" />
      <div className="font-['Poppins:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00aeef] text-[36px] text-left text-nowrap">
        <p className="block leading-[54px] whitespace-pre">Partner With US</p>
      </div>
    </div>
  );
}

function B7S3() {
  return (
    <div
      className="absolute h-[100px] left-[446px] overflow-clip top-[385px] w-[548px]"
      data-name="B7S3"
    >
      <Btn2 />
    </div>
  );
}

function B7() {
  return (
    <div
      className="absolute h-[495px] left-1/2 overflow-clip top-[4205.69px] translate-x-[-50%] w-[1440px]"
      data-name="B7"
    >
      <B7S1 />
      <B7S2 />
      <B7S3 />
    </div>
  );
}

function Copyright() {
  return (
    <div
      className="absolute h-[36.147px] top-72 translate-x-[-50%] w-[214px]"
      data-name="Copyright"
      style={{ left: "calc(50% - 215.702px)" }}
    >
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-9 justify-center leading-[0] left-[-28px] not-italic text-[10.369px] text-gray-50 text-left top-[18px] tracking-[0.2074px] translate-y-[-50%] w-[287px]">
        <p className="adjustLetterSpacing block leading-[normal]">
          2025 HCTMM Medtech Pvt.Ltd. All Rights Reserved.
        </p>
      </div>
      <div
        className="absolute bottom-[30.838%] left-[-21.028%] right-[114.486%] top-[33.198%]"
        data-name="cp logo"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 13"
        >
          <path
            d={svgPaths.p21ce080}
            fill="var(--fill-0, #F9FAFB)"
            id="cp logo"
          />
        </svg>
      </div>
      <div className="absolute h-0 left-1/2 top-[4.608px] translate-x-[-50%] w-[500px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.833px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 500 1"
          >
            <line
              id="Line 1"
              stroke="url(#paint0_linear_1_1235)"
              strokeWidth="0.833333"
              x2="500"
              y1="0.583333"
              y2="0.583333"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_1235"
                x1="0"
                x2="500"
                y1="1.5"
                y2="1.5"
              >
                <stop stopColor="#F9FAFB" stopOpacity="0" />
                <stop offset="0.5" stopColor="#F9FAFB" />
                <stop offset="1" stopColor="#F9FAFB" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Helps() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[16.627px] h-[244px] items-start justify-start p-0 relative shrink-0 w-[693.405px]"
      data-name="Helps"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[29.803px] text-gray-50 text-left tracking-[0.5961px] w-full">
        <p className="block leading-[normal]">Terms And Service</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.451px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 694 2"
          >
            <line
              id="Line 2"
              stroke="var(--stroke-0, #F9FAFB)"
              strokeWidth="1.45071"
              x2="693.405"
              y1="1.27465"
              y2="1.27465"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[29.803px] text-gray-50 text-left tracking-[0.5961px] w-full">
        <p className="block leading-[normal]">Privacy and Policy</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.451px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 694 2"
          >
            <line
              id="Line 2"
              stroke="var(--stroke-0, #F9FAFB)"
              strokeWidth="1.45071"
              x2="693.405"
              y1="1.27465"
              y2="1.27465"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[29.803px] text-gray-50 text-left tracking-[0.5961px] w-full">
        <p className="block leading-[normal]">Support</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.451px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 694 2"
          >
            <line
              id="Line 2"
              stroke="var(--stroke-0, #F9FAFB)"
              strokeWidth="1.45071"
              x2="693.405"
              y1="1.27465"
              y2="1.27465"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[29.803px] text-gray-50 text-left tracking-[0.5961px] w-full">
        <p className="block leading-[normal]">FAQs</p>
      </div>
    </div>
  );
}

function F3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3.5 items-center justify-start left-0 p-0 top-0"
      data-name="F3"
    >
      <div className="flex h-[275px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[275px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.833px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 275 1"
              >
                <line
                  id="Line 2"
                  stroke="var(--stroke-0, #F9FAFB)"
                  strokeWidth="0.833333"
                  x2="275"
                  y1="0.583333"
                  y2="0.583333"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Helps />
    </div>
  );
}

function F2() {
  return (
    <div
      className="absolute h-[324.147px] left-[582px] top-[87px] w-[707.405px]"
      data-name="F2"
    >
      <Copyright />
      <F3 />
    </div>
  );
}

function Call() {
  return (
    <div
      className="h-[46.591px] relative shrink-0 w-[163.07px]"
      data-name="Call"
    >
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[46.591px] leading-[normal] left-[21.57px] not-italic text-[#ffffff] text-[16.001px] text-left top-0 w-[141.5px]">
        <p className="block mb-0">+91-9959407669</p>
        <p className="block">+91-8142858980</p>
      </div>
      <div
        className="absolute bottom-[57.407%] left-0 right-[90.476%] top-[9.26%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.p37d6fa00}
            fill="var(--fill-0, #F9FAFB)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[7.407%] left-0 right-[90.476%] top-[59.26%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <path
            d={svgPaths.p37d6fa00}
            fill="var(--fill-0, #F9FAFB)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Add() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[0.863px] items-start justify-start px-[8.628px] py-0 relative shrink-0"
      data-name="Add"
    >
      <div className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffffff] text-[16.001px] text-left w-[270.057px]">
        <p className="block mb-0">NH-7,A.K.Saumuthiram,</p>
        <p className="block mb-0">Pachal Post, Nammakkal-637018,</p>
        <p className="block">{`TamilNadu,India `}</p>
      </div>
      <Call />
    </div>
  );
}

function Address() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[0.863px] items-start justify-start left-0 px-[4.314px] py-0 top-0 w-[351px]"
      data-name="Address"
    >
      <div className="font-['Poppins:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[23.926px] text-center w-[314.06px]">
        <p className="block leading-[normal]">HCTMM MEDTECH PVT.LTD</p>
      </div>
      <Add />
    </div>
  );
}

function ConnectLg() {
  return (
    <div
      className="absolute box-border content-stretch cursor-pointer flex flex-row gap-[28.976px] items-center justify-start left-[116px] px-[4.314px] py-0 top-[164.945px]"
      data-name="connect lg"
    >
      <a
        className="block relative shrink-0 size-[20.363px]"
        data-name="insta"
        href="https://www.instagram.com/hctmm_"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <path
            d={svgPaths.p3a752300}
            fill="var(--fill-0, #F9FAFB)"
            id="insta"
          />
        </svg>
      </a>
      <a
        className="block h-[20.364px] relative shrink-0 w-[19.961px]"
        data-name="google"
        href="mailto:hctmmmedtech@gmail.com"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 21"
        >
          <path
            d={svgPaths.p3eb35c80}
            fill="var(--fill-0, #F9FAFB)"
            id="google"
          />
        </svg>
      </a>
      <a
        className="block relative shrink-0 size-[20.707px]"
        data-name="Vector"
        href="https://www.linkedin.com/company/healthcareatm/"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <path
            d={svgPaths.p3fba3a00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </a>
      <a
        className="block relative shrink-0 size-[20.707px]"
        data-name="Vector"
        href="https://x.com/healthcare_atm"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <path
            d={svgPaths.p2993ed00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </a>
    </div>
  );
}

function F4() {
  return (
    <div
      className="h-[185.652px] mb-[-13px] relative shrink-0 w-[351px]"
      data-name="F2"
    >
      <Address />
      <ConnectLg />
    </div>
  );
}

function F1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[151px] pb-[13px] pt-0 px-0 top-[83px] w-[363px]"
      data-name="F1"
    >
      <div
        className="font-['Poppins:Medium',_sans-serif] leading-[0] mb-[-13px] min-w-full not-italic relative shrink-0 text-[64.028px] text-center text-gray-50"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Contact US</p>
      </div>
      <F4 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#1c2341] h-[425px] left-1/2 top-[4784px] translate-x-[-50%] w-[1440px]"
      data-name="Footer"
    >
      <F2 />
      <F1 />
    </div>
  );
}

function Redirect() {
  return (
    <div
      className="box-border content-stretch cursor-pointer flex flex-row font-['Poppins:Regular',_sans-serif] gap-[15.491px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[16.682px] text-left text-nowrap"
      data-name="Redirect"
    >
      <button className="[white-space-collapse:collapse] block relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          HOME
        </p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          ABOUT
        </p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          SOLUTIONS
        </p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          SERVICES
        </p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          CONTACT
        </p>
      </button>
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[rgba(240,248,255,0.8)] bottom-0.5 box-border content-stretch flex flex-row gap-[73px] items-center justify-start left-0 overflow-clip px-[30px] py-[5px] rounded-[10px] shadow-[0px_4px_49px_0px_rgba(0,0,0,0.25)] w-[805px]"
      data-name="header"
    >
      <div
        className="bg-center bg-cover bg-no-repeat h-[41px] shrink-0 w-[81.537px]"
        data-name="HCTMM_logo"
        style={{ backgroundImage: `url('${imgHctmmLogo}')` }}
      />
      <Redirect />
      <div className="font-['Poppins:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16.682px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div
      className="h-[89px] pointer-events-auto sticky top-0 w-[805px]"
      data-name="HEADER"
    >
      <Header />
    </div>
  );
}

export default function Desktop1() {
  return (
    <div
      className="relative size-full"
      data-name="Desktop - 1"
      style={{
        backgroundImage:
          "linear-gradient(232.286deg, rgba(255, 255, 255, 0.2) 44.737%, rgba(0, 174, 239, 0.2) 84.425%), linear-gradient(142.412deg, rgb(242, 252, 254) 2.532%, rgb(131, 199, 236) 24.411%, rgb(216, 239, 249) 49.542%)",
      }}
    >
      <div
        className="absolute bg-[#ffffff] h-[152px] left-[-1px] opacity-0 top-[-30px] w-[1440px]"
        data-name="b1 scroll"
      />
      <div
        className="absolute bg-[#ffffff] h-[152px] left-[-1px] opacity-0 top-[630px] w-[1440px]"
        data-name="b2 scroll"
      />
      <div
        className="absolute bg-[#ffffff] h-[152px] left-1/2 opacity-0 top-[1343px] translate-x-[-50%] w-[1440px]"
        data-name="b3 scroll"
      />
      <div
        className="absolute bg-[#ffffff] h-[152px] left-1/2 opacity-0 top-[2034px] translate-x-[-50%] w-[1440px]"
        data-name="b4 scroll"
      />
      <div
        className="absolute bg-[#ffffff] h-[152px] left-1/2 opacity-0 top-[4052px] translate-x-[-50%] w-[1440px]"
        data-name="b7 scroll"
      />
      <B2 />
      <Frame1 />
      <B3 />
      <B4 />
      <B5 />
      <B6 />
      <B7 />
      <Footer />
      <div
        className="absolute bottom-0 left-[318px] pointer-events-none top-[-10px]"
        style={{ height: "calc(100% + 10px)" }}
      >
        <Header1 />
      </div>
    </div>
  );
}