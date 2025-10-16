import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      content: "Swag Design Hub transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. Our new website has increased our conversion rates by 40%.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content: "Working with Swag was a game-changer for our startup. They understood our vision perfectly and delivered a stunning website that perfectly represents our innovative approach.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, StyleHub",
      content: "The team at Swag Design Hub is incredibly professional and talented. They delivered our e-commerce platform on time and within budget. Our customers love the new user experience!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Custom bold heading for "Testimonials" */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            TESTIMONIALS
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            What Our Clients Say
          </p>
          <p className="text-lg text-silver-400 mt-4 max-w-3xl mx-auto font-sans">
            Discover why leading brands trust Swag Design Hub to transform their digital presence
          </p>
        </div>
        
        <div
          className="max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            className="py-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="glass-effect rounded-2xl p-8 md:p-12 text-center border border-gold-400/20">
                  <div className="text-5xl text-gold-400 mb-6 font-serif animate-pulse">"</div>
                  <p className="text-xl text-silver-300 mb-8 italic">
                    {testimonial.content}
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full border-2 border-gold-400 animate-scale-in"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-ivory">{testimonial.name}</h4>
                    <p className="text-silver-400">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(253, 253, 253, 0.5);
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #ffd724;
          transform: scale(1.2);
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;