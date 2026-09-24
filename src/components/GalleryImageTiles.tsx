const images = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    src: "https://images.unsplash.com/photo-1500402448245-d49c5229c564?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "macro image 1",
  },
  {
    id: "4f73b1bf-7c1a-4d2c-afbe-a1c1274be345",
    src: "https://images.unsplash.com/photo-1533467915241-eac02e856653?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "macro image 2",
  },
  {
    id: "da69f88c-7c01-443b-8bc6-6c842795dd33",
    src: "https://images.unsplash.com/photo-1700047329772-3ebe7de69b67?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "macro image 3",
  },
];

const GalleryImageTiles = () => {
  return (
    <ul className="flex items-center gap-2 mt-10">
      {images?.map((image) => {
        return (
          <li key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-26 h-26 aspect-square"
              loading="lazy"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GalleryImageTiles;
