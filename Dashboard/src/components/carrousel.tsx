type Project = {
  name: string;
  description: string;
  tasks: {
    id: number;
    name: string;
    description: string;
  }[];
};

type Blog = {
  name: string;
  description: string;
  tasks: {
    id: number;
    name: string;
    description: string;
  }[];
};

type CarouselProps = {
  ITEMS?: Project[] | Blog[] | null;
};

function Carousel({ ITEMS }: CarouselProps) {
  if (!ITEMS || ITEMS.length === 0) {
    return (
      <div className="carrousel_empty text-xl font-semibold h-[150px] w-[300px] flex justify-center items-center item rounded-2xl  mb-[25px]">
        <h2 >Not items yet</h2>
      </div>
    );
  }

  return (
    <div className="carrousel mb-[25px]">
      {ITEMS.map((item, index) => (
        <div key={index} className="carrousel__item">
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Carousel;