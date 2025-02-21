import Link from "next/link"
import { FaPhoneVolume } from "react-icons/fa6"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow"
          >
            <li>
              <Link href={"/"} className="text-xl">
                Home
              </Link>
            </li>
            <li>
              <a className="text-xl">Services</a>
              <ul className="p-2">
                <li>
                  <Link href={"/"} className="text-base">
                    Carpet Cleaning
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-base">
                    Upholstery Cleaning
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-base">
                    Hardwood floor Cleaning
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/"} className="text-xl">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-base md:text-xl">AB Carpet Cleaning</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a className="w-[200px]">Carpet Cleaning</a>
                </li>
                <li>
                  <a>Upholstery Cleaning</a>
                </li>
                <li>
                  <a>Hardwood floor Cleaning</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a href="tel:+9176953712" className="btn tracking-widest">
          <FaPhoneVolume />
          (917)-695-3712
        </a>
        <Link href={"/"} className="btn hidden sm:inline-flex">
          Get an Instant Quote
        </Link>
      </div>
    </div>
  )
}

export default Navbar
