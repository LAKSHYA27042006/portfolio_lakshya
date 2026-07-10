"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Trophy,
  Users,
  Zap,
  Target,
} from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import { StaggeredReveal } from "@/components/StaggeredReveal"
import { MultilingualWelcome } from "@/components/MultilingualWelcome"
import { InnovativeContactForm } from "@/components/InnovativeContactForm"
import { RotatingCard } from "@/components/RotatingCard"

export default function Page() {

const projects = [
  {
    title: "HR Analytics AI Assistant",
    subtitle: "AI/ML Internship Project (Mindsprint)",
    description:
      "Developed an AI-powered HR Analytics Assistant using Llama 3.3 70B and Groq API for workforce analytics and employee attrition insights.",
    details: [
      "Built a full-stack solution with FastAPI, PostgreSQL, SQLAlchemy, and Next.js.",
      "Integrated Langfuse for LLM monitoring and analytics.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Llama 3.3 70B", "Groq API", "Langfuse", "Next.js", "TypeScript", "Tailwind CSS"],
    github: null,
    demo: null,
    certificate: null,
    featured: true,
    date: "AI/ML Internship Project",
    note: "Mindsprint",
  },
  {
    title: "Multimodal Document Understanding System",
    subtitle: "AI/ML Internship Project (Mindsprint)",
    description:
      "Developed a document intelligence platform for extracting and summarizing information from legal and financial documents.",
    details: [
      "Implemented OCR using EasyOCR and layout-aware document understanding with LayoutLMv3.",
      "Built an interactive dashboard for document analysis and reporting.",
    ],
    tech: ["Python", "PyTorch", "EasyOCR", "LayoutLMv3", "Hugging Face Transformers", "BART", "Scikit-Learn", "Streamlit"],
    github: null,
    demo: null,
    certificate: null,
    featured: true,
    date: "AI/ML Internship Project",
    note: "Mindsprint",
  },
  {
    title: "Fraud Detection Using Graph Neural Networks (GNN)",
    subtitle: "AI/ML Internship Project (Mindsprint)",
    description:
      "Built a fraud detection system using Graph Neural Networks on cryptocurrency transaction data.",
    details: [
      "Applied graph-based learning techniques for fraud classification and network analysis.",
      "Developed a Streamlit dashboard for fraud prediction visualization.",
    ],
    tech: ["Python", "PyTorch", "PyTorch Geometric", "NetworkX", "Scikit-Learn", "Streamlit", "Plotly"],
    github: null,
    demo: null,
    certificate: null,
    featured: true,
    date: "AI/ML Internship Project",
    note: "Mindsprint",
  },
  {
    title: "AI Plant Disease Detection & Advisory System",
    subtitle: "Hackathon Project",
    description:
      "Developed an AI-based system to detect plant diseases from images using computer vision techniques.",
    details: [
      "Delivered real-time advisory recommendations based on disease classification results.",
      "Applied machine learning to address agricultural problem-solving use cases.",
    ],
    tech: ["Machine Learning", "Computer Vision"],
    github: null,
    demo: null,
    certificate: null,
    featured: true,
    date: "Hackathon Project",
    note: "Hackathon",
  },
  {
    title: "Personal Expense Tracker",
    subtitle: "Internship Project (1Stop.ai)",
    description:
      "Built a responsive web app to track, analyze, and visualize expenses via an interactive dashboard.",
    details: [
      "Integrated Recharts for dynamic data visualization and real-time financial insights.",
      "Designed a clean, dark-themed UI ensuring seamless cross-device usability.",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "React Hook Form", "Zod"],
    github: null,
    demo: null,
    certificate: null,
    featured: true,
    date: "Internship Project",
    note: "1Stop.ai",
  },
]

  const experience = [
    {
      company: "Mozilla Firefox Club VIT",
      role: "Senior Core Member",
      duration: "Aug 2025 - Present",
      location: "Vellore, Tamil Nadu",
      description: [
        "Contributing to club activities and projects focused on open-source technologies.",
        "Collaborating with fellow members on technical initiatives and workshops.",
        "Engaging in events to promote open-source principles and web literacy within the university community.",
      ],
      tech: ["Community", "Open Source", "Collaboration"],
    },
    {
      company: "Mindsprint (Wipro Group Company)",
      role: "AI/ML Intern",
      duration: "May 2026 – Jul 2026",
      location: "Chennai, India",
      description: [
        "Completed a 2-month AI/ML internship focused on Generative AI, Machine Learning, Deep Learning, NLP, and Document Intelligence solutions.",
        "Developed 10+ AI/ML Proof-of-Concepts including HR Analytics AI Assistant, Multimodal Document Understanding System, and Fraud Detection using Graph Neural Networks.",
        "Built enterprise AI applications using LLMs, FastAPI, PostgreSQL, PyTorch, Hugging Face Transformers, LangChain, and LangGraph.",
        "Implemented scalable AI solutions, interactive dashboards, and observability pipelines for real-world business use cases.",
      ],
      tech: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "PyTorch",
        "LangChain",
        "LangGraph",
        "Llama 3.3 70B",
        "Gemini 2.5 Flash",
        "Hugging Face Transformers",
        "Streamlit",
        "Langfuse",
      ],
    },
    {
      company: "1Stop.ai",
      role: "Front-End Web Development Intern",
      duration: "Jul 2025 – Sep 2025",
      location: "Remote",
      description: [
        "Completed a Front-End Web Development internship focusing on building responsive interfaces",
        "Built projects including a Portfolio Website, To-Do List App, and Personal Expense Tracker",
        "Gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, and jQuery",
        "Improved skills in creating responsive and user-friendly applications",
      ],
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    },
  ]

  const skills = {
    "Artificial Intelligence & Machine Learning": [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Explainable AI (SHAP)",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "OCR & Document Intelligence",
      "Graph Neural Networks (GNNs)",
      "Transfer Learning",
      "Model Evaluation & Optimization",
    ],
    "AI/ML Frameworks & Libraries": [
      "PyTorch",
      "Scikit-Learn",
      "XGBoost",
      "Hugging Face Transformers",
      "LangChain",
      "LangGraph",
      "PyTorch Geometric",
      "Pandas",
      "NumPy",
      "EasyOCR",
    ],
    "Backend Development": ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Streamlit"],
    "Frontend Development": ["Next.js", "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Databases": ["PostgreSQL", "MongoDB", "SQL"],
    "Programming Languages": [
      "Python (Proficient)",
      "Java (Proficient)",
      "C++ (Intermediate)",
      "C (Intermediate)",
      "TypeScript",
    ],
    "Tools & Platforms": ["Git", "GitHub", "Linux", "VS Code", "Postman", "pgAdmin", "Langfuse", "Vercel"],
    "Core Concepts": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Problem Solving",
      "Software Engineering",
      "API Development",
    ],
  }

  const certifications = [
    {
      title: "AI/ML Intern | Mindsprint (Wipro Group Company) | May 2026 – Jul 2026",
      provider: "Mindsprint (Wipro Group Company)",
      date: "May 2026 – Jul 2026",
      description:
        "Developed 10+ AI/ML and Generative AI Proof-of-Concepts across NLP, Computer Vision, Document Intelligence, Explainable AI, and Graph Neural Networks. Built enterprise AI solutions using LLMs, FastAPI, PostgreSQL, PyTorch, Hugging Face Transformers, LangChain, and LangGraph.",
      skills: [
        "AI/ML",
        "Generative AI",
        "NLP",
        "Computer Vision",
        "Document Intelligence",
        "Explainable AI",
        "Graph Neural Networks",
        "LLMs",
        "FastAPI",
        "PostgreSQL",
        "PyTorch",
        "Hugging Face Transformers",
        "LangChain",
        "LangGraph",
      ],
      verify: null,
    },
    {
      title: "IIT Guwahati (1Stop.ai) certified Web Development - Front-End",
      provider: "IIT Guwahati / 1Stop.ai",
      date: "Sep 2025",
      description: "Front-end focused web development certification covering responsive single-page sites and tooling.",
      skills: [
        "Web Development",
        "Front-End Development",
        "HTML",
        "Cascading Style Sheets (CSS)",
        "JavaScript",
        "jQuery",
        "Bootstrap (Framework)",
      ],
      verify: null,
    },
    {
      title: "Introduction to LangGraph",
      provider: "LangChain Academy",
      date: "Jul 2025",
      description: "Introduction to LangGraph (LangChain Academy)",
      skills: ["LangGraph"],
      verify: null,
    },
  ]

  // Achievements removed per user request

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const scrollToSection = (id: string) => {
    const el = typeof document !== "undefined" ? document.getElementById(id) : null
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setIsLoaded(true)
    const sections = ["home", "about", "experience", "projects", "contact"]
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const sec of sections) {
        const el = document.getElementById(sec)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sec)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-orange-400 font-mono text-lg font-bold"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-mono text-sm transition-colors duration-300 hover:text-orange-400 ${
                    activeSection === section ? "text-orange-400" : "text-stone-300"
                  }`}
                >
                  {section}
                </button>
              ))}
              {/* Resume removed from header per user request */}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-stone-300 hover:text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-950 border-t border-stone-800">
            <div className="px-4 py-4 space-y-4">
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block capitalize font-mono text-sm text-stone-300 hover:text-orange-400"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-orange-400 mb-4 text-lg animate-fade-in-up"></p>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-200 mb-4 animate-fade-in-up break-words leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Lakshya Sampath Kumar
            </h1>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-400 mb-6 animate-fade-in-up break-words leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              I build scalable solutions.
            </h2>
            <p
              className="text-lg sm:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Passionate about creating innovative digital experiences that solve real-world problems. Second year
              Computer Science with Artificial Intelligence student with expertise in full-stack development and AI/ML.
              Let's build the future together, one line of code at a time.
            </p>

            <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Badge variant="secondary" className="bg-blue-400/10 text-blue-400 border-blue-400/20">
                <Calendar className="h-4 w-4 mr-2" />
                Graduating 2028
              </Badge>
              <Badge variant="secondary" className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                <MapPin className="h-4 w-4 mr-2" />
                Chennai, Tamil Nadu
              </Badge>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 font-mono btn-glow"
                onClick={() => scrollToSection("projects")}
              >
                <Code className="h-4 w-4 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-stone-600 text-stone-300 hover:bg-stone-800 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com/LAKSHYA27042006"
                className="text-stone-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshyasampathkumar/"
                className="text-stone-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:lakshyasampathkumar@gmail.com"
                className="text-stone-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-orange-400">01.</span> About
              </h2>
              <div className="ml-8 h-px bg-stone-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <StaggeredReveal staggerDelay={200}>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Hello! I'm Lakshya S, a third-year B.Tech Computer Science and Engineering (Artificial Intelligence &amp;
                  Machine Learning) student at VIT Vellore, passionate about building intelligent systems that solve
                  real-world problems through AI, Machine Learning, and Generative AI.
                </p>

                <p className="text-slate-400 leading-relaxed mb-4">
                  I have internship experience as an AI/ML Intern at Mindsprint (Wipro Group Company) and a Front-End
                  Development Intern at 1Stop.ai. During my internship at Mindsprint, I developed multiple AI and
                  Generative AI solutions across domains such as HR Analytics, Document Intelligence, Explainable AI,
                  Graph Neural Networks, Computer Vision, and Natural Language Processing using technologies including
                  LLMs, FastAPI, PostgreSQL, PyTorch, LangChain, LangGraph, and Hugging Face Transformers.
                </p>

                <p className="text-slate-400 leading-relaxed mb-4">
                  I enjoy working on end-to-end AI applications, from model development and experimentation to deploying
                  scalable solutions with modern backend and frontend technologies. My interests include Generative AI,
                  Machine Learning, Deep Learning, NLP, Agentic AI, and building impactful AI-powered products that
                  bridge innovation and practical business needs.
                </p>
              </StaggeredReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Education</h3>
                  <Card className="bg-stone-800/50 border-stone-700 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-orange-400">
                            B.Tech Computer Science and Engineering
                          </h4>
                          <p className="text-slate-300">Vellore Institute of Technology, Vellore</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">Graduating 2028</p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={800}>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <Card
                        key={index}
                        className="bg-stone-800/50 border-stone-700 hover:border-orange-400/50 transition-all duration-300 rounded-2xl"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-orange-400 mb-1">{cert.title}</h4>
                              <p className="text-sm text-slate-300">{cert.provider}</p>
                              <p className="text-xs text-slate-400">{cert.date}</p>
                              {cert.description && <p className="text-sm text-slate-400 mt-1">{cert.description}</p>}
                              {cert.skills && (
                                <div className="mt-2">
                                  <p className="text-xs text-slate-400 mb-1">Skills & Topics:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {cert.skills.slice(0, 4).map((skill: string, i: number) => (
                                      <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs bg-stone-700 text-stone-300"
                                      >
                                        {skill}
                                      </Badge>
                                    ))}
                                    {cert.skills.length > 4 && (
                                      <Badge variant="secondary" className="text-xs bg-stone-700 text-stone-300">
                                        +{cert.skills.length - 4} more
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-2 ml-4">
                              {cert.verify && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-orange-600 text-orange-400 hover:bg-orange-700 bg-transparent text-xs"
                                  onClick={() => window.open(cert.verify, "_blank")}
                                >
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Verify Online
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={300}>
              <div className="flex justify-center">
                <RotatingCard />
              </div>
            </ScrollReveal>
          </div>

          {/* Technical Skills */}
          <ScrollReveal direction="up" delay={1000}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <ScrollReveal key={category} direction="up" delay={index * 100}>
                    <Card className="bg-stone-800/50 border-stone-700 hover:border-orange-400/50 transition-all duration-300 hover-lift rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg text-orange-400 flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-stone-700 text-stone-300 border-stone-600 hover:text-orange-400 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-orange-400">02.</span> Experience
              </h2>
              <div className="ml-8 h-px bg-stone-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <Card className="bg-stone-800/50 border-stone-700 hover:border-orange-400/50 transition-all duration-300 hover-lift rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-200">
                          {exp.role} <span className="text-orange-400">@ {exp.company}</span>
                        </h3>
                        <p className="text-slate-400 font-mono text-sm">{exp.duration}</p>
                      </div>
                      <div className="text-slate-400 text-sm mt-2 md:mt-0 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <ScrollReveal key={i} direction="left" delay={i * 100}>
                          <li className="text-slate-400 flex items-start">
                            <span className="text-orange-400 mr-3 mt-2">▹</span>
                            <span>{item}</span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <ScrollReveal key={tech} direction="up" delay={i * 50}>
                          <Badge
                            variant="secondary"
                            className="bg-stone-700 text-orange-400 border-stone-600 hover:bg-orange-400/10 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </ScrollReveal>
                      ))}
                    </div>
                    {/* Internship certificate button removed per user request */}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-orange-400">03.</span> Projects
              </h2>
              <div className="ml-8 h-px bg-stone-600 flex-1"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <div className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`md:col-span-7 ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                      <div className="relative group rounded-2xl">
                        <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700 hover:border-orange-400/50 transition-all duration-300 hover-lift">
                          <div className="absolute inset-0 bg-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="text-orange-400 font-mono text-sm">Featured Project</p>
                              <Badge variant="outline" className="text-xs border-stone-600 text-stone-400">
                                {project.date}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-200 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                            {project.subtitle && (
                              <p className="text-sm text-orange-400 font-medium mb-3">{project.subtitle}</p>
                            )}
                            <p className="text-slate-400 leading-relaxed">{project.description}</p>
                            {project.details && project.details.length > 0 && (
                              <ul className="mt-4 space-y-2">
                                {project.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-slate-400 flex items-start">
                                    <span className="text-orange-400 mr-3 mt-2">▹</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`md:col-span-5 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                      <div className="space-y-4">
                        <div
                          className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}
                        >
                          {project.tech.map((tech, i) => (
                            <ScrollReveal key={tech} direction="up" delay={i * 50}>
                              <Badge
                                variant="secondary"
                                className="bg-stone-700 text-orange-400 border-stone-600 font-mono text-xs hover:bg-orange-400/10 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            </ScrollReveal>
                          ))}
                        </div>

                        <div className={`flex space-x-4 ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}>
                          {project.github && (
                            <a
                              href={project.github}
                              className="text-stone-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 transform"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="text-stone-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        {project.note && (
                          <div className={`mt-2 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                            <Badge variant="outline" className="text-xs border-yellow-600 text-yellow-400">
                              {project.note}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>

          {/* Other Projects */}
          <ScrollReveal direction="up" delay={400}>
            <div className="mt-24">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 100}>
                      <Card className="bg-stone-800/50 border-stone-700 hover:border-orange-400/50 hover:-translate-y-2 transition-all duration-300 group hover-lift h-full rounded-2xl">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-4">
                            <div className="text-orange-400">
                              <Code className="h-8 w-8" />
                            </div>
                            <div className="flex space-x-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  className="text-stone-400 hover:text-orange-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="h-5 w-5" />
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  className="text-stone-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="h-5 w-5" />
                                </a>
                              )}
                              {project.certificate && (
                                <a
                                  href={project.certificate}
                                  className="text-stone-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Award className="h-5 w-5" />
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <h4 className="text-xl font-semibold text-slate-200 group-hover:text-orange-400 transition-colors duration-300">
                              {project.title}
                            </h4>
                            <Badge variant="outline" className="text-xs border-stone-600 text-stone-400">
                              {project.date}
                            </Badge>
                          </div>

                          <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-stone-700 text-stone-300 border-stone-600 font-mono text-xs hover:text-orange-400 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research section removed */}

      {/* Achievements & Interests removed per user request */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-200 font-mono">
                <span className="text-orange-400">04.</span> Contact
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700">
              <h3 className="text-2xl font-semibold text-slate-200 mb-4">Ready to create something amazing together?</h3>

              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-mono text-orange-400 text-sm mb-1">Email</h4>
                  <p className="text-slate-200 font-medium">lakshyasampathkumar@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-mono text-orange-400 text-sm mb-1">Phone</h4>
                  <p className="text-slate-200 font-medium">9344084278</p>
                </div>

                <div>
                  <h4 className="font-mono text-orange-400 text-sm mb-1">Location</h4>
                  <p className="text-slate-200 font-medium">Chennai, Tamil Nadu, India</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Chennai,+Tamil+Nadu,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 text-sm inline-flex items-center mt-1"
                  >
                    📍 View on Google Maps
                  </a>
                </div>

                <div className="mt-2 text-sm text-slate-400">Available for remote work globally</div>

                <div className="pt-4 border-t border-stone-700">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/lakshyasampathkumar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-400 hover:opacity-90"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span className="text-slate-200">LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/LAKSHYA27042006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-400 hover:opacity-90"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      <span className="text-slate-200">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal direction="up">
        <footer className="py-8 px-4 text-center border-t border-stone-800">
          <div className="max-w-6xl mx-auto">
            <p className="text-slate-400 font-mono text-sm mb-4">Built with Next.js, TypeScript & Tailwind CSS.</p>
            <p className="text-slate-500 text-xs">© 2024 Lakshya Sampath Kumar. All rights reserved.</p>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  )
}
