import { BsPerson } from "react-icons/bs";

const About = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsPerson />
        </span>

        <span>ABOUT</span>
      </button>
    </main>
  );
};

export default About;
