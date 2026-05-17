"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, ServerCog, BrainCircuit, Bot, ExternalLink } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => setMounted(true), []);

  const content = {
    en: {
      name: "Ezz El-Din Al-Muliki",
      honors: "Class of 2026 • Honors (90.27%)",
      title: "Mechatronics Engineer | AI & Industrial Automation | PLC, SCADA & Deep Learning | Robotic Systems",
      desc: "Architecting intelligent systems that bridge hardware and software. Proven Team Lead in developing ROS 2 autonomous robotics, air-gapped Edge-RAG frameworks, and advanced PLC/SCADA architectures for Industry 4.0.",
      explore: "Explore Systems",
      contact: "Contact Me",
      skillsTitle: "Core Competencies",
      cat1: "Industrial Automation & DCS",
      cat1Skills: ["Siemens S7-1200/S7-300 (TIA Portal)", "Allen-Bradley Micro800", "Ignition SCADA & Factory I/O", "OPC UA/DA, MQTT, PROFINET"],
      cat2: "Artificial Intelligence & Edge",
      cat2Skills: ["SLMs (Phi-3.5) & RAG", "Computer Vision (YOLOv8/v3)", "Azure AI & Edge Inference (ONNX)", "AutoML & Predictive Analytics"],
      cat3: "Robotics & Systems Engineering",
      cat3Skills: ["ROS 2 (Jazzy Jalisco) & Gazebo", "Embedded (ESP32, Arduino, C++)", "SolidWorks (CAD)", "Hardware-in-the-Loop (HIL) Testing"],
      projectsTitle: "Selected Technical Projects",
      rights: "All rights reserved.",
      projects: [
        {
          title: "UAV with VTOL System (Graduation Project)",
          desc: "Led a team to develop a Hybrid VTOL drone prototype. Orchestrated system architecture via ROS 2 and Gazebo. Integrated YOLOv8 for real-time tracking and reduced vibrations by 90%.",
          tech: ["ROS 2", "Gazebo", "YOLOv8", "Hardware"],
          link: "https://github.com/eizmecha"
        },
        {
          title: "Digital Twin & SCADA DCS PID Control",
          desc: "Architected an Industry 4.0 DCS integrating Factory I/O Digital Twin with Allen-Bradley PLC and Ignition SCADA. Achieved 1% steady-state error with advanced PID tuning.",
          tech: ["SCADA", "Allen-Bradley PLC", "Factory I/O", "PID"],
          link: "https://github.com/eizmecha/Digital-Twin-SCADA-PID-Control"
        },
        {
          title: "Air-Gapped Industrial AI Copilot (Edge-RAG)",
          desc: "Engineered a 100% air-gapped Industrial AI Copilot using SLM (Phi-3.5) and RAG with FAISS to process technical manuals locally with 98% accuracy.",
          tech: ["Phi-3.5", "RAG", "FAISS", "Python"],
          link: "https://github.com/eizmecha/Edge-RAG-Industrial-Framework-ERIF-"
        },
        {
          title: "Industrial Edge AOI System",
          desc: "Developed an end-to-end Automated Optical Inspection pipeline using Azure Custom Vision (ResNet) for casting defect detection, achieving 100% precision.",
          tech: ["Azure Custom Vision", "ONNX", "Computer Vision"],
          link: "https://github.com/eizmecha/Industrial-AOI-System"
        }
      ]
    },
    ar: {
      name: "عزالدين المليكي",
      honors: "دفعة 2026 • مرتبة الشرف (90.27%)",
      title: "مهندس ميكاترونكس | الذكاء الاصطناعي والأتمتة الصناعية | أنظمة PLC و SCADA والتعلم العميق | أنظمة الروبوتات",
      desc: "أصمم أنظمة ذكية تربط بين العتاد المادي والبرمجيات. قائد فريق مثبت الكفاءة في تطوير الروبوتات المستقلة (ROS 2)، وأنظمة Edge-RAG المعزولة، ومعماريات التحكم الصناعي (PLC/SCADA) المتقدمة للثورة الصناعية الرابعة.",
      explore: "استكشف الأنظمة",
      contact: "تواصل معي",
      skillsTitle: "الكفاءات الأساسية والتقنيات",
      cat1: "الأتمتة الصناعية وأنظمة التحكم الموزعة",
      cat1Skills: ["متحكمات Siemens S7 و Allen-Bradley", "أنظمة Ignition SCADA و Factory I/O", "بروتوكولات OPC UA/DA, MQTT, PROFINET", "تطوير لوحات التحكم الصناعية HMI"],
      cat2: "الذكاء الاصطناعي وحوسبة الحافة",
      cat2Skills: ["نماذج اللغات الصغيرة (SLM) وأنظمة RAG", "الرؤية الحاسوبية (YOLOv8/v3)", "الاستدلال الطرفي (ONNX) و Azure AI", "التحليل التنبؤي وتعلم الآلة"],
      cat3: "الروبوتات وهندسة الأنظمة",
      cat3Skills: ["نظام تشغيل الروبوتات ROS 2 ومحاكاة Gazebo", "الأنظمة المدمجة (ESP32, C++, Python)", "التصميم الميكانيكي (SolidWorks)", "اختبارات Hardware-in-the-Loop"],
      projectsTitle: "أبرز المشاريع التقنية",
      rights: "جميع الحقوق محفوظة.",
      projects: [
        {
          title: "طائرة مسيرة بنظام VTOL (مشروع التخرج)",
          desc: "قيادة فريق لتطوير نموذج طائرة هجينة. تم بناء المعمارية باستخدام ROS 2 و Gazebo، ودمج خوارزمية YOLOv8 للتتبع البصري، وتقليل الاهتزازات بنسبة 90%.",
          tech: ["ROS 2", "Gazebo", "YOLOv8", "Hardware"],
          link: "https://github.com/eizmecha"
        },
        {
          title: "توأم رقمي ونظام SCADA للتحكم الصناعي",
          desc: "تصميم نظام تحكم موزع (DCS) يدمج التوأم الرقمي (Factory I/O) مع متحكم Allen-Bradley وشاشات Ignition SCADA، مع ضبط دقيق لـ PID بنسبة خطأ 1%.",
          tech: ["SCADA", "Allen-Bradley PLC", "Factory I/O", "PID"],
          link: "https://github.com/eizmecha/Digital-Twin-SCADA-PID-Control"
        },
        {
          title: "مساعد ذكاء اصطناعي صناعي معزول (Edge-RAG)",
          desc: "تطوير مساعد ذكي معزول عن الإنترنت 100% باستخدام نماذج Phi-3.5 وتقنية RAG لمعالجة الأدلة الفنية محلياً بدقة بلغت 98%.",
          tech: ["Phi-3.5", "RAG", "FAISS", "Python"],
          link: "https://github.com/eizmecha/Edge-RAG-Industrial-Framework-ERIF-"
        },
        {
          title: "نظام الفحص البصري الصناعي (AOI)",
          desc: "تطوير نظام فحص بصري لاكتشاف عيوب التصنيع باستخدام Azure Custom Vision (ResNet) مع دقة تصل إلى 100% ومعالجة فورية للبيانات.",
          tech: ["Azure Custom Vision", "ONNX", "Computer Vision"],
          link: "https://github.com/eizmecha/Industrial-AOI-System"
        }
      ]
    },
  };

  const t = content[lang];
  const isRtl = lang === "ar";

  if (!mounted) return null;

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen font-sans relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* أزرار التحكم */}
      <div className="fixed top-6 right-6 z-50 flex gap-4">
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-md">
          <Globe size={20} className="text-slate-700 dark:text-slate-300" />
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 font-sans px-1">
            {lang === "en" ? "عربي" : "EN"}
          </span>
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-md">
          {theme === "dark" ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
        </button>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-5xl mt-20">
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            {t.honors}
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-500 drop-shadow-sm">
            {t.name}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="px-8 py-3 rounded-md bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30">
              {t.explore}
            </a>
            <a href="mailto:ezzeldin.almuliki@gmail.com" className="px-8 py-3 rounded-md border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all font-semibold">
              {t.contact}
            </a>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 px-8 max-w-6xl mx-auto w-full border-t border-slate-200 dark:border-slate-800 mt-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-800 dark:text-slate-100">
          {t.skillsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 group shadow-lg">
            <ServerCog className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{t.cat1}</h4>
            <ul className="space-y-3">
              {t.cat1Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <span className="text-emerald-500 mt-1">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group shadow-lg">
            <BrainCircuit className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{t.cat2}</h4>
            <ul className="space-y-3">
              {t.cat2Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <span className="text-cyan-500 mt-1">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-8 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 group shadow-lg">
            <Bot className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{t.cat3}</h4>
            <ul className="space-y-3">
              {t.cat3Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <span className="text-indigo-500 mt-1">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-16 px-8 max-w-6xl mx-auto w-full mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-800 dark:text-slate-100">
          {t.projectsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.map((project, index) => (
            <div key={index} className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-8 rounded-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h4>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 py-8 mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm w-full text-center">
        <div className="flex justify-center items-center gap-6 mb-4">
          <a href="https://linkedin.com/in/ezzeldin-almuliki" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <a href="https://github.com/eizmecha" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <a href="mailto:ezzeldin.almuliki@gmail.com" className="font-bold text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">
            Email
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Ezz El-Din Al-Muliki. {t.rights}
        </p>
      </footer>

    </div>
  );
}