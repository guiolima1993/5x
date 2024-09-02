import React from 'react';
import Image from 'next/image';
import './Hero.scss';
import Button from '../components/Button';

interface HeroProps {
  heroImageSrc: string;
  buttonIconSrc: string;
  videoEmbedCode: string;
  headline: string;
  subheadline: string;
}

const Hero: React.FC<HeroProps> = ({
  heroImageSrc,
  videoEmbedCode,
  headline,
  subheadline,
}) => {
  return (
    <section className="hero-section">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <Image src={heroImageSrc} alt="Hero Image" className="hero-image" width={200} height={100} layout="responsive" />
        <h1 dangerouslySetInnerHTML={{ __html: headline }} className='hero-section-title' />
        <p className='hero-section-subtitle'>{subheadline}</p>
        <div className="video-wrapper">
          <div dangerouslySetInnerHTML={{ __html: videoEmbedCode }} />
        </div>
        <br />
        <br />
        <Button text="Sim, quero ter 5x mais clientes!" imageUrl="/image/icons-security.svg" /> 
      </div>
    </section>
  );
};

export default Hero;
