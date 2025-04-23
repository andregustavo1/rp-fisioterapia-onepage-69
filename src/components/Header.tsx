
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
        scrolled ? 'bg-white header-shadow py-3' : 'bg-white',
        'text-primary'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="text-primary">
          <img src="/lovable-uploads/logo.png" className="w-60" alt="" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Serviços
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('especialidades')}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Especialidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Contato
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/5511992992999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm text-white"
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
            className="btn btn-primary text-sm py-2 px-4 text-white"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
