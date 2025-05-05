// Icons
import biIcon from "../assets/icons/bi.svg";
import lightIcon from "../assets/icons/light.svg";
import dominoIcon from "../assets/icons/domino.svg";
import cubeIcon from "../assets/icons/cube.svg";
import bubleIcon from "../assets/icons/buble.svg";
import windowIcon from "../assets/icons/window.svg";
import clickIcon from "../assets/icons/click.svg";
import cartIcon from "../assets/icons/cart.svg";
import asyncIcon from "../assets/icons/async.svg";
import notificationIcon from "../assets/icons/notfication.svg";
import bagIcon from "../assets/icons/bag.svg";

// People Images
import womanPink from "../assets/images/join-cta/woman-pink.jpg";
import manTong from "../assets/images/join-cta/man-tong.jpg";
import smilingMan from "../assets/images/join-cta/smiling-man.jpg";
import justinBiber from "../assets/images/join-cta/justin-biber.jpg";
import woman3 from "../assets/images/join-cta/woman3.jpg";
import man2 from "../assets/images/join-cta/man2.jpg";
import girl3 from "../assets/images/join-cta/girl3.jpg";
import man3 from "../assets/images/join-cta/man3.jpg";
import manBlue from "../assets/images/join-cta/man-blue.jpg";
import man1 from "../assets/images/join-cta/man1.jpg";
import woman2 from "../assets/images/join-cta/woman2.jpg";
import girl2 from "../assets/images/join-cta/girl2.jpg";
import girl1 from "../assets/images/join-cta/girl1.jpg";
import woman1 from "../assets/images/join-cta/woman1.jpg";

