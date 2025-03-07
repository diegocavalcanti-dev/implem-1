import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import OfferBanner from "@/components/OfferBanner";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

// Mock data for products
const topProducts = [
  {
    id: "1",
    name: "Nome do Produto",
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "2",
    name: "Nome do Produto",
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "3",
    name: "Nome do Produto",
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "4",
    name: "Nome do Produto",
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "5",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  }
];

const specialOffers = [
  {
    id: "6",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "7",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "8",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "9",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "10",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  }
];

const featuredProducts = [
  {
    id: "11",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "12",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "13",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "14",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  },
  {
    id: "15",
    name: "Nome do Produto",
    originalPrice: 24.90,
    price: 19.90,
    image: "",
    discount: true
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <HeroCarousel />
          <CategoryGrid />
          
          <ProductGrid 
            title="Lorem Ipsum" 
            products={topProducts}
          />
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex-1 h-0.5 bg-gray-200"></div>
              <div className="mx-4">
                <div className="bg-photolab-orange text-white text-sm font-bold px-4 py-2 rounded-full">
                  A Melhor Experiência
                </div>
              </div>
              <div className="flex-1 h-0.5 bg-gray-200"></div>
            </div>
          </div>
          
          <OfferBanner />
          
          <ProductGrid 
            title="Lorem Ipsum" 
            products={specialOffers}
          />
          
          <FeaturedSection />
          
          <ProductGrid 
            title="Lorem Ipsum" 
            products={featuredProducts}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;