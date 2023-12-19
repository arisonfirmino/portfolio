import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <main>
      <button className="flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2">
        <span>
          <FaEnvelope />
        </span>

        <span>CONTACT</span>
      </button>
    </main>
  );
};

export default Contact;