export default function JoinCta() {
  function LeftImagesGroup() {
    return (
      <div className="w-full lg:w-2/5 mb-40 lg:my-auto relative">
        <img
          src={biIcon}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] absolute top-0 lg:-top-60 left-0 lg:-left-15"
        />
        <img
          src={lightIcon}
          alt=""
          aria-hidden="true"
          width={19}
          height={19}
          loading="lazy"
          className="w-[18.7px] absolute top-20 lg:top-0 left-5 lg:left-10"
        />
        <img
          src={womanPink}
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
          loading="lazy"
          className="w-[49.6px] lg:w-[96px] rounded-full object-cover aspect-square absolute top-30 lg:-top-0 left-0 lg:-left-27"
        />
        <img
          src={manTong}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] lg:w-[48px] rounded-full object-cover aspect-square absolute top-8 lg:-top-40 left-10 lg:-left-10"
        />
        <img
          src={smilingMan}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] rounded-full object-cover aspect-square absolute top-20 lg:top-50 left-18 lg:-left-15"
        />
        <img
          src={dominoIcon}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] absolute top-32 lg:top-30 left-25 lg:left-0"
        />
        <img
          src={cubeIcon}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] absolute top-10 lg:-top-50 left-30 lg:left-15"
        />
        <img
          src={justinBiber}
          alt=""
          aria-hidden="true"
          width={74}
          height={74}
          loading="lazy"
          className="w-[73.92px] lg:w-[100px] rounded-full object-cover aspect-square absolute top-24 lg:top-5 left-38 lg:left-20"
        />
        <img
          src={woman3}
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
          loading="lazy"
          className="w-[50.1px] lg:w-[64px] rounded-full object-cover aspect-square absolute top-5 lg:-top-25 left-45 lg:left-30"
        />
        <img
          src={bubleIcon}
          alt=""
          aria-hidden="true"
          width={25}
          height={25}
          loading="lazy"
          className="w-[25px] absolute top-6 lg:-top-35 right-30 lg:right-10"
        />
        <img
          src={man2}
          alt=""
          aria-hidden="true"
          width={38}
          height={38}
          loading="lazy"
          className="w-[37.58px] rounded-full object-cover aspect-square absolute top-20 lg:-top-3 right-26 lg:right-0"
        />
        <img
          src={girl3}
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
          loading="lazy"
          className="w-[50.1px] lg:w-[64px] rounded-full object-cover aspect-square absolute top-0 lg:-top-60 right-0 lg:-right-10"
        />
        <img
          src={windowIcon}
          alt=""
          aria-hidden="true"
          width={44}
          height={44}
          loading="lazy"
          className="w-[43.8px] absolute top-20 lg:top-30 right-5 lg:right-10"
        />
        <img
          src={man3}
          alt=""
          aria-hidden="true"
          width={25}
          height={25}
          loading="lazy"
          className="w-[25px] lg:w-[32px] rounded-full object-cover aspect-square absolute top-35 lg:top-45 right-0"
        />
      </div>
    );
  }

  function RightImagesGroup() {
    return (
      <div className="w-full lg:w-2/5 mb-40 lg:my-auto relative">
        <img
          src={manBlue}
          alt=""
          aria-hidden="true"
          width={45}
          height={45}
          loading="lazy"
          className="w-[45.1px] rounded-full object-cover aspect-square absolute top-0 lg:-top-50 left-0 lg:-left-10"
        />
        <img
          src={man1}
          alt=""
          aria-hidden="true"
          width={39}
          height={39}
          loading="lazy"
          className="w-[38.7px] rounded-full object-cover aspect-square absolute top-28 lg:top-40 left-8 lg:-left-10"
        />
        <img
          src={clickIcon}
          alt=""
          aria-hidden="true"
          width={47}
          height={47}
          loading="lazy"
          className="w-[46.5px] absolute top-8 lg:-top-20 left-15 lg:left-5"
        />
        <img
          src={cartIcon}
          alt=""
          aria-hidden="true"
          width={26}
          height={26}
          loading="lazy"
          className="w-[25.8px] absolute top-25 lg:top-40 left-28 lg:left-30"
        />
        <img
          src={asyncIcon}
          alt=""
          aria-hidden="true"
          width={39}
          height={39}
          loading="lazy"
          className="w-[38.7px] absolute top-2 lg:-top-40 left-40 lg:left-30"
        />
        <img
          src={woman2}
          alt=""
          aria-hidden="true"
          width={52}
          height={52}
          loading="lazy"
          className="w-[51.6px] rounded-full object-cover aspect-square absolute top-15 lg:-top-15 right-42 lg:right-25"
        />
        <img
          src={notificationIcon}
          alt=""
          aria-hidden="true"
          width={39}
          height={39}
          loading="lazy"
          className="w-[38.7px] absolute top-10 lg:-top-25 right-28 lg:right-0"
        />
        <img
          src={bagIcon}
          alt=""
          aria-hidden="true"
          width={39}
          height={39}
          loading="lazy"
          className="w-[38.7px] absolute top-30 lg:top-10 right-33 lg:right-25"
        />
        <img
          src={girl2}
          alt=""
          aria-hidden="true"
          width={26}
          height={26}
          loading="lazy"
          className="w-[25.81px] rounded-full object-cover aspect-square absolute top-35 lg:top-45 right-20 lg:-right-5"
        />
        <img
          src={girl1}
          alt=""
          aria-hidden="true"
          width={59}
          height={59}
          loading="lazy"
          className="w-[58.8px] lg:w-[96px] rounded-full object-cover aspect-square absolute top-0 lg:-top-65 right-5 lg:-right-10"
        />
        <img
          src={woman1}
          alt=""
          aria-hidden="true"
          width={73}
          height={73}
          loading="lazy"
          className="w-[73.45px] lg:w-[100px] rounded-full object-cover aspect-square absolute top-20 lg:top-0 right-0 lg:-right-28"
        />
      </div>
    );
  }

  function CtaContent() {
    return (
      <div className="w-full lg:w-[667px] my-10 lg:mx-10 flex flex-col justify-center items-center gap-10">
        <h1 className="font-title text-2xl lg:text-5xl text-nowrap">
          Join a world of learning
        </h1>
        <p className="font-text text-lg text-center">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>
        <a
          href="/signup"
          className="py-3 px-10 rounded-lg bg-orange-strong hover:bg-orange-700 transition-colors duration-200 text-white text-xl font-semibold"
        >
          Sign Up Now
        </a>
      </div>
    );
  }

  return (
    <section
      id="join-cta-section"
      className="h-fit lg:h-[630px] flex flex-col lg:flex-row lg:justify-between bg-yellow-strong"
      aria-labelledby="join-heading"
    >
      <LeftImagesGroup />
      <CtaContent />
      <RightImagesGroup />
    </section>
  );
}
