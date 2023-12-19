import { BsChatSquareText } from "react-icons/bs";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main className="relative mb-10 h-full flex-col items-center justify-center sm:mb-0 sm:flex">
      <button className="left-0 top-0 flex cursor-default items-center justify-center gap-2 rounded-full border border-primary-color p-2 sm:absolute">
        <span>
          <BsChatSquareText />
        </span>

        <span>CONTACT</span>
      </button>

      <div className="mt-10 flex w-full flex-col items-center justify-center sm:mt-0 sm:flex-row sm:justify-between sm:px-20">
        <div className="mb-10 sm:mb-0">Text</div>

        <div className="w-full sm:max-w-lg">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
