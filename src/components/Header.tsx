import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navLinks = [
    { to: '/catalog', label: 'Каталог' },
    { to: '/', label: 'Коллекции' },
    { to: '/', label: 'О компании' },
    { to: '/', label: 'Контакты' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-montserrat font-bold text-foreground hover:text-primary transition-colors">
              LOGOTYPE
            </Link>

            <nav className="hidden md:flex items-center gap-8 font-montserrat">
              {navLinks.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <Icon name="Phone" size={18} className="text-primary" />
                <span className="font-medium">+7 900 123 4567</span>
              </div>
              
              <Button 
                onClick={() => setIsCallbackOpen(true)}
                className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Заказать звонок
              </Button>

              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Icon name="Search" size={20} />
              </Button>

              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background w-[300px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <Link to="/" className="text-2xl font-montserrat font-bold text-primary mb-4">
                      LOGOTYPE
                    </Link>
                    
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-montserrat text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    <div className="flex flex-col gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Phone" size={18} className="text-primary" />
                        <span className="font-medium">+7 900 123 4567</span>
                      </div>
                      
                      <Button 
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsCallbackOpen(true);
                        }}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Заказать звонок
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-2xl">Заказать обратный звонок</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Введите имя" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Ваш телефон</Label>
              <Input id="phone" placeholder="+7 (___) ___-__-__" className="mt-2" />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm leading-tight">
                Я согласен на обработку персональных данных
              </Label>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Отправить
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
