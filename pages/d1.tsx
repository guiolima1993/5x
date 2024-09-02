'use client';
import React, { useEffect, useState } from 'react';
import "../src/app/globals.css";

const Upsell = () => {
  const vturbVideoHtml = `
  <script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="66d460a5a94a3b000bf744c2"></script> <div id="ifr_66d460a5a94a3b000bf744c2_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_66d460a5a94a3b000bf744c2_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/73877598-724a-4c8a-b6e9-e85c5bc73e91/players/66d460a5a94a3b000bf744c2/embed.html" id="ifr_66d460a5a94a3b000bf744c2" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div> <style> .elementor-element:has(#ifr_66d460a5a94a3b000bf744c2_wrapper) { width: 100%; } </style>
  `;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 55 ) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 1;
      });
    }, 60);
  }, []);

  const handleAccept = () => {
    window.location.href = 'https://pay.hotmart.com/X95085703Y?off=rnvj9gfl'; 
  };

  const handleDecline = () => {
    window.location.href = '/d2n'; 
  };

  return (
    <section className="upsell-section">
      <div className="content-container">
        <div className="progress-bar-background">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <h1 className="upsell-headline">Tenho algo importante pra falar pra você, não feche</h1>

        <p className='upsell-subheadline'>Com esta oferta você vai vender muito e ganhar mais!</p>
        
        <div className="upsell-video" dangerouslySetInnerHTML={{ __html: vturbVideoHtml }} />
        
        <div className="upsell-buttons">
        <button
            className="upsell-accept-button"
            onClick={handleAccept}
          >
            ADICIONAR AO PACOTE
          </button>
          <button
            className="upsell-decline-button"
            onClick={handleDecline}
          >
            NÃO DESEJO ESSA OFERTA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Upsell;
