import { BsPerson } from "react-icons/bs";
import { MdTranslate } from "react-icons/md";

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
          <h1 className="mb-1 text-center text-3xl font-medium sm:text-left">
            I'm <span className="text-primary-color">Arison Firmino</span>
          </h1>

          <p className="text-center text-lg font-light sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus dolor corrupti impedit expedita vero dignissimos quaerat
            dolores molestiae officia repudiandae nostrum nisi consequuntur
            voluptas quisquam, id optio! Perspiciatis, corrupti recusandae?
          </p>

          <div className="flex justify-center">
            <button className="mt-5 flex items-center gap-1 rounded-full bg-primary-color px-2 text-lg duration-500 sm:hover:bg-bg-color">
              <span>
                <MdTranslate />
              </span>

              <span>Translate</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
