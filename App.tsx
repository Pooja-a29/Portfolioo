/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import profileImg from "./profile.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Music, 
  Award, 
  GraduationCap,
  ChevronRight,
  Database,
  Globe,
  Smartphone,
  Terminal,
  Sparkles
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold gradient-text"
        >
          POOJA A
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {["About", "Internships", "Projects", "Skills", "Certifications", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Software Developer", "UI/UX Frontend Developer", "Full Stack Enthusiast", "Problem Solver"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-5xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Available for Collaboration
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white tracking-tight">
            Hi, I'm <span className="gradient-text">POOJA A</span>
          </h1>
          
          <div className="h-12 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl md:text-3xl text-slate-400 font-light flex items-center justify-center gap-3"
              >
                <Terminal className="w-6 h-6 text-primary" />
                {roles[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            Passionate about building scalable web applications and exploring the intersection of AI and software engineering.
          </p>

          {/* Creative Bento Action Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-3xl text-left group relative overflow-hidden border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-16 h-16" />
              </div>
              <div className="flex items-center gap-2 text-primary font-bold mb-2 text-sm uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                01. Portfolio
              </div>
              <div className="text-white text-2xl font-display font-bold mb-2">Explore Projects</div>
              <div className="text-slate-500 text-sm leading-relaxed">Check out my latest technical work and academic projects.</div>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                View Gallery <ChevronRight className="w-4 h-4" />
              </div>
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-3xl text-left group relative overflow-hidden border border-white/5 hover:border-secondary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                <Mail className="w-16 h-16" />
              </div>
              <div className="flex items-center gap-2 text-secondary font-bold mb-2 text-sm uppercase tracking-widest">
                <Mail className="w-4 h-4" />
                02. Connection
              </div>
              <div className="text-white text-2xl font-display font-bold mb-2">Let's Collaborate</div>
              <div className="text-slate-500 text-sm leading-relaxed">I'm always open to discussing new projects and creative ideas.</div>
              <div className="mt-6 flex items-center gap-2 text-secondary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Get in Touch <ChevronRight className="w-4 h-4" />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a dedicated Computer Science Engineering student at <span className="text-white font-medium">Panimalar Engineering College</span>. 
                With a current CGPA of <span className="text-primary font-bold">8.2</span>, I have built a strong foundation in core computer science principles.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to solve real-world problems through code. 
                I specialize in modern web technologies and have a keen interest in how Artificial Intelligence can be integrated into everyday software solutions.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>BE - CSE</span>
                </div>
                <div className="w-1 h-1 bg-slate-700 rounded-full" />
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>CGPA: 8.2</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden glass p-1 relative group">
              <img 
                src={profileImg} 
                alt="POOJA A" 
                className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
                onLoad={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".profile-fallback");
                  if (fallback) fallback.classList.remove("hidden");
                }}
                referrerPolicy="no-referrer"
              />
              {/* Stylized Fallback Avatar */}
              <div className="profile-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4">
                  <span className="text-4xl font-display font-bold text-white">PA</span>
                </div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Pooja A</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl hidden md:block">
              <div className="text-primary font-bold text-2xl">3rd Year</div>
              <div className="text-slate-500 text-sm">Undergraduate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Internships = () => {
  const internships = [
    {
      role: "Web Application Developer",
      company: "Tek Pyramid (Unit of Test Yantra Software Solutions India Pvt. Ltd.)",
      duration: "Feb 2025 - Apr 2025",
      location: "Chennai, Tamil Nadu, India",
      description: [
        "Built responsive web interfaces using HTML, CSS, and JavaScript.",
        "Worked with React.js basics and Firebase for web applications exposure to deployment and real-world development workflows."
      ]
    },
    {
      role: "Full Stack Java",
      company: "Dream Code",
      duration: "Jun 2025 - Jul 2025",
      location: "Chennai, Tamil Nadu, India",
      description: [
        "Developed basic web pages using HTML and CSS.",
        "Practiced responsive layout design and styling techniques. Frontend fundamentals through hands-on tasks."
      ]
    }
  ];

  return (
    <section id="internships" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Internship Experience</h2>
          <p className="text-slate-400">Professional experience gained during my academic journey.</p>
        </div>
        <div className="space-y-8">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border-l-4 border-l-primary"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{intern.role}</h3>
                  <p className="text-primary font-medium">{intern.company}</p>
                  <p className="text-slate-500 text-xs mt-1">{intern.location}</p>
                </div>
                <span className="text-slate-500 text-sm font-medium bg-white/5 px-4 py-1 rounded-full">
                  {intern.duration}
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 leading-relaxed">
                {intern.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, icon: Icon, githubLink }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass rounded-2xl p-6 flex flex-col h-full group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    
    {
      title: "ChefSphere",
      description: "Full-stack Recipe Management Web App built with React and FastAPI. Parses large JSON datasets, stores structured data in a database, provides REST APIs with pagination and search, and features a modern responsive UI with detailed recipe views and nutrition information.",
      tags: ["React", "FastAPI", "Python", "REST API", "Database"],
      icon: Globe,
      githubLink: "#"
    },
     {
      title: "Innovators Music Hub",
      description: "A comprehensive music streaming web application featuring a sleek user interface, playlist management, and real-time synchronization. Built with a focus on performance and user experience.",
      tags: ["React", "Firebase", "Tailwind CSS", "Web Audio API"],
      icon: Music,
      githubLink: "#"
    },
    {
      title: "Rescue Ready",
      description: "An IoT-based emergency alert system designed to provide rapid assistance during critical situations. Integrates GPS tracking and cloud services for real-time location sharing with emergency contacts and authorities.",
      tags: ["IoT", "GPS", "Cloud Services", "Hardware Integration"],
      icon: Cpu,
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-slate-400">A selection of my recent technical work and academic projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Java", icon: Code2 },
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Smartphone },
    { name: "SQL", icon: Database },
    { name: "JavaScript ", icon: Code2 },
    { name: "React ", icon: Code2 },
    { name: "UI/UX", icon: Sparkles }
  ];

  const coreSubjects = ["OOPS", "Data Structures"];
  const softSkills = ["Problem Solving", "Adaptability", "Leadership", "Time Management"];

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-slate-400">A comprehensive look at my technical and professional capabilities.</p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-slate-300 flex items-center gap-3">
            <Code2 className="text-primary w-6 h-6" /> Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center group"
              >
                <skill.icon className="w-8 h-8 text-slate-500 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-slate-300">Core Subjects</h3>
            <div className="flex flex-wrap gap-3">
              {coreSubjects.map((subject, index) => (
                <span key={index} className="px-4 py-2 glass rounded-xl text-slate-300 text-sm border border-white/5">
                  {subject}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold mb-6 text-slate-300">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="px-4 py-2 glass rounded-xl text-slate-300 text-sm border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      date: "2024"
    },
    {
      title: "Cybersecurity Analysis & Design",
      issuer: "FutureSkills Prime by NASSCOM",
      date: "2024"
    },
     {
      title: "AI Prompt Engineering Masterclass",
      issuer: "Microsoft × Reliance Digital — Certified by AI School",
      date: "2024"
    },
    {
      title: "Web Application Developer",
      issuer: "Tek Pyramid (Unit of Test Yantra Software Solutions India Pvt. Ltd.)",
      date: "2025"
    },
    {
      title: "Full Stack Java Intern",
      issuer: "Dream Code",
      date: "2025"
    },
    {
      title: "AI Innovation Day Workshop",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      title: "Prompt Engineering Course",
      issuer: "FutureSkills Prime",
      date: "2024"
    }
   
   
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 text-white text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mt-2">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-display font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-slate-400 mb-12">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <a 
            href="mailto:poojapooja29062006@gmail.com"
            className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
          >
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white">Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/pooja-a-91a6142a1"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
          >
            <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/Pooja-a29"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
          >
            <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="text-xl font-display font-bold gradient-text mb-4">Pooja A</div>
        <p className="text-slate-500 text-sm mb-6">© {new Date().getFullYear()} Pooja A. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-slate-400">
          <a href="https://github.com/Pooja-a29" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/pooja-a-91a6142a1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:poojapooja29062006@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Internships />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
