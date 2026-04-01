import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Brain,
  Briefcase,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Trophy,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  SiCodechef,
  SiGeeksforgeeks,
  SiGithub,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";

// ---- Types ----
interface Project {
  title: string;
  category: string;
  color: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
}

// ---- Data ----
const PROJECTS: Project[] = [
  {
    title: "Federated Cyber-attack Detection System",
    category: "Research",
    color: "#14b8a6",
    description:
      "A privacy-preserving federated learning framework for detecting cyber-attacks across distributed networks without sharing raw data.",
    highlights: [
      "Autoencoders for anomaly detection",
      "SMOTETomek for class imbalance",
      "Cross-dataset generalization",
    ],
    tech: ["Python", "PyTorch", "Federated Learning", "scikit-learn"],
    githubUrl: "https://github.com/Saggie213",
  },
  {
    title: "MoneyFlow",
    category: "Full-Stack",
    color: "#eab308",
    description:
      "A decentralized personal finance tracker built on the Internet Computer with real-time analytics and intelligent financial health scoring.",
    highlights: [
      "Internet Identity authentication",
      "Financial Health Score algorithm",
      "ICP blockchain integration",
    ],
    tech: ["React", "TypeScript", "Motoko", "ICP", "Tailwind", "Recharts"],
    githubUrl: "https://github.com/Saggie213",
  },
  {
    title: "EcoScore",
    category: "Full-Stack",
    color: "#10b981",
    description:
      "AI-powered platform that calculates personal carbon footprint and ESG scores, offering actionable sustainability recommendations.",
    highlights: [
      "AI carbon footprint calculator",
      "ESG score computation",
      "ML-powered recommendations",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "scikit-learn"],
    githubUrl: "https://github.com/Saggie213",
  },
  {
    title: "Price Alert",
    category: "Full-Stack",
    color: "#f97316",
    description:
      "Real-time price tracking system for e-commerce products with automated alerts and Amazon product search integration.",
    highlights: [
      "Real-time price tracking",
      "Amazon product search API",
      "Email & SMS alerts",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/Saggie213",
  },
  {
    title: "Expense Ease",
    category: "Web App",
    color: "#8b5cf6",
    description:
      "Intuitive expense tracking application with category-based analytics, supporting 100+ entries with visual breakdowns.",
    highlights: [
      "100+ entries support",
      "Category tracking",
      "Visual analytics dashboard",
    ],
    tech: ["React.js", "Tailwind", "JavaScript", "Chart.js"],
    githubUrl: "https://github.com/Saggie213",
  },
];

const SKILLS = [
  {
    title: "Frontend",
    color: "#14b8a6",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material-UI",
    ],
  },
  {
    title: "Backend",
    color: "#f97316",
    skills: ["Node.js", "Express.js", "Django", "FastAPI"],
  },
  {
    title: "Databases",
    color: "#06b6d4",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Oracle SQL"],
  },
  {
    title: "ML Libraries",
    color: "#ec4899",
    skills: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    color: "#8b5cf6",
    skills: ["Git", "GitHub", "VSCode", "PyCharm", "Jupyter", "Postman"],
  },
];

const CODING_PLATFORMS = [
  {
    name: "Codeforces",
    handle: "@Thande_papa14",
    color: "#B83234",
    url: "https://codeforces.com/profile/Thande_papa14",
    icon: "CF",
  },
  {
    name: "CodeChef",
    handle: "@thanda_chai14",
    color: "#F08A2B",
    url: "https://www.codechef.com/users/thanda_chai14",
    icon: "CC",
  },
  {
    name: "LeetCode",
    handle: "@vasuli12",
    color: "#F2C14E",
    url: "https://leetcode.com/vasuli12",
    icon: "LC",
  },
  {
    name: "GeeksforGeeks",
    handle: "@saggi7xux",
    color: "#2FB463",
    url: "https://auth.geeksforgeeks.org/user/saggi7xux",
    icon: "GFG",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Flipkart GRiD 7.0 Semi-Finalist",
    year: "2025",
    color: "#14b8a6",
    icon: Trophy,
  },
  {
    title: "CodeChef START144D — 188th Rank",
    year: "2024",
    color: "#F08A2B",
    icon: Star,
  },
  {
    title: "Google Data Analytics Certification",
    year: "2024",
    color: "#4285F4",
    icon: GraduationCap,
  },
  {
    title: "Full-Stack Web Dev Bootcamp — Udemy",
    year: "2023",
    color: "#8b5cf6",
    icon: Code2,
  },
];

