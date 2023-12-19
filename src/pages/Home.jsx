import { BsHouseDoor } from "react-icons/bs";

const Home = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsHouseDoor />
        </span>

        <span>INTRODUCE</span>
      </button>
    </main>
  );
};

export default Home;
