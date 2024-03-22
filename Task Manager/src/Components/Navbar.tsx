import { Link } from "react-router-dom";

export default function Navbar() {
  let navlinks = [
    { text: "Home" },
    { text: "About" },
    { text: "Contact" },
    { text: "Login" },
  ];

  return (
    <>
      <nav className="bg-gray-800 py-4 drop-shadow-[0_5px_5px_rgba(31,41,55,1)] rounded-b-xl">
        <div className="mx-auto flex justify-between items-center px-10">
          {/* Project Name */}
          <Link to="/" className="text-white hover:text-gray-300 text-4xl">
            Task Manager
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              {navlinks.map((nav) => (
                <Link
                  className="text-white hover:bg-white/25 duration-300 p-5 rounded-xl"
                  to={nav.text === "Home" ? "/" : `/${nav.text.toLowerCase()}`}
                  key={nav.text}
                >
                  {nav.text}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
