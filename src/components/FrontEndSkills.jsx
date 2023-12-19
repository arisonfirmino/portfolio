import { FaHtml5, FaCss3Alt, FaSquareJs, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const FrontEndSkills = () => {
  return (
    <main>
      <div className="mt-3 flex gap-5">
        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#e54d26]"
        >
          <FaHtml5
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">HTML</p>
        </button>

        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#0b74b8]"
        >
          <FaCss3Alt
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">CSS</p>
        </button>

        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#dab92c]"
        >
          <FaSquareJs
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">JS</p>
        </button>

        <button
          id="skill-button"
          className="hidden h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:flex md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#61dafb]"
        >
          <FaReact
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">React</p>
        </button>

        <button
          id="skill-button"
          className="hidden h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:flex md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#3178c6]"
        >
          <BiLogoTypescript
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">TS</p>
        </button>
      </div>

      <div className="mt-3 flex gap-5 md:hidden">
        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color"
        >
          <FaReact id="skill-icon" className="text-3xl" />
        </button>

        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color "
        >
          <BiLogoTypescript id="skill-icon" className="text-3xl" />
        </button>
      </div>
    </main>
  );
};

export default FrontEndSkills;
