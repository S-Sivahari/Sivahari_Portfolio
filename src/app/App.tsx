import { FloatingParticles } from './components/FloatingParticles';
import { Navbar } from './components/Navbar';
import { Github, Linkedin, Instagram, Mail, FileDown, Copy, Check, ExternalLink, Code2, Layout, Database, Brain, Wrench, BookOpen, Trophy, Laptop, Sparkles, Heart, Twitter } from 'lucide-react';
import PollFlowImg from '../../PollFlow.png';
import VITALImg from '../../V.I.T.A.L.png';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sivahari2105@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skillsCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Java', 'SQL'],
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'Flask', 'Firebase', 'Supabase', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Data & AI Tools',
      icon: Brain,
      skills: ['Matplotlib', 'NumPy', 'Tableau', 'Machine Learning'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Vite'],
    },
    {
      title: 'CS Fundamentals',
      icon: BookOpen,
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'OOPs', 'Operating Systems', 'Computer Networks'],
    },
  ];

  const projects = [
    {
      title: 'PollFlow - College Polling System',
      description: 'Comprehensive real-time polling system with multi-role access, advanced scheduling, and analytics for Chennai Institute of Technology.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/S-Sivahari/CIT_Polling_System',
      image: PollFlowImg,
    },
    {
      title: 'V.I.T.A.L Dashboard',
      description: 'Agricultural disaster management system for village officers with farmer tracking, subsidy calculation, and real-time analytics.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Zustand'],
      github: 'https://github.com/S-Sivahari/V.I.T.A.L-Dashboard',
      image: VITALImg,
    },
    {
      title: 'AttendX - QR Check-in System',
      description: 'Staff attendance management solution with QR scanning, multiple check-in methods, and automatic logging.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
      github: 'https://github.com/S-Sivahari/AttendX-Frontend',
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&h=400&fit=crop',
    },
    {
      title: 'FlixZone - Streaming Platform',
      description: 'Netflix-inspired streaming platform with secure authentication, content browsing, and responsive video player.',
      tech: ['React', 'Firebase', 'Vite', 'CSS'],
      github: 'https://github.com/S-Sivahari/FlixZone',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.) — Computer Science and Engineering',
      institution: 'Chennai Institute of Technology, Anna University',
      location: 'Chennai, India',
      period: 'Sept 2024 – May 2028',
      grade: 'CGPA: 8.5 / 10',
      highlights: [],
    },
    {
      degree: 'Class 12 – Computer Science — CBSE Board',
      institution: 'DAV Public School, Velachery',
      location: 'Chennai, India',
      period: '2023 – 2024',
      grade: 'Score: 454 / 500',
      highlights: ['Part of School Basketball Team'],
    },
    {
      degree: 'Class 10 – IGCSE — IGCSE Board',
      institution: 'Vanshi Manthan Vidyashram',
      location: 'Chennai, India',
      period: '2022',
      grade: 'Percentage: 88.8%',
      highlights: [
        'Part of U-18 Basketball Team',
        'Gold Medal — National Basketball Competition',
        '1st Place — Chess Tournament',
      ],
    },
    {
      degree: 'Speed Arithmetic & Competitive Excellence — Abacus & Vedic Mathematics',
      institution: 'National Level Achievements',
      location: 'India',
      period: 'Completed',
      grade: 'Status: Champion',
      highlights: [
        'Completed 13 Levels of Abacus',
        'Completed 6 Levels of Vedic Mathematics',
        'Competent in Aptitude-Based Questions',
        'Champion of Champions Trophy 2018 — Thrissur, Kerala',
      ],
    },
  ];

  const cpProfiles = [
    {
      platform: 'LeetCode',
      username: 'Sivahari_S',
      rating: '1800',
      rank: 'Top 7.63%',
      badge: 'Guardian',
      problemsSolved: '532+',
      maxRating: '1800',
      bestRank: 'Top 7.63%',
      url: 'https://leetcode.com/u/Sivahari_S/',
      color: 'from-orange-400/70 to-yellow-400/70',
      bgGradient: 'from-orange-500/5 via-yellow-500/3 to-orange-500/5',
      glowColor: 'rgba(251, 146, 60, 0.3)',
    },
    {
      platform: 'CodeChef',
      username: 'sivahari_3773',
      rating: '1390',
      rank: '1★',
      badge: '1 Star',
      problemsSolved: '690+',
      maxRating: '1523',
      bestRank: '2★',
      url: 'https://www.codechef.com/users/sivahari_3773',
      color: 'from-red-500/70 to-orange-500/70',
      bgGradient: 'from-red-500/5 via-orange-500/3 to-red-500/5',
      glowColor: 'rgba(239, 68, 68, 0.3)',
    },
    {
      platform: 'Codeforces',
      username: 'sivahari2105',
      rating: 'Unrated',
      rank: 'Unrated',
      badge: 'Newbie',
      problemsSolved: '10+',
      maxRating: 'Unrated',
      bestRank: 'Unrated',
      url: 'https://codeforces.com/profile/sivahari2105',
      color: 'from-cyan-400/70 to-blue-400/70',
      bgGradient: 'from-cyan-500/5 via-blue-500/3 to-cyan-500/5',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
  ];

  const achievements = [
    {
      title: 'Codeathon Top 20',
      organization: 'Placed in Top 20 in a coding competition conducted at college',
      year: '2024',
    },
    {
      title: 'Smart India Hackathon - Internal Round',
      organization: 'Selected in Top 50 from 300+ teams in SIH internal hackathon',
      year: '2024',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/s-sivahari/',
      icon: Linkedin,
      color: 'hover:border-blue-400/50',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/S-Sivahari',
      icon: Github,
      color: 'hover:border-purple-400/50',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/siva_since07/',
      icon: Instagram,
      color: 'hover:border-pink-400/50',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Sivahari_S_2105',
      icon: Twitter,
      color: 'hover:border-sky-400/50',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <FloatingParticles />
      <Navbar />

      <div className="relative z-10">
        {/* About Me Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32"
        >
          <div className="max-w-4xl w-full">
            <div className="mb-8">
              <p className="text-white mb-2 text-lg sm:text-xl md:text-2xl">Hola, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 sm:mb-6 animate-gradient bg-[length:200%_auto] leading-tight">
                Sivahari S
              </h1>
              <p className="text-sm sm:text-base text-white max-w-2xl leading-relaxed">
                Competitive programmer and aspiring data analyst passionate about building meaningful digital solutions.
              </p>
            </div>

            {/* Social Links and Resume */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="https://www.linkedin.com/in/s-sivahari/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://github.com/S-Sivahari"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/siva_since07/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400 transition-colors" />
              </a>
              <button
                onClick={copyEmail}
                className="group relative flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-110"
              >
                {copied ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ) : (
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400 transition-colors" />
                )}
                {copied && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-green-400 bg-black/80 px-2 py-1 rounded">
                    Email copied!
                  </span>
                )}
              </button>
              <a
                href="https://drive.google.com/file/d/1YYBXvbToGxZhfzWvl-z92KViEt66RT_i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 hover:border-purple-400 hover:from-purple-600/30 hover:to-pink-600/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105 text-sm sm:text-base text-white"
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span className="font-medium">Resume</span>
              </a>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 sm:mb-8 font-semibold">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors duration-300">
                      <Trophy className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="text-base sm:text-lg text-white font-medium group-hover:text-purple-300 transition-colors duration-300">Competitive Programming</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Breaking down complex algorithmic problems and practicing consistently on LeetCode and CodeChef.
                  </p>
                </div>
                <div className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                      <Laptop className="w-5 h-5 text-pink-400" />
                    </div>
                    <h4 className="text-base sm:text-lg text-white font-medium group-hover:text-pink-300 transition-colors duration-300">Full Stack Development</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Building seamless web applications using Next.js, React, Node.js, and modern database technologies.
                  </p>
                </div>
                <div className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors duration-300">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="text-base sm:text-lg text-white font-medium group-hover:text-purple-300 transition-colors duration-300">AI, ML & Data Science</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Creating intelligent detection systems using Python, CNNs, and deep learning frameworks.
                  </p>
                </div>
                <div className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors duration-300">
                      <Heart className="w-5 h-5 text-pink-400" />
                    </div>
                    <h4 className="text-base sm:text-lg text-white font-medium group-hover:text-pink-300 transition-colors duration-300">Health & Lifestyle</h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Maintaining mental and physical balance through meditation, chess, and basketball.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-center leading-tight font-semibold">
              Skills & Technologies
            </h2>
            <div className="flex flex-col gap-8 sm:gap-10">
              {skillsCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="group">
                  <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                    <category.icon className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`relative rounded-xl px-4 py-2.5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default
                          ${index % 3 === 0 ? 'bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' : ''}
                          ${index % 3 === 1 ? 'bg-pink-500/10 border border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/20 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]' : ''}
                          ${index % 3 === 2 ? 'bg-white/5 border border-white/20 hover:border-purple-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]' : ''}
                        `}
                      >
                        <p className="text-center text-sm text-white font-medium whitespace-nowrap">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-center leading-tight font-semibold">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="relative p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl mb-2.5 text-white font-semibold">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-400/30 text-xs text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* GitHub Link - Bottom Right */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-5 right-5 p-2.5 bg-zinc-800/80 border border-white/20 rounded-lg hover:bg-purple-500/50 hover:border-purple-400 hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"
        >
          <div className="max-w-4xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-center leading-tight font-semibold">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg mb-2.5 text-white font-bold leading-snug">{edu.degree}</h3>
                  <p className="text-purple-300 mb-1.5 text-sm font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-xs mb-1">{edu.period} — {edu.location}</p>
                  <p className="text-white text-sm font-medium mb-2">{edu.grade}</p>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CP Profiles Section */}
        <section
          id="cp-profiles"
          className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent"
        >
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 text-center leading-tight font-semibold">
              Competitive Programming Profiles
            </h2>
            <p className="text-center text-gray-300 text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto font-semibold">
              My journey through algorithmic challenges and competitive coding platforms, solving problems and climbing ranks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-4xl mx-auto">
              {cpProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-800/80 via-zinc-800/60 to-zinc-800/80 backdrop-blur-md rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/10"
                >
                  {/* Platform Header Ribbon */}
                  <div className={`relative bg-gradient-to-r ${profile.color} p-2 sm:p-2`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {/* Platform Icon */}
                        <div className="w-5 h-5 bg-black/20 backdrop-blur-sm rounded-md flex items-center justify-center">
                          {profile.platform === 'LeetCode' && (
                            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                            </svg>
                          )}
                          {profile.platform === 'CodeChef' && (
                            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.257.004c-.18.006-.357.02-.536.043C8.37.393 6.756 1.545 5.737 3.58c-1.262 2.52-.988 5.263-.238 7.727.704 2.31 1.755 4.525 2.63 6.79.57 1.47 1.04 2.988 1.15 4.565.037.516.02 1.036-.053 1.548-.138.957-.55 1.665-1.39 2.134-.155.087-.22.178-.202.357.02.19.014.384.015.577 0 .14.047.2.2.2 1.258-.007 2.517-.006 3.775 0 .184 0 .24-.08.232-.248-.01-.226-.017-.455.015-.678.02-.136-.047-.2-.165-.264-.93-.52-1.347-1.31-1.428-2.353-.093-1.2.158-2.354.518-3.487.653-2.057 1.48-4.053 2.228-6.08.686-1.855 1.28-3.745 1.492-5.733.14-1.294.13-2.578-.202-3.847C13.816 2.55 13.166 1.1 11.83.4c-.393-.206-.81-.335-1.258-.38-.106-.01-.21-.012-.316-.016z"/>
                            </svg>
                          )}
                          {profile.platform === 'Codeforces' && (
                            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
                            </svg>
                          )}
                        </div>
                        <h3 className="text-base font-semibold text-black">{profile.platform}</h3>
                      </div>
                      {/* Star Rating */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-2.5 h-2.5 text-black/60" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className={`flex-1 p-2 sm:p-2 bg-gradient-to-br ${profile.bgGradient}`}>
                    {/* Username */}
                    <div className="mb-1.5">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5 font-semibold">Username</p>
                      <p className="text-white font-semibold text-base">@{profile.username}</p>
                    </div>

                    {/* Badge/Status */}
                    <div className="mb-1.5">
                      <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r ${profile.color} bg-opacity-20 border border-white/10`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm font-semibold">{profile.badge}</span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                      {/* Problems Solved */}
                      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-md p-1.5">
                        <div className="flex items-center gap-1 mb-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-xs text-gray-300 uppercase tracking-wide font-semibold">Solved</p>
                        </div>
                        <p className="text-white font-semibold text-lg">{profile.problemsSolved}</p>
                      </div>

                      {/* Max Rating */}
                      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-md p-1.5">
                        <div className="flex items-center gap-1 mb-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <p className="text-xs text-gray-300 uppercase tracking-wide font-semibold">Rating</p>
                        </div>
                        <p className="text-white font-semibold text-lg">{profile.maxRating}</p>
                      </div>

                      {/* Best Rank */}
                      <div className="col-span-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-md p-1.5">
                        <div className="flex items-center gap-1 mb-0.5">
                          <svg className="w-3 h-3 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <p className="text-xs text-gray-300 uppercase tracking-wide font-semibold">Best Rank</p>
                        </div>
                        <p className="text-white font-semibold text-base">{profile.bestRank}</p>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 w-full py-1.5 rounded-md bg-gradient-to-r ${profile.color} text-black font-semibold text-sm hover:scale-105 transition-all duration-300`}
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section
          id="achievements"
          className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"
        >
          <div className="max-w-4xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-center leading-tight font-semibold">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:border-pink-400/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-2 text-white font-semibold leading-snug">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                        {achievement.organization}
                      </p>
                      <p className="text-purple-400 text-sm font-medium">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex items-center px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"
        >
          <div className="max-w-2xl w-full mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 sm:mb-16 text-center leading-tight font-semibold">
              Get In Touch
            </h2>
            <div className="bg-zinc-900/60 border border-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg">
              {/* Email with Copy */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm sm:text-base">sivahari2105@gmail.com</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-400/30 hover:bg-purple-500/30 hover:scale-105 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300 text-sm text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links Grid - 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl ${link.color} hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300`}
                  >
                    <link.icon className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-white text-sm sm:text-base">{link.name}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
