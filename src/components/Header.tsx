import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Brain" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-foreground">МиндСпэйс</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">
              Психологи
            </button>
            <button onClick={() => scrollToSection('directions')} className="text-foreground hover:text-primary transition-colors">
              Направления
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-primary transition-colors">
              Как это работает
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-foreground hover:text-primary transition-colors">
              Статьи
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('form')} className="bg-primary hover:bg-primary/90">
              Подобрать психолога
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 animate-fade-in">
            <button onClick={() => scrollToSection('catalog')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Психологи
            </button>
            <button onClick={() => scrollToSection('directions')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Направления
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Как это работает
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Статьи
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('form')} className="bg-primary hover:bg-primary/90 w-full mt-2">
              Подобрать психолога
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;