import { Search, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full bg-black text-white text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span>Ajuda</span>
          <span>Contate-nos</span>
        </div>
        <div>
          <span>Faça seu login ou crie sua conta</span>
        </div>
      </div>
      
      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-photolab-orange font-bold text-2xl mr-6">Phooto</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="O que você procura?"
              className="rounded-full border border-gray-300 pl-4 pr-10 py-1 text-sm w-[250px]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/minha-conta" className="text-sm hover:text-photolab-orange">Minha Conta</Link>
          <Link to="/fotos" className="text-sm hover:text-photolab-orange">Fotos</Link>
          <Link to="/loja-online" className="text-sm hover:text-photolab-orange">Loja Online</Link>
          <Link to="/temas-ai" className="text-sm hover:text-photolab-orange">Temas AI</Link>
          <Link to="/colecoes" className="text-sm hover:text-photolab-orange">Coleções</Link>
          <Link to="/impressoes" className="text-sm hover:text-photolab-orange">Impressões</Link>
          <Link to="/editor-empresas" className="text-sm hover:text-photolab-orange">Editor Empresas</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">
            <Heart className="h-5 w-5" />
          </button>
          <Link to="/carrinho" className="relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-photolab-orange text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
