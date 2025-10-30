import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const productData = {
  name: 'Унитаз-компакт безободковый',
  article: '20992',
  price: 22600,
  image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg',
  description: 'Элегантный унитаз-компакт с инновационной безободковой системой смыва. Идеальное решение для современной ванной комнаты, сочетающее стиль и функциональность.',
  characteristics: [
    { name: 'Количество в упаковке', value: '1 шт' },
    { name: 'Размеры', value: '645 x 370 x 800 мм' },
    { name: 'Материал', value: 'Керамика премиум-класса' },
    { name: 'Цвет', value: 'Белый глянцевый' },
    { name: 'Бренд', value: 'Duravit' },
    { name: 'Страна производства', value: 'Германия' },
    { name: 'Тип слива', value: 'Безободковый DirectFlush' },
    { name: 'Выпуск', value: 'Горизонтальный' },
  ]
};

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => q > 1 ? q - 1 : 1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: Number(id) || 1,
        name: productData.name,
        price: productData.price,
        image: productData.image,
      });
    }
    toast.success(`Добавлено в корзину: ${quantity} шт.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/" className="hover:text-primary transition-colors">Санфарфор</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/" className="hover:text-primary transition-colors">Унитазы</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">{productData.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <div className="bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <img 
                src={productData.image}
                alt={productData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="font-montserrat font-bold text-4xl mb-2">{productData.name}</h1>
                <p className="text-muted-foreground">Артикул: {productData.article}</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-montserrat font-bold text-5xl text-primary mb-2">
                {productData.price.toLocaleString('ru-RU')} ₽
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleDecrement}
                  className="h-12 w-12"
                >
                  <Icon name="Minus" size={20} />
                </Button>
                <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleIncrement}
                  className="h-12 w-12"
                >
                  <Icon name="Plus" size={20} />
                </Button>
              </div>

              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-12"
              >
                В корзину
              </Button>
            </div>

            <Link to="/cart">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Купить в 1 клик
              </Button>
            </Link>

            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1">Описание</TabsTrigger>
                <TabsTrigger value="characteristics" className="flex-1">Характеристики</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="py-6">
                <p className="text-muted-foreground leading-relaxed">
                  {productData.description}
                </p>
              </TabsContent>
              
              <TabsContent value="characteristics" className="py-6">
                <div className="space-y-3">
                  {productData.characteristics.map((char, index) => (
                    <div 
                      key={index}
                      className="flex justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground">{char.name}</span>
                      <span className="font-medium">{char.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}