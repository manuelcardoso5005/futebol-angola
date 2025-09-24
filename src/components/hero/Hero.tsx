import React from 'react';
import '@/styles/hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Descubra os novos talentos de Angola</h1>
                <p>
                    Scouting Angola conecta você aos melhores atletas, notícias e
                    destaques do mundo esportivo angolano.
                </p>
                <a href="atletas.html" className="btn-primary">Explorar Atletas</a>
            </div>
        </section>
    );
};

export default Hero;