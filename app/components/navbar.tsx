import Link from "next/link"
import { FaPhoneVolume } from "react-icons/fa6"

const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center gap-3 items-center md:hidden px-2 py-4 border-b border-zinc-600">
        <a href="tel:+9176953712" className="btn tracking-widest text-xs h-9">
          <FaPhoneVolume />
          (917)-695-3712
        </a>
        <Link href={"/"} className="btn text-xs h-9">
          Get an Instant Quote
        </Link>
      </div>
      <div className="navbar bg-base-100 shadow-sm border-b sm:border-b-0 py-4 border-zinc-600">
        <div className="navbar-start w-full md:w-[50%]">
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
          <div className="mx-auto lg:mx-0">
            <a className="btn btn-ghost text-xl">AB Carpet Cleaning</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:inline-flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a>Home</a>
            </li>
            <div className="dropdown cursor-pointer ">
              <div tabIndex={0} role="button" className="hover:underline m-2">
                Services
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm"
              >
                <li>
                  <a>Carpet Cleaning</a>
                </li>
                <li>
                  <a>Upholstery Cleaning</a>
                </li>
                <li>
                  <a>Hardwood Floor Cleaning</a>
                </li>
              </ul>
            </div>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4 hidden md:inline-flex">
          <a href="tel:+9176953712" className="btn tracking-widest">
            <FaPhoneVolume />
            (917)-695-3712
          </a>
          <Link href={"/"} className="btn hidden sm:inline-flex">
            Get an Instant Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
