
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Dor na Coluna",
      description: "Tratamento para dores lombares, cervicais e dorsais com técnicas específicas para cada região.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      indications: ["Hérnias de disco", "Escoliose", "Espondilolistese", "Dor ciática"]
    },
    {
      title: "Lesões Esportivas",
      description: "Reabilitação completa para atletas amadores e profissionais com foco no retorno seguro à atividade.",
      image: "https://images.unsplash.com/photo-1602536674834-ac9c16c793d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      indications: ["Entorses", "Lesões musculares", "Tendinites", "Reabilitação pós-cirúrgica"]
    },
    {
      title: "Problemas Articulares",
      description: "Tratamento especializado para disfunções nas articulações do joelho, ombro, quadril e tornozelo.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      indications: ["Artrose", "Artrite", "Bursites", "Lesões de menisco"]
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specialties.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + specialties.length) % specialties.length);
  };

  return (
    <section id="especialidades" className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Especialidades</h2>
          </div>
        </AnimatedSection>
        
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {specialties.map((specialty, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={specialty.image}
                        alt={specialty.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-primary">{specialty.title}</h3>
                      <p className="text-gray-700">{specialty.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-bold mb-3">Principais indicações:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {specialty.indications.map((indication, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                              <span className="text-gray-700">{indication}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-2 md:left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 z-10"
            aria-label="Especialidade anterior"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-2 md:right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 z-10"
            aria-label="Próxima especialidade"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {specialties.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para especialidade ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511992992999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Saiba Mais Sobre Nossos Tratamentos
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