// ---- Animation Variants ----
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ---- Hooks ----
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ---- Sub Components ----
function SectionTag({
  text,
  color = "teal",
}: { text: string; color?: string }) {
  return (
    <span
      className="font-mono text-xs tracking-widest uppercase"
      style={{
        color:
          color === "teal"
            ? "#14b8a6"
            : color === "yellow"
              ? "#eab308"
              : "#14b8a6",
      }}
    >
      {text}
    </span>
  );
}

function GlassCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`glass-card rounded-3xl p-6 hover-lift ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

// ---- Navbar ----
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/profile-photo.jpg"
            alt="Sougata Halder"
            className="w-9 h-9 rounded-xl object-cover"
          />
          <span className="font-semibold text-white hidden sm:block">
            Sougata Halder
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact" data-ocid="nav.primary_button">
            <Button className="bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full px-5">
              Hire Me
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/98 border-b border-white/5 px-4 pb-4"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-3 text-gray-400 hover:text-white border-b border-white/5 last:border-0"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              className="block mt-3 w-full"
              onClick={() => {
                setMobileOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="nav.primary_button"
            >
              <div className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full flex items-center justify-center h-10 text-sm">
                Hire Me
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---- Hero ----
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #14b8a6, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob-2 absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #f97316, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob-3 absolute top-1/2 right-1/3 w-72 h-72 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob-4 absolute top-1/3 left-1/2 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #eab308, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-dot" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Sougata
              <br />
              <span className="gradient-text">Halder</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl gradient-text font-semibold"
            >
              Full-Stack Developer & ML Researcher
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg max-w-lg"
            >
              Building intelligent systems & crafting exceptional web
              experiences
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#projects" data-ocid="hero.primary_button">
                <Button className="bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full px-6 py-3 gap-2">
                  View My Work <ArrowRight size={16} />
                </Button>
              </a>
              <a href="#contact" data-ocid="hero.secondary_button">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3 border-white/20 text-white hover:bg-white/5"
                >
                  Get in Touch
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-2">
              {["12+ Projects Built", "7+ Hackathons", "5+ Tech Stacks"].map(
                (stat) => (
                  <div key={stat} className="text-center">
                    <p className="text-white font-bold text-xl">
                      {stat.split(" ")[0]}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {stat.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(20,184,166,0.3) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                }}
              />
              {/* Avatar frame */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1"
                style={{
                  background:
                    "linear-gradient(135deg, #14b8a6, #06b6d4, #8b5cf6)",
                }}
              >
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Sougata Halder"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -left-8 top-8 glass-card rounded-2xl px-4 py-3 flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code2 size={18} className="text-teal-400" />
                <span className="text-white text-sm font-medium">
                  Full-Stack Dev
                </span>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-12 glass-card rounded-2xl px-4 py-3 flex items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Brain size={18} className="text-purple-400" />
                <span className="text-white text-sm font-medium">
                  ML Research
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce-y" />
        </motion.div>
      </div>
    </section>
  );
}

// ---- About ----
function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  const progressBars = [
    { label: "Full-Stack Development", pct: 90, color: "#14b8a6" },
    { label: "Problem Solving", pct: 85, color: "#06b6d4" },
    { label: "Machine Learning", pct: 80, color: "#f97316" },
    { label: "System Design", pct: 75, color: "#8b5cf6" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <SectionTag text="// about me" />
            <h2 className="text-4xl font-bold text-white mt-2">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div variants={fadeUp} className="space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a passionate Computer Science student at{" "}
                <span className="text-teal-400 font-medium">BIT Mesra</span>{" "}
                with a deep interest in machine learning and full-stack web
                development. Currently working on federated learning systems
                while building scalable web applications that make a real
                impact.
              </p>

              <div className="space-y-5">
                {progressBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{bar.label}</span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: bar.color }}
                      >
                        {bar.pct}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      {isVisible && (
                        <div
                          className="h-full rounded-full animate-progress"
                          style={
                            {
                              background: `linear-gradient(90deg, ${bar.color}, ${bar.color}aa)`,
                              "--progress-width": `${bar.pct}%`,
                            } as React.CSSProperties
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Decorative card */}
              <GlassCard className="text-center py-10">
                <img
                  src="/assets/profile-photo.jpg"
                  alt="Sougata Halder"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white">Sougata Halder</h3>
                <p className="text-teal-400 text-sm mt-1">
                  Full-Stack Dev & ML Researcher
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {["React", "Python", "PyTorch", "Node.js"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="space-y-1">
                  <GraduationCap size={20} className="text-teal-400" />
                  <p className="text-white font-semibold text-sm">BIT Mesra</p>
                  <p className="text-gray-500 text-xs">B.Tech CSE • CGPA 7.8</p>
                </GlassCard>
                <GlassCard className="space-y-1">
                  <MapPin size={20} className="text-cyan-400" />
                  <p className="text-white font-semibold text-sm">Location</p>
                  <p className="text-gray-500 text-xs">Kolkata, WB, India</p>
                </GlassCard>
                <GlassCard className="space-y-1">
                  <Mail size={20} className="text-orange-400" />
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-gray-500 text-xs break-all">
                    halderdk33@gmail.com
                  </p>
                </GlassCard>
                <GlassCard className="space-y-1">
                  <Phone size={20} className="text-purple-400" />
                  <p className="text-white font-semibold text-sm">Phone</p>
                  <p className="text-gray-500 text-xs">+91 94340 32833</p>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Projects ----
function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const filters = ["All Projects", "Web Apps", "Research"];

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "Research") return p.category === "Research";
    return p.category !== "Research";
  });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <SectionTag text="// featured work" />
            <h2 className="text-4xl font-bold text-white mt-2">
              Featured Projects
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-teal-500 text-black"
                    : "glass-card text-gray-400 hover:text-white"
                }`}
                data-ocid="projects.tab"
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="glass-card rounded-3xl overflow-hidden hover-lift flex flex-col"
                data-ocid={`projects.item.${i + 1}`}
              >
                {/* Colored top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}66)`,
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        data-ocid="projects.link"
                      >
                        <Github size={16} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                          data-ocid="projects.link"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-gray-500 text-xs flex items-start gap-2"
                      >
                        <span
                          style={{ color: project.color }}
                          className="mt-0.5 shrink-0"
                        >
                          ▸
                        </span>{" "}
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div variants={fadeUp} className="text-center mt-12">
            <a
              href="https://github.com/Saggie213"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="projects.primary_button"
            >
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 border-teal-500/40 text-teal-400 hover:bg-teal-500/10 gap-2"
              >
                <SiGithub size={16} /> View All Projects on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Skills ----
function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();
  const languages = [
    "C/C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "NoSQL",
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <SectionTag text="// technical arsenal" />
            <h2 className="text-4xl font-bold text-white mt-2">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {SKILLS.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                data-ocid={`skills.item.${i + 1}`}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${cat.color}25` }}
                    >
                      <Code2 size={16} style={{ color: cat.color }} />
                    </div>
                    <h3 className="font-bold text-white">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: `${cat.color}40`,
                          color: cat.color,
                          background: `${cat.color}10`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Languages row */}
          <motion.div variants={fadeUp}>
            <GlassCard>
              <h3 className="font-bold text-white mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 bg-white/5"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Experience ----
