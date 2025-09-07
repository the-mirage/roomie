import Facilities from "./Facilities";
import Hero from "./Hero";
import Rooms from "./Rooms";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <section className="w-full h-full">
      <div className="">
        <Hero />
        <Facilities />
        <Rooms />
        <Testimonials />
      </div>
    </section>
  );
};
export default LandingPage;
