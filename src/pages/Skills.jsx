import { BsGear } from "react-icons/bs";
import { FaLaptop, FaGear } from "react-icons/fa6";

import FrontEndSkills from "../components/FrontEndSkills";
import BackEndSkills from "../components/BackEndSkills";

const Skills = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsGear />
        </span>

        <span>SKILLS</span>
      </button>

      <h1 className="my-5 text-3xl font-medium sm:my-10 sm:ml-10 sm:text-4xl">
        My <span className="text-primary-color">Advantages</span>
      </h1>

      <div className="flex-col items-center justify-center sm:flex">
        <div>
          <h3 className="flex items-center text-xl sm:ml-5 sm:text-2xl">
            <FaLaptop className="text-primary-color" />
            &nbsp;&nbsp;Front-End
          </h3>

          <FrontEndSkills />

          <h3 className="mt-5 flex items-center text-xl sm:ml-5 sm:mt-10 sm:text-2xl">
            <FaGear className="text-primary-color" />
            &nbsp;&nbsp;Back-End and Database
          </h3>

          <BackEndSkills />
        </div>
      </div>
    </main>
  );
};

export default Skills;
