import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Programs from "@/components/home/Programs";
import Achievements from "@/components/home/Achievements";
import Resources from "@/components/home/Resources";
import Testimonials from "@/components/home/Testimonials";
import StudentWork from "@/components/home/StudentWork";
import FAQs from "@/components/home/FAQs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Achievements />
      <Resources />
      <Testimonials />
      <StudentWork />
      <FAQs />
      {/* Future sections go here */}
    </>
  );
}
