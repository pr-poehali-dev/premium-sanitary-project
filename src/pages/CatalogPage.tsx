import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const allProducts = [
  { id: 1, name: 'Унитаз-компакт безободковый', price: 25190, category: 'Унитазы', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 2, name: 'Раковина Duravit DuraSquare 600x345', price: 31500, category: 'Раковины', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 3, name: 'Смеситель для раковины хром', price: 18900, category: 'Смесители', color: 'Серебристый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 4, name: 'Унитаз подвесной с инсталляцией', price: 42000, category: 'Унитазы', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 5, name: 'Душевая система с термостатом', price: 55000, category: 'Смесители', color: 'Чёрный', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 6, name: 'Ванна акриловая 170x75', price: 28500, category: 'Ванны', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 7, name: 'Зеркальный шкаф с подсветкой', price: 22700, category: 'Мебель', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 8, name: 'Полотенцесушитель электрический', price: 16900, category: 'Аксессуары', color: 'Серебристый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 9, name: 'Раковина накладная круглая', price: 24000, category: 'Раковины', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 10, name: 'Смеситель для ванны чёрный матовый', price: 32000, category: 'Смесители', color: 'Чёрный', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/11d31b1e-b078-40af-b2a2-36a231f9705f.jpg' },
  { id: 11, name: 'Унитаз приставной', price: 29000, category: 'Унитазы', color: 'Белый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
  { id: 12, name: 'Душевая кабина 90x90', price: 48000, category: 'Душевые', color: 'Серебристый', image: 'https://cdn.poehali.dev/projects/92cd2cde-f392-4b48-90a6-8725edd84626/files/f85f7542-9228-4680-a89e-478ca00947e6.jpg' },
];

const categories = ['Унитазы', 'Раковины', 'Смесители', 'Ванны', 'Душевые', 'Мебель', 'Аксессуары'];
const colors = ['Белый', 'Чёрный', 'Серебристый', 'Бежевый', 'Серый'];

export default function CatalogPage() {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 60000]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && colorMatch && priceMatch;
  });

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success('Товар добавлен в корзину');
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRange([0, 60000]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-montserrat font-bold text-5xl mb-12 animate-fade-in">
          Каталог <span className="text-primary">товаров</span>
        </h1>

        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-24 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-montserrat font-bold text-xl">Фильтры</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-primary hover:text-primary/80"
                >
                  Сбросить
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat font-semibold mb-4">Категории</h3>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={`cat-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label 
                          htmlFor={`cat-${category}`}
                          className="text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-montserrat font-semibold mb-4">Цвет</h3>
                  <div className="space-y-3">
                    {colors.map(color => (
                      <div key={color} className="flex items-center gap-2">
                        <Checkbox
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => toggleColor(color)}
                        />
                        <Label 
                          htmlFor={`color-${color}`}
                          className="text-sm cursor-pointer"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-montserrat font-semibold mb-4">Цена</h3>
                  <Slider
                    min={0}
                    max={60000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                    <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6 text-muted-foreground">
              Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
            </div>

            {filteredProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-xl text-muted-foreground mb-4">Товары не найдены</p>
                <Button onClick={resetFilters} variant="outline" className="border-primary text-primary">
                  Сбросить фильтры
                </Button>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
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
                        <h3 className="font-medium text-foreground mb-2 line-clamp-2 min-h-[48px] hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
