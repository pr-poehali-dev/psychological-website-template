import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const psychologists = [
  {
    id: 1,
    name: 'Анна Соколова',
    specialization: 'Когнитивно-поведенческая терапия',
    experience: '12 лет',
    rating: 4.9,
    price: '3500 ₽',
    tags: ['Тревожность', 'Депрессия', 'Стресс']
  },
  {
    id: 2,
    name: 'Михаил Петров',
    specialization: 'Семейная психотерапия',
    experience: '8 лет',
    rating: 4.8,
    price: '4000 ₽',
    tags: ['Отношения', 'Конфликты', 'Кризис']
  },
  {
    id: 3,
    name: 'Елена Иванова',
    specialization: 'Гештальт-терапия',
    experience: '15 лет',
    rating: 5.0,
    price: '4500 ₽',
    tags: ['Самооценка', 'Личностный рост', 'Эмоции']
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    specialization: 'Психоанализ',
    experience: '10 лет',
    rating: 4.7,
    price: '3800 ₽',
    tags: ['Травмы', 'Детство', 'Подсознание']
  },
  {
    id: 5,
    name: 'Ольга Новикова',
    specialization: 'Арт-терапия',
    experience: '7 лет',
    rating: 4.9,
    price: '3200 ₽',
    tags: ['Творчество', 'Самовыражение', 'Дети']
  },
  {
    id: 6,
    name: 'Сергей Морозов',
    specialization: 'Экзистенциальная терапия',
    experience: '11 лет',
    rating: 4.8,
    price: '4200 ₽',
    tags: ['Смысл жизни', 'Кризис', 'Выбор']
  }
];

const PsychologistsCatalog = () => {
  return (
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Каталог психологов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите специалиста по направлению работы или оставьте заявку на подбор
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {psychologists.map((psychologist, index) => (
            <Card 
              key={psychologist.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-heading font-bold">
                  {psychologist.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold">{psychologist.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {psychologist.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {psychologist.specialization}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Briefcase" size={16} />
                  <span>{psychologist.experience}</span>
                </div>
                <div className="font-semibold text-primary">
                  {psychologist.price}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {psychologist.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Записаться
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Показать всех специалистов
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PsychologistsCatalog;