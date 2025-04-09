
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(11) 99299-2999",
      link: "https://wa.me/5511992992999",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato.rpfisioterapia@gmail.com",
      link: "mailto:contato.rpfisioterapia@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rpfisioterapia",
      link: "https://instagram.com/rpfisioterapia",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "@rpfisio",
      link: "https://facebook.com/rpfisio",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Ministro Ferreira Alves, 97 - Perdizes, SP CEP 05009-060",
      link: "https://maps.google.com/?q=Rua+Ministro+Ferreira+Alves,+97+-+Perdizes,+SP+CEP+05009-060",
    },
  ];

  return (
    <section id="contato" className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="section-title pb-2">
            <h2>Entre em Contato</h2>
            <p className="text-lg text-gray-600 mt-4">Agende sua avaliação e inicie sua recuperação</p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{info.label}</h3>
                    <p className="text-gray-700">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9260321484614!2d-46.67242842562724!3d-23.535261660877984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fa3e7731d3%3A0x1c6a73f6de5a8774!2sRua%20Ministro%20Ferreira%20Alves%2C%2097%20-%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005009-060!5e0!3m2!1spt-BR!2sbr!4v1712697508721!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização RP Fisioterapia"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
