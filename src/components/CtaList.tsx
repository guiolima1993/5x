import React from 'react';
import styles from './CtaList.module.scss';

interface CtaItem {
  iconSrc: string;  
  text: string;
}

interface CtaListProps {
  items: CtaItem[];
}

const CtaList: React.FC<CtaListProps> = ({ items }) => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.title}>Com o Método<br></br> Clientes 5X, você vai…</h2>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <img src={item.iconSrc} alt={`Icone ${index + 1}`} className={styles.icon} />
              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CtaList;
