import React, { useState } from 'react';
import { LineChart, BarChart3, Cloud, Wind, Droplets, Activity, PieChart, Share2 } from 'lucide-react';
import carbon from '../assets/images/carbonanalytics.webp';
import data from '../assets/images/data.jpeg';
import emission from '../assets/images/emmission.webp';
import perosnalized from '../assets/images/personalized carbon.jpeg';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Carbon Analytics",
      description: "Advanced data analytics to track and measure your carbon emissions from multiple sources.",
      icon: <LineChart className="w-6 h-6" />,
      details: [
        "Multi-source emission tracking",
        "Historical trend analysis",
        "Comparative benchmarking",
        "Predictive modeling"
      ],
      color: "emerald"
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and graphs that help you understand your carbon footprint at a glance.",
      icon: <BarChart3 className="w-6 h-6" />,
      details: [
        "Interactive dashboards",
        "Custom report generation",
        "Time-series visualization",
        "Emission source breakdown"
      ],
      color: "teal"
    },
    {
      title: "Emission Forecasting",
      description: "AI-powered predictions to help you understand future trends and plan reduction strategies.",
      icon: <Cloud className="w-6 h-6" />,
      details: [
        "ML prediction models",
        "Scenario planning tools",
        "Reduction target modeling",
        "Climate impact forecasting"
      ],
      color: "sky"
    },
    {
      title: "Personalized Insights",
      description: "Tailored recommendations and insights based on your specific usage patterns and goals.",
      icon: <Activity className="w-6 h-6" />,
      details: [
        "Custom reduction strategies",
        "Personalized eco-tips",
        "Progress tracking",
        "Achievement recognition"
      ],
      color: "amber"
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-gradient-to-b from-emerald-950 via-slate-900 to-emerald-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 transform rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-emerald-900"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-emerald-800"></path>
        </svg>
      </div>

      <Droplets className="absolute top-1/4 right-1/4 text-emerald-500/10 w-24 h-24" />
      <Wind className="absolute bottom-1/4 left-1/4 text-emerald-500/10 w-24 h-24" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Powerful Features
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Our platform combines cutting-edge technology with environmental science to provide comprehensive carbon footprint management tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                activeTab === index 
                  ? `bg-${feature.color}-600/20 border border-${feature.color}-500/50 text-${feature.color}-400` 
                  : 'bg-gray-800/30 hover:bg-gray-800/50 text-gray-300'
              }`}
            >
              {feature.icon}
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/90 to-emerald-900/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-emerald-800/30">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-${features[activeTab].color}-600/20 border border-${features[activeTab].color}-500/50 text-${features[activeTab].color}-400`}>
                {features[activeTab].icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{features[activeTab].title}</h3>
              <p className="text-gray-300 mb-6">{features[activeTab].description}</p>
              <ul className="space-y-3">
                {features[activeTab].details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-${features[activeTab].color}-600/20 border border-${features[activeTab].color}-500/50 text-${features[activeTab].color}-400 flex-shrink-0`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900/60 relative overflow-hidden">
              {activeTab === 0 && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src={carbon} 
                    alt="Carbon Analytics Dashboard" 
                    className="rounded-lg shadow-xl max-w-full max-h-full object-cover"
                  />
                </div>
              )}
              {activeTab === 1 && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src={data}
                    alt="Data Visualization Charts" 
                    className="rounded-lg shadow-xl max-w-full max-h-full object-cover"
                  />
                </div>
              )}
              {activeTab === 2 && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src={emission} 
                    alt="Emission Forecasting Model" 
                    className="rounded-lg shadow-xl max-w-full max-h-full object-cover"
                  />
                </div>
              )}
              {activeTab === 3 && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src={perosnalized} 
                    alt="Personalized Carbon Insights" 
                    className="rounded-lg shadow-xl max-w-full max-h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Share2 className="w-8 h-8 text-teal-400" />,
              title: "Data Integration",
              description: "Connect with your smart devices, utility accounts, and transportation apps for automated data collection."
            },
            {
              icon: <PieChart className="w-8 h-8 text-teal-400" />,
              title: "Comprehensive Analysis",
              description: "From home energy use to travel and diet, get a complete picture of your environmental impact."
            },
            {
              icon: <Activity className="w-8 h-8 text-teal-400" />,
              title: "Performance Tracking",
              description: "Set goals, track progress, and celebrate milestones on your sustainability journey."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900/80 to-emerald-900/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 hover:border-emerald-600/40 shadow-lg hover:shadow-emerald-600/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-block rounded-lg bg-emerald-950 border border-emerald-800/30 p-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-emerald-300">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;