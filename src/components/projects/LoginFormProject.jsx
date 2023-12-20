import Preview from "../../assets/Untitled.png";

import { FaReact, FaNodeJs, FaGlobe } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { RiGitRepositoryLine } from "react-icons/ri";

const LoginFormProject = () => {
  return (
    <main className="flex items-center justify-center">
      <div id="card" className="perspective-1000 h-[400px] w-[650px]">
        <div id="inner" className="card-inner relative h-full w-full">
          <div className="backface-hidden absolute h-full w-full overflow-hidden rounded-3xl bg-bg-color p-5">
            <h1 className="text-center text-2xl font-medium">Login Form</h1>

            <picture className="mt-5 flex justify-center">
              <img
                src={Preview}
                alt="login-form preview"
                className="w-[550px]"
              />
            </picture>
          </div>

          <div className="backface-hidden rotateY-180 absolute h-full w-full overflow-hidden rounded-3xl bg-bg-color p-5">
            <h3 className="mb-2 text-xl font-light">Description:</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ex
              iusto optio, asperiores, cupiditate a corrupti cum maxime quod
              commodi, sit neque ullam amet. Voluptatum odio fuga ea cumque qui!
            </p>

            <h3 className="mb-2 mt-10 text-xl font-light">Techs used:</h3>

            <hr className="border-primary-color" />

            <div className="my-5 flex gap-5">
              <button className="flex h-20 w-16 cursor-default items-center justify-center rounded-full border border-text-color">
                <FaReact size={28} />
              </button>

              <button className="flex h-20 w-16 cursor-default items-center justify-center rounded-full border border-text-color">
                <BiLogoTypescript size={28} />
              </button>

              <button className="flex h-20 w-16 cursor-default items-center justify-center rounded-full border border-text-color">
                <FaNodeJs size={28} />
              </button>

              <button className="flex h-20 w-16 cursor-default items-center justify-center rounded-full border border-text-color">
                <SiMongodb size={28} />
              </button>
            </div>

            <hr className="border-primary-color" />

            <div className="mt-5 flex justify-between">
              <a
                href="https://github.com/arisonfirmino/login-form"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-full border border-primary-color px-2 py-1 duration-500 hover:bg-primary-color">
                  <RiGitRepositoryLine />
                  Respository
                </button>
              </a>

              <a
                href="https://login-form-pearl-three.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-full border  border-primary-color px-2 py-1 duration-500 hover:bg-primary-color">
                  <FaGlobe />
                  Access Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginFormProject;
