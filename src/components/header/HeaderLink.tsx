import React from 'react';
import Link from 'next/link';

interface HeaderLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children, active }) => {
    return (
        <li>
            <Link 
                href={href}
                className={`relative text-[rgba(255,255,255,0.9)] no-underline font-medium text-[1.1rem] py-2 px-3 
                rounded transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 
                after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
                after:ease-in-out after:-translate-x-1/2 hover:text-white hover:bg-white/10 hover:after:w-4/5
                ${active ? "text-white bg-white/20 after:w-4/5 after:bg-[#fdbb2d]" : ""}
                `}
            >
                {children}
            </Link>
        </li>
    );
};

export default HeaderLink;