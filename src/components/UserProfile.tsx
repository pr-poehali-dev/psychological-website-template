import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  registeredDate: string;
}

interface Consultation {
  id: string;
  psychologistName: string;
  date: string;
  time: string;
  status: 'completed' | 'scheduled' | 'cancelled';
  direction: string;
}

const UserProfile = ({ isOpen, onClose }: UserProfileProps) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'settings'>('profile');
  const [user, setUser] = useState<User>({
    name: 'Анна Иванова',
    email: 'anna@example.com',
    phone: '+7 (999) 123-45-67',
    registeredDate: '15 марта 2024'
  });

  const [consultations] = useState<Consultation[]>([
    {
      id: '1',
      psychologistName: 'Елена Петрова',
      date: '2024-09-25',
      time: '15:00',
      status: 'completed',
      direction: 'Тревожность и стресс'
    },
    {
      id: '2',
      psychologistName: 'Михаил Смирнов',
      date: '2024-10-05',
      time: '14:00',
      status: 'scheduled',
      direction: 'Семейные отношения'
    },
    {
      id: '3',
      psychologistName: 'Ольга Козлова',
      date: '2024-09-18',
      time: '16:30',
      status: 'completed',
      direction: 'Самооценка'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(user);

  if (!isOpen) return null;

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Завершена';
      case 'scheduled':
        return 'Запланирована';
      case 'cancelled':
        return 'Отменена';
      default:
        return status;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-heading font-bold text-foreground">Личный кабинет</h2>
          <button onClick={onClose} className="hover:bg-gray-100 rounded-full p-2 transition-colors">
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'profile'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name="User" size={20} className="inline mr-2" />
            Профиль
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'history'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name="Calendar" size={20} className="inline mr-2" />
            История
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === 'settings'
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name="Settings" size={20} className="inline mr-2" />
            Настройки
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">{user.name}</h3>
                  <p className="text-muted-foreground">Клиент с {user.registeredDate}</p>
                </div>
              </div>

              {!isEditing ? (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Контактная информация</h4>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Icon name="Edit" size={16} className="mr-2" />
                      Редактировать
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span className="text-foreground">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span className="text-foreground">{user.phone}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Редактирование профиля</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={handleSave} className="flex-1">Сохранить</Button>
                      <Button variant="outline" onClick={() => {
                        setIsEditing(false);
                        setEditForm(user);
                      }} className="flex-1">
                        Отменить
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{consultations.filter(c => c.status === 'completed').length}</div>
                  <div className="text-sm text-muted-foreground">Проведено консультаций</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{consultations.filter(c => c.status === 'scheduled').length}</div>
                  <div className="text-sm text-muted-foreground">Запланировано</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Часов терапии</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">История консультаций</h3>
              {consultations.length > 0 ? (
                consultations.map((consultation) => (
                  <div key={consultation.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{consultation.psychologistName}</h4>
                        <p className="text-sm text-muted-foreground">{consultation.direction}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(consultation.status)}`}>
                        {getStatusText(consultation.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>{new Date(consultation.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                    {consultation.status === 'scheduled' && (
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Перенести
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 text-red-600 hover:text-red-700">
                          <Icon name="X" size={16} className="mr-2" />
                          Отменить
                        </Button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">У вас пока нет консультаций</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Уведомления</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-foreground">Email уведомления о консультациях</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-foreground">SMS напоминания за день до консультации</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-foreground">Новостная рассылка</span>
                    <input type="checkbox" className="w-5 h-5" />
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Безопасность</h4>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Lock" size={20} className="mr-3" />
                  Изменить пароль
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Shield" size={20} className="mr-3" />
                  Двухфакторная аутентификация
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Конфиденциальность</h4>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Download" size={20} className="mr-3" />
                  Скачать мои данные
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  <Icon name="Trash2" size={20} className="mr-3" />
                  Удалить аккаунт
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;