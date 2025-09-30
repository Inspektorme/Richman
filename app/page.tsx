'use client'
import React, { useState } from "react";
import { Shield, Clock, Bot, CreditCard, Globe, Zap, BarChart3, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SETTINGS = {
  brand: {
    name: "RICHMAN Forex Bot",
    tagline: "До 250% годовых с минимальным риском",
    logoImg: "/logo-richman.png",
    primaryCta: "Купить сейчас",
    secondaryCta: "Получить демо",
  },
};

const features = [
  { icon: <Shield className="w-6 h-6" />, title: "Минимальные риски", text: "До 250% годовых с продуманным управлением рисками" },
  { icon: <Bot className="w-6 h-6" />, title: "AI-алгоритм", text: "Искусственный интеллект подстраивается под рынок" },
  { icon: <Clock className="w-6 h-6" />, title: "24/7 Автономность", text: "Полностью автоматизированная торговля" },
  { icon: <Globe className="w-6 h-6" />, title: "Капиталы $20M+", text: "Масштабируется под крупные депозиты" },
  { icon: <Zap className="w-6 h-6" />, title: "Бесплатный тест", text: "Недельный тестовый период" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Гибкие условия", text: "Покупка или аренда" },
];

const partners = [
  { icon: <Users className="w-6 h-6" />, title: "3-уровневая реферальная программа", text: "Зарабатывайте на привлечённых клиентах" },
  { icon: <Rocket className="w-6 h-6" />, title: "Вайт лейбл", text: "Ребрендинг под вашу компанию" },
  { icon: <Globe className="w-6 h-6" />, title: "Брокерские условия", text: "Эксклюзивные условия у брокера в 10 уровней" },
];

const screenshots = ["/myfxbook1.jpg","/myfxbook2.jpg","/myfxbook3.jpg","/myfxbook4.jpg"];

const tariffs = [
  { title: "Тестовый период", price: "1 неделя", desc: "Бесплатный тест с полной функциональностью", href: "#" },
  { title: "Аренда", price: "$50 / месяц", desc: "Гибкий старт без обязательств", href: "#" },
  { title: "Годовая лицензия", price: "$300 / год", desc: "Выгоднее помесячной аренды", href: "#" },
  { title: "Бессрочная лицензия", price: "$500", desc: "Пожизненный доступ к роботу", href: "#" },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={SETTINGS.brand.logoImg} alt="logo" className="w-9 h-9 object-contain" />
            <div className="font-semibold">{SETTINGS.brand.name}</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-70">Преимущества</a>
            <a href="#results" className="hover:opacity-70">Результаты</a>
            <a href="#pricing" className="hover:opacity-70">Тарифы</a>
            <a href="#partners" className="hover:opacity-70">Партнёрам</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">👑 Форекс робот RICHMAN 👑</h2>
          <p className="mt-4 text-lg opacity-80">
            До 250% годовых в долларах с минимальным риском. Полностью автоматизированная система 24/7, которая управляет капиталами свыше $20M.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>✅ AI подстраивается под рынок и регулирует объём сделок</li>
            <li>✅ Бесплатный тестовый период</li>
            <li>✅ Покупка или аренда</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button><CreditCard className="w-5 h-5 mr-2" /> Купить</Button>
            <Button variant="outline"><Rocket className="w-5 h-5 mr-2" /> Получить демо</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-10">Что вы получаете</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i}>
                <CardHeader className="gap-3">{f.icon}<CardTitle>{f.title}</CardTitle></CardHeader>
                <CardContent><p className="opacity-80">{f.text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-8">Реальные результаты (Myfxbook)</h3>
          <div className="relative max-w-3xl mx-auto">
            <img src={screenshots[current]} alt={`screenshot-${current}`} className="rounded-xl shadow-lg w-full" />
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-r-xl shadow">‹</button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-l-xl shadow">›</button>
          </div>
          <p className="text-xs text-center mt-4 opacity-70">Прошлые результаты не гарантируют будущих доходностей.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-10">Тарифы</h3>
          <p className="text-center text-sm mb-6 opacity-80">
            При любой покупке и регистрации по <a href="#" className="text-blue-600 underline">этой ссылке у брокера</a> вы получаете <strong>скидку 50%</strong> на покупку лицензии.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffs.map((t, i) => (
              <Card key={i} className="text-center">
                <CardHeader><CardTitle>{t.title}</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{t.price}</div>
                  <p className="text-sm opacity-80">{t.desc}</p>
                  <Button className="mt-4 w-full">Выбрать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-10">🚀 Для партнёров</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <Card key={i}>
                <CardHeader className="gap-3">{p.icon}<CardTitle>{p.title}</CardTitle></CardHeader>
                <CardContent><p className="opacity-80 text-sm">{p.text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
