import { BsListUl } from "react-icons/bs";

const Timeline = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <BsListUl />
        </span>

        <span>TIMELINE</span>
      </button>
    </main>
  );
};

export default Timeline;
