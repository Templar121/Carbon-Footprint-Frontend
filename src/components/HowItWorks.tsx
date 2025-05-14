import React, { useEffect, useRef } from 'react';
import { Activity, BarChart, FileText, Award } from 'lucide-react';
import humanai from '../assets/images/humanai.webp';

const HowItWorks: React.FC = () => {
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

  const steps = [
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Data Collection",
      description: "Gather comprehensive data on your energy consumption, transportation, diet, and other activities that contribute to your carbon footprint.",
      delay: 0,
      bg: "from-emerald-700 to-emerald-900"
    },
    {
      icon: <BarChart className="w-8 h-8 text-white" />,
      title: "Analysis & Modeling",
      description: "Our advanced algorithms process your data to calculate emissions and identify patterns and trends over time.",
      delay: 0.2,
      bg: "from-teal-700 to-teal-900"
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Visualization & Insights",
      description: "View detailed reports and interactive visualizations that help you understand your impact and identify reduction opportunities.",
      delay: 0.4,
      bg: "from-cyan-700 to-cyan-900"
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Action & Improvement",
      description: "Receive personalized recommendations and track your progress as you implement changes to reduce your carbon footprint.",
      delay: 0.6,
      bg: "from-emerald-700 to-emerald-900"
    }
  ];

  return (
    <section id="how" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-emerald-800/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 rounded-full bg-emerald-800/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              How It Works
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Our platform uses advanced technology to help you understand, track, and reduce your carbon footprint through a simple four-step process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 transition-all duration-1000 relative"
              style={{ transitionDelay: `${step.delay}s` }}
            >
              <div className="bg-gradient-to-br from-slate-900/80 to-emerald-900/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 h-full hover:shadow-emerald-600/10 transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${step.bg} shadow-lg border border-emerald-600/30`}>
                    {step.icon}
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-3 text-center text-emerald-300">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-emerald-500 font-bold text-lg">
                  {index < steps.length - 1 && (
                    <div className="w-8 h-8 flex items-center justify-center">↓</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/30 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:mr-8">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-300">The Technology Behind Our Platform</h3>
                <p className="text-gray-300 mb-4">
                  Our carbon footprint calculation system leverages machine learning models trained on extensive environmental data to provide accurate assessments and predictions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced algorithms for precise emission calculation",
                    "Real-time data processing and analysis",
                    "Continuous learning from global climate research",
                    "Secure and private handling of your personal data"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={humanai} 
                    alt="Data visualization dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-emerald-300 font-semibold">ACCURACY RATING</p>
                      <p className="text-2xl font-bold text-white">80 %</p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300 font-semibold">DATA SOURCES</p>
                      <p className="text-2xl font-bold text-white">Trusted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;