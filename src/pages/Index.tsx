import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const collections = [
  { id: 1, name: 'X-JOY', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Современная коллекция с инновационным дизайном' },
  { id: 2, name: 'INSPIRE', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Вдохновляющая элегантность в каждой детали' },
  { id: 3, name: 'SPIRIT 2.0', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Революционный подход к комфорту' },
  { id: 4, name: 'SENSATION', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Чувственная роскошь пространства' },
  { id: 5, name: 'LKE', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Лаконичность и красота форм' },
  { id: 6, name: 'GEM', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg', description: 'Драгоценная эстетика премиум-класса' },
];

const products = [
  { id: 1, name: 'Унитаз-компакт безободковый', price: 25190, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 2, name: 'Раковина Duravit DuraSquare 600x345', price: 31500, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 3, name: 'Смеситель для раковины', price: 18900, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 4, name: 'Унитаз подвесной с инсталляцией', price: 42000, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 5, name: 'Душевая система с термостатом', price: 55000, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 6, name: 'Ванна акриловая 170x75', price: 28500, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 7, name: 'Зеркальный шкаф с подсветкой', price: 22700, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 8, name: 'Полотенцесушитель электрический', price: 16900, image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
];

const partners = ['Legrand', 'Chanel', 'Miele', 'ABB', 'Schneider Electric', 'Grohe', 'Duravit', 'Hansgrohe'];

export default function Index() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success('Товар добавлен в корзину');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[600px] overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
          <img 
            src="https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-foreground mb-4 leading-tight">
              Раковина Duravit<br />
              <span className="text-primary">DuraSquare</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">600x345 шлифованная</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              Смотреть коллекцию
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Наши <span className="text-primary">коллекции</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id} 
              to={`/collection/${collection.name.toLowerCase()}`}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{collection.name}</h3>
                    <p className="text-sm text-white/80">{collection.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Лучшие <span className="text-primary">предложения</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <div className="relative h-64 bg-secondary overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-foreground mb-3 line-clamp-2 min-h-[48px] hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-montserrat font-bold text-2xl text-primary mb-4">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  В корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Остались <span className="text-primary">вопросы?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Наши специалисты с радостью помогут вам с выбором
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Напишите нам
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              О <span className="text-primary">компании</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Мы специализируемся на поставках премиальной сантехники и керамической плитки 
              от ведущих мировых производителей. Наша команда экспертов поможет создать 
              идеальное пространство для вашей ванной комнаты.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              С 2020 года мы помогаем воплощать в жизнь самые смелые дизайнерские решения, 
              предлагая только качественные материалы и профессиональный сервис.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 animate-scale-in">
            {[1,2,3,4,5,6,7,8,9].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/13a4d4a7-7b98-4b49-811c-7695a93a00fe.jpg"
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
            Наши <span className="text-primary">партнёры</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-2xl font-montserrat font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
        aria-label="Наверх"
      >
        <Icon name="ArrowUp" size={24} />
      </button>

      <Footer />
    </div>
  );
}