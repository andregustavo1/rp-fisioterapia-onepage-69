
import { useState } from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      quote: "Após meses de dor lombar intensa, finalmente encontrei alívio com o tratamento da RP Fisioterapia. A abordagem individualizada e técnicas específicas foram fundamentais para minha recuperação.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "Ana Beatriz",
      quote: "Depois de uma lesão no joelho praticando corrida, achei que não voltaria tão cedo. Com o tratamento na RP Fisioterapia, não só voltei às atividades em tempo recorde, como aprendi a prevenir novas lesões.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "Pedro Mendes",
      quote: "O atendimento na RP Fisioterapia é excepcional. Os profissionais são atenciosos e dedicados, sempre explicando cada etapa do tratamento. Minha dor no ombro melhorou significativamente após poucas sessões.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>O Que Dizem Nossos Pacientes</h2>
          </div>
        </AnimatedSection>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute inset-0 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-lg shadow-lg">
                  <div className="mb-6 relative">
                    <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary mx-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <h3 className="text-lg font-bold text-primary">{testimonial.name}</h3>
                </div>
              </div>
            ))}
            
            {/* Current testimonial (for height purposes) */}
            <div className="invisible">
              <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-lg shadow-lg">
                <div className="mb-6 relative">
                  <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary mx-auto">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <h3 className="text-lg font-bold text-primary">{testimonials[currentIndex].name}</h3>
              </div>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver depoimento de ${testimonials[index].name}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
