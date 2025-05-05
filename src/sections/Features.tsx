import scratchSvg from "../assets/elements/scratch.svg";
import blobImg from "../assets/elements/img.png";
import studyingImg from "../assets/images/features/studying.jpg";
import womanImg from "../assets/images/features/woman.jpg";
import coupleImg from "../assets/images/features/couple.jpg";
import sofaImg from "../assets/images/features/sofa.jpg";

export default function Features() {
  function FeaturesContent() {
    return (
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <h2
          id="features-heading"
          className="font-title text-2xl md:text-6xl z-1"
        >
          All the cool{" "}
          <span className="relative inline-block">
            <span className="absolute -bottom-0 lg:-bottom-2 -right-0 pointer-events-none -z-1">
              <img
                src={scratchSvg}
                alt="Scratch"
                className="w-[100px] lg:w-[300px]"
              />
            </span>{" "}
            features
          </span>
        </h2>
        <p className="my-10 font-text text-lg lg:text-xl leading-[180%]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <a
          href="/features"
          className="inline-flex items-center gap-3 font-semibold text-lg md:text-xl text-sky-600 link-hover group z-50"
        >
          View all the features
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

  function FeaturesImages() {
    return (
      <div className="relative w-full lg:w-1/2 my-20 flex flex-col justify-center items-center lg:items-start gap-5">
        <img
          src={blobImg}
          alt=""
          width={534}
          height={622}
          loading="lazy"
          aria-hidden="true"
          className="absolute w-full lg:w-[534px] h-[522px] lg:h-[622px] lg:right-55 lg:-top-20"
        />
        <div className="ml-30 lg:ml-0 flex gap-5 items-end z-50">
          <div className="w-80 lg:w-2/5 h-fit p-4 rounded-lg bg-white shadow-md">
            <span className="px-3 py-1 bg-sky-600/20 text-sky-700 font-semibold text-center rounded-lg">
              Popular
            </span>
            <h1 className="font-title text-xl my-3">
              Design for how <br /> people think
            </h1>
            <p className="text-lg text-blue-gray mb-5">
              Aliquam ut euismod condimentum elementum ultricies volutpat sit
              non.{" "}
            </p>
            <a
              href="/courses/design-thinking"
              className="block py-2 border-2 border-sky-600 rounded-lg text-sky-600 text-center hover:text-white hover:bg-sky-600 transition-colors duration-300 font-semibold"
            >
              Take a Lesson
            </a>
          </div>
          <div className="w-1/2 relative">
            <figure className="w-[186px] h-[158px] p-2 bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={studyingImg}
                alt="Student using the platform during a study session"
                width={186}
                height={158}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-20 h-20 p-1 absolute bottom-5 left-35 bg-yellow-strong rounded-full">
                <img
                  src={womanImg}
                  alt="Teacher guiding student during an online class"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="flex gap-5 z-50">
          <figure className="w-[304px] h-[179px] p-2 ml-40 lg:ml-0 bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coupleImg}
              alt="Couple of students collaborating on an educational project"
              width={186}
              height={158}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <figure className="w-[232px] h-[179px] p-2 bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={sofaImg}
              alt="Relaxed student accessing platform from home"
              width={80}
              height={80}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <section
      id="features-section"
      className="flex flex-col items-center lg:flex-row lg:justify-between p-10 overflow-x-hidden"
      aria-labelledby="features-heading"
    >
      <FeaturesContent />
      <FeaturesImages />
    </section>
  );
}
