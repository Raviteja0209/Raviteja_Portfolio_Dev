import { useState, useEffect } from 'react';
import RTLogo from './Logo';
import {
  User, LineChart, Briefcase, BarChart2, Award, GraduationCap, Mail, FileText
} from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'education', 'resume', 'contact'];

      // Find active section
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
    }
  };

  return (
    <nav
      className="
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
          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'about' ? 'bg-teal-600' : 'bg-teal-600'} flex items-center justify-center mr-3`}>
              <User className="w-4 h-4 text-white" />
            </div>
            <span>About</span>
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'experience' ? 'bg-blue-500' : 'bg-blue-500'} flex items-center justify-center mr-3`}>
              <LineChart className="w-4 h-4 text-white" />
            </div>
            <span>Experience</span>
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'projects' ? 'bg-blue-700' : 'bg-blue-700'} flex items-center justify-center mr-3`}>
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span>Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'skills' ? 'bg-purple-600' : 'bg-purple-600'} flex items-center justify-center mr-3`}>
              <BarChart2 className="w-4 h-4 text-white" />
            </div>
            <span>Skills</span>
          </button>

          <button
            onClick={() => scrollToSection('certifications')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'certifications' ? 'bg-red-500' : 'bg-red-500'} flex items-center justify-center mr-3`}>
              <Award className="w-4 h-4 text-white" />
            </div>
            <span>Awards</span>
          </button>

          <button
            onClick={() => scrollToSection('education')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'education' ? 'bg-amber-500' : 'bg-amber-500'} flex items-center justify-center mr-3`}>
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span>Education</span>
          </button>

          <button
            onClick={() => scrollToSection('resume')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'resume' ? 'bg-gray-700' : 'bg-gray-700'} flex items-center justify-center mr-3`}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span>Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center text-gray-300 hover:text-teal-600 py-2"
          >
            <div className={`w-6 h-6 rounded-full ${activeSection === 'contact' ? 'bg-amber-800' : 'bg-amber-800'} flex items-center justify-center mr-3`}>
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span>Contact</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold text-teal-600">
            Ravi Teja Adari
          </div>
          <button
            className="px-3 py-1 text-sm border rounded-md border-teal-600 text-teal-600"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
          >
            Menu
          </button>
        </div>

        <div id="mobile-menu" className="hidden w-full bg-gray-800 border-t overflow-y-auto max-h-[60vh]">
          {[
            { section: 'about', label: 'About' },
            { section: 'experience', label: 'Experience' },
            { section: 'projects', label: 'Projects' },
            { section: 'skills', label: 'Skills' },
            { section: 'certifications', label: 'Awards' },
            { section: 'education', label: 'Education' },
            { section: 'contact', label: 'Contact' },
            { section: 'resume', label: 'Resume' },
          ].map(({ section, label }) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-300 transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
