import React from 'react';
import { Car, Home, Utensils, ShoppingBag, Leaf, Battery, Wind, Recycle } from 'lucide-react';
import actionBg from '../assets/images/action-bg.jpeg';
import savings from '../assets/images/savings.webp';


const ActionSteps: React.FC = () => {
  const categories = [
    {
      title: "Transportation",
      icon: <Car className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
      actions: [
        "Opt for public transportation when possible",
        "Consider carpooling or ride-sharing services",
        "Transition to an electric or hybrid vehicle",
        "Walk or bike for short-distance trips",
        "Reduce air travel or offset flight emissions"
      ]
    },
    {
      title: "Home Energy",
      icon: <Home className="w-6 h-6" />,
      color: "from-amber-500 to-amber-700",
      actions: [
        "Switch to energy-efficient LED lighting",
        "Upgrade to ENERGY STAR appliances",
        "Improve home insulation to reduce heating/cooling needs",
        "Install a programmable thermostat",
        "Consider solar panels or renewable energy options"
      ]
    },
    {
      title: "Food Choices",
      icon: <Utensils className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-700",
      actions: [
        "Reduce meat consumption, especially beef",
        "Choose locally grown and seasonal produce",
        "Minimize food waste through planning and composting",
        "Grow your own herbs or vegetables if possible",
        "Support sustainable and organic farming practices"
      ]
    },
    {
      title: "Consumption",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "from-purple-500 to-purple-700",
      actions: [
        "Embrace the 'reduce, reuse, recycle' hierarchy",
        "Choose products with minimal packaging",
        "Invest in durable, high-quality items over disposables",
        "Consider second-hand or refurbished options",
        "Support companies with sustainable practices"
      ]
    }
  ];

  const highlightedActions = [
    {
      icon: <Leaf className="w-10 h-10 text-white" />,
      title: "Plant Trees",
      description: "Support reforestation efforts that sequester carbon and restore ecosystems",
      color: "from-emerald-600 to-green-700"
    },
    {
      icon: <Battery className="w-10 h-10 text-white" />,
      title: "Green Energy",
      description: "Switch to renewable energy providers for your home electricity needs",
      color: "from-amber-600 to-yellow-700"
    },
    {
      icon: <Wind className="w-10 h-10 text-white" />,
      title: "Offset Carbon",
      description: "Invest in verified carbon offset projects to neutralize emissions",
      color: "from-blue-600 to-cyan-700"
    },
    {
      icon: <Recycle className="w-10 h-10 text-white" />,
      title: "Zero Waste",
      description: "Adopt practices that minimize waste sent to landfills",
      color: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <section id="action" className="py-24 relative bg-gradient-to-b from-emerald-950 via-emerald-950 to-slate-900">
      <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: `url(${actionBg})` }}
    />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Take Action Today
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Small changes in daily habits can lead to significant reductions in your carbon footprint. 
            Start with these practical steps to make a positive impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {highlightedActions.map((action, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-900/70 to-emerald-900/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 hover:border-emerald-600/40 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${action.color}`}>
                {action.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{action.title}</h3>
              <p className="text-gray-300">{action.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-900/90 to-emerald-900/20 backdrop-blur-sm p-8 rounded-xl border border-emerald-800/30 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title} Actions</h3>
              </div>
              
              <ul className="space-y-4">
                {category.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs">
                      {actionIndex + 1}
                    </span>
                    <span className="text-gray-300">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 backdrop-blur-sm rounded-xl border border-emerald-800/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-emerald-300">Track Your Progress</h3>
              <p className="text-gray-300 mb-6">
                Making sustainable changes is a journey. Our platform helps you track your progress over time, 
                celebrate milestones, and quantify your positive impact on the environment.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Create Your Action Plan
              </button>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src={savings} 
                alt="Person planting a tree" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSteps;