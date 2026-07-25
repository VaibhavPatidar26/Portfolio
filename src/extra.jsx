import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Phone,
  Server,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Vaibhav Patidar',
  role: 'MERN Stack Developer',
  email: 'vaibhavpatidar22012005@gmail.com',
  phone: '+91 7974357592',
  location: 'India',
  github: 'https://github.com/VaibhavPatidar26',
  linkedin: 'https://linkedin.com/in/vaibhav-patidar-227338297',
  intro:
    'Computer Science student focused on full-stack products, real-time systems, AI-enabled experiences, and clean interfaces built with the MERN ecosystem.',
  highlights: ['MERN Stack', 'AI Integrations', 'Real-Time Apps', 'Cloud Deployment'],
};

const navItems = ['Work', 'Skills', 'Education', 'Contact'];

const projects = [
  {
    name: 'Imagify',
    type: 'AI Image Platform',
    summary:
      'A full-scale MERN platform with OpenAI-powered image generation, background removal, enhancement, high-resolution upscaling, Cloudinary asset management, Razorpay payments, secure auth, and a credit-based usage model.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI APIs', 'Cloudinary', 'Razorpay', 'Tailwind CSS', 'Framer Motion'],
    linkLabel: 'Demo',
    href: 'https://imagify-five-bice.vercel.app/',
  },
  {
    name: 'WeChat',
    type: 'Real-Time Communication',
    summary:
      'A scalable MERN chat application with one-to-one and group messaging, WebSocket-powered low-latency updates, WebRTC voice/video calling, Redis-backed caching, and session management.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'WebRTC', 'Redis'],
    linkLabel: 'Repository',
    href: 'https://github.com/VaibhavPatidar26/ChatApp',
  },
];

const skills = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frameworks',
    icon: Server,
    items: ['Node.js', 'React.js', 'Express.js', 'Next.js'],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['MongoDB', 'SQL', 'Redis'],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    items: ['Google Cloud', 'AWS', 'Render', 'Git', 'GitHub'],
  },
];

const coursework = [
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Artificial Intelligence',
];

const techNodes = ['React', 'Node', 'MongoDB', 'AI', 'Redis', 'Cloud'];

const processNotes = [
  'Clean interfaces',
  'Scalable APIs',
  'Realtime flows',
  'Production mindset',
];

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

function App() {
  const [theme, setTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(useTransform(pointerX, (value) => value - 170), {
    stiffness: 110,
    damping: 26,
  });
  const glowY = useSpring(useTransform(pointerY, (value) => value - 170), {
    stiffness: 110,
    damping: 26,
  });

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [pointerX, pointerY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <motion.div className="cursor-glow" style={{ x: glowX, y: glowY }} aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span>VP</span>
          <strong>Vaibhav</strong>
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </nav>

        <div className="top-actions">
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">
              <Sparkles size={16} />
              Available for full-stack internships and projects
            </p>
            <h1>
              <span>{profile.name.split(' ')[0]}</span>
              <span>{profile.name.split(' ')[1]}</span>
            </h1>
            <p className="lead">
              {profile.role} building refined MERN products with AI features, real-time communication, and scalable cloud-ready architecture.
            </p>
            <div className="hero-badges" aria-label="Core strengths">
              {profile.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollTo('work')}>
                View Work
                <ArrowUpRight size={18} />
              </button>
              <a className="secondary-action" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            aria-label="Profile summary"
          >
            <div className="scanner-line" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            {techNodes.map((node, index) => (
              <span className={`tech-node node-${index + 1}`} key={node}>
                {node}
              </span>
            ))}
            <div className="orbital-card main-card">
              <span className="status-dot" />
              <p>Current Focus</p>
              <strong>React systems, APIs, AI workflows</strong>
            </div>
            <img className="initial-mark" src="/vaibhav-mark.png" alt="Vaibhav Patidar monogram" />
            <div className="metric-card top">
              <strong>2</strong>
              <span>Featured Projects</span>
            </div>
            <div className="metric-card bottom">
              <strong>7.3</strong>
              <span>Current CGPA</span>
            </div>
          </motion.aside>
        </section>

        <section className="summary-strip" aria-label="Profile highlights">
          {processNotes.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              {item}
            </motion.span>
          ))}
        </section>

        <Section id="work" label="Selected Work" title="Projects with product thinking and engineering depth">
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -8 }}
              >
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Capabilities" title="A MERN-first toolkit with cloud and data fluency">
          <div className="skill-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <motion.article
                className="skill-card"
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45 }}
              >
                <div className="skill-heading">
                  <Icon size={20} />
                  <h3>{title}</h3>
                </div>
                <div className="pill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <section id="education" className="split-section">
          <div>
            <p className="section-label">Education</p>
            <h2>Computer Science foundation with applied project work</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <span>2023 - 2027</span>
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p>University Institute of Technology, RGPV</p>
                <strong>CGPA: 7.3</strong>
              </div>
            </article>
            <article>
              <div className="timeline-icon">
                <BookOpen size={20} />
              </div>
              <div>
                <span>Coursework</span>
                <h3>Core CS subjects</h3>
                <div className="course-list">
                  {coursework.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="focus-band">
          <Brain size={22} />
          <p>
            I like turning practical ideas into usable products: clear frontend flows, stable APIs,
            fast real-time interactions, and deployment paths that can grow beyond a demo.
          </p>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let's build something useful and sharp.</h2>
            <p>{profile.intro}</p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              <Phone size={18} />
              {profile.phone}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Copyright {year} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="content-section">
      <div className="section-heading">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
