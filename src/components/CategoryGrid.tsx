import { Link } from "react-router-dom";

interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Fotolivros",
    image: "/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png",
    link: "/fotolivros"
  },
  {
    id: "2",
    title: "Fotos",
    image: "",
    link: "/fotos"
  },
  {
    id: "3",
    title: "Quadros",
    image: "",
    link: "/quadros"
  },
  {
    id: "4",
    title: "Presentes",
    image: "",
    link: "/presentes"
  },
  {
    id: "5",
    title: "Papelaria",
    image: "",
    link: "/papelaria"
  },
  {
    id: "6",
    title: "Calendários",
    image: "",
    link: "/calendarios"
  },
  {
    id: "7",
    title: "Novidades",
    image: "",
    link: "/novidades"
  }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-7 gap-4 mb-12">
      {categories.map((category) => (
        <Link 
          to={category.link} 
          key={category.id}
          className="flex flex-col items-center"
        >
          <div className="w-full aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden">
            {category.image && (
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <span className="text-sm font-medium">{category.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
