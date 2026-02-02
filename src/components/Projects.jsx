import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sajiloAawasImg from '../assets/sajilo_aawas.jpg';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    title: "Document Management System",
    description: "A web application to manage documents securely.",
    technologies: ["React", "Node.js", "SQL", "Express", "Tailwind"],
    github: "",
    live: "https://demo.paperbank.com.np/about#/admin/login",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500"
  },
  {
    title: "Saral Khata",
    description: "Accounting software for small businesses.",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
    github: "",
    live: "https://play.google.com/store/apps/details?id=com.app.saral.khata&hl=en&pli=1",
    image: "https://play-lh.googleusercontent.com/vUvsH4oTxHtMDWGLngrtkkEx6Chij0yzTAcrq70qi5W-guDMCxA31lLwP1bqGMqXE10=w480-h960-rw"
  }
];

const personal_projects = [
  {
    title: "Sajilo Aawas",
    description: "A rental rooms listing platform for easy property search.",
    technologies: ["React", "Node.js", "Express", "SQL", "Tailwind"],
    github: "https://github.com/thapasujan/sajilo_aawas.git",
    live: "",
    image: sajiloAawasImg
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/thapasujan/Personal_Portfolio.git",
    live: "https://personal-portfolio-eta-dun-46.vercel.app/",
    image: portfolio
  },
  {
    title: "Fashion Products Recommender System",
    description: "A machine learning-based system to recommend fashion products.",
    technologies: ["Python", "Django", "ResNet50", "KNN Algorithm"],
    github: "https://github.com/thapasujan/Fashion-products-recommender-System.git",
    live: "",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
  },
  {
    title: "Smart Car",
    description: "An IoT-based smart car to avoid obstacles.",
    technologies: ["Arduino", "C++", "Ultrasonic Sensor", "Motor Driver"],
    github: "https://github.com/thapasujan/Smart_car.git",
    live: "",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const renderProjectCard = (project, index) => (
    <div 
      key={index} 
      className="bg-dark/50 rounded-xl overflow-hidden border border-light/10 hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-light/60 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github}
              className="flex items-center space-x-2 text-light hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a 
              href={project.live}
              className="flex items-center space-x-2 text-light hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-dark p-1">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'professional'
                  ? 'bg-primary text-white'
                  : 'text-light/60 hover:text-white'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'personal'
                  ? 'bg-primary text-white'
                  : 'text-light/60 hover:text-white'
              }`}
            >
              Personal
            </button>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeTab === 'professional'
            ? projects.map((project, index) => renderProjectCard(project, index))
            : personal_projects.map((project, index) => renderProjectCard(project, index))
          }
        </div>
      </div>
    </section>
  );
};


export default Projects;