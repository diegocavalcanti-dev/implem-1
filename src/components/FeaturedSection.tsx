import { Heart } from "lucide-react";

const FeaturedSection = () => {
  return (
    <div className="bg-gray-100 py-12 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-2">O Melhor Editor, Rápido e Fácil!</h2>
        <div className="flex justify-center mb-8">
          <Heart className="text-photolab-orange" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 h-40 flex items-center">
              <img 
                src="/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png" 
                alt="App móvel" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Suba Suas Fotos pelo QR Code</h3>
            <p className="text-sm text-gray-600">
              Escaneie e envie suas fotos diretamente para o editor
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 h-40 flex items-center">
              <img 
                src="/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png" 
                alt="Layout" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Temas e Layouts Incríveis</h3>
            <p className="text-sm text-gray-600">
              Escolha entre dezenas de opções de design para suas criações
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="mb-4 h-40 flex items-center">
              <img 
                src="/lovable-uploads/4185ae43-da58-4de3-84d6-af0c29996d43.png" 
                alt="Laptop" 
                className="h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Por onde Preferir!</h3>
            <p className="text-sm text-gray-600">
              Acesse e edite pelo computador, tablet ou smartphone
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-photolab-orange text-4xl font-bold">5x</span>
                <span className="text-gray-600 text-sm">comprar é<br />melhor do que fazer</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-photolab-orange text-4xl font-bold">+3,7</span>
                <span className="text-gray-600 text-sm">milhões de<br />pedidos entregues</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <span className="text-photolab-orange text-4xl font-bold">4,8</span>
                <span className="text-gray-600 text-sm">no Google<br />+ de 15.000 notas 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
