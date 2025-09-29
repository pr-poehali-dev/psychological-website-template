import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Найдите своего психолога
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы поможем подобрать специалиста, который подходит именно вам. Заполните заявку, и мы свяжемся с вами в течение 24 часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                Подобрать психолога
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg"
              >
                Каталог специалистов
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Психологов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Направлений</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Успешных подборов</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="/img/8bc4242e-fcb5-46da-943c-8ef6709fa6d1.jpg" 
              alt="Психологическая консультация" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">Конфиденциально</div>
                  <div className="text-sm text-muted-foreground">100% защита данных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;