import React from 'react';
import Hero from '../components/Hero';
import Midia from '../components/Midia';
import CtaList from '../components/CtaList';
import Methods from '../components/Methods'; 
import CardPrice from '../components/CardPrice'; 
import Way from '../components/Way';
import Ceo from '../components/Ceo'

export default function Home() {
  const videoEmbedCode = `
    <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66cdc6e85891b9000b5c7c87"></script>
    <div id="ifr_66cdc6e85891b9000b5c7c87_wrapper" style="margin: 0 auto; width: 100%">
      <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66cdc6e85891b9000b5c7c87_aspect">
        <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66cdc6e85891b9000b5c7c87/embed.html" id="ifr_66cdc6e85891b9000b5c7c87" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe>
      </div>
    </div>
    <style>
      .elementor-element:has(#ifr_66cdc6e85891b9000b5c7c87_wrapper) { width: 100%; }
    </style>
  `;

  const headlineHTML = `
    Já imaginou você ter dezenas de clientes chegando todos os dias no seu celular sem muito esforço?
  `;
  const subheadlineHTML = `
    Tenha acesso a estratégia que ninguém nunca utilizou e me fez ganhar rios de dinheiro no mercado de higienização e impermeabilização de estofados.
  `;

  const ctaItems = [
    { iconSrc: '/image/icon-1.svg', text: 'Lotar a sua agenda de clientes querendo pagar pelos seus serviços de higienização e impermeabilização.' },
    { iconSrc: '/image/icon-2.svg', text: 'Ter clientes chegando no seu WhatsApp no automático. O esforço maior vai ser dar conta de tanta gente pedindo orçamento.' },
    { iconSrc: '/image/icon-3.svg', text: 'Vai aumentar sua lucratividade usando a inteligência artificial do Facebook e Instagram;' },
    { iconSrc: '/image/icon-4.svg', text: 'Vai alcançar todos os possíveis clientes da sua cidade sem sair de casa.' }
  ];

  const methodItems = [
    { iconSrc: '/image/check-icon.svg', text: 'Que está insatisfeito com o faturamento da sua empresa' },
    { iconSrc: '/image/check-icon.svg', text: 'Não sabe usar a internet para atrair clientes' },
    { iconSrc: '/image/check-icon.svg', text: 'Quer ter clientes chegando no automático sem sair de casa.' },
    { iconSrc: '/image/check-icon.svg', text: 'Quer ter os melhores clientes' },
    { iconSrc: '/image/check-icon.svg', text: 'Já tem uma empresa de higienização de estofados e quer aumentar o lucro;' },
    { iconSrc: '/image/check-icon.svg', text: 'Quer lotar a sua agenda de clientes qualificados pagando caro pelo seu serviço;' }
  ];

  const cardItems = [
    {
      imageSrc: '/image/instagram.png',
      title: 'Método de Tráfego Orgânico no Instagram',
      description: 'Você vai descobrir como gerar mais clientes pelo Instagram sem precisar investir 1 real.',
      price: 'R$ 147,00'
    },
    {
      imageSrc: '/image/phone.png',
      title: 'Livro digital Nunca Mais Seja Pobre',
      description: 'Nesse livro digital eu vou revelar tudo o que eu fiz para me tornar um milionário, e como você pode fazer o mesmo, se seguir exatamente o que eu ensino neste livro.',
      price: 'R$ 97,00',
      isMiddle: true
    },
    {
      imageSrc: '/image/calendar.png',
      title: 'Calendário de Marketing Anual',
      description: 'Você vai ter acesso ao meu calendário de marketing anual e se preparar sua empresa para as melhores oportunidades do mercado.',
      price: 'R$ 97,00'
    }
  ];

  const cardPriceData = {
    logoSrc: '/image/logo-5x.png',
    productImageSrc: '/image/produtos5x.webp',
    title: 'Vamos relembrar tudo o que você vai receber:',
    items: [
      { description: 'Método Clientes 5X -', price: 'R$297' },
      { description: 'Método de Tráfego Orgânico no Instagram -', price: 'R$147' },
      { description: 'Calendário de Marketing Anual -', price: 'R$97' },
      { description: 'Livro digital Nunca Mais Seja Pobre -', price: 'R$97' },
      { description: 'Livro Autografado Fritz Paixão -', price: 'R$127' }
    ],
    oldPrice: 'R$765',
    finalPrice: '12X DE R$19,70',
    cashPrice: 'OU R$197 à vista'
  };

  const faq = [
    {
      question: 'Por quanto tempo terei acesso ao Método Cliente 5X?',
      answer: 'Você terá acesso durante 1 ano completo a partir do dia da inscrição no curso. No entanto, todos os materiais extras que você baixar serão seus para sempre.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Tenho garantia?',
      answer: 'Sim, você tem uma garantia de 7 dias. Ou seja, você pode participar das aulas, acessar todo o material extra e se você decidir que não valeu a pena ou que não era o que você esperava, basta enviar um e-mail para suporte@fritzpaixao.com que você irá receber cada centavo do seu investimento.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Já tentei empreender no mercado de higienização de estofados antes, por que vai dar certo agora?',
      answer: 'Porque agora você vai aprender com a maior referência desse mercado! Eu já faturei mais de 100 milhões . Além disso, foram 7 voltas ao mundo, inaugurando franquias em dezenas de países e treinando milhares de pessoas. Por isso eu posso te assegurar que dessa vez a chave do seu negócio vai virar!',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Tem suporte?',
      answer: 'Sim, eu (Fritz Paixão) junto com a minha equipe vamos te dar todo o suporte necessário dentro da área de membros. Portanto, qualquer dúvida relacionada ao curso você terá total suporte.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Quanto tempo preciso para ter resultado?',
      answer: 'Se você aplicar exatamente o que eu passo nas aulas, ainda essa semana você pode fechar os seus primeiros ou próximos clientes com muito mais facilidade.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
    {
      question: 'Como acessar o Método?',
      answer: 'Assim que finalizar a sua inscrição, você receberá um e-mail da plataforma Hotmart, nesse e-mail você vai receber todos os seus dados para acessar o Método Clientes 5X. Depois de acessar você pode assistir quando e onde quiser.',
      iconSrc: '/image/open.svg',
      expandedIconSrc: '/image/close.svg'
    },
  ];


  return (
    <>
      <Hero
        heroImageSrc="/image/logo-5x.png"
        buttonIconSrc="/image/icons-security.svg"
        videoEmbedCode={videoEmbedCode}
        headline={headlineHTML}
        subheadline={subheadlineHTML}
      />
      <Midia />
      <CtaList items={ctaItems} />
      <Methods items={methodItems} cards={cardItems} cardPriceData={cardPriceData} />
      <Way
        leftItem={{
          imageSrc: '/image/way1.webp',
          title: 'Primeiro Caminho',
          description: 'Ignorar essa oportunidade única com investimento baixo e continuar vivendo a sua vida normalmente. Sem clientes e com escassez.'
        }}
        centerText="OU VOCÊ PODE PEGAR O SEGUNDO CAMINHO QUE É UM ATALHO QUE TE LEVA A TER 5X MAIS CLIENTES NO AUTOMÁTICO…"
        rightItem={{
          imageSrc: '/image/way2.webp',
          title: 'Segundo Caminho',
          description: 'Pegar toda a minha experiência de 9 anos empreendendo no mercado de higienização, e aplicar meu conhecimento para multiplicar seu faturamento.'
        }}
      />
      <Ceo faq={faq} />
    </>
  );
}
