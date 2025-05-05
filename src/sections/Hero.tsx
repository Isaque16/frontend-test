import teacherImg from "../assets/images/hero/teacher.png";
import studentImg from "../assets/images/hero/student.png";
import scratchIcon from "../assets/elements/scratch.svg";
import playIcon from "../assets/icons/play.svg";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon4 from "../assets/icons/icon4.svg";
import icon5 from "../assets/icons/icon5.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import cubeIcon from "../assets/icons/cube.svg";
import terminalIcon from "../assets/icons/terminal.svg";

export default function Hero() {
  const partnerCompanies = [
    { icon: icon1, name: "Partner 1" },
    { icon: icon2, name: "Partner 2" },
    { icon: icon3, name: "Partner 3" },
    { icon: icon4, name: "Partner 4" },
    { icon: icon5, name: "Partner 5" },
  ];

  function HeroContent() {
    return (
      <div className="w-full lg:w-[575px] flex flex-col">
        <h1 className="font-title text-4xl lg:text-7xl z-1">
          <span className="relative inline-block">
            <span className="absolute bottom-0 lg:-bottom-1 -right-0 pointer-events-none -z-1">
              <img
                src={scratchIcon}
                alt=""
                className="w-[100px] lg:w-[300px]"
              />
            </span>{" "}
            Teach
          </span>{" "}
          students worldwide
        </h1>
        <p className="my-8 lg:my-10 font-text text-lg lg:text-2xl leading-[160%]">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>
        <div className="flex gap-8">
          <a
            href="/signup"
            className="py-3 px-8 rounded-lg bg-orange-strong hover:bg-orange-700 text-white text-xl font-text lg:font-semibold transition-colors duration-300"
          >
            Sign Up Now
          </a>
          <a
            href="/demo"
            className="inline-flex gap-4 items-center link-hover text-lg font-semibold text-sky-600 hover:text-sky-700"
          >
            <img src={playIcon} alt="" /> View Demo
          </a>
        </div>
        <div className="my-6 lg:my-10 lg:mt-18 flex flex-col lg:flex-row gap-4 lg:gap-10">
          <p className="text-blue-gray">
            Trusted by
            <br className="hidden lg:block" />
            leading companies
          </p>
          <div className="flex gap-6">
            {partnerCompanies.map((company, index) => (
              <img
                key={index}
                src={company.icon}
                alt={company.name}
                width={25}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  function HeroImages() {
    return (
      <div className="w-full lg:w-[624px] relative my-10 h-[350px]">
        <figure className="absolute -bottom-3 lg:-bottom-10 lg:left-10 z-10">
          <img
            src={teacherImg}
            alt="Teacher teaching throu the computer"
            className="w-44 lg:w-64"
          />
        </figure>
        <div className="absolute flex flex-col gap-4 -top-3 lg:-top-25 left-18 lg:left-40 z-20">
          <div className="flex flex-col items-end gap-4 text-sm lg:text-lg text-black">
            <span className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md">
              Nunc, at libero neque
            </span>
            <span className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md">
              Viverra sed
            </span>
          </div>
          <div className="flex flex-col items-start gap-4 text-sm lg:text-lg text-white">
            <span className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md">
              Turpis platea nunc mattis
            </span>
            <span className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md">
              Vitae viverra ut non
            </span>
          </div>
        </div>
        <figure className="absolute flex justify-end right-0 top-3 lg:-top-25 lg:-right-5 z-10">
          <img
            src={studentImg}
            alt="Student lookin at the phone"
            className="w-44 lg:w-64"
          />
        </figure>
        <div className="w-full absolute -bottom-5 lg:-bottom-5 right-25 lg:right-35 z-0">
          <div className="relative">
            <img
              src={cloudIcon}
              alt=""
              className="w-[50px] lg:w-[60px] absolute bottom-15 -right-5"
            />
            <img
              src={cubeIcon}
              alt=""
              className="w-[60px] lg:w-[70px] absolute bottom-8 right-10 lg:right-16"
            />
            <img
              src={terminalIcon}
              alt=""
              className="w-[40px] lg:w-[50px] absolute bottom-0 -right-1"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <header className="flex flex-col lg:flex-row lg:justify-around items-center overflow-x-hidden py-8 lg:py-16">
      <HeroContent />
      <HeroImages />
    </header>
  );
}
