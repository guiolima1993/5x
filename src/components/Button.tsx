import React from 'react';
import styles from './Button.module.scss'; 

interface ButtonProps {
  text: string;
  imageUrl: string; 
}

const Button: React.FC<ButtonProps> = ({ text, imageUrl }) => {
  const fixedLink = "https://pay.hotmart.com/B94505524F"; 

  return (
    <div className={styles.container}>
      <a href={fixedLink} className={styles.button}>
        {text}
      </a>
      <img src={imageUrl} alt="Botão Imagem" className={styles.image} /> 
    </div>
  );
};

export default Button;
