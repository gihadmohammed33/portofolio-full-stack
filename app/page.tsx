import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, Cpu, Rocket, Zap, ShieldCheck, Database, Server, 
  Globe, Github, Linkedin, Mail, ExternalLink, Download, Layers, 
  CheckCircle2, ArrowRight, Sun, Moon, Menu, X, ChevronRight, Activity, 
  Award, GraduationCap, Clock, Sparkles, Sliders, Play, Check, Copy, ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [terminalTab, setTerminalTab] = useState('ai-workflow');

  // Sync dark class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const copyEmail = () => {
    navigator.clipboard.writeText('gihadmohammed2024@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects = [
    {
      id: 'ai-saas',
      title: 'AI-Powered Customer Support SaaS',
      category: 'ai-fullstack',
      role: 'Full Stack Architecture & AI Integration',
      tagline: 'Real-time multi-agent customer support desk with AI response streams & dynamic fallback queues.',
      problem: 'High customer support response latency and excessive manual agent workload during surge traffic.',
      solution: 'Engineered a high-concurrency event-driven SaaS combining WebSockets, Redis pub/sub queues, and Anthropic/OpenAI APIs to generate context-aware agent suggestions in sub-500ms.',
      tech: ['Laravel', 'Next.js', 'WebSockets', 'Redis', 'Docker', 'Claude API', 'Tailwind CSS'],
      metrics: ['Sub-500ms AI Suggestion Latency', 'Real-Time WebSocket Stream', 'Redis Queue Fallbacks'],
      achievement: 'Integrated AI suggestion streams into live WebSocket channels, cutting first-response resolution times by 45%.',
      github: 'https://github.com/gihadmohammed',
      demo: 'https://gihadportfolio.netlify.app'
    },
    {
      id: 'fleetour',
      title: 'Real-Time Fleet Tracking Platform',
      company: 'FleeTour GmbH (Berlin, Germany)',
      category: 'fullstack',
      role: 'Remote Software Engineer',
      tagline: 'Enterprise IoT & telemetry vehicle tracking dashboard supporting 200+ active commercial fleets.',
      problem: 'Legacy platform suffered from connection drops and slow PostgreSQL spatial query bottlenecks under high telemetry loads.',
      solution: 'Refactored backend architecture to NestJS microservices, optimized spatial queries with connection pooling, and built dynamic Angular reactive maps with JWT-based RBAC.',
      tech: ['Angular', 'NestJS', 'PostgreSQL', 'WebSockets', 'JWT', 'RBAC', 'GitHub Actions'],
      metrics: ['200+ Active Vehicles Tracked', '+35% Backend Throughput', 'CI/CD 45m ➔ <5m'],
      achievement: 'Boosted backend throughput by 35% via database query tuning and cut deployment time from 45 min to under 5 min.',
      github: 'https://github.com/gihadmohammed',
      demo: 'https://gihadportfolio.netlify.app'
    },
    {
      id: 'eureka-health',
      title: 'High-Throughput Healthcare Platform',
      company: 'Eureka Digital (Cairo, Egypt)',
      category: 'fullstack',
      role: 'Software Engineer',
      tagline: 'Patient management & telemedicine platform engineered for performance and maximum uptime.',
      problem: 'Heavy DB query overhead and unoptimized client rendering caused latency during peak doctor booking slots.',
      solution: 'Architected Laravel service-layer components with Redis caching and refactored React frontend with eager data hydration.',
      tech: ['Laravel', 'React.js', 'Redis', 'MySQL', 'AWS (EC2, S3, RDS)', 'Docker', 'Clean Architecture'],
      metrics: ['-40% API Response Time', '-60% Database Query Volume', 'Lighthouse 50 ➔ 85+'],
      achievement: 'Cut API response times by 40% and database query volume by 60% via eager loading and Redis caching strategy.',
      github: 'https://github.com/gihadmohammed',
      demo: 'https://gihadportfolio.netlify.app'
    },
    {
      id: 'xtreme-ecommerce',
      title: 'Enterprise E-Commerce & Analytics Engine',
      company: 'Xtreme Digital',
      category: 'fullstack',
      role: 'Contract Software Engineer',
      tagline: 'Scalable multi-tenant e-commerce system with server-side rendering and custom analytics pipelines.',
      problem: 'Strict SEO requirement and zero-downtime client mandate across multi-region product launches.',
      solution: 'Delivered Next.js App Router frontend with Laravel repository pattern API backends, achieving 90+ Lighthouse accessibility and speed.',
      tech: ['Next.js', 'Laravel', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      metrics: ['Lighthouse Score 90+', '4 Client Projects Delivered', 'Zero Production Outages'],
      achievement: 'Delivered 4 production projects on schedule with zero critical incidents and sub-second page rendering.',
      github: 'https://github.com/gihadmohammed',
      demo: 'https://gihadportfolio.netlify.app'
    }
  ];

  const techCategories = [
    {
      name: 'AI-Assisted Development',
      badge: 'Core Productivity Differentiator',
      description: 'Leveraging AI tools deeply in my daily engineering workflow to accelerate execution, static analysis, and testing without compromising architectural control.',
      skills: [
        { name: 'Claude 3.5 Sonnet & Opus', desc: 'Complex refactoring, logic generation, and test creation' },
        { name: 'OpenAI Codex & ChatGPT', desc: 'Boilerplate acceleration, API integration, & documentation' },
        { name: 'Prompt Engineering', desc: 'System prompts, context constraints, & structured output tuning' },
        { name: 'AI-Driven Code Review', desc: 'Automated vulnerability scanning & edge case verification' }
      ]
    },
    {
      name: 'Backend Architecture',
      badge: 'Scalable & Maintainable Systems',
      description: 'Designing clean, testable service layers, microservices, and robust RESTful APIs built for high concurrency.',
      skills: [
        { name: 'PHP / Laravel', desc: 'Repository pattern, Service layer, Eloquent optimization' },
        { name: 'Node.js / NestJS', desc: 'Event loops, Async execution, TypeScript microservices' },
        { name: 'Express.js & REST APIs', desc: 'API design, OpenAPI specifications, Rate limiting' },
        { name: 'WebSockets & Messaging', desc: 'Real-time telemetry, live channels, event streaming' }
      ]
    },
    {
      name: 'Frontend Development',
      badge: 'Pixel-Perfect Responsive UIs',
      description: 'Building accessible, high-performance web applications with modern state management and SSR optimization.',
      skills: [
        { name: 'React.js & Next.js', desc: 'SSR, SSG, App Router, Hooks, Context, State optimization' },
        { name: 'TypeScript & JavaScript (ES6+)', desc: 'Strict typing, functional programming, async patterns' },
        { name: 'Angular', desc: 'RxJS reactive streams, dependency injection, directives' },
        { name: 'Tailwind CSS & UI', desc: 'Responsive design systems, fluid layouts, design tokens' }
      ]
    },
    {
      name: 'Databases & Infrastructure',
      badge: 'Cloud & DevOps Pipelines',
      description: 'Deploying high-availability infrastructure on AWS & GCP with CI/CD automation and tuned database layers.',
      skills: [
        { name: 'PostgreSQL & MySQL', desc: 'Schema design, Indexing, Query profiling, Spatial queries' },
        { name: 'Redis Caching', desc: 'In-memory caching, Pub/Sub channels, session management' },
        { name: 'AWS & GCP Cloud', desc: 'EC2, S3, RDS, CloudFront, Cloud Run, Cloud SQL' },
        { name: 'Docker & GitHub Actions', desc: 'Containerization, automated CI/CD pipelines, unit testing' }
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-200 ${
      darkMode ? 'bg-[#0b0f17] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. STICKY NAVBAR */}
      <nav className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        darkMode 
          ? 'bg-[#0b0f17]/90 border-slate-800' 
          : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              GM
            </div>
            <div>
              <span className="font-bold text-base tracking-tight block leading-none">
                Gihad Mohammed
              </span>
              <span className="text-[11px] font-medium text-indigo-500 flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3 h-3" /> AI-Assisted Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-indigo-500 transition-colors">Tech Stack</a>
            <a href="#ai-workflow" className="hover:text-indigo-500 transition-colors">AI Workflow</a>
            <a href="#impact" className="hover:text-indigo-500 transition-colors">Metrics</a>
            <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
            <a href="#education" className="hover:text-indigo-500 transition-colors">Education</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="mailto:gihadmohammed2024@gmail.com"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" /> Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border text-sm"
            >
              {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border text-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 py-4 space-y-3 ${
            darkMode ? 'bg-[#0b0f17] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <a href="#projects" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">Projects</a>
            <a href="#tech-stack" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">Tech Stack</a>
            <a href="#ai-workflow" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">AI Workflow</a>
            <a href="#impact" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">Engineering Impact</a>
            <a href="#experience" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">Experience</a>
            <a href="#education" onClick={()=>setMobileMenuOpen(false)} className="block text-sm font-medium">Education &amp; Achievements</a>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="mailto:gihadmohammed2024@gmail.com"
                className="w-full text-center py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Software Engineering &amp; Remote Opportunities
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  AI-Assisted <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                    Full Stack Engineer
                  </span>
                </h1>
                <p className="mt-3 text-lg font-medium text-slate-400">
                  Software Developer • Laravel • Node.js / NestJS • React / Next.js • Cloud (AWS/GCP)
                </p>
              </div>

              {/* Supporting Statement */}
              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                I build high-availability, scalable production web applications across Egypt, Saudi Arabia, and Europe. By deeply integrating <strong className="text-indigo-400 font-semibold">AI-assisted workflows (Claude, Codex, ChatGPT)</strong> into clean full-stack architecture, I accelerate implementation, static verification, and delivery throughput while taking full responsibility for code quality and security.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="#projects"
                  className="px-6 py-3 rounded-lg font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group"
                >
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button
                  onClick={copyEmail}
                  className={`px-5 py-3 rounded-lg font-semibold text-sm border transition-all flex items-center gap-2 ${
                    darkMode 
                      ? 'bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-200' 
                      : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" /> Email Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy Email Address
                    </>
                  )}
                </button>
              </div>

              {/* Social Link Badges */}
              <div className="pt-4 flex items-center gap-4 text-sm text-slate-400">
                <a 
                  href="https://github.com/gihadmohammed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
                <span className="text-slate-700">•</span>
                <a 
                  href="https://linkedin.com/in/gihadmohammed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
                <span className="text-slate-700">•</span>
                <a 
                  href="https://gihadportfolio.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <Globe className="w-4 h-4" /> Portfolio <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Right Interactive Engineering Terminal Display */}
            <div className="lg:col-span-5">
              <div className={`rounded-xl border shadow-2xl overflow-hidden font-mono text-xs ${
                darkMode ? 'bg-[#0f172a] border-slate-800 shadow-indigo-950/20' : 'bg-slate-900 text-slate-100 border-slate-800'
              }`}>
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-400 text-[11px]">gihad@dev-environment ~ bash</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] text-indigo-400 font-semibold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                    <Sparkles className="w-3 h-3" /> AI-ASSISTED CLI
                  </div>
                </div>

                {/* Terminal Navigation Tabs */}
                <div className="flex border-b border-slate-800 text-[11px] bg-slate-950/50">
                  <button 
                    onClick={() => setTerminalTab('ai-workflow')}
                    className={`px-4 py-2 border-r border-slate-800 transition-colors ${
                      terminalTab === 'ai-workflow' ? 'bg-indigo-600/20 text-indigo-300 font-semibold border-b-2 border-b-indigo-500' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    ai-workflow.ts
                  </button>
                  <button 
                    onClick={() => setTerminalTab('metrics')}
                    className={`px-4 py-2 border-r border-slate-800 transition-colors ${
                      terminalTab === 'metrics' ? 'bg-indigo-600/20 text-indigo-300 font-semibold border-b-2 border-b-indigo-500' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    system-benchmarks.json
                  </button>
                </div>

                {/* Terminal Body Output */}
                <div className="p-4 space-y-3 min-h-[280px]">
                  {terminalTab === 'ai-workflow' ? (
                    <>
                      <div className="text-slate-500">// Gihad Mohammed AI-Assisted Dev Execution</div>
                      <div className="text-emerald-400 flex items-center gap-1.5">
                        <span className="text-slate-500">$</span> gihad-cli deploy --ai-assisted --mode=fullstack
                      </div>
                      <div className="text-slate-300 pl-3 border-l-2 border-indigo-500 space-y-1">
                        <p><span className="text-indigo-400">[01 PLAN]</span> Schema &amp; Repository Pattern defined</p>
                        <p><span className="text-sky-400">[02 BUILD]</span> Claude 3.5 generated boilerplate APIs &amp; React hooks</p>
                        <p><span className="text-amber-400">[03 TEST]</span> Automated suite generated (80%+ coverage)</p>
                        <p><span className="text-emerald-400">[04 SHIP]</span> AWS CloudRun / EC2 CI/CD pipeline triggered</p>
                      </div>
                      <div className="pt-2 text-indigo-300 bg-indigo-950/30 p-2.5 rounded border border-indigo-800/40">
                        ✓ <span className="text-white font-semibold">Result:</span> Delivery throughput +20% | Zero security regressions
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-slate-500">// Production Verification Output</div>
                      <pre className="text-sky-300 text-[11px] leading-relaxed">
{`{
  "engineer": "Gihad Mohammed",
  "gpa": "3.93/4.00 (Ranked Top 10)",
  "competitive": "3x ICPC Qualifier",
  "benchmarks": {
    "api_response_reduction": "40%",
    "database_queries_cut": "60%",
    "lighthouse_performance": "85+ (from ~50)",
    "fleet_vehicles_tracked": "200+",
    "cicd_deploy_time": "< 5 minutes"
  }
}`}
                      </pre>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUICK STATS MATRIX */}
      <section className={`py-10 border-y ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            
            <div className="space-y-1 p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-500">3+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Years Experience</div>
            </div>

            <div className="space-y-1 p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">5+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Production Apps</div>
            </div>

            <div className="space-y-1 p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">200+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Fleet Vehicles Tracked</div>
            </div>

            <div className="space-y-1 p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">80%+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Test Coverage</div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1 p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">3×</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">ICPC Qualifier</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SELECTED PROJECTS SECTION */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5" /> Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Selected Production Projects
            </h2>
          </div>
          
          <p className="mt-2 md:mt-0 text-sm text-slate-400 max-w-md">
            Production systems engineered for scalability, high availability, performance tuning, and real-world client requirements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-4 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'all' 
                ? 'bg-indigo-600 text-white' 
                : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-black'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button 
            onClick={() => setActiveTab('ai-fullstack')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'ai-fullstack' 
                ? 'bg-indigo-600 text-white' 
                : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-black'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI-Assisted Architecture
          </button>
          <button 
            onClick={() => setActiveTab('fullstack')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'fullstack' 
                ? 'bg-indigo-600 text-white' 
                : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-700 hover:text-black'
            }`}
          >
            Full Stack Systems
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-indigo-500/50 hover:shadow-xl ${
                darkMode ? 'bg-slate-900/60 border-slate-800 hover:shadow-indigo-950/20' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    {project.company && (
                      <span className="text-[11px] font-semibold text-indigo-400 block mb-0.5">
                        {project.company}
                      </span>
                    )}
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    {project.role}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium text-slate-300 mb-4 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Metric highlights */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-slate-950/40 border border-slate-800/80 mb-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="text-[11px] font-bold text-emerald-400 block truncate">{m}</span>
                    </div>
                  ))}
                </div>

                {/* Achievement */}
                <div className="mb-4 text-xs text-slate-400 space-y-1">
                  <span className="font-semibold text-slate-200 block">Key Achievement:</span>
                  <p className="line-clamp-2">{project.achievement}</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  View Architecture &amp; Case Study <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. TECH STACK GRID */}
      <section id="tech-stack" className={`py-20 border-t ${
        darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-100/70 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" /> Engineering Skill Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technology Stack &amp; Developer Tooling
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Categorized technical skills backed by real production applications. No superficial percentage bars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((cat, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-xl border flex flex-col justify-between ${
                  darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      {idx === 0 && <Sparkles className="w-4 h-4 text-indigo-400" />}
                      {cat.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4">{cat.description}</p>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                        <div className="text-xs font-semibold text-slate-200">{skill.name}</div>
                        <div className="text-[11px] text-slate-400">{skill.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. AI-ASSISTED DEVELOPMENT WORKFLOW SECTION */}
      <section id="ai-workflow" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-400 border border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> AI-ENGINEERING INTEGRATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How I Build With AI
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            AI is deeply integrated into my software engineering lifecycle as an implementation accelerator, static analyzer, and test generator — not a substitute for core engineering judgment.
          </p>
        </div>

        {/* 4-Step Engineering Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className={`p-6 rounded-xl border relative overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="text-3xl font-extrabold text-indigo-500/40 mb-3">01</div>
            <h3 className="text-base font-bold text-slate-100 mb-2">PLAN &amp; ARCHITECT</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Define database schemas, clean architecture boundaries, repository patterns, and API specifications manually before writing code.
            </p>
          </div>

          <div className={`p-6 rounded-xl border relative overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="text-3xl font-extrabold text-indigo-500/40 mb-3">02</div>
            <h3 className="text-base font-bold text-slate-100 mb-2">BUILD WITH AI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Leverage Claude, OpenAI Codex, and ChatGPT for rapid boilerplate generation, complex algorithm drafting, and API integration.
            </p>
          </div>

          <div className={`p-6 rounded-xl border relative overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="text-3xl font-extrabold text-indigo-500/40 mb-3">03</div>
            <h3 className="text-base font-bold text-slate-100 mb-2">VERIFY &amp; AUDIT</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generate 80%+ automated unit/integration test suites, perform AI static code reviews, and rigorously test edge cases.
            </p>
          </div>

          <div className={`p-6 rounded-xl border relative overflow-hidden ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="text-3xl font-extrabold text-indigo-500/40 mb-3">04</div>
            <h3 className="text-base font-bold text-slate-100 mb-2">SHIP TO CLOUD</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Containerize with Docker, automate CI/CD pipelines via GitHub Actions, and deploy to AWS / GCP Cloud infrastructure.
            </p>
          </div>

        </div>

        {/* Philosophy Callout Box */}
        <div className={`p-6 rounded-xl border text-center max-w-4xl mx-auto ${
          darkMode ? 'bg-indigo-950/20 border-indigo-800/40 text-indigo-200' : 'bg-indigo-50 border-indigo-200 text-indigo-900'
        }`}>
          <blockquote className="text-sm font-medium italic">
            "AI accelerates implementation, but engineering decisions, validation, architecture, security, and production quality remain my full responsibility."
          </blockquote>
          <div className="mt-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            — Gihad Mohammed
          </div>
        </div>

      </section>

      {/* 7. ENGINEERING IMPACT DASHBOARD */}
      <section id="impact" className={`py-20 border-t ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Verifiable Engineering Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Production Benchmarks &amp; Impact
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Measurable technical improvements delivered across client and employer environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-emerald-400">-40%</span>
                <Server className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">API Response Latency</h3>
              <p className="text-xs text-slate-400">Cut response times by 40% using Redis caching strategies and query tuning at Eureka Digital.</p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-emerald-400">-60%</span>
                <Database className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">Database Query Volume</h3>
              <p className="text-xs text-slate-400">Eliminated N+1 query overhead using eager loading and optimized indexed tables.</p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-sky-400">50 ➔ 85+</span>
                <Globe className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">Lighthouse Score Boost</h3>
              <p className="text-xs text-slate-400">Raised client portal Lighthouse performance from ~50 to 85+ and reduced page load time by 25%.</p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-sky-400">45m ➔ &lt;5m</span>
                <Rocket className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">CI/CD Deployment Time</h3>
              <p className="text-xs text-slate-400">Rebuilt GitHub Actions release pipeline at FleeTour GmbH, slashing deployment wait time.</p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-indigo-400">80%+</span>
                <ShieldCheck className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">Automated Test Coverage</h3>
              <p className="text-xs text-slate-400">Established rigorous automated unit/integration tests, reducing production incidents by 40%.</p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-extrabold text-indigo-400">+20%</span>
                <Sparkles className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-sm font-bold mb-1">Sprint Feature Throughput</h3>
              <p className="text-xs text-slate-400">Introduced AI-assisted development tools and code review standards across software teams.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. WORK EXPERIENCE TIMELINE */}
      <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-10">
          
          {/* Eureka Digital */}
          <div className="relative pl-6 md:pl-8 group">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0b0f17]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold">Software Engineer — Eureka Digital</h3>
              <span className="text-xs font-medium text-slate-400">Jan 2023 – Present | Cairo, Egypt</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Cut API response times by 40% and database query volume by 60% through query tuning, eager loading, Redis caching, and indexing.</li>
              <li>Built React interfaces from Figma designs; raised Lighthouse scores from ~50 to 85+ and reduced page load time by 25%.</li>
              <li>Deployed and maintained production microservices on AWS (EC2, S3, RDS, CloudFront) and GCP (Cloud Run, Cloud SQL).</li>
              <li>Integrated AI-assisted development workflows across coding, debugging, code review, and documentation (+20% throughput).</li>
            </ul>
          </div>

          {/* Xtreme Digital */}
          <div className="relative pl-6 md:pl-8 group">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0b0f17]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold">Contract Software Engineer — Xtreme Digital</h3>
              <span className="text-xs font-medium text-slate-400">Jan 2025 – Present | Cairo, Egypt</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Delivered 4 client projects on schedule with Laravel APIs and Next.js (SSR/SSG), achieving Lighthouse scores above 90.</li>
              <li>Structured backends with repository pattern and service-layer separation for long-term maintainability.</li>
            </ul>
          </div>

          {/* FleeTour GmbH */}
          <div className="relative pl-6 md:pl-8 group">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-[#0b0f17]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold">Remote Software Engineer — FleeTour GmbH</h3>
              <span className="text-xs font-medium text-slate-400">Jun 2024 – Dec 2024 | Berlin, Germany (Remote)</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Built real-time fleet tracking platform for 200+ vehicles with Angular, NestJS, PostgreSQL, WebSockets, JWT, and RBAC.</li>
              <li>Improved backend throughput by 35% via PostgreSQL query tuning, connection pooling, and infrastructure right-sizing.</li>
              <li>Rebuilt CI/CD with GitHub Actions, cutting deployment time from 45 minutes to under 5 minutes.</li>
              <li>Established automated testing with 80%+ coverage, reducing production incidents by 40%.</li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="relative pl-6 md:pl-8 group">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-[#0b0f17]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold">Freelance Software Engineer — Self-Employed</h3>
              <span className="text-xs font-medium text-slate-400">2022 – Present | Remote (Middle East &amp; Europe)</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc list-inside">
              <li>Delivered 5+ client applications in e-commerce and analytics, owning full lifecycle from requirements to cloud deployment.</li>
            </ul>
          </div>

        </div>

      </section>

      {/* 9. EDUCATION & ACHIEVEMENTS */}
      <section id="education" className={`py-20 border-t ${
        darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-100/70 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Education */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Helwan University</h2>
              
              <div className={`p-6 rounded-xl border ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-base font-bold text-slate-100">
                  B.Sc. Computer Science &amp; Artificial Intelligence
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-1">
                  Graduated June 2023 | Cairo, Egypt
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Academic Standing</span>
                    <span className="text-xl font-extrabold text-emerald-400">GPA 3.93 / 4.00</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Class Rank</span>
                    <span className="text-xs font-bold text-slate-200 px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                      Top 10 Rank
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  Coursework: Data Structures &amp; Algorithms, Operating Systems, Database Systems, Software Engineering, Artificial Intelligence.
                </p>
              </div>
            </div>

            {/* Competitive Programming & Accomplishments */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Competitive Honors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Achievements</h2>

              <div className="space-y-4">
                
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">ICPC Egypt Qualification Round</h3>
                    <p className="text-xs text-slate-400 mt-0.5">3× consecutive qualifier (2021–2023). Competed across national collegiate programming rounds.</p>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">ACPC Girls Contest Representative</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Selected participant representing Helwan University in Arab Collegiate contests (2021 &amp; 2022).</p>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">ACM Technical Instructor</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Taught algorithmic problem solving, complexity analysis, and C++ to junior CS students.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. CONTACT / CTA SECTION */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl border p-8 md:p-12 text-center relative overflow-hidden ${
          darkMode ? 'bg-gradient-to-b from-slate-900 to-[#0b0f17] border-slate-800' : 'bg-indigo-50 border-indigo-100'
        }`}>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 inline-block">
              Open to Opportunities
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's Build Scalable Software Together
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Open for full-time Software Engineer positions, remote contracts across Middle East/Europe, and high-impact full-stack collaborations.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:gihadmohammed2024@gmail.com"
                className="px-6 py-3 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Direct Email
              </a>

              <a
                href="https://linkedin.com/in/gihadmohammed"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg text-sm font-semibold border transition-all flex items-center gap-2 ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn Profile
              </a>
            </div>

            <div className="pt-6 text-xs text-slate-500">
              Cairo, Egypt • +20 111 189 8219 • gihadmohammed2024@gmail.com
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Gihad Mohammed. AI-Assisted Full Stack Engineer.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub</a>
            <a href="https://linkedin.com/in/gihadmohammed" target="_blank" rel="noreferrer" className="hover:text-slate-300">LinkedIn</a>
            <a href="mailto:gihadmohammed2024@gmail.com" className="hover:text-slate-300">Email</a>
          </div>
        </div>
      </footer>

      {/* MODAL FOR PROJECT CASE STUDY */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{selectedProject.company || 'Personal Architecture'}</span>
                <h3 className="text-2xl font-bold mt-0.5">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg border text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-slate-100 mb-1">Problem Statement</h4>
                <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 mb-1">Architectural Solution</h4>
                <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">{selectedProject.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 mb-1">Technologies &amp; Tools</h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" /> View Source
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" /> Live Preview
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}