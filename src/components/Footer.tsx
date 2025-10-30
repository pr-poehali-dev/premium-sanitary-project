import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-montserrat font-bold text-foreground block mb-4">
              LOGOTYPE
            </Link>
            <p className="text-sm text-muted-foreground mb-2">
              ИНН: 1234567890
            </p>
            <p className="text-sm text-muted-foreground">
              ОГРН: 0987654321234
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Санфарфор</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Керамическая плитка</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Смесители</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Ванны</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Коллекции</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Готовые решения</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">8(123) 456-78-90</li>
              <li className="text-muted-foreground">info@logotype.ru</li>
              <li className="text-muted-foreground">Ежедневно с 10:00 до 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2020–2025. Интернет-магазин сантехники. Все права защищены.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
              <Link to="/" className="hover:text-primary transition-colors">Политика возврата</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
            Информация на сайте не является публичной офертой. 
            Авторизованный сервисный центр.
          </p>
        </div>
      </div>
    </footer>
  );
}
