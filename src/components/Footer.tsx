import React from 'react';
import { Leaf, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-emerald-950 to-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 transform rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-emerald-900"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-emerald-800"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <div className="text-2xl font-bold">
                <span className="text-emerald-400">Carbon</span>
                <span className="text-emerald-200">Footprint</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals and organizations with data-driven insights to make sustainable choices and combat climate change.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-emerald-700 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/subhayan-mukherjee-0906b0274/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-emerald-700 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Templar121" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-emerald-700 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Features', href: '#features' },
                { name: 'How It Works', href: '#how' },
                { name: 'Calculate Footprint', href: '#calculator' },
                { name: 'Take Action', href: '#action' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:subhayan.bhattacharya@gmail.com" className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-emerald-500" />
                  <span>subhayanmukherjee78@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-emerald-500" />
                <span className="text-gray-400">
                  Asansol, West Bengal<br />
                  India
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">About the Developer</h3>
            <p className="text-gray-400 mb-4">
              Hi! I'm Subhayan, a passionate developer focused on creating sustainable technology solutions. This project aims to raise awareness about carbon footprints and encourage eco-friendly practices.
            </p>
            <a 
              href="https://github.com/Templar121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View More Projects
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-emerald-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Carbon Footprint Project by Subhayan Mukherjee. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-emerald-300 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-emerald-300 text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;