function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          {/* Education */}
          <motion.div variants={fadeUp} className="mb-16">
            <SectionTag text="// journey" color="yellow" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-8">
              Education
            </h2>
            <div className="space-y-4">
              <GlassCard className="hover-lift">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={22} className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        BIT Mesra
                      </h3>
                      <p className="text-teal-400 text-sm">
                        B.Tech in Computer Science & Engineering
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        CGPA: 7.8 • Jharkhand, India
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 shrink-0">
                    Nov 2022 – Jun 2026
                  </Badge>
                </div>
              </GlassCard>

              <GlassCard className="hover-lift">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={22} className="text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        Delhi Public School Ruby Park
                      </h3>
                      <p className="text-teal-400 text-sm">
                        Senior Secondary (12th)
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        87% • Kolkata, West Bengal
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 shrink-0">
                    Completed
                  </Badge>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={fadeUp} className="mb-16">
            <SectionTag text="// leadership & experience" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-8">
              Leadership
            </h2>
            <GlassCard className="hover-lift">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                    <Briefcase size={22} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Director @ IETE Student Branch
                    </h3>
                    <p className="text-teal-400 text-sm">BIT Mesra</p>
                    <ul className="text-gray-500 text-sm mt-2 space-y-1">
                      <li>▸ Recruited 80+ students to the branch</li>
                      <li>▸ Organized Web Development Workshop</li>
                      <li>▸ Managed a team of 5 developers</li>
                    </ul>
                  </div>
                </div>
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 shrink-0">
                  May 2024 – Present
                </Badge>
              </div>
            </GlassCard>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={fadeUp} className="mb-16">
            <SectionTag text="// recognition" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-8">
              Achievements
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <GlassCard
                  key={ach.title}
                  className="text-center hover-lift"
                  data-ocid={`achievements.item.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: `${ach.color}20` }}
                  >
                    <ach.icon size={22} style={{ color: ach.color }} />
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {ach.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{ach.year}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Competitive Programming */}
          <motion.div variants={fadeUp} className="mb-12">
            <SectionTag text="// competitive programming" />
            <h2 className="text-4xl font-bold text-white mt-2 mb-8">
              Competitive Programming
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CODING_PLATFORMS.map((platform, i) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-3xl overflow-hidden hover-lift block"
                  data-ocid={`coding.item.${i + 1}`}
                >
                  <div
                    className="h-1.5"
                    style={{ background: platform.color }}
                  />
                  <div className="p-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-black text-sm mb-3"
                      style={{ background: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <h3 className="text-white font-bold">{platform.name}</h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: platform.color }}
                    >
                      {platform.handle}
                    </p>
                    <ExternalLink size={14} className="mt-3 text-gray-600" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Connect */}
          <motion.div variants={fadeUp}>
            <GlassCard className="text-center">
              <h3 className="text-white font-bold text-lg mb-6">
                Connect with me
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    icon: SiGithub,
                    label: "GitHub",
                    url: "https://github.com/Saggie213",
                    color: "#fff",
                  },
                  {
                    icon: SiLinkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/sougata-halder-b76b94134/",
                    color: "#0A66C2",
                  },
                  {
                    icon: SiLeetcode,
                    label: "LeetCode",
                    url: "https://leetcode.com/vasuli12",
                    color: "#F2C14E",
                  },
                  {
                    icon: SiCodechef,
                    label: "CodeChef",
                    url: "https://www.codechef.com/users/thanda_chai14",
                    color: "#F08A2B",
                  },
                  {
                    icon: SiGeeksforgeeks,
                    label: "GFG",
                    url: "https://auth.geeksforgeeks.org/user/saggi7xux",
                    color: "#2FB463",
                  },
                ].map(({ icon: Icon, label, url, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm"
                    data-ocid="social.link"
                  >
                    <Icon size={16} style={{ color }} />
                    {label}
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Contact ----
function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionTag text="// get in touch" />
            <h2 className="text-4xl font-bold text-white mt-2">
              Let's Work Together
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-4">
              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:halderdk33@gmail.com"
                    className="text-white font-medium hover:text-teal-400 transition-colors"
                    data-ocid="contact.link"
                  >
                    halderdk33@gmail.com
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+919434032833"
                    className="text-white font-medium hover:text-cyan-400 transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 94340 32833
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Globe size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/sougata-halder-b76b94134/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                    data-ocid="contact.link"
                  >
                    sougata-halder
                  </a>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={fadeUp}>
              <GlassCard>
                <h3 className="text-white font-bold text-lg mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-gray-400 text-sm mb-1.5 block"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-gray-400 text-sm mb-1.5 block"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="text-gray-400 text-sm mb-1.5 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500/50 resize-none"
                      required
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full py-3"
                    data-ocid="contact.submit_button"
                  >
                    {sent ? "Message Sent! ✓" : "Send Message"}
                  </Button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- Footer ----
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/profile-photo.jpg"
              alt="Sougata Halder"
              className="w-9 h-9 rounded-xl object-cover"
            />
            <span className="text-white font-semibold">Sougata Halder</span>
          </div>

          <p className="text-gray-600 text-sm text-center">
            © {year} Sougata Halder · Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              caffeine.ai
            </a>
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: SiGithub, url: "https://github.com/Saggie213" },
              {
                icon: SiLinkedin,
                url: "https://www.linkedin.com/in/sougata-halder-b76b94134/",
              },
              { icon: SiLeetcode, url: "https://leetcode.com/vasuli12" },
            ].map(({ icon: Icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---- App ----
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
