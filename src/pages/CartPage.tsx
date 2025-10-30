import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-montserrat font-bold text-5xl mb-12 animate-fade-in">
          Корзина
        </h1>

        {items.length === 0 ? (
          <Card className="p-12 text-center animate-fade-in">
            <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="font-montserrat font-bold text-2xl mb-4">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
            <Link to="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Перейти в каталог
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-lg bg-secondary overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-montserrat font-semibold text-xl mb-2">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold text-2xl">
                          {item.price.toLocaleString('ru-RU')} ₽
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-lg">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-10 w-10"
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-10 w-10"
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="font-montserrat font-bold text-xl">
                            {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </p>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Icon name="Trash2" size={20} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24 animate-scale-in">
                <h2 className="font-montserrat font-bold text-2xl mb-6">Итого</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Товаров:</span>
                    <span className="font-medium">{totalItems} шт.</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-montserrat font-semibold text-xl">Сумма:</span>
                      <span className="font-montserrat font-bold text-3xl text-primary">
                        {totalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Перейти к оформлению
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}