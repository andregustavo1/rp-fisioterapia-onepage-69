
import { ClipboardCheck, Users, Award, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Avaliação Completa",
      description: "Diagnóstico preciso e plano de tratamento personalizado",
      icon: ClipboardCheck,
    },
    {
      title: "Tratamento Individualizado",
      description: "Atenção exclusiva durante toda a sessão",
      icon: Users,
    },
    {
      title: "Profissionais Especializados",
      description: "Equipe com formação avançada em fisioterapia ortopédica",
      icon: Award,
    },
    {
      title: "Técnicas Modernas",
      description: "Uso de métodos e equipamentos de última geração",
      icon: Sparkles,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Por Que Nos Escolher?</h2>
            <p className="text-lg text-gray-600 mt-4">Excelência em fisioterapia ortopédica</p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in-up" 
              delay={200 + (index * 100)}
            >
              <div className="glass-card hover:shadow-lg transform hover:-translate-y-1 h-full px-8 py-10">
                <div className="icon-container mx-auto">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
