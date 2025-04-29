export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white p-10">
      <div className="footer sm:footer-horizontal">
        <aside className="flex gap-1">
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0001 6.03122L18.5001 6.03122C18.3031 6.03122 18.108 6.07003 17.926 6.14541C17.7441 6.22078 17.5787 6.33125 17.4393 6.47052C17.3001 6.6099 17.1896 6.77527 17.1142 6.95718C17.0388 7.13919 17 7.33426 17 7.53124L17 13.0313C16.5 15.0308 16.4065 15.6247 15 17.0313C13.5935 18.4378 12.4892 19.5312 10.5 19.5313C9.51511 19.5313 8.90995 19.4082 8 19.0312C7.09004 18.6543 6.19645 17.7277 5.5 17.0313C4.80356 16.3348 4.87691 16.4412 4.5 15.5312C4.12309 14.6213 4.00003 14.0162 4.00004 13.0312L4.00004 7.53169C4.0001 7.33471 3.96134 7.13953 3.88599 6.95751C3.81063 6.7755 3.70015 6.61002 3.56086 6.47074C3.42155 6.33136 3.25617 6.22089 3.07415 6.14541C2.89214 6.07003 2.69705 6.03122 2.50002 6.03122L-7.43095e-07 6.03122L-4.15255e-07 12.5313C-3.55061e-07 13.9102 0.271592 15.2756 0.799269 16.5495C1.32695 17.8234 2.10038 18.9809 3.07539 19.9559C4.05042 20.9309 5.20793 21.7044 6.48186 22.232C7.75578 22.7597 9.12116 23.0313 10.5 23.0312C13.2848 23.0312 15.9555 21.925 17.9247 19.9559C19.8938 17.9868 21.0001 15.3161 21.0001 12.5313L21.0001 6.03122Z"
              fill="#EA580C"
            />
            <circle cx="4.5" cy="5.46875" r="4.5" fill="#FFFFFF" />
          </svg>
          <a className="text-3xl font-title hover:cursor-pointer">teach</a>
        </aside>
        <nav className="flex flex-col gap-5">
          <h6 className="footer-title">Products</h6>
          <a className="link-hover font-light">Pricing</a>
          <a className="link-hover font-light">Overview</a>
          <a className="link-hover font-light">Browse</a>
          <div className="flex gap-2">
            <a className="link-hover font-light">Accessibility</a>
            <span className="px-2 bg-white text-purple-500 rounded-sm">
              Beta
            </span>
          </div>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="footer-title">Solutions</h6>
          <a className="link-hover font-light">Brainstorming</a>
          <a className="link-hover font-light">Ideation</a>
          <a className="link-hover font-light">Wireframing</a>
          <a className="link-hover font-light">Research</a>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="footer-title">Resources</h6>
          <a className="link-hover font-light">Help Center</a>
          <a className="link-hover font-light">Blog</a>
          <a className="link-hover font-light">Tutorials</a>
          <a className="link-hover font-light">FAQs</a>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="footer-title">Support</h6>
          <a className="link-hover font-light">Contact Us</a>
          <a className="link-hover font-light">Developers</a>
          <a className="link-hover font-light">Documentation</a>
          <a className="link-hover font-light">Integrations</a>
        </nav>
        <nav className="flex flex-col gap-5">
          <h6 className="footer-title">Company</h6>
          <a className="link-hover font-light">About</a>
          <a className="link-hover font-light">Press</a>
          <a className="link-hover font-light">Events</a>
          <a className="link-hover font-light">Request Demo</a>
        </nav>
      </div>

      <hr className="border-gray-700 mt-10 mb-5" />

      <div className="flex items-center justify-between flex-wrap gap-5">
        <p>uteach @ 2023. All rights reserved.</p>
        <ul className="flex justify-between gap-5 py-3">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li className="flex gap-1">
            <img src="src/assets/icons/global.svg" alt="Global" />
            EN
          </li>
          <li className="flex gap-1">
            <img
              src="src/assets/icons/euro.svg"
              alt="Global"
              className="hidden md:inline"
            />
            EUR
          </li>
          <li>
            <img
              src="src/assets/icons/accessibility.svg"
              alt="Global"
              width={30}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
