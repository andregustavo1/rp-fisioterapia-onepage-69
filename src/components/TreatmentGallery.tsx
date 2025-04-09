
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const TreatmentGallery = () => {
  const treatments = [
    {
      id: 1,
      image: "public/lovable-uploads/6e65e9ed-a485-49f8-a36e-a59ae74b1245.png",
      alt: "Fisioterapeuta examinando o joelho de um paciente"
    },
    {
      id: 2,
      image: "public/lovable-uploads/30df9452-5b2c-4a04-af5f-9b7d23ca386c.png",
      alt: "Paciente com eletrodos de eletroterapia no joelho"
    },
    {
      id: 3,
      image: "public/lovable-uploads/62cf73d9-368d-4d85-9d3c-4c7228303efe.png",
      alt: "Aplicação de gel terapêutico na perna de paciente"
    },
    {
      id: 4,
      image: "public/lovable-uploads/d9dc679b-e803-4d25-8ec4-58b09ddd43dc.png",
      alt: "Ventosaterapia aplicada nas costas de um paciente"
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Nossos Tratamentos</h2>
            <p className="text-lg text-gray-600 mt-4">Conheça algumas das técnicas que utilizamos</p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {treatments.map((treatment, index) => (
            <AnimatedSection 
              key={treatment.id} 
              animation="fade-in-up" 
              delay={200 + (index * 100)}
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
                <img 
                  src={treatment.image} 
                  alt={treatment.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={500}>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/5511992992999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              Agende seu Tratamento
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TreatmentGallery;
