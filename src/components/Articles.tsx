import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const articles = [
  {
    id: 1,
    title: 'Как понять, что вам нужен психолог',
    excerpt: 'Признаки, которые указывают на необходимость обратиться за профессиональной помощью',
    category: 'Новичкам',
    readTime: '5 мин',
    image: '/img/73e84ba3-ebe5-4673-afe9-ef7da8450151.jpg'
  },
  {
    id: 2,
    title: 'Первая консультация: чего ожидать',
    excerpt: 'Подробный гид по первой встрече с психологом и как к ней подготовиться',
    category: 'Руководства',
    readTime: '7 мин',
    image: '/img/059b422b-fb7e-453c-9090-34fa054ef1df.jpg'
  },
  {
    id: 3,
    title: 'Разница между психологом и психотерапевтом',
    excerpt: 'Разбираемся в специализациях специалистов по ментальному здоровью',
    category: 'Образование',
    readTime: '4 мин',
    image: '/img/8bc4242e-fcb5-46da-943c-8ef6709fa6d1.jpg'
  }
];

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Статьи о психологии
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полезные материалы о ментальном здоровье и психотерапии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={article.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                  {article.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Читать
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Все статьи
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;