
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled
          ? 'glassmorphism header-shadow py-3'
          : 'bg-transparent text-white'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className={cn(scrolled ? "text-primary" : "text-white")}>
          <h1 className="text-xl md:text-2xl font-extrabold">RP Fisioterapia</h1>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className={cn(
                  "font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                )}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={cn(
                  "font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                )}
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('servicos')}
                className={cn(
                  "font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                )}
              >
                Serviços
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('especialidades')}
                className={cn(
                  "font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                )}
              >
                Especialidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className={cn(
                  "font-medium transition-colors",
                  scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
                )}
              >
                Contato
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/5511992992999"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn text-sm",
                  scrolled ? "btn-primary" : "bg-white text-primary hover:bg-gray-100"
                )}
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </nav>

        <div className="block md:hidden">
          <a
            href="https://wa.me/5511992992999"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "btn text-sm py-2 px-4",
              scrolled ? "btn-primary" : "bg-white text-primary hover:bg-gray-100"
            )}
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
