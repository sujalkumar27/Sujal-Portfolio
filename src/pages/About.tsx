import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Send, Mail, MapPin, Linkedin, Github, ChevronDown, Download, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Replace this with your Formspree endpoint (https://formspree.io — free tier).
// Until you set one, the form falls back to opening the user's email client.
const FORMSPREE_ENDPOINT = '';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const About = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const inquiryType = String(data.get('inquiryType') ?? '');
    const message = String(data.get('message') ?? '');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormState('error');
      setErrorMsg('Please fill name, email, and message.');
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      const body = encodeURIComponent(
        `Name: ${name}\nInquiry: ${inquiryType}\n\n${message}`
      );
      const subject = encodeURIComponent(`[Portfolio] ${inquiryType} — ${name}`);
      window.location.href = `mailto:sujal31122005@gmail.com?subject=${subject}&body=${body}`;
      setSuccessMsg('Your email app should have opened with a draft — just hit send there.');
      setFormState('success');
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, inquiryType, message })
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSuccessMsg("Message sent. I'll reply within 24 hours.");
      setFormState('success');
      form.reset();
    } catch (err) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Try again or email me directly.');
    }
  };

  // Real brand logos via devicon CDN (https://devicon.dev) — no install, no bundle cost.
  const tools = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Hibernate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
  ];

  return (
    <div className="pt-32 px-6">
      <Helmet>
        <title>About Me | Sujal Kumar</title>
        <meta name="description" content="Learn more about Sujal Kumar, a Software Developer specializing in Core Java and Spring Boot." />
        <meta property="og:title" content="About Me | Sujal Kumar" />
        <meta property="og:description" content="Learn more about Sujal Kumar, a Software Developer." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl mb-8">The <span className="text-gradient">Engineer</span> Behind the Code</h1>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                I'm a Software Engineer with deep expertise in <strong className="text-slate-100">Core Java (8+)</strong> — OOP, collections, multithreading, exception handling, and SQL — and an <strong className="text-slate-100">Oracle Certified Foundations Associate</strong> in Java. My day job is backend logic, workflow automation, and API integrations that reduce manual work and keep systems honest.
              </p>
              <p>
                On the side, I've been shipping <strong className="text-slate-100">Generative AI</strong> applications: a production-style RAG pipeline (BFSI Copilot) built on FastAPI, LangChain, ChromaDB, and Llama 3 via Groq. I care about systems that are <em>reliable first, clever second</em> — grounded LLM responses, parameterized queries, transactional service boundaries.
              </p>
              <p>
                <strong className="text-slate-100">300+ DSA problems</strong> solved on LeetCode &amp; GeeksforGeeks. Currently building automation at SIFTAI used across <strong className="text-primary">500+ customer accounts</strong>.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <span>Greater Noida, India</span>
                </div>
                <a href="mailto:sujal31122005@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Mail size={18} className="text-secondary" />
                  <span>sujal31122005@gmail.com</span>
                </a>
                <a href="tel:+919625066840" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  <span>+91 96250 66840</span>
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1, rotateZ: 5 }}
                  href="https://linkedin.com/in/sujal-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary transition-colors"
                  aria-label="Sujal Kumar on LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1, rotateZ: -5 }}
                  href="https://github.com/sujalkumar27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary transition-colors"
                  aria-label="Sujal Kumar on GitHub"
                  title="GitHub"
                >
                  <Github size={18} aria-hidden="true" />
                </motion.a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-xs flex items-center gap-2"
                >
                  Download CV <Download size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[3/4] max-w-sm mx-auto group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow halo (secondary-leaning to differentiate from Home) */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 bg-linear-to-br from-secondary/30 via-primary/20 to-secondary/30 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Photo frame */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-white/5 via-transparent to-white/[0.02] backdrop-blur-sm shadow-2xl shadow-secondary/20">
                <img
                  src="/sujal-kumar.jpg"
                  alt="Sujal Kumar — Software Engineer"
                  className="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  style={{ filter: 'drop-shadow(0 30px 40px rgba(208, 188, 255, 0.3))' }}
                />

                {/* Bottom fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"
                />
                {/* Top fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/6 bg-linear-to-b from-[#050505]/50 to-transparent pointer-events-none"
                />

                {/* Side accent bars (vertical "scan rails") */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-linear-to-b from-transparent via-primary to-transparent opacity-60"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-linear-to-b from-transparent via-secondary to-transparent opacity-60"
                />

                {/* Animated scan line */}
                <motion.div
                  aria-hidden="true"
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                />
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block z-20"
            >
              <div className="text-xs text-slate-400 mb-1">Current Focus</div>
              <div className="font-display font-bold text-primary">Backend & Automation</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience & Education Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 className="text-4xl mb-8">Experience</h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-primary">SIFTAI TECHNOLOGIES LLP</h3>
                    <p className="text-slate-400">Software Developer</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Aug 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm" style={{ transform: 'translateZ(10px)' }}>
                  <li>Automated business workflows and customized Zoho CRM</li>
                  <li>Integrated Zoho apps with Google Sheets for real-time data synchronization</li>
                  <li>Designed workflow automation systems used across 500+ customer accounts</li>
                  <li>Reduced manual follow-ups by 85% through automation logic</li>
                </ul>
              </motion.div>
            </div>

            <h2 className="text-4xl mt-12 mb-8">Achievements</h2>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 rounded-2xl border-l-4 border-primary shadow-lg shadow-primary/5"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <p className="text-slate-300 font-bold" style={{ transform: 'translateZ(10px)' }}>CodeTantra Coding Competition</p>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(5px)' }}>Achieved Top 20 rank among 300+ participants and won prize money.</p>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 rounded-2xl border-l-4 border-secondary shadow-lg shadow-secondary/5"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <p className="text-slate-300 font-bold" style={{ transform: 'translateZ(10px)' }}>Oracle Certified Foundations Associate</p>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(5px)' }}>Demonstrated proficiency in core Java, OOP, and data structures by scoring 90 percentile.</p>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl mb-8">Education & Certs</h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Noida Institute of Engineering and Technology</h3>
                    <p className="text-slate-400">B.Tech in Computer Science and Engineering</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">2021 - 2025</span>
                </div>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(10px)' }}>CGPA: 8.2/10</p>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Oracle Certified Foundations Associate</h3>
                    <p className="text-slate-400">Java Certification</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">2022</span>
                </div>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(10px)' }}>Scored 90 percentile in core Java, OOP, and data structures.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal (Bento Grid) */}
        <section className="mb-32">
          <h2 className="text-4xl mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4" style={{ perspective: 1000 }}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  rotateX: 12,
                  rotateY: -12,
                  scale: 1.1,
                  boxShadow: '0 25px 50px rgba(0, 219, 233, 0.25)'
                }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 22 }}
                viewport={{ once: true }}
                className="glass p-5 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors group cursor-default aspect-square"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,219,233,0.2)]"
                  style={{ transform: 'translateZ(20px)' }}
                />
                <span
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Let's build something impossible</h2>
            <p className="text-slate-400">Have a vision that needs a dimension? Let's talk.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4 block">Name</label>
                <input id="contact-name" name="name" type="text" required autoComplete="name" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4 block">Email</label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="contact-inquiry" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4 block">Inquiry Type</label>
              <div className="relative">
                <select id="contact-inquiry" name="inquiryType" defaultValue="Backend Development" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-slate-900 cursor-pointer">
                  <option className="bg-slate-900 text-white">Backend Development</option>
                  <option className="bg-slate-900 text-white">Generative AI / RAG</option>
                  <option className="bg-slate-900 text-white">Workflow Automation</option>
                  <option className="bg-slate-900 text-white">Full-time Opportunity</option>
                  <option className="bg-slate-900 text-white">Mentorship Request</option>
                  <option className="bg-slate-900 text-white">Other</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4 block">Message</label>
              <textarea id="contact-message" name="message" required rows={5} className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Tell me about the role or the project..."></textarea>
            </div>

            {formState === 'success' && (
              <div role="status" className="glass rounded-2xl p-4 flex items-center gap-3 border border-green-400/30 text-green-300">
                <CheckCircle2 size={20} /> {successMsg}
              </div>
            )}
            {formState === 'error' && (
              <div role="alert" className="glass rounded-2xl p-4 flex items-center gap-3 border border-red-400/30 text-red-300">
                <AlertCircle size={20} /> {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full btn-primary flex items-center justify-center gap-2 py-5 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? (
                <>Sending<Loader2 size={20} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
