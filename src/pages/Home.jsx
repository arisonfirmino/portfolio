import { FaHouse } from "react-icons/fa6";

const Home = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <FaHouse />
        </span>

        <span>INTRODUCE</span>
      </button>
    </main>
  );
};

export default Home;
