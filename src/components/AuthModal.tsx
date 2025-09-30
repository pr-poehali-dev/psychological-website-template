import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
  onAuthSuccess?: () => void;
}

const AuthModal = ({ isOpen, onClose, defaultTab = 'login', onAuthSuccess }: AuthModalProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreement: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Вход выполнен!',
      description: 'Добро пожаловать на платформу',
    });
    onAuthSuccess?.();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: 'Ошибка',
        description: 'Пароли не совпадают',
        variant: 'destructive'
      });
      return;
    }

    if (!registerData.agreement) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на обработку данных',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Регистрация успешна!',
      description: 'Проверьте email для подтверждения',
    });
    onAuthSuccess?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">
            Личный кабинет
          </DialogTitle>
          <DialogDescription className="text-center">
            Войдите или создайте аккаунт для доступа к сервисам
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'login' | 'register')} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="login-password">Пароль</Label>
                <Input
                  id="login-password"
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="••••••••"
                  className="mt-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={loginData.remember}
                    onCheckedChange={(checked) => setLoginData({ ...loginData, remember: checked as boolean })}
                  />
                  <label htmlFor="remember" className="text-sm cursor-pointer">
                    Запомнить меня
                  </label>
                </div>
                <button type="button" className="text-sm text-primary hover:underline">
                  Забыли пароль?
                </button>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Войти
                <Icon name="LogIn" size={18} className="ml-2" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Или войти через</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="w-full">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Google
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  <Icon name="Github" size={18} className="mr-2" />
                  GitHub
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Label htmlFor="register-name">Ваше имя</Label>
                <Input
                  id="register-name"
                  required
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    required
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    placeholder="email@mail.ru"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="register-phone">Телефон</Label>
                  <Input
                    id="register-phone"
                    type="tel"
                    required
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                    placeholder="+7 (___) ___"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="register-password">Пароль</Label>
                <Input
                  id="register-password"
                  type="password"
                  required
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  placeholder="Минимум 8 символов"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="register-confirm">Повторите пароль</Label>
                <Input
                  id="register-confirm"
                  type="password"
                  required
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="mt-2"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="register-agreement"
                  checked={registerData.agreement}
                  onCheckedChange={(checked) => setRegisterData({ ...registerData, agreement: checked as boolean })}
                />
                <label htmlFor="register-agreement" className="text-sm text-muted-foreground cursor-pointer leading-tight">
                  Я согласен на обработку персональных данных и принимаю условия использования
                </label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Создать аккаунт
                <Icon name="UserPlus" size={18} className="ml-2" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Или зарегистрироваться через</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="w-full">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Google
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  <Icon name="Github" size={18} className="mr-2" />
                  GitHub
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;