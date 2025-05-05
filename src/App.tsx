import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import TestimonialsSlide from "./sections/TestimonialsSlide.tsx";
import Explore from "./sections/Explore.tsx";
import Statics from "./sections/Statics.tsx";
import TestimonialsCards from "./sections/TestimonialsCards.tsx";
import Features from "./sections/Features.tsx";
import JoinCta from "./sections/JoinCta.tsx";
import RequestCta from "./sections/RequestCta.tsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <TestimonialsSlide />
        <Explore />
        <Statics />
        <TestimonialsCards />
        <Features />
        <JoinCta />
        <RequestCta />
      </main>
    </>
  );
}
