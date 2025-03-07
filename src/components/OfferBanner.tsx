import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <div className="bg-photolab-orange rounded-lg p-6 text-white relative overflow-hidden">
        <div className="max-w-[60%]">
          <h3 className="text-2xl font-bold mb-2">
            Lançamento de Hoje!
          </h3>
          <Link to="/lancamentos" className="inline-flex items-center mt-4 bg-white bg-opacity-20 p-2 rounded-full">
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="absolute right-4 bottom-4 w-1/3">
          <img 
            src="/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png" 
            alt="Foto produto" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      
      <div className="bg-photolab-blue rounded-lg p-6 text-white relative overflow-hidden">
        <div className="max-w-[60%]">
          <h3 className="text-2xl font-bold mb-2">
            Lançamento de Hoje!
          </h3>
          <Link to="/lancamentos" className="inline-flex items-center mt-4 bg-white bg-opacity-20 p-2 rounded-full">
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="absolute right-4 bottom-4 w-1/3">
          <img 
            src="/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png" 
            alt="Foto produto" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
