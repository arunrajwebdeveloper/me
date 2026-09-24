import Work from "./Work";

const works = [
  {
    id: "7afadc67-8d27-4c78-9737-7f3164dd90c0",
    title: "tom icecreams",
    subtext: "branding",
  },
  {
    id: "33d98bcd-204b-4122-a5bd-d55fe0bd543a",
    title: "phonix systems",
    subtext: "website",
  },
  {
    id: "f902ef72-31f6-4f22-b6df-7e85ceb42bfd",
    title: "oxon&Co",
    subtext: "branding & website",
  },
  {
    id: "e6fcd412-b13e-457b-9c44-531d74eb92c2",
    title: "mealsor",
    subtext: "branding",
  },
  {
    id: "4db3f9a3-2f66-4852-abaf-47fca85a4054",
    title: "nightoff",
    subtext: "website",
  },
  {
    id: "59b37bd3-ddb1-4b00-9bc8-d58ab8a3909e",
    title: "arcox movies",
    subtext: "branding & website",
  },
  {
    id: "da9b8f96-56dd-4749-8103-868ff40b765f",
    title: "clickonit",
    subtext: "branding & website",
  },
];

const Works = () => {
  return (
    <ul>
      {works?.map((work) => {
        return (
          <Work key={work?.id} title={work?.title} subtext={work?.subtext} />
        );
      })}
    </ul>
  );
};

export default Works;
