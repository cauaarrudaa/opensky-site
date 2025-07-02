'use client';

import { Typewriter } from 'react-simple-typewriter';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, ArrowRight, Book, BarChart3, Globe, Zap, Pencil, MessageSquare, Mail, Instagram, Linkedin, Github, X, Star } from 'lucide-react';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: Book,
      title: 'SkyBook',
      description: 'Sistema inteligente de agendamentos',
      fullDescription: `O SkyBook é nossa solução completa de agendamentos que revoluciona a forma como você gerencia seu tempo e seus compromissos.

      Principais características:
      • Agendamento automático 24/7
      • Sincronização com múltiplos calendários
      • Lembretes personalizados
      • Interface intuitiva para clientes
      • Painel administrativo completo
      • Relatórios detalhados de ocupação`
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description: 'Visualização de dados em tempo real',
      fullDescription: `Transforme dados em insights acionáveis com nossos dashboards personalizados.

      Recursos inclusos:
      • Visualizações em tempo real
      • Gráficos interativos
      • Métricas personalizáveis
      • Exportação de relatórios
      • Alertas inteligentes
      • Integração com múltiplas fontes de dados`
    },
    {
      icon: Globe,
      title: 'Criação de Sites',
      description: 'Websites modernos e responsivos',
      fullDescription: `Desenvolvimento de websites profissionais que combinam design moderno com alta performance.

      Oferecemos:
      • Design responsivo
      • Otimização para SEO
      • Integração com CMS
      • Alta velocidade de carregamento
      • Certificado SSL
      • Hospedagem gerenciada`
    },
    {
      icon: Zap,
      title: 'Automação',
      description: 'Automatize processos repetitivos',
      fullDescription: `Automatize tarefas repetitivas e aumente a eficiência da sua empresa.

      Soluções incluem:
      • Automação de processos (RPA)
      • Integração entre sistemas
      • Workflows personalizados
      • Notificações automáticas
      • Processamento de documentos
      • Relatórios automatizados`
    },
    {
      icon: Pencil,
      title: 'Criação de Conteúdo',
      description: 'Social Media e Estratégias Digitais com IA',
      fullDescription: `Potencialize sua presença digital com conteúdo estratégico e inteligência artificial.

      Oferecemos:
      • Gestão de redes sociais
      • Criação de conteúdo com IA
      • Estratégias de marketing digital
      • Análise de métricas
      • Otimização de campanhas
      • Relatórios de performance`
    }
  ];

