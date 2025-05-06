import { memo } from "react";

import studying2 from "../assets/images/explore/studying2.jpg";
import group from "../assets/images/explore/group.jpg";
import studying3 from "../assets/images/explore/studying3.jpg";
import music from "../assets/images/explore/music.jpg";
import studying5 from "../assets/images/explore/studying5.jpg";
import graduated from "../assets/images/explore/graduated.jpg";
import studying4 from "../assets/images/explore/studying4.jpg";
import studying from "../assets/images/explore/studying.jpg";
import collegeWoman from "../assets/images/explore/college-woman.jpg";
import student from "../assets/images/explore/student.jpg";
import planeIcon from "../assets/icons/plane.svg";
import LinkArrow from "../components/LinkArrow.tsx";

interface ExploreImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const ExploreImage = memo(
  ({ src, alt, width, height, className }: ExploreImageProps) => (
    <figure className={`shadow-md rounded-lg overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        width={width}
        height={height}
        loading="lazy"
      />
    </figure>
  ),
);

export default function Explore() {
  function ExploreImages() {
    const images = [
      {
        src: studying2,
        alt: "Student actively participating in an online class",
        width: 128,
        height: 192,
        className: "w-[72px] h-[96px] md:w-[128px] md:h-[192px]",
      },
      {
        src: group,
        alt: "Group of students collaborating on an international project",
        width: 172,
        height: 258,
        className: "w-[96px] h-[129px] md:w-[172px] md:h-[258px]",
      },
      {
        src: studying3,
        alt: "Student focused on her online studies",
        width: 128,
        height: 212,
        className: "w-[72px] h-[106px] md:w-[128px] md:h-[212px]",
      },
      {
        src: music,
        alt: "Teacher and student in an online music class",
        width: 128,
        height: 215,
        className: "w-[72px] h-[107.5px] md:w-[128px] md:h-[215px]",
      },
      {
        src: studying5,
        alt: "University student engaged in an international course",
        width: 128,
        height: 160,
        className: "w-[72px] h-[80px] md:w-[128px] md:h-[160px]",
      },
      {
        src: graduated,
        alt: "Graduate celebrating completion of an international course",
        width: 128,
        height: 171,
        className: "w-[72px] h-[85.5px] md:w-[128px] md:h-[171px]",
      },
      {
        src: studying4,
        alt: "Student participating in a virtual educational exchange",
        width: 128,
        height: 172,
        className: "w-[72px] h-[86px] md:w-[128px] md:h-[172px]",
      },
      {
        src: studying,
        alt: "Student in a video call with an international teacher",
        width: 128,
        height: 192,
        className: "w-[72px] h-[96px] md:w-[128px] md:h-[192px]",
      },
      {
        src: collegeWoman,
        alt: "University student prepared for international classes",
        width: 160,
        height: 255,
        className: "w-[88px] h-[127.5px] md:w-[160px] md:h-[255px]",
      },
      {
        src: student,
        alt: "Student reflecting on global educational opportunities",
        width: 128,
        height: 165,
        className: "w-[72px] h-[85.5px] md:w-[128px] md:h-[165px]",
      },
    ];

    return (
      <div className="w-full lg:w-[600px] my-10 grid grid-cols-4 items-center justify-center gap-x-4">
        <div className="flex flex-col gap-y-4 items-end">
          <ExploreImage {...images[0]} />
          <ExploreImage {...images[1]} />
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <ExploreImage {...images[2]} />
          <ExploreImage {...images[3]} />
          <ExploreImage {...images[4]} />
        </div>

        <div className="w-fit flex flex-col items-center gap-y-4">
          <ExploreImage {...images[5]} />
          <ExploreImage {...images[6]} />
          <ExploreImage {...images[7]} />
        </div>

        <div className="w-fit flex flex-col items-start gap-y-4">
          <ExploreImage {...images[8]} />
          <ExploreImage {...images[9]} />
        </div>
      </div>
    );
  }

  function ExploreContent() {
    return (
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 id="explore-heading" className="font-title text-2xl md:text-6xl">
          Meet{" "}
          <span className="relative inline-block">
            international
            <span className="absolute -top-5 right-4 md:-top-15 pointer-events-none">
              <img
                src={planeIcon}
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
                className="w-[24px] h-[24px] md:w-[64px] md:h-[64px]"
              />
            </span>
          </span>{" "}
          students & teachers
        </h2>
        <p className="font-text text-lg md:text-xl my-10 leading-[160%]">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
        <LinkArrow
          link="/explore-community"
          text="Explore teachers and students"
        />
      </div>
    );
  }

  return (
    <section
      id="explore-section"
      className="flex flex-col-reverse items-center lg:flex-row lg:justify-between"
      aria-labelledby="explore-heading"
    >
      <ExploreImages />
      <ExploreContent />
    </section>
  );
}
