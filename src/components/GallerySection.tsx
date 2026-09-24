import Section from "./Section";
import Title from "./Title";
import Text from "./Text";
import GalleryImageTiles from "./GalleryImageTiles";

const GallerySection = () => {
  return (
    <Section className="py-20 md:py-40">
      <Title className="text-secondary text-7xl md:text-9xl font-black mb-10 md:mb-20">
        the world in close-up.
      </Title>
      <Text className="text-secondary text-sm md:text-base font-normal leading-relaxed">
        from the texture of a butterfly wing to the morning dew on a leaf, I
        capture the extraordinary details hidden in plain sight. Follow my macro
        photography journey on Instagram for a daily dose of the unseen world.
      </Text>
      <GalleryImageTiles />

      <div className="mt-10">
        <a
          className="text-secondary text-base underline font-normal"
          target="_blank"
          href="https://instagram.com/ar_macros"
        >
          visit instagram
        </a>
      </div>
    </Section>
  );
};

export default GallerySection;
