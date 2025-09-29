import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const directions = [
  {
    icon: 'Heart',
    title: 'Личная терапия',
    description: 'Работа с тревогой, депрессией, самооценкой, личностным ростом'
  },
  {
    icon: 'Users',
    title: 'Семейная терапия',
    description: 'Решение семейных конфликтов, улучшение коммуникации, кризисы'
  },
  {
    icon: 'HeartHandshake',
    title: 'Парная терапия',
    description: 'Работа над отношениями, восстановление доверия, конфликты'
  },
  {
    icon: 'Baby',
    title: 'Детская психология',
    description: 'Помощь детям и подросткам, работа с поведением, адаптация'
  },
  {
    icon: 'Briefcase',
    title: 'Карьерное консультирование',
    description: 'Профориентация, выгорание, конфликты на работе, развитие'
  },
  {
    icon: 'Shield',
    title: 'Работа с травмой',
    description: 'Проработка психологических травм, ПТСР, горевание'
  },
  {
    icon: 'Sparkles',
    title: 'Самопознание',
    description: 'Поиск себя, смысла жизни, ценностей, жизненных целей'
  },
  {
    icon: 'Brain',
    title: 'Когнитивная терапия',
    description: 'Работа с мыслями, убеждениями, паттернами поведения'
  }
];

const Directions = () => {
  return (
    <section id="directions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Направления помощи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы работаем с широким спектром запросов и подберём специалиста под вашу ситуацию
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction, index) => (
            <Card 
              key={direction.title} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={direction.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {direction.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {direction.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;