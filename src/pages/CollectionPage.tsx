import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const collectionProducts = [
  { 
    id: 1, 
    name: 'Унитаз подвесной Spirit 2.0', 
    price: 45000, 
    image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' 
  },
  { 
    id: 2, 
    name: 'Раковина накладная Spirit 2.0', 
    price: 38500, 
    image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' 
  },
  { 
    id: 3, 
    name: 'Смеситель для раковины Spirit 2.0', 
    price: 28900, 
    image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' 
  },
  { 
    id: 4, 
    name: 'Душевая система Spirit 2.0', 
    price: 62000, 
    image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' 
  },
  { 
    id: 5, 
    name: 'Зеркало с LED подсветкой Spirit 2.0', 
    price: 32000, 
    image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' 
  },
];

const awards = [
  { name: 'iF Design Award', year: '2023' },
  { name: 'Red Dot Award', year: '2023' },
  { name: 'Good Design Awards', year: '2022' },
];

export default function CollectionPage() {
  const { name } = useParams();
  const collectionName = name?.toUpperCase() || 'SPIRIT 2.0';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[500px] overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
          <img 
            src="https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg"
            alt="Collection Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-montserrat font-bold text-6xl md:text-7xl text-foreground mb-4">
              Коллекция
            </h1>
            <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary mb-6">
              {collectionName}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Революционная коллекция, сочетающая инновационные технологии 
              и премиальный дизайн для создания идеального пространства
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg"
              alt="Product showcase"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-4xl mb-6">
              Лучшие инновации и <span className="text-primary">премиальный дизайн</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Коллекция {collectionName} представляет собой идеальный синтез технологий и эстетики. 
              Каждый элемент создан с использованием передовых производственных методов 
              и отмечен престижными международными наградами.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-secondary border-primary/20 text-center hover:border-primary transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">★</span>
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm mb-1">{award.name}</h4>
                  <p className="text-xs text-muted-foreground">{award.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-montserrat font-bold text-4xl text-center mb-4">
            Товары <span className="text-primary">коллекции</span>
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {collectionProducts.map((product, index) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden">
                <div className="relative h-64 bg-secondary overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-foreground mb-3 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h4>
                  <p className="font-montserrat font-bold text-xl text-primary mb-4">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    В корзину
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
