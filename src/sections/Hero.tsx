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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  function HeroContent() {
    const partnerCompanies = [
      { icon: icon1, name: "Partner 1" },
      { icon: icon2, name: "Partner 2" },
      { icon: icon3, name: "Partner 3" },
      { icon: icon4, name: "Partner 4" },
      { icon: icon5, name: "Partner 5" },
    ];

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

  function MessagesBlock() {
    const message1Ref = useRef<HTMLSpanElement>(null);
    const message2Ref = useRef<HTMLSpanElement>(null);
    const message3Ref = useRef<HTMLSpanElement>(null);
    const message4Ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      gsap.set(
        [
          message1Ref.current,
          message2Ref.current,
          message3Ref.current,
          message4Ref.current,
        ],
        {
          autoAlpha: 0,
          y: 10,
        },
      );

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(message1Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 })
        .to(message2Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.7")
        .to(message3Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.9")
        .to(message4Ref.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.7")
        .to(
          [
            message1Ref.current,
            message2Ref.current,
            message3Ref.current,
            message4Ref.current,
          ],
          { autoAlpha: 0, y: -5, duration: 0.5, stagger: 0.2 },
          "+=1.5",
        );

      return () => {
        tl.kill();
      };
    }, []);

    return (
      <div className="absolute flex flex-col gap-4 -top-3 lg:-top-25 left-18 lg:left-40 z-20">
        <div className="flex flex-col items-end gap-4 text-sm lg:text-lg text-black">
          <span
            ref={message1Ref}
            className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md"
          >
            Nunc, at libero neque
          </span>
          <span
            ref={message2Ref}
            className="w-fit py-2 px-5 bg-white rounded-xl rounded-br-xs shadow-md"
          >
            Viverra sed
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm lg:text-lg text-white">
          <span
            ref={message3Ref}
            className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md"
          >
            Turpis platea nunc mattis
          </span>
          <span
            ref={message4Ref}
            className="w-fit py-2 px-5 bg-blue-gray rounded-xl rounded-bl-xs shadow-md"
          >
            Vitae viverra ut non
          </span>
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
            width="176"
            height="256"
            loading="lazy"
          />
        </figure>
        <MessagesBlock />
        <figure className="absolute flex justify-end right-0 top-3 lg:-top-25 lg:-right-5 z-10">
          <img
            src={studentImg}
            alt="Student lookin at the phone"
            className="w-44 lg:w-64"
            width="176"
            height="256"
            loading="lazy"
          />
        </figure>
        <div className="w-full absolute -bottom-5 lg:-bottom-5 right-25 lg:right-35 z-0">
          <div className="relative">
            <img
              src={cloudIcon}
              alt=""
              aria-hidden="true"
              className="w-[50px] lg:w-[60px] absolute bottom-15 -right-5"
              width="50"
              height="50"
              loading="lazy"
            />
            <img
              src={cubeIcon}
              alt=""
              aria-hidden="true"
              className="w-[60px] lg:w-[70px] absolute bottom-8 right-10 lg:right-16"
              width="60"
              height="60"
              loading="lazy"
            />
            <img
              src={terminalIcon}
              alt=""
              aria-hidden="true"
              className="w-[40px] lg:w-[50px] absolute bottom-0 -right-1"
              width="40"
              height="40"
              loading="lazy"
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
