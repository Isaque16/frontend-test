import scratchSvg from "../assets/elements/scratch.svg";
import blobImg from "../assets/elements/img.png";
import studyingImg from "../assets/images/features/studying.jpg";
import womanImg from "../assets/images/features/woman.jpg";
import coupleImg from "../assets/images/features/couple.jpg";
import sofaImg from "../assets/images/features/sofa.jpg";
import LinkArrow from "../components/LinkArrow.tsx";
import PlanCard from "../components/PlanCard.tsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
                alt=""
                aria-hidden="true"
                className="w-[100px] lg:w-[300px]"
                width={100}
                height={100}
                loading="lazy"
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
        <LinkArrow link="/features" text="View all the features" />
      </div>
    );
  }

  function FeaturesImages() {
    const containerRef = useRef(null);
    const blobRef = useRef(null);
    const topGroupRef = useRef(null);
    const planCardRef = useRef(null);
    const figureTopRef = useRef(null);
    const bottomGroupRef = useRef(null);
    const figureLeftRef = useRef(null);
    const figureRightRef = useRef(null);

    useEffect(() => {
      gsap.set(blobRef.current, {
        autoAlpha: 0,
        scale: 0.9,
      });

      gsap.set([planCardRef.current, figureTopRef.current], {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set([figureLeftRef.current, figureRightRef.current], {
        autoAlpha: 0,
        y: 20,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(blobRef.current, { autoAlpha: 1, scale: 1, duration: 0.8 })
        .to(planCardRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          figureTopRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .to(
          figureLeftRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.2",
        )
        .to(
          figureRightRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.3",
        );

      return () => {
        tl.kill();
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className="relative w-full lg:w-1/2 my-20 flex flex-col justify-center items-center lg:items-start gap-5"
      >
        <img
          ref={blobRef}
          src={blobImg}
          alt=""
          width={534}
          height={622}
          loading="lazy"
          aria-hidden="true"
          className="absolute w-full lg:w-[534px] h-[522px] lg:h-[622px] lg:right-55 lg:-top-20"
        />
        <div
          ref={topGroupRef}
          className="ml-30 lg:ml-0 flex gap-5 items-end z-50"
        >
          <div ref={planCardRef} className="w-80 lg:w-2/5">
            <PlanCard
              width="w-full"
              plan="Popular"
              name="Design for how <br /> people think"
              text="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
              link="/courses/design-thinking"
            />
          </div>
          <div ref={figureTopRef} className="w-1/2 relative">
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
        <div ref={bottomGroupRef} className="flex gap-5 z-50">
          <figure
            ref={figureLeftRef}
            className="w-[304px] h-[179px] p-2 ml-40 lg:ml-0 bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={coupleImg}
              alt="Couple of students collaborating on an educational project"
              width={186}
              height={158}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <figure
            ref={figureRightRef}
            className="w-[232px] h-[179px] p-2 bg-white rounded-lg overflow-hidden shadow-md"
          >
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
