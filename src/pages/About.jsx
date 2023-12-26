import { BsPerson } from "react-icons/bs";

import Timeline from "../components/Timeline";

const About = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <BsPerson />
        ABOUT
      </button>

      <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:mt-20 sm:flex-row">
        <div className="sm:max-w-lg">
          <h1 className="mb-5 text-2xl font-medium">
            Education and <span className="text-primary-color">Experience</span>
          </h1>

          <div className="max-h-[300px] overflow-auto">
            <Timeline />
          </div>
        </div>

        <div className="overflow-auto sm:max-w-3xl">
          <h1 className="mb-1 text-center text-3xl font-medium sm:text-left">
            Me chamo <span className="text-primary-color">Arison Firmino</span>
          </h1>

          <p className="text-center text-lg font-light sm:text-left">
            Tenho 22 anos de idade, sou residente em Marília, no interior de São
            Paulo. Atualmente estou em busca de oportunidades na área de
            programação, tendo como base minha experiência adquirida por meio de
            projetos pessoais. Minha principal experiência recai sobre a
            linguagem <span className="text-primary-color">JavaScript</span>, na
            qual desenvolvi e aprimorei meus projetos. Estou animado para
            contribuir e expandir minha bagagem profissional de maneira
            significativa em desafios dentro do universo da programação.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
