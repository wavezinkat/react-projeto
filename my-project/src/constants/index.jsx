import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Fluxo de Trabalho", href: "#fluxo" },
  { label: "Preços", href: "#preco" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const testimonials = [
  {
    user: "Jhon Hyyub",
    company: "Estudos Solutions",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Ias Myhn",
    company: "Paraíba Technologies",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e as habilidades de resolução de problemas da equipe foram fundamentais para dar vida à nossa visão",
  },
  {
    user: "Flavor Valentus",
    company: "War Innovations",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. Sua atenção aos detalhes e compromisso com a excelência são louváveis. Eu os recomendo fortemente para quem procura um serviço de primeira linha.",
  },
  {
    user: "Louis Malicio",
    company: "Tejipian Dynamics",
    image: user4,
    text: "Trabalhar com a equipe da NK Solutions foi uma virada de jogo para nosso projeto. A sua atenção aos detalhes e soluções inovadoras ajudaram-nos a atingir os nossos objetivos mais rapidamente do que pensávamos ser possível. Agradecemos sua experiência e profissionalismo!",
  },
  {
    user: "Nicolau Shiny",
    company: "Big Head Creations",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrado pela equipa. Eles foram capazes de superar nossas expectativas e entregar excelentes resultados.",
  },
  {
    user: "Teago Smiths",
    company: "AszídioSystems",
    image: user6,
    text: "A equipe fez de tudo para garantir que nosso projeto fosse um sucesso. Sua experiência e dedicação são incomparáveis. Estou ansioso para trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interfaces mordernas e agradáveis",
    description:
      "A empresa faz interfaces para o cliente conforme as tecnologias recentes de UX Design",
  },
  {
    icon: <Fingerprint />,
    text: "Foco na acessibilidade para todos os públicos",
    description:
      "Garantia que todos possam acessar nossos serviços, independente da idade, etnia ou raça",
  },
  {
    icon: <ShieldHalf />,
    text: "Criação de templates",
    description:
      "Fazemos ofertas para projetos que podem ser editados para programadores iniciantes ou empreendedores",
  },
  {
    icon: <BatteryCharging />,
    text: "Atualizações",
    description:
      "Estamos sempre atualizados nas mudanças mais recentes no mundo da tecnologia",
  },
  {
    icon: <PlugZap />,
    text: "Colaborações",
    description:
      "Aceitamos ofertas para trabalhar em demandas colaborativas com outras corporações",
  },
  {
    icon: <GlobeLock />,
    text: "Segurança",
    description:
      "Também queremos garantir a segurança dos nossos clientes em todo o projeto, garantindo a privacidade dos seus dados",
  },
];

export const checklistItems = [
  {
    title: "Organização de código de forma simples",
    description:
      "Mapeamos nossa performance e mantemos o código limpo pra rastreamento e manutenção das funções",
  },
  {
    title: "Avaliações e re-avaliações do projeto continuamente",
    description:
      "Usamos o feedback do usuário/cliente pra avaliar e fazer melhoras no projeto",
  },
  {
    title: "Assistência de I.A",
    description:
      "Temos uma assistência de I.A para acelerar nosso fluxo de trabalho",
  },
  {
    title: "Entrega rápida",
    description:
      "Normalmente entregamos nossas demandas com a data á risca, raramente acontece atrasos ou imprevistos.",
  },
];

export const pricingOptions = [
  {
    title: "Pequeno Projeto",
    price: "R$50.00",
    features: [
      "Acesso á dados privados Web",
      "5 gb de armazenamento no servidor",
      "Análise dos dados",
      "Acessível na internet",
    ],
  },
  {
    title: "Projeto Médio",
    price: "$150.00",
    features: [
      "Acesso á dados privados Web",
      "10 Gb de armazenamento no servidor",
      "Análise avançada dos dados",
      "Acessibilidade para pessoas mudas e surdas",
    ],
  },
  {
    title: "Projeto Grande",
    price: "R$500.00",
    features: [
      "Acesso á dados privados Web",
      "Todo o armazenamento que for necessário",
      "Alta performance",
      "Análise avançada dos dados",
      "Acessibilidade especializada"
    ],
  },
];

export const resourcesLinks = [
  { href: "https://web.whatsapp.com", text: "Sites Web" },
  { href: "https://web.whatsapp.com", text: "Aplicações Web" },
  { href: "https://web.whatsapp.com", text: "Templates" },
  { href: "https://web.whatsapp.com", text: "Hospedagem" },
  { href: "https://web.whatsapp.com", text: "Trabalhos colaborativos" },
];

export const platformLinks = [
  { href: "https://github.com/NK-It-Solutions", text: "Github" },
  { href: "https://www.facebook.com", text: "Facebook" },
  { href: "https://www.instagram.com", text: "Instagram" },
  { href: "https://www.youtube.com", text: "Youtube" },
  { href: "https://www.tiktok.com", text: "Tiktok" },
];

export const communityLinks = [
  { href: "https://mail.google.com/mail/u/0/?pli=1", text: "E-mail" },
  { href: "https://web.whatsapp.com", text: "Whatsapp" },
  { href: "https://web.telegram.org", text: "Telegram" },
];