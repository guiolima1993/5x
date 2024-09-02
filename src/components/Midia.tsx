// midia.tsx
import React from 'react';
import './Midia.scss';
import Button from '../components/Button';

const Midia: React.FC = () => {
  return (
    <section className="midia">
      <div className='container'>
        <div className="media-section">
          <h2>Quem disse que você não pode ganhar mais dinheiro neste mercado?</h2>
          <p>Quem disse que ele está saturado? Quem disse que você não pode vender mais caro? Quem disse que não dá pra ficar milionário lavando sofá?</p>
          <div className="media-images">
            <img src="/image/midia-1.webp" alt="Imagem 1" className="media-image" />
            <img src="/image/midia-2.png" alt="Imagem 2" className="media-image" />
          </div>
        </div>
        <div className="flex-section">
          <img src="/image/5x.png" alt="Imagem 3" className="flex-image" />
          <div className="text-content">
            <h2>E COMO VOCÊ VAI CONSEGUIR ISSO?</h2>
            <h3>Através do Método Cliente 5X</h3>
            <p>Já imaginou você ter <span>clientes pingando todo dia</span> no seu celular sem fazer muito esforço?</p>

            <p>E o melhor, tendo acompanhamento com quem mais entende deste mercado?</p>

            <p>Dentro do Método Clientes 5X, você vai aprender todo o <span>passo a passo para atrair os clientes certos</span> para o nicho de Higienização de Estofados através de Mídia Paga…</p>
          </div>
        </div>
      </div>
      <div className="cards-section">
        <div className="cards-section-display">
          <h2>Essas são as 3 etapas que você vai percorrer:</h2>
          <div className='midle'>
              <img className='midle-left' src="/image/arrow.png" alt="icon arrow" />
              <img className='midle-right' src="/image/arrow.png" alt="icon arrow" />
            </div>
          <div className="cards-grid">
            <div className="card">
              <div className='card-display'>
                <i className="card-icon">
                  <img src="/image/icon-card.svg" alt="Icone de card" />
                </i>
                <h3 className="card-title">Etapa 1</h3>
              </div>
              <p className="card-description">Como montar toda a sua estrutura de tráfego pago do ZERO e construir uma estratégia vencedora.</p>
            </div>
            <div className="card">
              <div className='card-display'>
                <i className="card-icon">
                  <img src="/image/icon-card.svg" alt="Icone de card" />
                </i>
                <h3 className="card-title">Etapa 2</h3>
              </div>
              <p className="card-description">Eu vou te mostrar o passo a passo na tela do meu computador de como criar o seu primeiro anúncio, basta você copiar e colar.</p>
            </div>
            <div className="card">
              <div className='card-display'>
                <i className="card-icon">
                  <img src="/image/icon-card.svg" alt="Icone de card" />
                </i>
                <h3 className="card-title">Etapa 3</h3>
              </div>
              <p className="card-description">Vamos preparar seu WhatsApp para receber 5X mais clientes. E pronto! Agora é só começar a vender.</p>
            </div>
          </div>
        </div>
        <Button text="QUERO TER 5x MAIS CLIENTES" imageUrl="/image/icons-security.svg" />
      </div>
    </section>
  );
};

export default Midia;
