const FooterLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="text-2xl md:text-6xl font-medium"
      >
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
