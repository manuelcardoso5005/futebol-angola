import React from 'react';
import HeaderLink from './HeaderLink';

const Header: React.FC = () => {
    return (
        <header className='leading-[1.6] bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2d2d2d] px-8 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)] sticky top-0 z-[1000]'>
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
                <div  className="text-white text-[1.8rem] font-bold tracking-[1px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out hover:scale-105">
                    Scouting Angola
                </div>
                <ul className="flex list-none gap-[1.8rem]">
                    <HeaderLink href="/index" active>Home</HeaderLink>
                    <HeaderLink href="/athletes">Atletas</HeaderLink>
                    <HeaderLink href="/news">Notícias</HeaderLink>
                    <HeaderLink href="/highlights">Destaques</HeaderLink>
                    <HeaderLink href="/awards">Prêmios</HeaderLink>
                    <HeaderLink href="/contact">Contato</HeaderLink>
                    </ul>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="px-5 py-[0.7rem] w-[220px] text-white text-base rounded-[30px] border-0 
                        bg-white/15 placeholder:text-white/70 backdrop-blur-sm outline-none transition-all duration-300 ease-in-out
                        focus:bg-white/25 focus:w-[260px] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.3)]"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;