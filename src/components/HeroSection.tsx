
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 bg-gradient-primary text-white"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      
      <div className="container relative mx-auto px-4 md:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <AnimatedSection animation="fade-in">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Tratamento Especializado para sua Recuperação
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Fisioterapia ortopédica personalizada para devolver sua qualidade de vida
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <a
                href="https://wa.me/5511992992999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center"
              >
                Agende sua Avaliação
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in" delay={600} className="hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fisioterapia especializada"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
