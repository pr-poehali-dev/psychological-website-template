import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const MatchingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requestType: '',
    format: [] as string[],
    description: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на обработку данных',
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов',
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      requestType: '',
      format: [],
      description: '',
      agreement: false
    });
  };

  const toggleFormat = (format: string) => {
    setFormData(prev => ({
      ...prev,
      format: prev.format.includes(format)
        ? prev.format.filter(f => f !== format)
        : [...prev.format, format]
    }));
  };

  return (
    <section id="form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Форма подбора психолога
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы подберём специалиста под ваш запрос
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться?"
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="requestType">Тип запроса *</Label>
                <Select 
                  required
                  value={formData.requestType}
                  onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Выберите направление" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Личная терапия</SelectItem>
                    <SelectItem value="family">Семейная терапия</SelectItem>
                    <SelectItem value="couple">Парная терапия</SelectItem>
                    <SelectItem value="child">Детская психология</SelectItem>
                    <SelectItem value="career">Карьерное консультирование</SelectItem>
                    <SelectItem value="trauma">Работа с травмой</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Предпочтительный формат</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="online"
                      checked={formData.format.includes('online')}
                      onCheckedChange={() => toggleFormat('online')}
                    />
                    <label htmlFor="online" className="text-sm cursor-pointer">
                      Онлайн консультации
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="offline"
                      checked={formData.format.includes('offline')}
                      onCheckedChange={() => toggleFormat('offline')}
                    />
                    <label htmlFor="offline" className="text-sm cursor-pointer">
                      Очные встречи
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Расскажите о вашей ситуации</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Опишите, с чем вы хотели бы поработать..."
                  className="mt-2 min-h-32"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
                />
                <label htmlFor="agreement" className="text-sm text-muted-foreground cursor-pointer">
                  Я согласен(на) на обработку персональных данных и ознакомлен(а) с политикой конфиденциальности
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Мы свяжемся с вами в течение 24 часов
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MatchingForm;