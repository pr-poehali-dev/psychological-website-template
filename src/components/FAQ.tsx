import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Как проходит подбор психолога?',
    answer: 'Вы заполняете заявку с описанием вашего запроса. Наша команда анализирует информацию и подбирает 2-3 специалистов, которые лучше всего подходят под вашу ситуацию. Мы связываемся с вами в течение 24 часов и предлагаем варианты.'
  },
  {
    question: 'Сколько стоят услуги платформы?',
    answer: 'Подбор психолога через нашу платформу бесплатный. Вы оплачиваете только консультации с выбранным специалистом. Стоимость сессии зависит от опыта психолога и составляет от 2500 до 5000 рублей.'
  },
  {
    question: 'Можно ли выбрать другого психолога, если первый не подошёл?',
    answer: 'Да, конечно! Мы понимаем, что контакт с психологом — это важная часть терапии. Если специалист не подошёл, свяжитесь с нами, и мы предложим другие варианты без дополнительной оплаты.'
  },
  {
    question: 'Как проходят онлайн-консультации?',
    answer: 'Онлайн-консультации проводятся через видеосвязь (Zoom, Skype или другие платформы по договорённости). Вам понадобится компьютер или смартфон с камерой и стабильным интернетом. Консультация по эффективности не уступает очной встрече.'
  },
  {
    question: 'Какая длительность одной консультации?',
    answer: 'Стандартная продолжительность сессии — 50-60 минут. Некоторые специалисты предлагают расширенные сессии по 90 минут. Длительность обсуждается индивидуально с психологом.'
  },
  {
    question: 'Как часто нужно ходить к психологу?',
    answer: 'Частота встреч зависит от вашего запроса и рекомендаций специалиста. Обычно это 1 раз в неделю или 1 раз в 2 недели. При острых состояниях могут быть более частые встречи.'
  },
  {
    question: 'Конфиденциальны ли мои данные?',
    answer: 'Абсолютно конфиденциальны. Все психологи соблюдают профессиональную этику и подписывают соглашение о неразглашении. Ваши личные данные защищены и не передаются третьим лицам.'
  },
  {
    question: 'Как я могу оплатить консультации?',
    answer: 'Оплата производится напрямую психологу удобным для вас способом: банковский перевод, наличные (при очных встречах) или электронные платёжные системы. Детали обсуждаются с выбранным специалистом.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о работе платформы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border-none shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;