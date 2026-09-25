import Section from "./Section";
import Title from "./Title";
import Text from "./Text";

const HeroSection = () => {
  return (
    <Section theme="primary" className="py-20 md:py-40">
      <Title className="text-secondary text-7xl md:text-9xl font-black mb-10 md:mb-20">
        namaste.
      </Title>
      <Text className="text-secondary text-xl font-bold mb-10">
        i'm Arun Raj, a full-stack developer specializing in building
        high-performance, visually engaging web applications using the MERN
        stack.
      </Text>
      <Text className="text-secondary text-sm md:text-base font-normal leading-relaxed">
        while I am fully capable of architecting robust backends and databases,
        my true passion lies on the frontend. I thrive at the intersection of
        code and design, transforming complex ideas into pixel-perfect,
        responsive, and user-centric interfaces. Whether I am writing clean
        React components or optimization logic, I focus on delivering seamless
        digital experiences that look great and run flawlessly.
      </Text>
    </Section>
  );
};

export default HeroSection;
