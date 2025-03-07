import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
            <ul className="space-y-2">
              <li><Link to="/quem-somos" className="text-sm text-gray-600 hover:text-photolab-orange">Quem Somos</Link></li>
              <li><Link to="/nossa-historia" className="text-sm text-gray-600 hover:text-photolab-orange">Nossa História</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-photolab-orange">Blog</Link></li>
              <li><Link to="/contato" className="text-sm text-gray-600 hover:text-photolab-orange">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><Link to="/fotolivros" className="text-sm text-gray-600 hover:text-photolab-orange">Fotolivros</Link></li>
              <li><Link to="/fotos" className="text-sm text-gray-600 hover:text-photolab-orange">Fotos</Link></li>
              <li><Link to="/quadros" className="text-sm text-gray-600 hover:text-photolab-orange">Quadros</Link></li>
              <li><Link to="/presentes" className="text-sm text-gray-600 hover:text-photolab-orange">Presentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-photolab-orange">FAQ</Link></li>
              <li><Link to="/envio" className="text-sm text-gray-600 hover:text-photolab-orange">Envio</Link></li>
              <li><Link to="/politica-privacidade" className="text-sm text-gray-600 hover:text-photolab-orange">Política de Privacidade</Link></li>
              <li><Link to="/termos-servico" className="text-sm text-gray-600 hover:text-photolab-orange">Termos de Serviço</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-photolab-orange">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-photolab-orange">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-photolab-orange">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-photolab-orange">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="border border-gray-300 rounded-l-md px-4 py-2 text-sm flex-1"
              />
              <button className="bg-photolab-orange text-white px-4 py-2 rounded-r-md text-sm">
                Assinar
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Photolab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
