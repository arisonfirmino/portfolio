import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const BackEndSkills = () => {
  return (
    <main>
      <div className="mt-3 flex gap-5">
        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#689f63]"
        >
          <FaNodeJs
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">NodeJS</p>
        </button>

        <button
          id="skill-button"
          className="flex h-24 w-20 cursor-default flex-col items-center justify-center rounded-full border border-text-color md:h-[130px] md:w-[100px] md:hover:border-primary-color md:hover:text-[#10aa50]"
        >
          <SiMongodb
            id="skill-icon"
            className="text-3xl md:relative md:top-[12px] md:text-4xl md:duration-500"
          />

          <p className="hidden text-text-color md:invisible md:flex">MongoDB</p>
        </button>
      </div>
    </main>
  );
};

export default BackEndSkills;
