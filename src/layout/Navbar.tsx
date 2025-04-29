export default function Navbar() {
  return (
    <nav className="navbar shadow-sm py-5 px-20">
      <div className="navbar-start gap-10">
        <div className="flex gap-1">
          <img src="/logo.svg" alt="Teach logo" />
          <a className="text-3xl font-title hover:cursor-pointer">teach</a>
        </div>
        <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-10">
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
      <div className="navbar-end gap-3">
        <a className="btn btn-ghost font-semibold">Log In</a>
        <a className="btn btn-ghost font-semibold py-3 px-6 border-2 border-black">
          Sign Up Now
        </a>
      </div>
    </nav>
  );
}
