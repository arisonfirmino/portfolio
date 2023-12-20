import { BsBriefcase } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import LoginFormProject from "../components/projects/LoginFormProject";

const Projects = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <BsBriefcase />
        PROJECTS
      </button>

      <h1 className="my-5 text-3xl font-medium sm:my-10 sm:ml-10 sm:text-4xl">
        Featured <span className="text-primary-color">Projects</span>
      </h1>

      <div>
        <div className="hidden justify-center sm:flex">
          <LoginFormProject />
        </div>

        <div className="flex flex-col items-center justify-center sm:hidden">
          <p className="mb-5 text-xl">see my repositories on github</p>

          <a
            href="https://github.com/arisonfirmino?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center gap-2 rounded-full bg-primary-color p-2.5">
              <RiGitRepositoryLine />
              Repositories
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
