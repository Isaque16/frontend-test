import scratch from "../assets/elements/scratch.svg";
import check from "../assets/icons/check.svg";
import blob from "../assets/elements/img_1.png";
import aboutWindow from "../assets/images/about/img.png";

export default function About() {
  function AboutContent() {
    return (
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-start">
        <h2 id="about-heading" className="font-title text-2xl lg:text-6xl z-1">
          An{" "}
          <span className="relative inline-block">
            <span className="absolute -bottom-0 lg:-bottom-3 -right-0 pointer-events-none -z-1">
              <img
                src={scratch}
                alt="Scratch"
                aria-hidden="true"
                width={270}
                height={80}
                className="w-[150px] lg:w-[270px]"
                loading="lazy"
              />
            </span>{" "}
            all-in-one
          </span>{" "}
          app that makes it easier
        </h2>
        <p className="block lg:hidden mt-5 font-text text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <ul className="my-10 flex flex-col gap-5 text-lg">
          <li className="flex items-baseline gap-3">
            <img src={check} alt="" aria-hidden="true" /> Est et in pharetra
            magna adipiscing ornare aliquam.
          </li>
          <li className="flex items-baseline gap-3">
            <img src={check} alt="" aria-hidden="true" /> Tellus arcu sed
            consequat ac velit ut eu blandit.
          </li>
          <li className="flex items-baseline gap-3">
            <img src={check} alt="" aria-hidden="true" /> Ullamcorper ornare in
            et egestas dolor orci.
          </li>
        </ul>
        <a
          href="/about-app"
          className="inline-flex items-center gap-3 font-semibold text-lg md:text-xl text-sky-600 link-hover group z-50"
        >
          Find more about the app
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z"
              fill="#2563EB"
            />
          </svg>
        </a>
      </div>
    );
  }

  function AboutImages() {
    return (
      <div className="relative w-full lg:w-1/2 flex">
        <img
          src={blob}
          alt=""
          aria-hidden="true"
          width={506}
          height={400}
          className="w-[506px] absolute -top-73 lg:-top-23 -left-20 lg:-left-30 z-10 transform rotate-45 lg:-rotate-0"
          loading="lazy"
        />
        <img
          src={aboutWindow}
          alt="App interface showing a lesson"
          width={700}
          height={500}
          className="w-[700px] absolute -top-50 lg:-top-15 -left-5 lg:left-6 z-20"
          loading="lazy"
        />
        <div className="w-full lg:w-auto flex items-end justify-end lg:justify-normal gap-4 z-30 lg:overflow-x-visible">
          <article className="w-44 lg:w-56 h-fit p-4 rounded-lg bg-white shadow-lg">
            <span className="px-3 py-1 bg-purple-600/10 text-purple-700 text-md text-center rounded-lg">
              Featured
            </span>
            <h3 className="font-semibold text-xl my-3">
              The map of mathematics
            </h3>
            <p className="text-md text-blue-gray mb-4">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <a
              href="/lessons/math-map"
              className="block py-2 border-2 border-sky-600 rounded-lg text-sky-600 text-center hover:text-white hover:bg-sky-600 transition-colors duration-300 font-semibold"
            >
              Take a Lesson
            </a>
          </article>
          <article className="w-44 lg:w-56 h-fit p-4 rounded-lg bg-white shadow-lg">
            <span className="px-3 py-1 bg-sky-600/10 text-sky-700 text-md text-center rounded-lg">
              Popular
            </span>
            <h3 className="font-semibold text-xl my-3">
              Design for how people think
            </h3>
            <p className="text-md text-blue-gray mb-4">
              Aliquam ut euismod condimentum elementum ultricies volutpat sit
              non.
            </p>
            <a
              href="/lessons/design-thinking"
              className="block py-2 border-2 border-sky-600 rounded-lg text-sky-600 text-center hover:text-white hover:bg-sky-600 transition-colors duration-300 font-semibold"
            >
              Take a Lesson
            </a>
          </article>
          <article className="w-44 lg:w-56 h-fit p-4 rounded-lg bg-white shadow-lg hidden lg:block">
            <span className="px-3 py-1 bg-green-600/10 text-green-700 text-md text-center rounded-lg">
              New
            </span>
            <h3 className="font-semibold text-xl text-wrap my-3">
              International & commercial law
            </h3>
            <p className="text-md text-wrap text-blue-gray mb-4">
              Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
            </p>
            <a
              href="/lessons/law-basics"
              className="block py-2 border-2 border-sky-600 rounded-lg text-sky-600 text-center hover:text-white hover:bg-sky-600 transition-colors duration-300 font-semibold"
            >
              Take a Lesson
            </a>
          </article>
        </div>
      </div>
    );
  }

  return (
    <section
      id="about-section"
      className="h-[1100px] lg:h-[706px] flex flex-col lg:flex-row justify-between overflow-x-hidden"
      aria-labelledby="about-heading"
    >
      <AboutContent />
      <AboutImages />
    </section>
  );
}
