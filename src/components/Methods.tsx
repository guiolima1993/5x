import React from 'react';
import styles from './Methods.module.scss';
import CardPrice from './CardPrice'; 
import Button from '../components/Button';

interface MethodItem {
  iconSrc: string;
  text: string;
}

interface CardItem {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

interface MethodsProps {
  items: MethodItem[];
  cards: CardItem[];
  cardPriceData: {
    logoSrc: string;
    productImageSrc: string;
    title: string;
    items: { description: string; price: string }[];
    oldPrice: string;
    finalPrice: string;
    cashPrice: string;
  };
}

const Methods: React.FC<MethodsProps> = ({ items, cards, cardPriceData }) => {
  return (
    <div className={styles.methodsSection}>
      <div className={styles.methodList}>
        <ul className={styles.list}>
          <h2 className={styles.title}>O Método Clientes 5X é para você…</h2>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <img src={item.iconSrc} alt="" className={styles.icon} />
              <p className={styles.description}>{item.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.imageWrapper}>
          <img src="/image/cypher.png" alt="Methods" />
        </div>
      </div>

      <p className={styles.sectionDescription}>
        Além do Método Clientes 5X você vai receber mais 2 presentes sem pagar nada a mais por isso, para te ajudar a ganhar ainda mais dinheiro:
      </p>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={`${styles.card} ${index === 1 ? styles.cardMiddle : ''}`}>
            <div className={styles.cardFill}>
              <img src={card.imageSrc} alt={card.title} />
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.bgPrice}>
                  <p className={styles.price}>{card.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h6 className={styles.call}>Bônus Especial - Apenas para os 100 primeiros</h6>
      <div className={styles.bookDisplay}>
        <div className={styles.bookText}>
          <h6>Meu livro físico, "Nunca mais seja pobre"</h6>
          <p>Que ainda não foi lançado… e você poderá ser uma das primeiras pessoas a receber em sua casa autografado e totalmente gratuito.</p>
          <p> Lá, vou revelar alguns segredos da minha história… e os atalhos que segui para ter minha independência financeira.</p>
          <p className={styles.price}>R$127</p>
        </div>
        <div className={styles.bookImg}>
          <img src="/image/last-book.webp" alt="Livro Nunca mais seja pobre" />
        </div>
      </div>

      {/* Adicionando o CardPrice aqui */}
      <CardPrice
        logoSrc={cardPriceData.logoSrc}
        productImageSrc={cardPriceData.productImageSrc}
        title={cardPriceData.title}
        items={cardPriceData.items}
        oldPrice={cardPriceData.oldPrice}
        finalPrice={cardPriceData.finalPrice}
        cashPrice={cardPriceData.cashPrice}
      />
      <div className={styles.bookDisplay}>
        <div className={styles.bookText}>
          <h6 className={styles.lastTitle}>Acesse todo o conteúdo por 7 dias, se você não gostar não precisa pagar!</h6>
          <p>Para que você tenha 100% de segurança e tranquilidade de saber que está fazendo um bom investimento, eu vou te dar um período de experiência. Durante 7 dias você pode estudar todo o conteúdo e decidir se deseja continuar ou não.</p>

          <p>Funciona assim: Você compra o Método Clientes 5X e começa aplicar normalmente. Nos primeiros 7 dias após a compra, se você não tiver resultados, a qualquer momento você pode solicitar o reembolso do seu investimento e receber cada centavo de volta.</p>

          <p>Dessa forma você não tem nenhum risco. Ou você entra e começa a faturar 5x mais com higienização, ou você cancela dentro desses 7 dias e não perde nem um centavo.</p>

          <p className={styles.mb}>Não há motivos para ficar em dúvida, é só entrar e participar com a gente durante este período! Eu fico muito confiante em te dar essa garantia, porque tenho certeza de que você vai aplicar e ter os resultados que deseja!</p>
          <Button text="QUERO ME INSCREVER COM DESCONTO" imageUrl="/image/icons-security.svg" /> 
        </div>
        <div className={styles.bookImg}>
          <img className={styles.lastImg} src="/image/security-img.webp" alt="Icone de compra segura" />
        </div>
      </div>
    </div>
  );
};

export default Methods;
