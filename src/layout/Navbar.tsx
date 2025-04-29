import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar shadow-sm py-5 px-4 md:px-20">
      <div className="navbar-start gap-10">
        <div className="flex gap-1">
          <img src="/logo.svg" alt="Teach logo" />
          <a className="text-3xl font-title hover:cursor-pointer">teach</a>
        </div>

        <ul className="hidden md:flex menu menu-horizontal px-1 text-lg font-semibold gap-10">
          <li>
            <a className="hover-underline">Products</a>
          </li>
          <li>
            <a className="hover-underline">Solutions</a>
          </li>
          <li>
            <a className="hover-underline">Pricing</a>
          </li>
          <li>
            <details className="hover-underline">
              <summary>Resources</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3 hidden md:flex">
        <a className="btn btn-ghost font-semibold">Log In</a>
        <a className="btn btn-ghost font-semibold py-3 px-6 border-2 border-black">
          Sign Up Now
        </a>
      </div>

      <div className="navbar-end md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md p-5 z-50 md:hidden">
          <ul className="menu w-full">
            <li>
              <a className="hover-underline">Products</a>
            </li>
            <li>
              <a className="hover-underline">Solutions</a>
            </li>
            <li>
              <a className="hover-underline">Pricing</a>
            </li>
            <li>
              <details className="hover-underline">
                <summary>Resources</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <div className="flex flex-col gap-3 mt-4">
              <a className="btn btn-ghost font-semibold">Log In</a>
              <a className="btn btn-ghost font-semibold py-3 px-6 border-2 border-black">
                Sign Up Now
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
