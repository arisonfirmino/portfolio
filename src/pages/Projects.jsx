import { FaGrip } from "react-icons/fa6";

const Projects = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <FaGrip />
        </span>

        <span>PROJECTS</span>
      </button>
    </main>
  );
};

export default Projects;
