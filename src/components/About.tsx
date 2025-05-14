import React, { useEffect, useRef } from 'react';
import { Leaf, BarChart3, Target, CloudSnow } from 'lucide-react';
import galaxy from '../assets/images/galaxy.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              About Carbon Footprint Project
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-12">
            Our mission is to provide accurate, data-driven insights that empower individuals and organizations to 
            understand their environmental impact and take meaningful action to reduce carbon emissions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-emerald-400" />,
              title: "Environmental Impact",
              description: "Understand how your daily choices affect carbon emissions and climate change",
              delay: 0
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
              title: "Data Analytics",
              description: "Leverage machine learning to analyze patterns and identify reduction opportunities",
              delay: 0.2
            },
            {
              icon: <Target className="w-8 h-8 text-emerald-400" />,
              title: "Actionable Insights",
              description: "Receive personalized recommendations to effectively lower your carbon footprint",
              delay: 0.4
            },
            {
              icon: <CloudSnow className="w-8 h-8 text-emerald-400" />,
              title: "Climate Solutions",
              description: "Join a global community working towards a sustainable, low-carbon future",
              delay: 0.6
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 transition-all duration-1000 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 hover:border-emerald-600/40 shadow-lg hover:shadow-emerald-600/10 transform hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${item.delay}s` }}
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-emerald-950 border border-emerald-800/30">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-300">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 animate-on-scroll opacity-0 transition-opacity duration-1000 bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-emerald-300">Why Monitor Carbon Emissions?</h3>
              <ul className="space-y-4">
                {[
                  "Climate change mitigation requires accurate data and targeted action",
                  "Regulatory compliance and environmental reporting are becoming mandatory",
                  "Consumers increasingly prefer eco-friendly products and services",
                  "Cost savings through improved energy efficiency and reduced waste"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={galaxy} 
                  alt="Earth from space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-sm text-emerald-300 font-semibold">GLOBAL CO2 EMISSIONS</p>
                <p className="text-3xl font-bold text-white">36.8 GT</p>
                <p className="text-xs text-gray-300">Annual carbon dioxide emissions worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;