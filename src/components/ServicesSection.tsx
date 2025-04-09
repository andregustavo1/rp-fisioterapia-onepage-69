
import { HeartPulse, Dumbbell, Activity, Bandage, Hand, Gauge } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      title: "Fisioterapia Ortopédica",
      description: "Tratamento específico para lesões musculoesqueléticas e articulares",
      icon: Bandage,
    },
    {
      title: "Reabilitação Esportiva",
      description: "Recuperação de lesões relacionadas à prática esportiva",
      icon: Dumbbell,
    },
    {
      title: "Tratamento de Dores Crônicas",
      description: "Abordagem multifatorial para alívio duradouro",
      icon: Activity,
    },
    {
      title: "Fisioterapia Pós-cirúrgica",
      description: "Recuperação otimizada após procedimentos ortopédicos",
      icon: HeartPulse,
    },
    {
      title: "Terapia Manual",
      description: "Técnicas manuais avançadas para mobilização e alívio da dor",
      icon: Hand,
    },
    {
      title: "Pilates Terapêutico",
      description: "Exercícios adaptados para reabilitação e fortalecimento",
      icon: Gauge,
    },
  ];

  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Serviços Especializados</h2>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-in-up" 
              delay={200 + (index * 100)}
            >
              <div className="card hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                <div className="flex flex-col items-center">
                  <div className="mb-4 bg-primary/10 p-4 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="fade-in" delay={800}>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511992992999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Agendar uma Consulta
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
