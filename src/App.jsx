import NavBar from "./components/NavBar";

import Content from "./components/Content";

const App = () => {
  return (
    <main className="flex flex-col text-text-color">
      <NavBar />

      <Content />
    </main>
  );
};

export default App;
