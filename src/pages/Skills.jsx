import { BsPersonGear } from "react-icons/bs";

const Skills = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsPersonGear />
        </span>

        <span>SKILLS</span>
      </button>
    </main>
  );
};

export default Skills;
