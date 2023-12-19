import { BsPerson } from "react-icons/bs";

import Timeline from "../components/Timeline";

const About = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsPerson />
        </span>

        <span>ABOUT</span>
      </button>

      <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:mt-20 sm:flex-row">
        <div className="sm:max-w-lg">
          <h1 className="mb-5 text-2xl font-medium">
            Education and <span className="text-primary-color">Experience</span>
          </h1>

          <div className="overflow-auto sm:max-h-[300px]">
            <Timeline />
          </div>
        </div>

        <div className="overflow-auto sm:max-w-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus dolor corrupti impedit expedita vero dignissimos quaerat
            dolores molestiae officia repudiandae nostrum nisi consequuntur
            voluptas quisquam, id optio! Perspiciatis, corrupti recusandae?
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
