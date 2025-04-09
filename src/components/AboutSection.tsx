
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const benefitsList = [
    "Atendimento individualizado",
    "Tratamentos especializados",
    "Técnicas avançadas",
    "Acompanhamento completo"
  ];

  return (
    <section id="sobre" className="section bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Sobre a RP Fisioterapia</h2>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in" delay={200}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/5.png"
                alt="Atendimento RP Fisioterapia"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Na RP Fisioterapia oferecemos atendimento individualizado e especializado no tratamento de lesões e dores que limitam suas atividades diárias e esportivas. Nossa abordagem combina técnicas avançadas de fisioterapia ortopédica com um olhar holístico para cada paciente, garantindo resultados efetivos e duradouros para sua recuperação.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Nossos Diferenciais</h3>
                <ul className="space-y-3">
                  {benefitsList.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://wa.me/5511992992999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Conheça Nossos Tratamentos
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
