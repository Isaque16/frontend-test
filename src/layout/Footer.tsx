import global from "../assets/icons/global.svg";
import euro from "../assets/icons/euro.svg";
import accessibility from "../assets/icons/accessibility.svg";
import { ReactNode } from "react";

interface FooterNavProps {
  title: string;
  children: ReactNode;
}

function FooterNav({ title, children }: FooterNavProps) {
  return (
    <nav className="flex flex-col gap-5">
      <h6 className="footer-title">{title}</h6>
      <ul className="flex flex-col gap-5">{children}</ul>
    </nav>
  );
}

interface FooterNavItemProps {
  href: string;
  children: ReactNode;
  badge?: string;
}

function FooterNavItem({ href, children, badge }: FooterNavItemProps) {
  return (
    <li className="flex gap-2">
      <a href={href} className="link-hover font-light">
        {children}
      </a>
      {badge && (
        <span className="px-2 bg-white text-purple-500 rounded-sm">
          {badge}
        </span>
      )}
    </li>
  );
}

function FooterLogo() {
  return (
    <aside className="flex gap-1">
      <svg
        role="img"
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Teach logo"
      >
        <path
          d="M21.0001 6.03122L18.5001 6.03122C18.3031 6.03122 18.108 6.07003 17.926 6.14541C17.7441 6.22078 17.5787 6.33125 17.4393 6.47052C17.3001 6.6099 17.1896 6.77527 17.1142 6.95718C17.0388 7.13919 17 7.33426 17 7.53124L17 13.0313C16.5 15.0308 16.4065 15.6247 15 17.0313C13.5935 18.4378 12.4892 19.5312 10.5 19.5313C9.51511 19.5313 8.90995 19.4082 8 19.0312C7.09004 18.6543 6.19645 17.7277 5.5 17.0313C4.80356 16.3348 4.87691 16.4412 4.5 15.5312C4.12309 14.6213 4.00003 14.0162 4.00004 13.0312L4.00004 7.53169C4.0001 7.33471 3.96134 7.13953 3.88599 6.95751C3.81063 6.7755 3.70015 6.61002 3.56086 6.47074C3.42155 6.33136 3.25617 6.22089 3.07415 6.14541C2.89214 6.07003 2.69705 6.03122 2.50002 6.03122L-7.43095e-07 6.03122L-4.15255e-07 12.5313C-3.55061e-07 13.9102 0.271592 15.2756 0.799269 16.5495C1.32695 17.8234 2.10038 18.9809 3.07539 19.9559C4.05042 20.9309 5.20793 21.7044 6.48186 22.232C7.75578 22.7597 9.12116 23.0313 10.5 23.0312C13.2848 23.0312 15.9555 21.925 17.9247 19.9559C19.8938 17.9868 21.0001 15.3161 21.0001 12.5313L21.0001 6.03122Z"
          fill="#EA580C"
        />
        <circle cx="4.5" cy="5.46875" r="4.5" fill="#FFFFFF" />
      </svg>
      <a href="/" className="text-3xl font-title hover:cursor-pointer">
        teach
      </a>
    </aside>
  );
}

function FooterBottom() {
  return (
    <>
      <hr className="border-gray-700 mt-10 mb-5" />
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p>uteach @ 2023. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-between gap-5 py-3">
          <li>
            <a href="/terms" className="link-hover">
              Terms
            </a>
          </li>
          <li>
            <a href="/privacy" className="link-hover">
              Privacy
            </a>
          </li>
          <li>
            <a href="/contact" className="link-hover">
              Contact
            </a>
          </li>
          <li className="flex items-center gap-1">
            <img src={global} alt="Global" />
            EN
          </li>
          <li className="flex items-center gap-1">
            <img
              src={euro}
              alt="Global"
              className="hidden md:inline"
              width={20}
              height={20}
              loading="lazy"
            />
            EUR
          </li>
          <li>
            <img
              src={accessibility}
              alt="Global"
              width={30}
              height={30}
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white p-10">
      <div className="footer sm:footer-horizontal">
        <FooterLogo />

        <FooterNav title="Products">
          <FooterNavItem href="/pricing">Pricing</FooterNavItem>
          <FooterNavItem href="/overview">Overview</FooterNavItem>
          <FooterNavItem href="/browse">Browse</FooterNavItem>
          <FooterNavItem href="/accessibility" badge="Beta">
            Accessibility
          </FooterNavItem>
        </FooterNav>

        <FooterNav title="Solutions">
          <FooterNavItem href="/brainstorming">Brainstorming</FooterNavItem>
          <FooterNavItem href="/ideation">Ideation</FooterNavItem>
          <FooterNavItem href="/wireframing">Wireframing</FooterNavItem>
          <FooterNavItem href="#">Research</FooterNavItem>
        </FooterNav>

        <FooterNav title="Resources">
          <FooterNavItem href="/help">Help Center</FooterNavItem>
          <FooterNavItem href="/blog">Blog</FooterNavItem>
          <FooterNavItem href="/tutorials">Tutorials</FooterNavItem>
          <FooterNavItem href="/faqs">FAQs</FooterNavItem>
        </FooterNav>

        <FooterNav title="Support">
          <FooterNavItem href="/support">Contact Us</FooterNavItem>
          <FooterNavItem href="/teachdev">Developers</FooterNavItem>
          <FooterNavItem href="/teachdoc">Documentation</FooterNavItem>
          <FooterNavItem href="/integrations">Integrations</FooterNavItem>
        </FooterNav>

        <FooterNav title="Company">
          <FooterNavItem href="/about">About</FooterNavItem>
          <FooterNavItem href="/press">Press</FooterNavItem>
          <FooterNavItem href="/events">Events</FooterNavItem>
          <FooterNavItem href="#request-cta-section">
            Request Demo
          </FooterNavItem>
        </FooterNav>
      </div>

      <FooterBottom />
    </footer>
  );
}
