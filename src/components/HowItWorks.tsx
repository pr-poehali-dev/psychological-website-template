import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const steps = [
  {
    step: '01',
    icon: 'FileEdit',
    title: 'Заполните заявку',
    description: 'Расскажите о своей ситуации и предпочтениях в удобной форме'
  },
  {
    step: '02',
    icon: 'Search',
    title: 'Мы подберём психолога',
    description: 'Наши специалисты проанализируют запрос и найдут подходящих экспертов'
  },
  {
    step: '03',
    icon: 'Phone',
    title: 'Свяжемся с вами',
    description: 'Перезвоним в течение 24 часов и предложим несколько вариантов'
  },
  {
    step: '04',
    icon: 'CalendarCheck',
    title: 'Запишитесь на сессию',
    description: 'Выберите удобное время и начните путь к изменениям'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и понятный процесс от заявки до первой консультации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div key={item.step} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
              )}
              <Card className="p-6 text-center relative z-10 bg-white hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 text-2xl font-heading font-bold">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Icon name={item.icon} size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto animate-scale-in">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Быстро</h4>
              <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={28} className="text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Надёжно</h4>
              <p className="text-sm text-muted-foreground">Проверенные специалисты</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Конфиденциально</h4>
              <p className="text-sm text-muted-foreground">Защита ваших данных</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;