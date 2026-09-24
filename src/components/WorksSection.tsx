import Section from "./Section";
import Title from "./Title";
import Works from "./Works";

const WorksSection = () => {
  return (
    <Section theme="secondary" className="py-20 md:py-40">
      <Title className="text-primary text-7xl md:text-9xl font-black mb-10 md:mb-20">
        works.
      </Title>
      <p className="text-primary text-sm mb-4">** dummy projects</p>
      <Works />
    </Section>
  );
};

export default WorksSection;
