
import AnimatedSection from './AnimatedSection';

const CtaSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Pronto para Recuperar sua Qualidade de Vida?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={200}>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Agende uma avaliação e descubra como podemos ajudar
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={400}>
            <a
              href="https://wa.me/5511992992999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Agendar Consulta
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
