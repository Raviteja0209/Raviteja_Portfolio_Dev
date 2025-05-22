import { useState, useEffect } from 'react';
import RTLogo from './Logo';
import {
  User, LineChart, Briefcase, BarChart2, Award,
  GraduationCap, Mail, FileText
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about', 'experience', 'projects', 'skills',
        'certifications', 'education', 'resume', 'contact'
      ];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.add('hidden');
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User, color: 'bg-teal-600' },
    { id: 'experience', label: 'Experience', icon: LineChart, color: 'bg-blue-500' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: 'bg-blue-700' },
    { id: 'skills', label: 'Skills', icon: BarChart2, color: 'bg-purple-600' },
    { id: 'certifications', label: 'Awards', icon: Award, color: 'bg-red-500' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'bg-amber-500' },
    { id: 'resume', label: 'Resume', icon: FileText, color: 'bg-gray-700' },
    { id: 'contact', label: 'Contact', icon: Mail, color: 'bg-amber-800' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className="
          hidden md:block
          fixed top-0 left-0 w-64
          bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
          py-6 px-4 shadow-lg z-50 h-full
          overflow-y-auto
          scrollbar-hide
          hover:overflow-y-auto
        "
      >
        <div className="flex flex-col h-full">
          <div className="mb-12">
            <RTLogo />
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            {navItems.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center text-gray-300 hover:text-teal-600 py-2"
              >
                <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center mr-3`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold text-teal-600">
            Ravi Teja Adari
          </div>
          <button
            className="px-3 py-1 text-sm border rounded-md border-teal-600 text-teal-600"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) menu.classList.toggle('hidden');
            }}
          >
            Menu
          </button>
        </div>

        <div id="mobile-menu" className="hidden w-full bg-gray-800 border-t overflow-y-auto max-h-[60vh]">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-300 transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
