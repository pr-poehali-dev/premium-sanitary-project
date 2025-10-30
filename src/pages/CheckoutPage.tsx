import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="font-montserrat font-bold text-5xl mb-12 animate-fade-in">
          Оформление заказа
        </h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <Card className="p-8 animate-slide-up">
              <h2 className="font-montserrat font-bold text-2xl mb-6">
                Личные данные
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Получатель *</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ФИО"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.ru"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="font-montserrat font-bold text-2xl mb-6">
                Адрес доставки
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="city">Город *</Label>
                  <Input 
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Москва"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Улица *</Label>
                    <Input 
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Название улицы"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="house">Дом *</Label>
                    <Input 
                      id="house"
                      name="house"
                      value={formData.house}
                      onChange={handleChange}
                      placeholder="1"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="apartment">Квартира</Label>
                  <Input 
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Номер квартиры"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea 
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Дополнительная информация для курьера"
                    className="mt-2 min-h-[100px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-secondary animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Итого к оплате</p>
                  <p className="font-montserrat font-bold text-4xl text-primary">
                    81 690 ₽
                  </p>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12"
                >
                  Оформить заказ
                </Button>
              </div>
            </Card>

            <p className="text-sm text-muted-foreground text-center">
              Нажимая кнопку "Оформить заказ", вы соглашаетесь с условиями обработки персональных данных
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
