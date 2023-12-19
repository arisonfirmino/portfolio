import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Content = () => {
  return (
    <main className="w-full px-5 sm:p-10">
      <div id="Home" className="h-[650px] w-full bg-red-600">
        <Home />
      </div>

      <div id="Timeline" className="mt-10 h-[650px] w-full bg-red-600">
        <Timeline />
      </div>

      <div id="Skills" className="mt-10 h-[650px] w-full bg-red-600">
        <Skills />
      </div>

      <div id="Projects" className="mt-10 h-[650px] w-full bg-red-600">
        <Projects />
      </div>

      <div id="Contact" className="mt-10 h-[650px] w-full bg-red-600">
        <Contact />
      </div>
    </main>
  );
};

export default Content;
