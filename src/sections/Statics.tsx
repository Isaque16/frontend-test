import { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heartIcon from "../assets/icons/heart.svg";
import diamondIcon from "../assets/icons/diamond.svg";
import hatIcon from "../assets/icons/hat.svg";

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  icon: string;
  iconAlt: string;
  value: string;
  label: string;
}

const StatItem = memo(({ icon, iconAlt, value, label }: StatItemProps) => {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hasLetterSuffix = isNaN(parseInt(value.slice(-1)));
    const numericValue = hasLetterSuffix
      ? parseFloat(value.slice(0, 1))
      : parseFloat(value);
    const suffix = hasLetterSuffix ? value.slice(-1) : "";

    const counter = { val: 0 };

    gsap.to(counter, {
      val: numericValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.floor(counter.val).toString() + suffix;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [value]);

  return (
    <article className="flex flex-col items-center p-6 md:p-8">
      <img
        src={icon}
        alt={iconAlt}
        width={64}
        height={64}
        className="w-16 h-16 mb-4"
        loading="lazy"
      />
      <h3 ref={counterRef} className="text-6xl md:text-7xl font-bold mb-2">
        0
      </h3>
      <p className="text-lg md:text-xl">{label}</p>
    </article>
  );
});

export default function Statics() {
  const stats = [
    {
      icon: heartIcon,
      iconAlt: "Heart icon",
      value: "195",
      label: "user countries",
    },
    {
      icon: diamondIcon,
      iconAlt: "Diamond icon",
      value: "1M",
      label: "valued teachers",
    },
    {
      icon: hatIcon,
      iconAlt: "Graduation cap icon",
      value: "17M",
      label: "happy students",
    },
  ];

  return (
    <section
      id="statistics-section"
      className="py-12 md:py-16 flex flex-col content-around md:flex-row md:justify-around gap-10 bg-dark-blue text-yellow-strong"
      aria-labelledby="statistics-heading"
    >
      <h2 id="statistics-heading" className="sr-only">
        Statistics about our platform
      </h2>

      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          iconAlt={stat.iconAlt}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </section>
  );
}
