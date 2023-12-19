import { useState } from "react";

import { Link } from "react-scroll";

import {
  FaHouse,
  FaListUl,
  FaUserGear,
  FaGripVertical,
  FaEnvelope,
} from "react-icons/fa6";

const NavBar = () => {
  const navItems = [
    { id: "Home", icon: <FaHouse /> },
    { id: "Timeline", icon: <FaListUl /> },
    { id: "Skills", icon: <FaUserGear /> },
    { id: "Projects", icon: <FaGripVertical /> },
    { id: "Contact", icon: <FaEnvelope /> },
  ];

  const [active, setActive] = useState(0);

  return (
    <main className="bottom-0 flex w-full justify-center py-5 sm:fixed sm:py-10 ">
      <nav className="rounded-full bg-bg-color p-5">
        <ul className="flex gap-2 sm:gap-5">
          {navItems.map((menu, i) => (
            <li
              key={i}
              className="rounded-full p-3 text-2xl duration-500 sm:hover:text-primary-color"
            >
              <Link
                to={menu.id}
                smooth={true}
                offset={-39}
                duration={500}
                onClick={() => setActive(i)}
                className="cursor-pointer"
              >
                <span
                  className={`${
                    active === i ? "text-primary-color" : "duration-500"
                  }`}
                >
                  {menu.icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;