const testimonials = [
  {
    name: "Lucas Andrade",
    company: "Orion Solutions",
    text: "O SkyBook simplificou drasticamente a rotina de agendamentos da nossa equipe. O que antes era manual e caótico, agora é automatizado e eficiente. A produtividade aumentou e conseguimos escalar nosso atendimento com muito mais organização.",
    rating: 5
  },

  {
    name: "Thiago Menezes",
    company: "Axion Tech",
    text: "Trabalhar com a OpenSky foi um divisor de águas. A equipe não só entendeu nossa visão, como propôs soluções inovadoras que aumentaram nossa eficiência operacional em tempo recorde. Altamente recomendados.",
    rating: 5
  }
];


  const faqs = [
    { question: 'O que é o SkyBook?', answer: 'O SkyBook é nossa solução de agendamento inteligente que automatiza todo o processo de marcação de horários.' },
    { question: 'Quais tecnologias vocês utilizam?', answer: 'Trabalhamos com as tecnologias mais modernas do mercado, incluindo React, Node.js, TypeScript e diversas soluções cloud.' },
    { question: 'Como funciona o processo de desenvolvimento?', answer: 'Nosso processo é ágil e transparente, com sprints semanais e comunicação constante com o cliente.' },
    { question: 'Vocês oferecem suporte após a entrega?', answer: 'Sim, oferecemos suporte técnico especializado e manutenção contínua para todos os nossos projetos.' },
    { question: 'Qual o prazo médio de desenvolvimento?', answer: 'O prazo varia de acordo com a complexidade do projeto, mas trabalhamos com entregas incrementais para garantir resultados rápidos.' }
  ];

  const impactPhrases = [
    {
      title: "Transforme seu negócio com tecnologia inteligente",
      description: "Soluções inovadoras para impulsionar seu crescimento",
      color: "text-white"
    },
    {
      title: "Seu próximo nível começa com a OpenSky",
      description: "Tecnologia de ponta para resultados extraordinários",
      color: "text-red-500"
    },
    {
      title: "Automatize. Cresça. Conquiste.",
      description: "Simplifique processos, maximize resultados",
      color: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="OpenSky Logo" className="w-8 h-8" />
                <span className="font-bold text-xl">OpenSky</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
                <a href="#quem-somos" className="text-gray-300 hover:text-white transition-colors">Quem Somos</a>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </nav>
            </div>
            <a
              href="https://wa.me/seu-numero"
              className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group"
            >
              <span className="absolute -inset-1 bg-red-500/30 rounded-lg blur animate-pulse group-hover:bg-red-500/50"></span>
              <span className="relative">Fale Conosco</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center justify-center relative px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.img
            src="/logo.svg"
            alt="OpenSky Logo"
            className="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            OpenSky
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Soluções tecnológicas para o futuro
          </motion.p>
          <motion.a
            href="https://wa.me/61983114634"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MessageCircle size={20} />
            Fale com um especialista 
          </motion.a>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown size={40} className="text-red-500" />
        </motion.div>
      </section>

      {/* Impact Phrases Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactPhrases.map((phrase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h2 className={`text-3xl font-bold mb-4 ${phrase.color}`}>
                  {phrase.title}
                </h2>
                <p className="text-gray-400">{phrase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="servicos" className="section-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="service-card"
                onClick={() => setSelectedService(service.title)}
              >
                <service.icon size={40} className="text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <ArrowRight className="absolute bottom-6 right-6 text-red-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Cadastro OpenSky */}
<section id="cadastro" className="section-gradient py-20 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
    {/* Lado Esquerdo - Etapas */}
    <div className="space-y-10">
      <h2 className="text-4xl font-bold">
        Cadastre-se e fale com nosso time da OpenSky
      </h2>
      <p className="text-gray-400">
        Dê o primeiro passo para transformar sua operação com tecnologia personalizada.
      </p>

      {/* Etapa 1 */}
      <div className="flex items-start gap-4">
        <div className="bg-red-600 p-3 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.2 0 4.27.532 6.121 1.472M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-white">1. Preencha seus dados</h3>
          <p className="text-gray-400 text-sm">
            Informe suas informações para contato. Seus dados estarão protegidos conosco.
          </p>
        </div>
      </div>

      {/* Etapa 2 */}
      <div className="flex items-start gap-4">
        <div className="bg-red-600 p-3 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M3 10h2l1.5 6h11l1.5-6H21M16 10V6a4 4 0 10-8 0v4" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-white">2. Fale com nosso especialista</h3>
          <p className="text-gray-400 text-sm">
            Em até 15 minutos, entraremos em contato para entender sua operação e como podemos ajudar.
          </p>
        </div>
      </div>
    </div>

    {/* Lado Direito - Formulário */}
    <form className="space-y-6 bg-gray-900/50 p-8 rounded-xl">
      <input
        type="text"
        placeholder="Nome completo"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="tel"
        placeholder="Telefone"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Empresa (opcional)"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Instagram (opcional)"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
      >
        Receber mais informações
      </button>
    </form>

  </div>
</section>


{/* Quem Somos Section */}
<section
  id="quem-somos"
  className="relative py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
>
  {/* Fundo decorativo vermelho desfocado */}
  <div className="absolute inset-0">
    <div className="absolute w-96 h-96 bg-red-600/20 blur-[120px] rounded-full top-20 left-10 animate-pulse" />
    <div className="absolute w-72 h-72 bg-red-500/10 blur-[100px] rounded-full bottom-20 right-10" />
  </div>

  <div className="relative max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
    {/* Texto */}
    <div className="md:flex-1 text-center md:text-left">
      <h2 className="text-5xl font-extrabold mb-8 tracking-tight text-white drop-shadow-md">
        Quem Somos
      </h2>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
        A <strong className="text-red-500">OpenSky</strong> é uma empresa de inovação digital focada em transformar o presente das empresas através da tecnologia. Desenvolvemos sistemas inteligentes, plataformas customizadas e soluções automatizadas que conectam estratégia, eficiência e inovação. Nosso compromisso é entregar resultados reais com soluções modernas e escaláveis.
      </p>

      <p className="text-md text-gray-400 leading-relaxed max-w-lg">
        Fundada de empoderar negócios com ferramentas tecnológicas de ponta, unimos design, performance e automação para construir experiências únicas. Nossa equipe é movida por desafios, criatividade e impacto entregando valor com excelência técnica, visão estratégica e suporte humano próximo.
      </p>
    </div>

    {/* Imagem */}
    <div className="md:flex-1 flex justify-center md:justify-end">
      <img
        src="/Modelo - OpenSky.jpg"
        alt="Equipe OpenSky"
        className="w-full max-w-md rounded-lg shadow-lg object-cover"
        loading="lazy"
      />
    </div>
  </div>
</section>

{/* Como funciona sua jornada dentro da OpenSky */}
<section className="bg-black text-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-red-600">
      Como funciona sua jornada dentro da OpenSky
    </h2>
    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
      Da análise técnica à sustentação inteligente. Um processo sob medida para empresas que buscam tecnologia com propósito.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {[
      {
        step: "01",
        title: "Análise Técnica e Estratégica",
        text: "Mapeamos processos, sistemas e fluxos operacionais com foco em performance, eficiência e integração.",
      },
      {
        step: "02",
        title: "Desenho de Soluções",
        text: "Modelamos soluções personalizadas com base em automação, nuvem, IA e integrações adaptadas ao seu negócio.",
      },
      {
        step: "03",
        title: "Implantação Técnica",
        text: "Executamos com qualidade, controle de versionamento, testes e adaptação à realidade da operação.",
      },
      {
        step: "04",
        title: "Suporte, Dados e Evolução",
        text: "Garantimos sustentação, dados em tempo real e ajustes contínuos para maximizar os resultados entregues.",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="relative group bg-[#121212] p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition duration-300 shadow-xl"
      >
        <div className="absolute top-4 right-6 text-6xl font-black text-zinc-700 opacity-10 group-hover:opacity-20">
          {item.step}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm">{item.text}</p>
        <div className="mt-6 h-1 w-16 bg-red-600 rounded-full" />
      </div>
    ))}
  </div>
</section>

{/* Tecnologia que usamos */}
<section className="section-gradient py-20 px-8 md:px-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-4">Tecnologias que usamos</h2>
    <p className="text-gray-400 max-w-3xl mx-auto">
      As melhores ferramentas e linguagens para entregar soluções inovadoras e robustas.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-8 items-center justify-items-center">
    {/* Linguagens */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="JavaScript"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="TypeScript"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      alt="Python"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Python"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      alt="Java"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Java"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
      alt="C#"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="C#"
    />

    {/* Frameworks e libs */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="React"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Node.js"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
      alt="Vue.js"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Vue.js"
    />

    {/* Cloud e infraestrutura */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      alt="Docker"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Docker"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      alt="Kubernetes"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="Kubernetes"
    />

    {/* Banco de dados */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="PostgreSQL"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="MongoDB"
    />

    {/* Machine Learning / IA */}
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      alt="TensorFlow"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="TensorFlow"
    />
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
      alt="PyTorch"
      className="w-16 h-16 hover:scale-110 transition-transform"
      title="PyTorch"
    />
  </div>
</section>


{/* Soluções OpenSky */}
<section id="solucoes" className="section-gradient py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      Soluções Tecnológicas da OpenSky
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* OpenCloud */}
      <div className="bg-gray-900/50 p-6 rounded-xl relative overflow-hidden">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center">OpenCloud</h3>
        <p className="text-gray-300 text-center">
          Infraestrutura escalável, segura e gerenciada na nuvem. Ideal para sistemas críticos e aplicações que exigem alta disponibilidade.
        </p>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* OpenDev com efeito de digitação */}
      <div className="bg-gray-900/50 p-6 rounded-xl relative overflow-hidden">
        <div className="mb-6 bg-black rounded-xl py-6 px-4 text-sm font-mono text-gray-300 min-h-[160px]">
          <Typewriter
            words={[
              `class Projeto {\n  public cliente: string;\n  constructor() {\n    this.stack = ['Node.js', 'Next.js', 'Python'];\n  }\n}`
            ]}
            loop={false}
            typeSpeed={25}
            cursor
          />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center">OpenDev</h3>
        <p className="text-gray-300 text-center">
          Desenvolvimento sob medida com foco em performance, segurança e escalabilidade para startups e empresas digitais.
        </p>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* OpenAI Ops */}
      <div className="bg-gray-900/50 p-6 rounded-xl relative overflow-hidden">
        <div className="mb-6 space-y-2 text-gray-300">
          <div className="bg-neutral-800 py-2 rounded text-center">Automação</div>
          <div className="bg-neutral-800 py-2 rounded text-center">Integrações</div>
          <div className="bg-gradient-to-r from-pink-500 to-red-500 py-2 rounded text-center font-semibold">IA Aplicada</div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-center">OpenAI Ops</h3>
        <p className="text-gray-300 text-center">
          IA generativa, chatbots e fluxos automatizados para impulsionar produtividade e reduzir tarefas operacionais.
        </p>
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10" />
      </div>

    </div>
  </div>
</section>

{/* Parceiros da OpenSky */}
<section className="bg-gray-950 text-white py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-16">

    {/* O que diferencia a OpenSky */}
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
        O que diferencia a <span className="text-red-500">OpenSky</span>
      </h2>
      <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
        Somos mais do que prestadores. Somos parceiros estratégicos de negócios digitais. Veja como nos destacamos frente ao mercado.
      </p>
    </div>

    {/* Layout com Tabela e Benefícios ao lado */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

      {/* Tabela Comparativa */}
      <div className="lg:col-span-2 overflow-x-auto">
        <table className="w-full table-auto border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-red-600 to-red-500 text-white text-left text-sm md:text-base">
              <th className="p-4 bg-gray-900">Critérios</th>
              <th className="p-4">OpenSky</th>
              <th className="p-4">Prestadores comuns</th>
              <th className="p-4">Outras consultorias</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {[
              ['Atuação como parceiro estratégico de tecnologia', '✓', '✗', 'Às vezes'],
              ['Personalização e escalabilidade sob demanda', '✓', 'Raro', 'Às vezes'],
              ['Atendimento técnico consultivo e dedicado', '✓', 'Às vezes', '✓'],
              ['Suporte contínuo pós-entrega', '✓', '✗', 'Às vezes'],
              ['Foco em startups e MVPs', '✓', '✗', 'Raro'],
              ['ROI e resultados do negócio como prioridade', '✓', 'Raro', 'Raro'],
              ['Equipe multidisciplinar própria', '✓', '✗', '✓'],
              ['Entregas com qualidade', '✓', '✗', 'Às vezes'],
              ['Processos ágeis e transparentes', '✓', 'Às vezes', '✓'],
              ['Comprometimento com prazos', '✓', 'Raro', 'Às vezes'],
            ].map(([criterio, opensky, comum, consultoria], i) => (
              <tr key={i} className="border-b border-gray-800">
                <td className="p-4 text-gray-300">{criterio}</td>
                <td className="p-4 text-center font-bold text-green-400">{opensky}</td>
                <td className="p-4 text-center text-gray-400">{comum}</td>
                <td className="p-4 text-center text-gray-400">{consultoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Benefícios Laterais Resumidos */}
      <div className="space-y-6 bg-gray-900 p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-red-400">Vantagens exclusivas OpenSky</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <div className="text-green-400 font-bold">✓</div>
            <span className="text-gray-300">Foco total na geração de valor ao negócio</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="text-green-400 font-bold">✓</div>
            <span className="text-gray-300">Time com expertise real em startups</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="text-green-400 font-bold">✓</div>
            <span className="text-gray-300">Acompanhamento contínuo e dados acionáveis</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="text-green-400 font-bold">✓</div>
            <span className="text-gray-300">Comunicação clara, sem jargões técnicos desnecessários</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-black text-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* Imagem do notebook à esquerda */}
  <div className="w-[420px] h-auto mx-auto">
    <img
      src="/logo3d.png" // Atualize com o caminho da sua imagem
      alt="Notebook com tecnologia"
      className="w-full rounded-xl shadow-xl"
    />
  </div>

  {/* Conteúdo à direita */}
  <div className="md:w-1/2 w-full space-y-8">
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Nosso <span className="text-red-500">Ecossistema</span>
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        Conheça quem está conosco na jornada de transformação digital de nossos clientes.
      </p>
      <div className="mt-4 w-24 h-1 bg-red-500 rounded-full" />
    </div>

    {/* Logos dos parceiros */}
    <div className="flex flex-wrap items-center gap-8 mt-6">
      <img src="/google-cloud-logo-1.png" alt="Google Cloud" className="h-10 object-contain mx-auto" />
      <img src="/Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-10 object-contain mx-auto" />
      <img src="/azure-1.png" alt="Microsoft Azure" className="h-10 object-contain mx-auto" />
      <img src="/oracle.png" alt="Oracle" className="h-10 object-contain mx-auto" />
      <img src="/Docker-Logo.png" alt="Docker" className="h-10 object-contain mx-auto" />
    </div>
  </div>
</section>

  {/* Depoimentos Section */}
<section id="depoimentos" className="section-gradient py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">Depoimentos</h2>

    {/* Depoimento Principal com destaque visual */}
    <div className="bg-gray-900/60 p-8 rounded-xl shadow-lg mb-16 relative overflow-hidden md:flex md:items-center md:gap-8">
      {/* Luz vermelha de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -z-10" />

      {/* Conteúdo */}
      <div className="flex-1">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
          “Antes da OpenSky, minha empresa vivia apagando incêndios. Não tínhamos controle de dados, os processos eram manuais, e o crescimento parecia impossível. Depois da implementação da plataforma, automatizamos áreas críticas e dobramos nossa eficiência em seis meses. Hoje, tenho previsibilidade e tempo para escalar com inteligência.”
        </p>
        <div>
          <h3 className="text-red-500 font-bold">Carlos Moreira</h3>
          <p className="text-sm text-gray-400">CEO na LogData Sistemas</p>
        </div>
      </div>
    </div>

    {/* Lista dos demais depoimentos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 p-6 rounded-xl relative overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300">{testimonial.text}</p>
            <div>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      ))}
    </div>
  </div>
</section>
<section className="section-gradient bg-gradient-to-r from-red-600 to-red-500 text-white py-20 px-8 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
    {/* Lado Esquerdo - Por que escolher a OpenSky */}
    <div className="space-y-10">
      <h2 className="text-4xl font-bold leading-snug">
        Por que empresas escolhem a OpenSky?
      </h2>
      <p className="text-gray-300">
        Combinamos tecnologia de ponta com visão estratégica para transformar empresas em máquinas de escala digital.
      </p>
      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="bg-white text-red-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Automação inteligente de ponta a ponta</h3>
            <p className="text-gray-300 text-sm">
              Eliminamos gargalos operacionais com soluções customizadas para cada etapa da sua jornada.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="bg-white text-red-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Escalabilidade em cloud</h3>
            <p className="text-gray-300 text-sm">
              Infraestrutura robusta e flexível, preparada para crescer com o seu negócio.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="bg-white text-red-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Análise de dados para decisões assertivas</h3>
            <p className="text-gray-300 text-sm">
              Dashboards personalizados que traduzem dados brutos em insights acionáveis.
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="bg-white text-red-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
              d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Suporte técnico consultivo</h3>
            <p className="text-gray-300 text-sm">
              Atendimento com especialistas que entendem seu negócio e oferecem soluções reais.
            </p>
          </div>
        </li>
      </ul>
    </div>

 {/* Lado Direito - Imagem da Roadmap */}
    <div className="flex justify-center">
      <img
        src="/Modelo2 - OpenSky.jpg"
        alt="Roadmap OpenSky"
        className="w-full max-w-md rounded-xl shadow-lg object-contain"
      />
    </div>

  </div>
</section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="hero-gradient w-full h-full" />
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="relative">
              {services.find(s => s.title === selectedService)?.icon &&
                React.createElement(services.find(s => s.title === selectedService)!.icon, {
                  size: 48,
                  className: 'text-red-500 mb-4'
                })
              }
              <h3 className="text-2xl font-bold mb-4">{selectedService}</h3>
              <div className="prose prose-invert">
                <p className="text-gray-300 whitespace-pre-line">
                  {services.find(s => s.title === selectedService)?.fullDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="section-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-900/50 rounded-lg">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className="transform group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-4 bg-gray-800/50 rounded-b-lg mt-1">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/5561983114634"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all group"
        title="Fale com nosso time"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MessageSquare size={24} />
      </motion.a>

      {/* ROdapé */}
      <footer className="section-gradient py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OpenSky</h3>
            <div className="space-y-2">
              <a href="mailto:contato@opensky.com.br" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail size={16} />
                openskygroup01@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="block text-gray-400 hover:text-white">Termos de Uso</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 OpenSky. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;