import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cheats = [
    {
      id: 1,
      name: 'Nursultan',
      price: '1500₽',
      image: 'https://cdn.poehali.dev/projects/868bf0f9-31a5-4de1-ba77-35ad04935521/files/848f9164-5258-4827-9df7-927a1263d6d7.jpg',
      features: ['ESP', 'Aimbot', 'Fly', 'Speed', 'KillAura'],
      popular: true,
    },
    {
      id: 2,
      name: 'Expensive',
      price: '2000₽',
      image: 'https://cdn.poehali.dev/projects/868bf0f9-31a5-4de1-ba77-35ad04935521/files/d2946bfb-c3fd-49d5-ab8d-0f5113f2ace1.jpg',
      features: ['Premium ESP', 'AutoCrystal', 'Scaffold', 'AntiKnockback', 'Velocity'],
      popular: true,
    },
    {
      id: 3,
      name: 'Standard',
      price: '800₽',
      image: 'https://cdn.poehali.dev/projects/868bf0f9-31a5-4de1-ba77-35ad04935521/files/848f9164-5258-4827-9df7-927a1263d6d7.jpg',
      features: ['Basic ESP', 'Fly', 'Speed'],
      popular: false,
    },
  ];

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard' },
    { name: 'СБП', icon: 'Smartphone' },
    { name: 'Криптовалюта', icon: 'Bitcoin' },
    { name: 'QIWI', icon: 'Wallet' },
  ];

  const faqs = [
    {
      question: 'Как установить чит?',
      answer: 'После покупки вы получите инструкцию по установке и ссылку на скачивание. Просто следуйте шагам в инструкции.',
    },
    {
      question: 'Безопасно ли использовать читы?',
      answer: 'Наши читы регулярно обновляются и имеют защиту от обнаружения. Однако мы не можем гарантировать 100% безопасность.',
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 24 часов после покупки, если чит не был активирован.',
    },
    {
      question: 'На каких версиях работают читы?',
      answer: 'Все наши читы поддерживают версии Minecraft от 1.16 до 1.20.x',
    },
  ];

  const reviews = [
    { name: 'Алексей', rating: 5, text: 'Отличный чит, работает стабильно!' },
    { name: 'Дмитрий', rating: 5, text: 'Nursultan - лучший чит для анархии' },
    { name: 'Михаил', rating: 4, text: 'Expensive стоит своих денег' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0F1117] to-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MCCheats
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'payment', 'faq', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'payment' && 'Оплата'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Читы для Minecraft
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Премиум читы с регулярными обновлениями и защитой от обнаружения
            </p>
            <Button
              size="lg"
              className="animate-glow-pulse font-semibold text-lg px-8"
              onClick={() => scrollToSection('catalog')}
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: 'Shield', text: 'Защита от бана' },
              { icon: 'Zap', text: 'Быстрая установка' },
              { icon: 'Users', text: '10000+ пользователей' },
              { icon: 'Clock', text: '24/7 поддержка' },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/50">
                <Icon name={feature.icon as any} size={32} className="text-primary" />
                <span className="text-sm text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-12">Каталог читов</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cheats.map((cheat) => (
              <Card key={cheat.id} className="overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img src={cheat.image} alt={cheat.name} className="w-full h-48 object-cover" />
                  {cheat.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary animate-glow-pulse">Популярное</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{cheat.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{cheat.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cheat.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-12">Способы оплаты</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                <Icon name={method.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                <p className="font-medium">{method.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-12">Вопросы и ответы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card/30">
                <AccordionTrigger className="font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-12">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border/50 bg-card/30">
                <CardHeader>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-4xl font-heading font-bold mb-6">Связь с нами</h3>
          <p className="text-muted-foreground mb-8">Есть вопросы? Свяжитесь с нами любым удобным способом</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" className="gap-2">
              <Icon name="MessageCircle" size={20} />
              Telegram
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Icon name="Mail" size={20} />
              Email
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Icon name="MessageSquare" size={20} />
              Discord
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/30 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 MCCheats. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
