import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  ChevronRight,
  MessageSquare,
  Video,
  Layers
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Custom Cursor */}
      <motion.div 
        className="cursor"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />

      {/* Background Decor */}
      <div className="bg-decor-1"></div>
      <div className="bg-decor-2"></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">SM<span>.</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="badge"
            >
              Available for Internships
            </motion.span>
            <h1 className="gradient-text">Shivam Mishra</h1>
            <p className="hero-subtitle">
              Computer Science (AI/ML) Student & Full-stack Developer.
              Crafting premium digital experiences with modern technologies.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View My Work <ChevronRight size={18} /></a>
              <div className="social-links">
                <a href="https://github.com/Shivam-BugHunter" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                <a href="#"><Linkedin size={24} /></a>
                <a href="mailto:shivamishra2005@gmail.com"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.h2 {...fadeIn} className="section-title">Technical Arsenal</motion.h2>
          <div className="skills-grid">
            <SkillCard 
              icon={<Code2 className="accent" />}
              title="Languages"
              skills={['Python', 'JavaScript (ES6+)', 'SQL', 'HTML/CSS']}
              delay={0.1}
            />
            <SkillCard 
              icon={<Layers className="accent" />}
              title="Frameworks"
              skills={['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Mediasoup']}
              delay={0.2}
            />
            <SkillCard 
              icon={<Cpu className="accent" />}
              title="AI & Data"
              skills={['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn']}
              delay={0.3}
            />
            <SkillCard 
              icon={<Database className="accent" />}
              title="Backend"
              skills={['MongoDB', 'MySQL', 'JWT Auth', 'REST APIs', 'WebSockets']}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2 {...fadeIn} className="section-title">Selected Projects</motion.h2>
          <div className="projects-list">
            <ProjectCard 
              title="Verve"
              description="A high-performance video conferencing application using SFU architecture for scalable real-time communication."
              tags={['React', 'Node.js', 'Mediasoup', 'Socket.io']}
              icon={<Video className="p-icon" />}
              link="https://github.com/SakshamSinghal20/Verve"
            />
            <ProjectCard 
              title="GlowChat"
              description="Premium real-time messaging app featuring dark glassmorphism UI, smooth animations, and instant delivery."
              tags={['Socket.io', 'Express', 'Glassmorphism']}
              icon={<MessageSquare className="p-icon" />}
              link="https://github.com/Shivam-BugHunter/chat-app"
            />
            <ProjectCard 
              title="DPV (Dependency Visualizer)"
              description="Interactive full-stack tool to visualize Python dependency graphs, detecting circular imports and dead modules."
              tags={['Python', 'AST', 'Vis-network', 'Graphviz']}
              icon={<Terminal className="p-icon" />}
              link="https://github.com/Shivam-BugHunter/python_dependency_visualizer"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="education">
        <div className="container">
          <motion.div {...fadeIn} className="glass-card edu-content">
            <h3>Education</h3>
            <div className="edu-item">
              <h4>Bachelor of Technology – CSE (AI/ML)</h4>
              <p className="school">Polaris School of Technology, Bangalore</p>
              <div className="edu-meta">
                <span>Sept 2025 – Present</span>
                <span className="cgpa">CGPA: 7.9</span>
              </div>
            </div>
            <div className="summary-text">
              <p>Passionate about building scalable systems and solving complex problems through code. Actively exploring the intersection of Web Technologies and Artificial Intelligence.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <h2>Let's build something <span className="gradient-text">extraordinary</span>.</h2>
            <p>I'm always open to new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href="mailto:shivamishra2005@gmail.com" className="btn-primary"><Mail size={20} /> Email Me</a>
              <a href="https://github.com/Shivam-BugHunter" target="_blank" rel="noopener noreferrer" className="btn-secondary"><Github size={20} /> GitHub</a>
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} Shivam Mishra. Built with React & Passion.
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .portfolio-wrapper {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          cursor: none;
        }

        .cursor {
          position: fixed;
          top: -10px;
          left: -10px;
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          box-shadow: 0 0 20px var(--accent-glow);
        }

        @media (max-width: 768px) {
          .cursor { display: none; }
          .portfolio-wrapper { cursor: auto; }
        }

        .bg-decor-1 {
          position: fixed;
          top: -10%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          z-index: -1;
          filter: blur(100px);
        }

        .bg-decor-2 {
          position: fixed;
          bottom: -10%;
          left: -10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          z-index: -1;
          filter: blur(100px);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }

        .logo span {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
        }

        .hero-content {
          max-width: 800px;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--accent-color);
        }

        .hero h1 {
          font-size: clamp(3.5rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent-color);
          transform: translateY(-3px);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-10px);
        }

        .skill-card h3 {
          margin: 1rem 0;
          font-size: 1.25rem;
        }

        .skill-card ul {
          list-style: none;
          color: var(--text-secondary);
        }

        .skill-card li {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .accent {
          color: var(--accent-color);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .project-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          padding: 3rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 1.5rem;
          }
          .hero h1 { font-size: 3rem; }
          .nav-links { display: none; }
        }

        .p-icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--accent-glow);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .project-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .project-info p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .tag {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .edu-content {
          padding: 3rem;
        }

        .edu-item {
          margin: 2rem 0;
        }

        .edu-meta {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        .cgpa {
          color: var(--accent-color);
          font-weight: 700;
        }

        .summary-text {
          border-top: 1px solid var(--glass-border);
          padding-top: 2rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .footer {
          text-align: center;
          padding: 10rem 0 5rem;
        }

        .footer-content h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
        }

        .footer-content p {
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: var(--glass-bg);
          border-color: var(--text-secondary);
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

const SkillCard = ({ icon, title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card skill-card"
  >
    <div className="icon-box">{icon}</div>
    <h3>{title}</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, icon, link }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass-card project-card"
  >
    <div className="p-icon-wrapper floating">
      {icon}
    </div>
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        View Project <ExternalLink size={16} />
      </a>
    </div>
  </motion.div>
);

export default App;
