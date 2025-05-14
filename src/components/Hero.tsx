import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart3, Wind, Droplets } from 'lucide-react';
import dashboard from '../assets/images/dashboard.jpeg';
import hero from '../assets/images/hero.jpeg';

const Hero: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;
      
      const { left, top, width, height } = elementRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      elementRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div> */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${dashboard})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/50 to-emerald-950/90"></div>
      
      <Droplets className="absolute top-1/4 left-1/4 text-emerald-300/20 w-16 h-16 animate-pulse" />
      <Wind className="absolute bottom-1/4 right-1/4 text-emerald-300/20 w-16 h-16 animate-pulse" style={{animationDelay: '1.5s'}} />
      <BarChart3 className="absolute top-2/3 left-1/3 text-emerald-300/20 w-16 h-16 animate-pulse" style={{animationDelay: '2.5s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300">
                Measure, Analyze, Reduce
              </span>
              <span className="block text-white mt-2">Your Carbon Footprint</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg md:mx-0 mx-auto">
              Empowering individuals and organizations with AI-driven insights to make sustainable choices and combat climate change.
            </p>
            <p className="text-emerald-400 mb-8 italic">Made with ❤️ by Subhayan</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#calculator" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Calculate Impact
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#how" 
                className="px-8 py-4 bg-transparent border border-emerald-400 text-emerald-300 rounded-lg font-semibold hover:bg-emerald-900/30 transition-all duration-300 flex items-center justify-center"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          <div ref={elementRef} className="transition-all duration-300 ease-out">
            <div className="rounded-2xl overflow-hidden bg-emerald-950/40 backdrop-blur-md p-6 border border-emerald-800/50 shadow-lg hover:shadow-emerald-500/10">
              <div className="aspect-square md:aspect-[4/3] rounded-lg overflow-hidden relative">
                <img 
                  src={hero} 
                  alt="Earth visualization with carbon data" 
                  className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-sm text-emerald-300 mb-1">Global Carbon Emissions</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-amber-500 h-2 rounded-full" style={{width: '76%'}}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-300">
                    <span>1990</span>
                    <span>2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-emerald-900"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-emerald-800"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-emerald-950"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;