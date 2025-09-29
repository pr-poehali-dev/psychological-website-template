import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Телефон</h3>
              <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                +7 (999) 123-45-67
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:info@mindspace.ru" className="text-muted-foreground hover:text-primary transition-colors">
                info@mindspace.ru
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Режим работы</h3>
              <p className="text-muted-foreground text-sm">
                Ежедневно<br />
                09:00 — 21:00
              </p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-white shadow-xl animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Остались вопросы?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Напишите нам в мессенджеры или заполните форму подбора психолога. Мы ответим на все ваши вопросы.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="lg" className="flex-1">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Icon name="Phone" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Офис</h4>
                    <p className="text-sm text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl">
                  <Icon name="Users" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Социальные сети</h4>
                    <p className="text-sm text-muted-foreground">
                      Следите за нашими новостями и полезными материалами
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;