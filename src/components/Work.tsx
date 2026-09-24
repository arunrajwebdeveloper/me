const Work = ({ title, subtext }: { title: string; subtext: string }) => {
  return (
    <li className="border-y border-y-primary py-5 -mt-px">
      <p className="text-primary text-2xl md:text-6xl font-medium">{title}</p>
      <p className="text-primary text-sm md:text-xl font-medium">{subtext}</p>
    </li>
  );
};

export default Work;
