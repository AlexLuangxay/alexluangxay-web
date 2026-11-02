"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  Award, 
  Terminal, 
  Code, 
  Database, 
  Layers,
  Copy,
  Check,
  Download,
  X,
  ChevronRight,
  Sparkles,
  Trophy,
  Dumbbell,
  BookOpen,
  Flame,
  Clock
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Toronto', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alexluangxay@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F6FF] text-[#172554] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-20">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-[#F0F6FF]/90 backdrop-blur-md border-b border-blue-100/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-xs tracking-wider text-slate-500 uppercase font-semibold">
            AL / SOEN.2027
          </span>
          <nav className="flex items-center space-x-6 text-xs font-mono text-slate-600 font-medium tracking-wider uppercase">
            <a href="#about" className="hover:text-blue-600 transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">PROJECTS & AWARDS</a>
            <a href="#tools" className="hover:text-blue-600 transition-colors">STACK</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6">
            <div className="font-mono text-xs tracking-widest text-blue-600 uppercase font-bold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              SOFTWARE ENGINEER • CONCORDIA 2027
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif text-[#172554] tracking-tight leading-none font-bold">
              Alex <br />Luangxay
            </h1>

            <div className="font-mono text-xs text-blue-600 font-semibold flex items-center gap-2 pt-1">
              <span>⚡ Currently Data & Software Engineer Intern @ CDPQ</span>
              <span>•</span>
              <span className="text-slate-500">Montréal</span>
            </div>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              Software Engineering student (CO-OP) at Concordia University. Building scalable data pipelines, AI-driven automation workflows, and distributed backend engines. Interested in high-throughput systems, latency optimization, and infrastructure.
            </p>

            {/* Link Chips */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-2">
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium border border-slate-200 bg-white/60 px-3 py-1.5 rounded"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5" />}
                <span>{copied ? 'copied email' : 'email'}</span>
              </button>
              <a 
                href="https://github.com/AlexLuangxay" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium border border-slate-200 bg-white/60 px-3 py-1.5 rounded"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github</span>
              </a>
              <a 
                href="https://linkedin.com/in/alex-luangxay/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium border border-slate-200 bg-white/60 px-3 py-1.5 rounded"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin</span>
              </a>
              <button 
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors font-semibold border border-blue-200 bg-blue-50 px-3 py-1.5 rounded"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>resume.pdf</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR CUTOUT / IMAGE CARD */}
          <div className="md:col-span-4 bg-white border border-blue-100 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 flex items-center justify-center text-slate-400 group">
              <img 
                src="/profile.jpeg" 
                alt="Alex Luangxay" 
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-center p-4">
                <p className="font-mono text-xs text-slate-500 font-semibold mb-1">[ Place Photo Here ]</p>
                <p className="text-[11px] text-slate-400">Save your photo as <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">public/profile.jpeg</code></p>
              </div>
            </div>

            <div className="space-y-3 font-mono text-[11px] pt-1">
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-slate-400 uppercase">SCHOOL</span>
                <span className="text-slate-800 font-semibold">Concordia SWE '27</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span className="text-slate-400 uppercase">EXPERIENCE</span>
                <span className="text-slate-800 font-semibold">CDPQ (3 Terms)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 uppercase">LOCATION</span>
                <span className="text-slate-800 font-semibold">Montréal, QC</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3-COLUMN PERSONAL SIGNAL CARDS WITH IMAGE PLACEHOLDERS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 01: ENGINEER */}
          <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="h-44 bg-slate-100 relative border-b border-slate-200 flex items-center justify-center text-slate-400 group">
              <img 
                src="/images/engineer.jpeg" 
                alt="Engineer workspace" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-center p-3">
                <Code className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                <p className="font-mono text-[11px] text-slate-500 font-semibold">[ Engineer Photo ]</p>
                <p className="text-[10px] text-slate-400 font-mono">public/images/engineer.jpeg</p>
              </div>
            </div>
            
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-wider text-slate-400 uppercase mb-3 flex items-center justify-between">
                  <span>01 / ENGINEER</span>
                  <Code className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">STACK</span>
                    <span className="text-slate-800 font-semibold">Python • SQL • Java • Go</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DOMAIN</span>
                    <span className="text-slate-800 font-semibold">Data Infra • LLMs • Pipelines</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 font-mono text-[11px] text-slate-500 italic">
                "Focusing on data reliability, idempotent ETL pipelines, and high-performance infrastructure."
              </div>
            </div>
          </div>

          {/* CARD 02: ATHLETE */}
          <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="h-44 bg-slate-100 relative border-b border-slate-200 flex items-center justify-center text-slate-400 group">
              <img 
                src="/images/athlete.jpeg" 
                alt="Dragon Boat & Outdoor Athletics" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-center p-3">
                <Dumbbell className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                <p className="font-mono text-[11px] text-slate-500 font-semibold">[ Athlete Photo ]</p>
                <p className="text-[10px] text-slate-400 font-mono">public/images/athlete.jpeg</p>
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-wider text-slate-400 uppercase mb-3 flex items-center justify-between">
                  <span>02 / ATHLETE</span>
                  <Dumbbell className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">PRIMARY</span>
                    <span className="text-slate-800 font-semibold">Dragon Boat Racing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ENDURANCE</span>
                    <span className="text-slate-800 font-semibold">Triathlon (Swim/Bike/Run)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">WINTER</span>
                    <span className="text-slate-800 font-semibold">Snowboarding</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 font-mono text-[11px] text-slate-500">
                Disciplined outdoor training & competitive team rowing.
              </div>
            </div>
          </div>

          {/* CARD 03: BUILDER */}
          <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="h-44 bg-slate-100 relative border-b border-slate-200 flex items-center justify-center text-slate-400 group">
              <img 
                src="/images/builder.jpeg" 
                alt="Hackathons & Hardware Projects" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-center p-3">
                <Sparkles className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                <p className="font-mono text-[11px] text-slate-500 font-semibold">[ Builder Photo ]</p>
                <p className="text-[10px] text-slate-400 font-mono">public/images/builder.jpeg</p>
              </div>
            </div>

            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-wider text-slate-400 uppercase mb-3 flex items-center justify-between">
                  <span>03 / BUILDER</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">HACKATHONS</span>
                    <span className="text-blue-600 font-bold">1st Place @ UdeMHacks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">PROJECTS SHIPPED</span>
                    <span className="text-slate-800 font-semibold">6+ Applications</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">INTERESTS</span>
                    <span className="text-slate-800 font-semibold">Chess • Guitar • Piano</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-3 font-mono text-[11px] text-slate-500 italic">
                "Build it fast, measure performance, refine the architecture."
              </div>
            </div>
          </div>

        </section>

        {/* TECHNICAL STACK MATRIX */}
        <section id="tools" className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold border-b border-slate-100 pb-3">
            // TECHNICAL STACK & TOOLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 font-mono text-xs">
            <div className="flex items-start gap-4">
              <span className="text-slate-400 uppercase w-24 shrink-0">LANGUAGES</span>
              <span className="text-slate-800 font-medium leading-relaxed">
                Java • C# • C++ • JavaScript / TypeScript • Python • SQL • Go (Golang)
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-slate-400 uppercase w-24 shrink-0">FULL-STACK</span>
              <span className="text-slate-800 font-medium leading-relaxed">
                Spring Boot • .NET 8 • Node.js / Express • React • Angular • Flask • React Native • SwiftUI
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-slate-400 uppercase w-24 shrink-0">DATA & AI</span>
              <span className="text-slate-800 font-medium leading-relaxed">
                Snowflake • Databricks • Apache NiFi • AWS S3 • PostgreSQL • MongoDB • Power BI • Power Automate
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-slate-400 uppercase w-24 shrink-0">DEVOPS & TOOLS</span>
              <span className="text-slate-800 font-medium leading-relaxed">
                Docker • GitHub Actions • Git • JUnit • Postman • SSMS • DBeaver
              </span>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="space-y-6">
          <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold border-b border-slate-200 pb-3">
            // WORK EXPERIENCE
          </h2>

          <div className="space-y-6">
            {/* CDPQ Role 1 */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl font-bold text-[#172554]">
                      Caisse de dépôt et placement du Québec (CDPQ)
                    </h3>
                    <span className="bg-blue-50 text-blue-600 font-mono text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200">
                      CURRENT
                    </span>
                  </div>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    Software & Data Engineer Intern — External Data Optimization Team
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-400 text-right">
                  <span>April 2026 – Present</span>
                  <p className="text-[11px] text-slate-400">Montréal, QC</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>• Architected an operational email parser converting unstructured messages into structured business requests.</p>
                  <p>• Designed full Snowflake data model (email, request, audit tables) with transaction safety & idempotency.</p>
                  <p>• Integrated Databricks serving endpoints via REST APIs for LLM analysis, metadata extraction & recommendation scoring.</p>
                  <p>• Built executive Power BI reporting solutions tracking $100M+ budget allocation across software & data platforms.</p>
                </div>
                <div className="md:col-span-4 bg-slate-50/80 rounded-xl p-4 border border-slate-100 space-y-2 flex flex-col justify-center">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-semibold">HIGHLIGHT METRIC</span>
                  <div className="font-serif text-2xl font-bold text-blue-600">$100M+</div>
                  <p className="font-mono text-[11px] text-slate-500">Budget visibility owned end-to-end for VP stakeholders.</p>
                </div>
              </div>
              <div className="font-mono text-[11px] text-slate-400 pt-1">
                Tech: Power BI • SQL • Snowflake • Databricks • Outlook API • REST APIs • Power Automate
              </div>
            </div>

            {/* CDPQ Role 2 */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#172554]">
                    Caisse de dépôt et placement du Québec (CDPQ)
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    Data Developer — External Market Data Team
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-400 text-right">
                  <span>Sept 2025 – April 2026</span>
                  <p className="text-[11px] text-slate-400">Montréal, QC</p>
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                <p>• Implemented and optimized Apache NiFi data integration pipelines for high-throughput supplier market data.</p>
                <p>• Orchestrated automated ingestion using AWS S3, Snowflake Stages, Tasks, and Snowpipe into enterprise data warehouses.</p>
                <p>• Maintained Snowflake views, analytical schemas, and automated workflows to increase platform query reliability.</p>
              </div>
              <div className="font-mono text-[11px] text-slate-400 pt-1">
                Tech: Apache NiFi • Snowflake • AWS S3 • Python • SQL
              </div>
            </div>

            {/* CDPQ Role 3 */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#172554]">
                    Caisse de dépôt et placement du Québec (CDPQ)
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    Data & BI Engineer Intern / Student — Reference Market Data Team
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-400 text-right">
                  <span>Sept 2024 – Sept 2025</span>
                  <p className="text-[11px] text-slate-400">Montréal, QC</p>
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                <p>• Deployed Power BI dashboards tracking enterprise cloud data migration progress and pipeline status.</p>
                <p>• Developed automated recovery tools for corporate SSIS jobs, significantly reducing manual intervention.</p>
                <p>• Implemented Delta validation controls across environments to flag data inconsistencies prior to downstream consumption.</p>
              </div>
              <div className="font-mono text-[11px] text-slate-400 pt-1">
                Tech: Power BI • SQL Server • Snowflake • SSIS
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS & HACKATHONS */}
        <section id="projects" className="space-y-6">
          <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase font-semibold border-b border-slate-200 pb-3">
            // PROJECTS & HACKATHON WINS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* UdeMHacks */}
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                <Trophy className="w-3 h-3" /> 1ST PLACE OVERALL
              </div>
              <div className="space-y-3">
                <div className="font-mono text-xs text-blue-600 font-semibold">/01 • HACKATHON WINNER</div>
                <h3 className="font-serif text-xl font-bold text-[#172554]">AI Medical Diagnostic Platform</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-stack educational platform for medical diagnostic training. Generates dynamic clinical cases from symptom datasets with automated AI chatbot evaluation logic.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 font-mono text-[11px]">
                <div className="text-slate-500">
                  <span className="text-slate-400">THE HARD PART:</span> Constructing deterministic scoring prompts to evaluate student diagnostic accuracy against dynamic case data.
                </div>
                <div className="text-blue-600 font-medium">Awarded: 1st Place Overall & Best Use of AI</div>
              </div>
            </div>

            {/* McHack */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="font-mono text-xs text-slate-400">/02 • HACKATHON</div>
                <h3 className="font-serif text-xl font-bold text-[#172554]">Automated Expense Categorizer</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Web application for invoice management and automated expense breakdown. Integrated custom AI APIs to analyze and categorize user spending patterns in real-time.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 font-mono text-[11px]">
                <div className="text-slate-500">
                  <span className="text-slate-400">STACK:</span> React • Python • OpenAI API • Flask
                </div>
              </div>
            </div>

            {/* ConUHacks */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="font-mono text-xs text-slate-400">/03 • HACKATHON</div>
                <h3 className="font-serif text-xl font-bold text-[#172554]">ConUHacks Web Platform</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Collaborative full-stack web application designed and shipped during a 24-hour sprint in a 4-person team.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 font-mono text-[11px]">
                <div className="text-slate-500">
                  <span className="text-slate-400">STACK:</span> React • Node.js • Express • Tailwind CSS
                </div>
              </div>
            </div>

            {/* CodeJam */}
            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="font-mono text-xs text-slate-400">/04 • HACKATHON</div>
                <h3 className="font-serif text-xl font-bold text-[#172554]">AI Video & Numerical Recognition</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Python-based video enhancement engine featuring AI-driven pattern matching and numerical recognition tools.
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 font-mono text-[11px]">
                <div className="text-slate-500">
                  <span className="text-slate-400">STACK:</span> Python • OpenCV • NumPy
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL-WIDTH LANDSCAPE BANNER */}
        <section className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-slate-100 flex items-center justify-center text-slate-400 group">
          <img 
            src="/images/banner.jpeg" 
            alt="Outdoors & Athletics Banner" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-center p-4">
            <p className="font-mono text-xs text-slate-500 font-semibold mb-1">[ Bottom Landscape Banner Photo ]</p>
            <p className="text-[11px] text-slate-400 font-mono">Save image as <code className="bg-slate-200/80 px-1.5 py-0.5 rounded text-slate-600">public/images/banner.jpeg</code></p>
          </div>
          <div className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-mono text-[11px]">
            ↑ OUTDOORS & ATHLETICS • Dragon Boat & Triathlon Training, Québec
          </div>
        </section>

        {/* BOTTOM BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="font-mono text-[10px] text-slate-400 uppercase">LOCATION TIME</div>
            <div className="font-serif text-2xl font-bold text-[#172554] flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>{time || '16:00:00'}</span>
            </div>
            <p className="font-mono text-[11px] text-slate-500">Montréal, QC (EST)</p>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="font-mono text-[10px] text-slate-400 uppercase">CURRENT INTERESTS</div>
            <p className="font-serif text-base font-bold text-[#172554]">Stock Market & Chess</p>
            <p className="font-mono text-[11px] text-slate-500">Analyzing trends & strategy patterns</p>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="font-mono text-[10px] text-slate-400 uppercase">OFF THE CLOCK</div>
            <p className="font-serif text-base font-bold text-[#172554]">Guitar, Piano & Rubik's Cube</p>
            <p className="font-mono text-[11px] text-slate-500">Acoustic compositions & speedcubing</p>
          </div>
        </section>

      </main>

      {/* RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full h-[85vh] shadow-2xl flex flex-col border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-600 font-semibold">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Alex_Luangxay_resume.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded transition-colors font-medium border border-blue-200"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-100 p-2">
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full rounded border-0"
                title="Alex Luangxay Resume"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}