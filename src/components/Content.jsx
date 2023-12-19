import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Content = () => {
  return (
    <main className="w-full px-5 sm:p-10">
      <div id="Home" className="h-auto w-full bg-red-600 sm:h-[650px]">
        <Home />
      </div>

      <div id="About" className="mt-10 h-auto w-full bg-red-600 sm:h-[650px]">
        <About />
      </div>

      <div id="Skills" className="mt-10 h-auto w-full sm:h-[650px]">
        <Skills />
      </div>

      <div
        id="Projects"
        className="mt-10 h-auto w-full bg-red-600 sm:h-[650px]"
      >
        <Projects />
      </div>

      <div id="Contact" className="mt-10 h-auto w-full sm:h-[650px]">
        <Contact />
      </div>
    </main>
  );
};

export default Content;
