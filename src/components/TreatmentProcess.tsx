
import { FileText, FileCheck, Activity, LineChart, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TreatmentProcess = () => {
  const steps = [
    {
      title: "Avaliação Inicial",
      description: "Diagnóstico detalhado e identificação das causas",
      icon: FileText,
    },
    {
      title: "Plano de Tratamento",
      description: "Estratégia personalizada para sua recuperação",
      icon: FileCheck,
    },
    {
      title: "Sessões de Fisioterapia",
      description: "Atendimento individualizado e técnicas específicas",
      icon: Activity,
    },
    {
      title: "Acompanhamento",
      description: "Monitoramento contínuo da evolução",
      icon: LineChart,
    },
    {
      title: "Recuperação",
      description: "Retorno às atividades com qualidade de vida",
      icon: Award,
    },
  ];

  return (
    <section className="section bg-gradient-primary text-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <div className="h-1 w-24 bg-white/50 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2 z-0 rounded-full"></div>
          
          {/* Timeline steps */}
          <div className="space-y-16 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-in-up" 
                delay={index * 150}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-lg`}>
                      <div className="mb-4">
                        <step.icon className="h-8 w-8 text-white/90 mx-auto md:mx-0 md:ml-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute hidden md:flex left-1/2 top-6 -translate-x-1/2 h-8 w-8 bg-white rounded-full items-center justify-center border-4 border-primary">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
