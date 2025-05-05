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

interface ExploreImageProps {
  src: string;
  alt: string;
  className: string;
}

const ExploreImage = memo(
  ({ src, alt, className, ...props }: ExploreImageProps) => (
    <figure className={`shadow-md rounded-lg overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        {...props}
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
        <a
          href="/explore-community"
          className="inline-flex items-center gap-3 text-lg md:text-xl text-sky-600 link-hover group"
        >
          Explore teachers and students
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
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
