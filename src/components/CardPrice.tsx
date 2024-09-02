import React from 'react';
import styles from './CardPrice.module.scss';
import Button from '../components/Button';

interface CardPriceProps {
  logoSrc: string;
  productImageSrc: string;
  title: string;
  items: { description: string; price: string }[];
  oldPrice: string;
  finalPrice: string;
  cashPrice: string;
}

const CardPrice: React.FC<CardPriceProps> = ({
  logoSrc,
  productImageSrc,
  title,
  items,
  oldPrice,
  finalPrice,
  cashPrice
}) => {
  return (
    <div className={styles.cardPriceWrapper}>
      <img src={logoSrc} alt="Logo" className={styles.logo} />
      <div className={styles.cardPriceContent}>
        <img src={productImageSrc} alt={title} className={styles.productImage} />
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.itemList}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.icon}>
                <img src="/image/check.png" alt="" />
              </div>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>{item.price}</p>
            </li>
          ))}
        </ul>
        <div className={styles.dashedBorder}></div>
        <p className={styles.oldPrice}>DE: {oldPrice}</p>
        <p className={styles.priceText}>Por apenas:</p>
        <p className={styles.finalPrice}>{finalPrice}</p>
        <p className={styles.cashPrice}>{cashPrice}</p>
      </div>
      <img src="/image/cypherright.png" alt="Corner Image" className={styles.topRightImage} />
      <img src="/image/cypherleft.png" alt="Corner Image" className={styles.bottomLeftImage} />
      <Button text="QUERO ME INSCREVER COM DESCONTO" imageUrl="/image/icons-security.svg" /> 
    </div>
    
  );
};

export default CardPrice;
