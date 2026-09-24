import FooterLink from "./FooterLink";
import Section from "./Section";
import Text from "./Text";
import Title from "./Title";

const FooterSection = () => {
  return (
    <Section theme="secondary" className="py-20 md:py-40">
      <Title className="text-primary text-7xl md:text-9xl font-black mb-10 md:mb-20">
        connect.
      </Title>

      <ul className="flex flex-col gap-2 text-primary">
        <FooterLink
          href="https://www.linkedin.com/in/arunraj90/"
          text="linkedin"
        />
        <FooterLink href="https://instagram.com/ar_macros" text="instagram" />
        <FooterLink href="." text="mail" />
      </ul>

      <div className="border-t border-t-primary mt-10 pt-10">
        <Text className="text-primary text-xs">
          this website designed, executed, and shipped by me.
        </Text>
        <Text className="text-primary text-xs">
          <span>&copy;</span>
          {`${new Date().getFullYear()} arunraj`}
        </Text>
      </div>
    </Section>
  );
};

export default FooterSection;
