import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image: string;
  organization: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "This platform has transformed how our company approaches sustainability. We've reduced our carbon footprint by 30% in just one year by implementing the targeted recommendations.",
      author: "Lorem Ipsum",
      title: "Sustainability Director",
      organization: "Test Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "The insights provided by the carbon calculator helped us identify unexpected sources of emissions in our supply chain. The data visualization makes complex information accessible to everyone on our team.",
      author: "Dolor Sit",
      title: "Operations Manager",
      organization: "TestLogistics",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "As a small business owner, I was concerned about the cost of going green. This platform showed me how sustainability initiatives could actually save money while reducing our environmental impact.",
      author: "Lorem Ipsum",
      title: "CEO",
      organization: "Test",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "The personalized action plan made it simple for our family to reduce our footprint. My children are now enthusiastic about tracking our progress and suggesting new ways to live more sustainably.",
      author: "Dolor Sit",
      title: "Parent & Educator",
      organization: "Test Initiative",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 relative bg-gradient-to-b from-slate-900 to-emerald-950">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900/70 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Success Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Hear from organizations and individuals who have transformed their approach to sustainability 
            using our carbon footprint platform.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/90 to-emerald-900/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-emerald-800/30">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative overflow-hidden">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald-950"></div>
              </div>
              
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center relative">
                <Quote className="absolute top-8 left-8 text-emerald-600/20 w-16 h-16" />
                
                <blockquote className="mb-8 relative z-10">
                  <p className="text-xl text-gray-200 italic leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </p>
                </blockquote>
                
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonials[activeIndex].author}</h3>
                    <p className="text-emerald-400">{testimonials[activeIndex].title}</p>
                    <p className="text-gray-400">{testimonials[activeIndex].organization}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-emerald-500 w-6' : 'bg-emerald-900'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-white hover:bg-emerald-800 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-white hover:bg-emerald-800 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              stat: "85%",
              desc: "of users report taking concrete action to reduce emissions",
              color: "emerald"
            },
            {
              stat: "15.2M",
              desc: "tonnes of CO₂ avoided through platform recommendations",
              color: "teal"
            },
            {
              stat: "10,000+",
              desc: "organizations and individuals using our platform globally",
              color: "cyan"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-slate-900/80 to-emerald-900/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 shadow-lg text-center"
            >
              <div className={`text-4xl font-bold mb-2 text-${item.color}-400`}>{item.stat}</div>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;