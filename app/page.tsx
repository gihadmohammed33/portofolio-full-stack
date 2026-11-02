"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, Cpu, Rocket, Zap, ShieldCheck, Database, Server, 
  Globe, Mail, ExternalLink, Download, Layers, 
  CheckCircle2, ArrowRight, Sun, Moon, Menu, X, ChevronRight, Activity, 
  Award, GraduationCap, Clock, Sparkles, Sliders, Play, Check, Copy, ArrowUpRight, Video, CpuIcon
} from 'lucide-react';

// Custom Brand Icons to avoid lucide version mismatches
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projects = [
    {
      id: 'reeka-ai',
      name: 'Reeka AI — Enterprise AI Workspace Platform',
      tagline: 'Live private multi-model AI workspace with smart routing, deep research, and token cost analytics.',
      description: 'Architected and deployed Eureka Digital’s live internal enterprise AI workspace (https://reeka.eureka.digital). Combines multi-LLM streaming chat (GPT-4o, Claude 3, Gemini, DeepSeek, Qwen, Mistral), step-by-step deep research workflows, side-by-side model comparison, and secure document parsing.',
      problemSolved: 'Replaced unmonitored external AI tool usage with a secure, private enterprise workspace enforcing server-side API key isolation, domain-restricted authentication (@eureka-digital.co.uk), passkeys, and real-time usage budgets.',
      tech: ['Next.js 16', 'React 18', 'TypeScript', 'Tailwind CSS', 'OpenRouter API', 'Supabase (PostgreSQL)', 'Phusion Passenger', 'WebSockets'],
      achievement: 'Engineered an intelligent auto-routing engine evaluating latency, token consumption, and per-request cost optimization, providing live visibility into team token analytics and usage savings.',
      github: '#',
      demo: 'https://reeka.eureka.digital',
      caseStudy: 'Deployed live on cPanel/Phusion Passenger with Supabase PostgreSQL. Features passwordless magic links & WebAuthn Passkeys, multi-tiered role-based access control (Admin, Manager, Member), server-side document handling, and complete audit logging.'
    },
    {
      id: 'eureka-meet',
      name: 'Eureka Meet — Enterprise Real-Time Video Platform',
      tagline: 'Live private video conferencing platform replacing corporate Zoom usage with zero-trust governance.',
      description: 'Architected and deployed Eureka Digital’s private WebRTC meeting platform (https://meet.eureka-cdn.com). Enables instant and scheduled video meetings, high-definition screen sharing, WebAuthn passkey auth, and server-enforced duration & participant caps.',
      problemSolved: 'Replaced expensive third-party Zoom subscriptions with an in-house secure WebRTC infrastructure enforcing custom workspace policies, automated cost metering (~$0.002/participant-min), and strict server-side rate limiting.',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers (vinext)', 'Cloudflare RealtimeKit', 'PostgreSQL', 'Drizzle ORM', 'Better Auth'],
      achievement: 'Engineered edge serverless video orchestration on Cloudflare Workers, processing real-time WebRTC media streams and Webhook telemetry for precision usage auditing and zero-latency session initialization.',
      github: '#',
      demo: 'https://meet.eureka-cdn.com',
      caseStudy: 'Built using Next.js 16, React 19, and Drizzle ORM running serverless on Cloudflare Workers. Features passwordless magic links and WebAuthn passkey authentication via Better Auth, workspace-isolated PostgreSQL schemas, RealtimeKit Webhook event metering, and continuous deployment via GitHub Actions.'
    },
    {
      id: 'prime-health',
      name: 'Prime Health UAE — Healthcare & Insurance Portal',
      tagline: 'High-availability medical services and healthcare management platform in the UAE.',
      description: 'Engineered and optimized core backend services and interactive frontend interfaces for Prime Health UAE (https://www.primehealth.ae/). Implemented seamless appointment scheduling, medical network directories, and secure patient inquiry portals.',
      problemSolved: 'Reduced database query load across heavy traffic periods and secured sensitive medical workflows under strict regional data protection guidelines.',
      tech: ['Laravel', 'React.js', 'PostgreSQL', 'RESTful APIs', 'Redis', 'AWS S3/RDS'],
      achievement: 'Cut database query volume by 60% and optimized API response times by 40% through intelligent query indexing, eager loading, and Redis caching layers.',
      github: '#',
      demo: 'https://www.primehealth.ae/',
      caseStudy: 'Designed with clean service-layer architecture and modular component separation to maintain high availability for UAE healthcare services.'
    },
    {
      id: 'novo-nordisk',
      name: 'Novo Nordisk Global — Enterprise Healthcare Ecosystem',
      tagline: 'Global pharmaceutical web ecosystem and multi-region product information portals.',
      description: 'Contributed to high-performance client portal initiatives and enterprise web platforms for Novo Nordisk (https://www.novonordisk.com/). Developed SEO-optimized, highly accessible SSR web interfaces with international multi-language routing.',
      problemSolved: 'Addressed asset loading bottlenecks and complex content delivery across regional markets while adhering to strict pharmaceutical web compliance standards.',
      tech: ['Next.js (SSR/SSG)', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS CloudFront'],
      achievement: 'Elevated mobile and desktop Lighthouse performance scores from ~50 to 90+, ensuring sub-second page loads and zero critical security vulnerabilities.',
      github: '#',
      demo: 'https://www.novonordisk.com/',
      caseStudy: 'Utilized Server-Side Rendering (SSR) and automated CI/CD pipelines to deliver ultra-fast, accessible, and compliant healthcare information portals across global audiences.'
    }
  ];

  const techStack = {
    languages: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'Dart', 'C/C++'],
    backend: ['Laravel', 'Node.js', 'NestJS', 'Express.js', 'REST APIs', 'WebSockets', 'JWT', 'OAuth 2.0', 'RBAC'],
    frontend: ['React.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    cloudDevOps: ['AWS (EC2, S3, RDS, CloudFront)', 'GCP (Cloud Run, Cloud SQL, Cloud Storage)', 'Cloudflare', 'Docker', 'GitHub Actions', 'CI/CD'],
    engineering: ['Clean Architecture', 'Design Patterns', 'Database Optimization', 'Automated Testing (80%+ Coverage)', 'Code Reviews']
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('gihadmohammed2024@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased relative overflow-x-hidden">
      
      {/* Background Ambience Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              GM
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block group-hover:text-cyan-400 transition-colors">Gihad Mohammed</span>
              <span className="text-xs text-slate-400 font-mono tracking-wide block">Full Stack Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Awards</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/Gihad Mohammed AI Full Stack CV.pdf" 
              download="Gihad_Mohammed_Full_Stack_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0b0f17] border-b border-slate-800 p-6 flex flex-col gap-4 backdrop-blur-2xl shadow-2xl">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Projects</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Skills</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Education & Awards</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 font-medium">Contact</a>
            <a 
              href="/Gihad Mohammed AI Full Stack CV.pdf" 
              download="Gihad_Mohammed_Full_Stack_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for Software Engineering Roles (Remote & On-site)
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Full Stack <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Software Engineer
                </span> <br />
                & Backend Architect
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
                Full Stack Software Engineer with 3+ years of experience building high-availability production web applications for clients across the Middle East and Europe. 3x ICPC qualifier and top-10 CS graduate (GPA 3.93/4.0).
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a 
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-2 transition-all shadow-xl shadow-cyan-500/20"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
                 <a 
              href="/Gihad Mohammed AI Full Stack CV.pdf" 
              download="Gihad_Mohammed_Full_Stack_CV.pdf"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
              </div>

              <div className="flex items-center gap-6 text-slate-400 pt-6 border-t border-slate-800/60">
                <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
                <a href="https://github.com/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-sm">
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a href="https://linkedin.com/in/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-sm">
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a href="mailto:gihadmohammed2024@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-sm">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>

            {/* Interactive Terminal Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0b0f17] border border-slate-800 shadow-2xl overflow-hidden shadow-cyan-500/5">
                <div className="bg-[#0f1523] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">gihad@production-env:~</div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                
                <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-4">
                  <div className="text-cyan-400 font-semibold">$ npx engineer --profile gihad-mohammed</div>
                  <div className="text-slate-400 pl-2 border-l-2 border-cyan-500/30 space-y-1">
                    <div><span className="text-slate-500">&gt;</span> Role: Full Stack Software Engineer</div>
                    <div><span className="text-slate-500">&gt;</span> Core Stack: Laravel, Node.js, Next.js, Angular</div>
                    <div><span className="text-slate-500">&gt;</span> Cloud/DevOps: AWS, GCP, Docker, GitHub Actions</div>
                    <div><span className="text-slate-500">&gt;</span> Honors: 3x ICPC Qualifier, Top 10 CS (3.93 GPA)</div>
                  </div>
                  <div className="pt-2 text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Status: Ready for high-impact production roles
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-12 bg-[#090d14] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/80 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">3+ Years</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Experience</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/80 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">4+ Live</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Enterprise Apps</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/80 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">200+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Active Fleet Units</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/80 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">80%+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Test Coverage</div>
            </div>
            <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-[#0b0f17] border border-slate-800/80 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">3× ICPC</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Qualifier</div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Portfolio Showcase</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Selected Production Projects</h3>
          <p className="text-slate-400 mt-4">Real-world enterprise systems engineered with robust backend architectures, clean code patterns, and measurable performance results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="rounded-2xl bg-[#0b0f17] border border-slate-800/80 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Live Enterprise System
                  </span>
                  <div className="flex items-center gap-3">
                    {proj.github !== '#' && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{proj.name}</h4>
                <p className="text-sm font-medium text-cyan-200/80 mb-4">{proj.tagline}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{proj.description}</p>
                
                <div className="p-4 rounded-xl bg-[#07090e] border border-slate-800/60 mb-6">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-1">Key Engineering Achievement:</div>
                  <p className="text-sm text-slate-300">{proj.achievement}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Direct Live Website Button */}
                {proj.demo && proj.demo !== '#' ? (
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono font-medium transition-all"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    Live Website
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span>[Enterprise Private App]</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-[#090d14]/50 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Career History</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Professional Experience</h3>
            <p className="text-slate-400 mt-4">Proven track record of building production systems and collaborating across international teams.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Eureka Digital */}
            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                  <div className="text-cyan-400 font-medium">Eureka Digital</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                  Cairo, Egypt | Jan 2023 – Present
                </span>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
                <li>Cut API response times by 40% and database query volume by 60% through query tuning, eager loading, Redis caching, and indexing.</li>
                <li>Built React interfaces from Figma designs; raised Lighthouse scores from ~50 to 85+ and reduced page load time by 25%.</li>
                <li>Deployed and maintained production services on AWS (EC2, S3, RDS, CloudFront) and GCP (Cloud Run, Cloud SQL, Cloud Storage).</li>
                <li>Introduced code review standards and AI-assisted development tools, contributing to a 20% increase in team delivery throughput.</li>
                <li>Wrote reusable, testable Laravel backend components using clean architecture and service-layer separation.</li>
              </ul>
            </div>

            {/* Xtreme Digital */}
            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Contract Software Engineer</h4>
                  <div className="text-cyan-400 font-medium">Xtreme Digital</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                  Cairo, Egypt | Jan 2025 – Present
                </span>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
                <li>Delivered 4 client projects on schedule with Laravel APIs and Next.js (SSR/SSG): Lighthouse scores above 90 and zero critical production incidents.</li>
                <li>Structured backends with repository pattern and service-layer separation for long-term maintainability.</li>
                <li>Worked directly with clients on requirements and scope, shipping iterative releases across several projects in parallel.</li>
              </ul>
            </div>

            {/* FleeTour GmbH */}
            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Remote Software Engineer</h4>
                  <div className="text-cyan-400 font-medium">FleeTour GmbH</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                  Berlin, Germany | Jun 2024 – Dec 2024
                </span>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
                <li>Built a real-time fleet tracking platform for 200+ vehicles with Angular, NestJS, PostgreSQL, WebSockets, JWT, and role-based access control.</li>
                <li>Improved backend throughput by 35% via PostgreSQL query tuning, connection pooling, and infrastructure right-sizing.</li>
                <li>Rebuilt CI/CD with GitHub Actions, cutting deployment time from 45 minutes to under 5.</li>
                <li>Established automated testing with 80%+ coverage, reducing production incidents by 40%; worked asynchronously with a remote German team.</li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Freelance Software Engineer</h4>
                  <div className="text-cyan-400 font-medium">Self-Employed</div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 w-fit">
                  Remote (Middle East & Europe) | 2022 – Present
                </span>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
                <li>Delivered 5+ client applications in e-commerce and analytics, owning the full lifecycle: requirements, architecture, development, testing, deployment, and ongoing support.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Technical Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Core Skills & Stack</h3>
          <p className="text-slate-400 mt-4">Production-grade technologies and software engineering paradigms I use daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-400" /> Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.languages.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" /> Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" /> Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" /> Databases
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.databases.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyan-400" /> Cloud & DevOps
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.cloudDevOps.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" /> Engineering
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.engineering.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION & ACHIEVEMENTS */}
      <section id="education" className="py-24 bg-[#090d14]/50 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Academic & Honors</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Education & Achievements</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Helwan University</h4>
                    <p className="text-sm text-cyan-400">B.Sc. Computer Science & Artificial Intelligence</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-800/80 mb-6">
                  <div>
                    <div className="text-2xl font-extrabold text-white">3.93 / 4.00</div>
                    <div className="text-xs text-slate-400 font-medium">Cumulative GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-cyan-400">Top 10</div>
                    <div className="text-xs text-slate-400 font-medium">Class Rank</div>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white block mb-1">Relevant Coursework:</strong>
                  Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Artificial Intelligence.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                Cairo, Egypt | Graduated June 2023
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0b0f17] border border-slate-800/80 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" /> Competitive Programming & Achievements
                </h4>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <strong className="text-cyan-300 block mb-1">ICPC Egypt Qualification Round</strong>
                    <p className="text-xs text-slate-400">3x consecutive qualifier (2021-2023). Competed across national collegiate programming rounds.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <strong className="text-cyan-300 block mb-1">ACPC Girls (Arab Collegiate Contest)</strong>
                    <p className="text-xs text-slate-400">Selected participant representing Helwan University (2021 & 2022).</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <strong className="text-cyan-300 block mb-1">ACM Technical Instructor</strong>
                    <p className="text-xs text-slate-400">Taught problem solving and algorithms in C++ to junior CS students (complexity analysis, data structures, debugging).</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(6,182,212,0.08),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Get In Touch</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Let's Build Something Great
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            Open to Full Stack Software Engineering opportunities, backend architecture roles, and technical collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:gihadmohammed2024@gmail.com"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-2 transition-all shadow-xl shadow-cyan-500/20 text-base"
            >
              <Mail className="w-5 h-5" /> Email Me Directly
            </a>
            <button 
              onClick={copyEmailToClipboard}
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium flex items-center gap-2 transition-all text-base"
            >
              {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              {copiedEmail ? 'Email Copied!' : 'Copy Email'}
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-400">
            <a href="https://github.com/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <GithubIcon className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
              <LinkedinIcon className="w-5 h-5" /> LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#05070b] border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Gihad Mohammed. All rights reserved.</div>
          <div>Full Stack Software Engineer | Cairo, Egypt</div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-[#0b0f17] border border-slate-800 rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
              Project Case Study
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.name}</h3>
            <p className="text-cyan-300 text-sm font-medium mb-6">{selectedProject.tagline}</p>

            <div className="space-y-4 mb-6 text-sm text-slate-300">
              <div>
                <span className="font-semibold text-white block mb-1">Overview:</span>
                <p className="text-slate-400">{selectedProject.description}</p>
              </div>
              <div>
                <span className="font-semibold text-white block mb-1">Problem Solved:</span>
                <p className="text-slate-400">{selectedProject.problemSolved}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#07090e] border border-slate-800">
                <span className="font-semibold text-cyan-400 block mb-1">Key Engineering Achievement:</span>
                <p className="text-slate-300">{selectedProject.achievement}</p>
              </div>
              <div>
                <span className="font-semibold text-white block mb-1">Architecture & Case Study Note:</span>
                <p className="text-slate-400">{selectedProject.caseStudy}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t: string, idx: number) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {selectedProject.demo && selectedProject.demo !== '#' ? (
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Globe className="w-4 h-4" />
                  Visit Live Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div></div>
              )}

              <button 
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}