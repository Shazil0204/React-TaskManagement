import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Project Name */}
          <Link to="/" className="text-white hover:text-gray-300">
            Task Manager
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
