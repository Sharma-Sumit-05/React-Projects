import { AboutExperience } from "../Components/AboutExperience";
import { BestServices } from "../Components/BestServices";
import { Front02 } from "../Components/Front02";
import { FrontPage } from "../Components/FrontPage";
import { OurStory } from "../Components/OurStory";
import { TestimonialSection } from "../Components/TestimonialSection.jsx";

export const Home = () => {
  return (
    <>
      <FrontPage />
      <Front02 />
      <TestimonialSection />
      <OurStory />
      <AboutExperience />
      <BestServices />
    </>
  );
};