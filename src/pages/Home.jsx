import { BsHouseDoor } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaRegFilePdf,
  FaRegCopyright,
} from "react-icons/fa6";

import Picture from "../assets/picture.png";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <main className="relative">
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsHouseDoor />
        </span>

        <span>INTRODUCE</span>
      </button>

      <div className="right-0 top-0 my-10 flex justify-center gap-5 sm:absolute sm:my-0">
        <a href="https://wa.me/14998794845" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 rounded-full border border-text-color p-4 text-2xl duration-500 sm:px-3 sm:py-1 sm:text-lg sm:hover:border-primary-color sm:hover:text-primary-color">
            <span>
              <FaWhatsapp />
            </span>

            <span className="hidden sm:flex">WhatsApp</span>
          </button>
        </a>

        <a
          href="https://github.com/arisonfirmino"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex items-center gap-2 rounded-full border border-text-color p-4 text-2xl duration-500 sm:px-3 sm:py-1 sm:text-lg sm:hover:border-primary-color sm:hover:text-primary-color">
            <span>
              <FaLinkedin />
            </span>

            <span className="hidden sm:flex">Linkedin</span>
          </button>
        </a>

        <a
          href="https://github.com/arisonfirmino"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex items-center gap-2 rounded-full border border-text-color p-4 text-2xl duration-500 sm:px-3 sm:py-1 sm:text-lg sm:hover:border-primary-color sm:hover:text-primary-color">
            <span>
              <FaGithub />
            </span>

            <span className="hidden sm:flex">Github</span>
          </button>
        </a>

        <a href={resume} download={resume}>
          <button className="flex items-center gap-2 rounded-full border border-text-color p-4 text-2xl duration-500 sm:border-none sm:bg-primary-color sm:px-3 sm:py-1 sm:text-lg sm:hover:bg-bg-color">
            <span>
              <FaRegFilePdf />
            </span>

            <span className="hidden sm:flex">Resume download</span>
          </button>
        </a>
      </div>

      <h1 className="text-center text-4xl font-medium sm:mt-20">
        Hello there! I'm <span className="text-primary-color">Arison</span>
      </h1>

      <picture className="mt-5 flex justify-center">
        <img src={Picture} alt="pic" className="w-64 rounded-3xl" />
      </picture>

      <p className="mt-1 flex items-center justify-center text-sm font-light">
        <IoLocationOutline className="relative bottom-[1.5px]" />
        &nbsp;Marília, São Paulo
      </p>

      <h3 className="mt-5 text-center text-xl font-medium">
        Front-End Developer
      </h3>

      <p className="mt-10 flex items-center justify-center text-xs font-light opacity-75">
        <FaRegCopyright size={8} />
        &nbsp;2024 Arison. All Rights Reserved
      </p>
    </main>
  );
};

export default Home;
