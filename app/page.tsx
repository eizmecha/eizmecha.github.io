"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { 
  Moon, Sun, Globe, ServerCog, BrainCircuit, Bot, 
  ExternalLink, Cpu, Activity, Award, Network, 
  ChevronRight, Calendar, CheckCircle2, Briefcase, FileText 
} from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [activeTab, setActiveTab] = useState<"all" | "robotics" | "ai" | "industrial">("all");

  useEffect(() => setMounted(true), []);

  const content = {
    en: {
      name: "Ezz El-Din Al-Muliki",
      role: "Mechatronics Engineer",
      honors: "Class of April 2026 • Honors (90.27%)",
      title: "Mechatronics Engineer | AI & Industrial Automation | PLC, SCADA & Deep Learning | Robotic Systems",
      summaryTitle: "Professional Summary",
      summaryDesc: "High-achieving Mechatronics Engineer with a multidisciplinary background in robotics, AI, and industrial automation. Proven Team Lead for complex engineering projects, demonstrating strong capabilities in coordinating technical workflows and system integration. Gained practical industrial exposure through a residency at YCIC (HSA Group), focusing on automated production lines.",
      explore: "Initialize Systems",
      contact: "Establish Connection",
      
      stats: [
        { icon: <Award />, value: "90.27%", label: "GPA Excellent with Honor" },
        { icon: <Activity />, value: "90%", label: "VTOL Vibration Reduction" },
        { icon: <Cpu />, value: "1%", label: "PID Steady-State Error" },
        { icon: <Network />, value: "98%", label: "Edge-RAG Inference Accuracy" },
      ],

      journeyTitle: "Professional Timeline",
      journey: [
        {
          year: "May 2026",
          title: "Industrial AI Copilot & DCS Architect",
          org: "Independent R&D",
          desc: "Engineered an air-gapped Edge-RAG framework with Phi-3.5 and architected an Industry 4.0 DCS integrating Factory I/O with Allen-Bradley PLC and Ignition SCADA.",
        },
        {
          year: "April 2026",
          title: "Team Lead - VTOL UAV System",
          org: "Sana'a University (Graduation Project)",
          desc: "Led a multidisciplinary team to develop a Hybrid VTOL drone, utilizing ROS 2, Gazebo Digital Twin, and YOLOv8 for real-time visual tracking.",
        },
        {
          year: "May 2025",
          title: "Engineering Trainee",
          org: "Yemen Company for Industry & Commerce (YCIC - HSA Group)",
          desc: "Analyzed high-speed automated FMCG production lines, Siemens S7-300 PLCs, and studied electromechanical integration in large-scale manufacturing.",
        },
        {
          year: "Oct 2021 - Apr 2026",
          title: "B.Sc. in Mechatronics Engineering",
          org: "Sana'a University",
          desc: "Graduated with Excellent grade and Honors Degree. Medium of instruction: English.",
        }
      ],

      skillsTitle: "Core Competencies",
      cat1: "Industrial Automation & DCS",
      cat1Skills: ["Distributed Control Systems (DCS)", "Digital Twin (Factory I/O)", "Siemens S7-1200/S7-300 (TIA Portal)", "Allen-Bradley Micro800 (CCW)", "Advanced PID Tuning & Motion Control", "OPC UA/DA, MQTT, PROFINET, Modbus"],
      cat2: "Artificial Intelligence & Edge",
      cat2Skills: ["SLMs (Phi-3.5) & Industrial RAG", "YOLOv8/v3, Azure AI Vision", "Edge Inference (ONNX Runtime)", "Predictive Analytics (Azure AutoML)", "Vector Databases (FAISS)"],
      cat3: "Robotics & Systems Engineering",
      cat3Skills: ["ROS 2 (Jazzy Jalisco) & Gazebo", "MATLAB / Simulink", "ESP32, Arduino, MicroPython, C++", "SolidWorks (CAD)", "Hardware-in-the-Loop (HIL) Testing"],
      
      tabs: {
        all: "All Systems",
        robotics: "Robotics & Autonomy",
        ai: "AI & Machine Learning",
        industrial: "Embedded & Industrial Automation"
      },
      
      projectsTitle: "Selected Engineering Projects",
      projects: [
        {
          title: "Design of UAV with VTOL System",
          category: "robotics",
          desc: "Graduation Project. Led a multidisciplinary team to develop a Hybrid VTOL drone prototype. Orchestrated system architecture via ROS 2 and Gazebo Digital Twin simulations. Integrated YOLOv8 for visual tracking and flight control. Implemented Dynamic Notch Filters (DShot600), reducing vibrations by 90% (outperforming ArduPilot baseline by 4x).",
          tech: ["ROS 2", "Gazebo", "YOLOv8", "DShot600", "Aerodynamics"],
          link: "https://github.com/eizmecha"
        },
        {
          title: "Digital Twin & SCADA DCS PID Control Architecture",
          category: "industrial",
          desc: "Architected an Industry 4.0 DCS integrating Factory I/O Digital Twin with Allen-Bradley PLC and Ignition SCADA via Cogent DataHub (OPC UA/DA). Implemented a PID control loop in Ladder Logic with advanced tuning, achieving 1% steady-state error and eliminating integral windup. Resolved OPC UA anomalies for deterministic data acquisition.",
          tech: ["Ignition SCADA", "Allen-Bradley PLC", "Factory I/O", "OPC UA", "Ladder Logic"],
          link: "https://github.com/eizmecha/Digital-Twin-SCADA-PID-Control"
        },
        {
          title: "Air-Gapped Industrial AI Copilot (Edge-RAG)",
          category: "ai",
          desc: "Engineered a 100% air-gapped Industrial AI Copilot utilizing Small Language Models (Phi-3.5) and RAG with FAISS to process thousands of technical manuals locally. Designed a Two-Layer Defense Architecture achieving 98% accuracy and integrated a Streamlit HMI with hardware E-STOP, compliant with Purdue Model Levels 2/3.",
          tech: ["Phi-3.5 SLM", "RAG", "FAISS", "Streamlit", "Purdue Model"],
          link: "https://github.com/eizmecha/Edge-RAG-Industrial-Framework-ERIF-"
        },
        {
          title: "Industrial Edge Optical Inspection (AOI) System",
          category: "ai",
          desc: "Developed an end-to-end Automated Optical Inspection pipeline using Azure Custom Vision (ResNet) for casting defect detection, achieving 100% precision and mAP on industrial datasets. Engineered an offline Edge AI engine via ONNX Runtime for zero-latency processing, integrated with a CustomTkinter HMI and PLC logic.",
          tech: ["Azure Custom Vision", "ResNet", "ONNX Runtime", "CustomTkinter", "PLC Logic"],
          link: "https://github.com/eizmecha/Industrial-AOI-System"
        },
        {
          title: "Cloud-Based Predictive Analytics & ML Pipeline",
          category: "ai",
          desc: "Architected an end-to-end Azure AutoML pipeline using CRISP-DM methodology for mechanical valuations, achieving an R2 Score of 0.895 via Voting Ensemble regression. Deployed the optimized model as a cloud-hosted REST API endpoint for real-time diagnostics.",
          tech: ["Azure AutoML", "CRISP-DM", "REST API", "Regression", "Ensemble Learning"],
          link: "https://github.com/eizmecha/Car-Price-Prediction-using-Azure-AutoML-"
        },
        {
          title: "IoT Edge-AI Object Detection",
          category: "industrial",
          desc: "Developed a cross-platform Edge-AI system integrating YOLOv3 with ESP32 via MQTT for real-time visual-triggered hardware automation and ultra-low latency notification pipelines.",
          tech: ["YOLOv3", "ESP32", "MQTT", "Edge-AI", "IoT Hardware"],
          link: "https://github.com/eizmecha/object-detection-YOLOv3-esp32"
        },
        {
          title: "Predictive Maintenance for NASA Turbofan Engines",
          category: "ai",
          desc: "Team Lead. Developed a Remaining Useful Life (RUL) prediction system using LSTM networks and Random Forest architectures, achieving 85.5% classification and regression accuracy. Featured a custom Streamlit dashboard for industrial health monitoring.",
          tech: ["LSTM", "Random Forest", "Predictive Maintenance", "NASA Dataset"],
          link: "https://github.com/eizmecha/Predictive-Maintenance-NASA-Turbofan"
        },
        {
          title: "Automotive Diagnostics Expert System",
          category: "ai",
          desc: "Engineered a Python-based multilingual expert system utilizing Knowledge Engineering and inference engines to automate diagnostics and troubleshooting across 11 automotive subsystems.",
          tech: ["Python", "Expert Systems", "Knowledge Engineering", "Diagnostics"],
          link: "https://github.com/eizmecha/Automotive-Expert-Engineer"
        },
        {
          title: "Automated Production Line & Integrated Warehouse",
          category: "industrial",
          desc: "Team Lead. Engineered a full manufacturing lifecycle simulation using Siemens S7-300 (TIA Portal) and Factory IO, orchestrating a 6-stage automated workflow from sorting to distribution. Validated automation logic within a Digital Twin environment.",
          tech: ["Siemens S7-300", "TIA Portal", "Factory IO", "HMI Design", "Digital Twin"],
          link: "https://github.com/eizmecha/Automated-Production-Line-with-Integrated-Warehouse-"
        }
      ],

      certsTitle: "Professional Certifications",
      certs: [
        { title: "Microsoft Azure AI Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", date: "May 2026" },
        { title: "Learn SCADA: Collect, Analyze, and Visualize Data", issuer: "LinkedIn Learning", date: "May 2026" },
        { title: "Become a PLC Developer (Learning Path)", issuer: "LinkedIn Learning", date: "April 2026" }
      ],
      rights: "All rights reserved.",
    },
    ar: {
      name: "عزالدين المليكي",
      role: "مهندس ميكاترونكس",
      honors: "دفعة أبريل 2026 • مرتبة الشرف (90.27%)",
      title: "مهندس ميكاترونكس | الذكاء الاصطناعي والأتمتة الصناعية | أنظمة PLC و SCADA والتعلم العميق | أنظمة الروبوتات",
      summaryTitle: "الملخص المهني",
      summaryDesc: "مهندس ميكاترونكس متميز ذو خلفية متعددة التخصصات في الروبوتات، الذكاء الاصطناعي، والأتمتة الصناعية. قائد فريق مثبت الكفاءة للمشاريع الهندسية المعقدة مع قدرة عالية على تنسيق سير العمل التقني وتكامل الأنظمة. اكتسبت خبرة صناعية عملية مكثفة من خلال التدريب في الشركة اليمنية للصناعة والتجارة (مجموعة هائل سعيد أنعم)، مع التركيز على خطوط الإنتاج المؤتمتة.",
      explore: "تهيئة الأنظمة",
      contact: "إنشاء اتصال",
      
      stats: [
        { icon: <Award />, value: "%90.27", label: "معدل ممتاز مع مرتبة الشرف" },
        { icon: <Activity />, value: "%90", label: "تقليل اهتزازات طائرات VTOL" },
        { icon: <Cpu />, value: "%1", label: "نسبة خطأ الاستقرار لـ PID" },
        { icon: <Network />, value: "%98", label: "دقة استدلال نماذج الـ RAG" },
      ],

      journeyTitle: "المسار المهني والأكاديمي",
      journey: [
        {
          year: "مايو 2026",
          title: "مهندس ذكاء اصطناعي صناعي وأنظمة DCS",
          org: "أبحاث وتطوير مستقلة",
          desc: "تطوير مساعد ذكي معزول عن الإنترنت (Edge-RAG) باستخدام نماذج Phi-3.5، وتصميم بنية تحكم موزع يدمج التوأم الرقمي مع متحكمات Allen-Bradley وشاشات Ignition SCADA.",
        },
        {
          year: "أبريل 2026",
          title: "قائد فريق - طائرة VTOL المسيرة",
          org: "جامعة صنعاء (مشروع التخرج)",
          desc: "قيادة فريق لتطوير نموذج طائرة هجينة ذاتية القيادة بالكامل، باستخدام برمجيات ROS 2 وتوأم رقمي في Gazebo، ودمج خوارزمية YOLOv8 للتتبع البصري في الزمن الحقيقي.",
        },
        {
          year: "مايو 2025",
          title: "مهندس متدرب",
          org: "الشركة اليمنية للصناعة والتجارة (YCIC - مجموعة هائل سعيد أنعم)",
          desc: "تحليل خطوط الإنتاج السريعة (FMCG) ومتحكمات Siemens S7-300، ودراسة بروتوكولات السلامة والصحة المهنية وتكامل الحساسات والمشغلات الميكانيكية الكبيرة.",
        },
        {
          year: "أكتوبر 2021 - أبريل 2026",
          title: "بكالوريوس هندسة الميكاترونكس",
          org: "جامعة صنعاء",
          desc: "التخرج بتقدير ممتاز مع مرتبة الشرف الأولى. لغة الدراسة الأساسية: اللغة الإنجليزية.",
        }
      ],

      skillsTitle: "الكفاءات الأساسية والتقنيات",
      cat1: "الأتمتة الصناعية وأنظمة التحكم الموزعة",
      cat1Skills: ["أنظمة التحكم الموزع (DCS) والـ IIoT", "بناء التوأم الرقمي وتشغيله (Factory I/O)", "متحكمات Siemens S7-1200/S7-300 (TIA Portal)", "برمجة متحكمات Allen-Bradley (CCW)", "الضبط المتقدم لحلقات PID والتحكم بالمنظومات", "بروتوكولات OPC UA/DA, MQTT, PROFINET, Modbus"],
      cat2: "الذكاء الاصطناعي وحوسبة الحافة",
      cat2Skills: ["نماذج اللغات الصغيرة (SLM Phi-3.5) وأنظمة RAG", "أنظمة الرؤية الحاسوبية YOLOv8/v3 و Azure AI", "الاستدلال الطرفي ومعالجة ONNX Runtime", "التحليل التنبؤي ومسارات Azure AutoML", "قواعد البيانات المتجهة (FAISS Database)"],
      cat3: "الروبوتات وهندسة الأنظمة",
      cat3Skills: ["نظام تشغيل الروبوتات ROS 2 ومحاكاة Gazebo", "النمذجة الرياضية عبر MATLAB / Simulink", "الأنظمة المدمجة (ESP32, Arduino, C++, MicroPython)", "التصميم الميكانيكي الصلب (SolidWorks CAD)", "اختبارات المحاكاة Hardware-in-the-Loop (HIL)"],
      
      tabs: {
        all: "كافة الأنظمة",
        robotics: "الروبوتات والأنظمة الذاتية",
        ai: "الذكاء الاصطناعي وتعلم الآلة",
        industrial: "الأنظمة المدمجة والأتمتة الصناعية"
      },
      
      projectsTitle: "معماريات الأنظمة والمشاريع الهندسية",
      projects: [
        {
          title: "طائرة مسيرة هجينة بنظام الإقلاع العمودي (VTOL UAV)",
          category: "robotics",
          desc: "مشروع التخرج (قائد الفريق). تطوير نموذج طائرة مسيرة هجينة متكاملة. تم بناء وبناء معمارية النظام ومحاكاتها بالكامل كتوأم رقمي باستخدام ROS 2 و Gazebo. دمج نموذج YOLOv8 للتتبع البصري في الزمن الحقيقي وأتمتة التحكم بالطيران. تطبيق مرشحات الإيقاف الديناميكي (Dynamic Notch Filters) عبر بروتوكول DShot600، مما قلل الاهتزازات بنسبة 90% (متفوقاً على أداء ArduPilot القياسي بـ 4 أضعاف).",
          tech: ["ROS 2", "Gazebo", "YOLOv8", "DShot600", "Aerodynamics"],
          link: "https://github.com/eizmecha"
        },
        {
          title: "معمارية تحكم DCS متكاملة ونظام SCADA وتوأم رقمي",
          category: "industrial",
          desc: "تصميم نظام تحكم موزع متكامل للثورة الصناعية الرابعة يربط التوأم الرقمي (Factory I/O) بمتحكم Allen-Bradley وشاشات مراقبة Ignition SCADA عبر بروتوكولات OPC UA/DA باستخدام Cogent DataHub. بناء منطق PID بلغة الـ Ladder تحقيقاً لنسبة خطأ استقرار 1% مع إلغاء ظاهرة Integral Windup تماماً، وحل مشاكل تدفق البيانات التوجيهية للزمن الحقيقي.",
          tech: ["Ignition SCADA", "Allen-Bradley PLC", "Factory I/O", "OPC UA", "Ladder Logic"],
          link: "https://github.com/eizmecha/Digital-Twin-SCADA-PID-Control"
        },
        {
          title: "مساعد ذكاء اصطناعي صناعي معزول تماماً (Edge-RAG)",
          category: "ai",
          desc: "هندسة وبناء مساعد ذكي صناعي يعمل محلياً ومعزول عن الإنترنت بنسبة 100% باستخدام نماذج اللغات الصغيرة (Phi-3.5) وتقنيات استرجاع المعلومات RAG مع قاعدة بيانات FAISS لمعالجة آلاف الكتيبات الفنية للمعدات الصناعية بشكل فوري وبدقة 98%. تم تصميم بنية دفاعية ثنائية الطبقات متوافقة مع مستويات Purdue Model 2/3 وربطها بواجهة Streamlit ومفتاح طوارئ مادي (E-STOP).",
          tech: ["Phi-3.5 SLM", "RAG", "FAISS", "Streamlit", "Purdue Model"],
          link: "https://github.com/eizmecha/Edge-RAG-Industrial-Framework-ERIF-"
        },
        {
          title: "نظام الفحص البصري التلقائي الصناعي (AOI System)",
          category: "ai",
          desc: "تطوير مسار فحص بصري متكامل للمصانع يعتمد على الرؤية الحاسوبية العميقة باستخدام Azure Custom Vision ومعمارية ResNet لاكتشاف عيوب المسبوكات المعدنية بدقة 100%. تم تحويل النموذج للعمل دون إنترنت بالكامل كـ Edge AI عبر ONNX Runtime لمعالجة الصور بزمن تأخير منعدم (Zero-latency) وربطه بواجهة CustomTkinter لتفعيل قواذف الرفض الهوائية عبر الـ PLC.",
          tech: ["Azure Custom Vision", "ResNet", "ONNX Runtime", "CustomTkinter", "PLC Logic"],
          link: "https://github.com/eizmecha/Industrial-AOI-System"
        },
        {
          title: "تحليل البيانات التنبؤي السحابي عبر Azure AutoML",
          category: "ai",
          desc: "بناء مسار متكامل لتحليل وتخمين القيم الميكانيكية بالاعتماد على منهجية CRISP-DM العالمية باستخدام نظم التعلم الآلي المؤتمتة Azure AutoML، محققاً نسبة دقة R2 تبلغ 0.895 عبر خوارزميات التجميع الرجعي (Voting Ensemble). تم نشر النموذج كـ REST API سحابي للاستدعاء الفوري لتشغيل تطبيقات التشخيص الآلي.",
          tech: ["Azure AutoML", "CRISP-DM", "REST API", "Regression", "Ensemble Learning"],
          link: "https://github.com/eizmecha/Car-Price-Prediction-using-Azure-AutoML-"
        },
        {
          title: "نظام كشف الأجسام الطرفي عبر إنترنت الأشياء IoT Edge-AI",
          category: "industrial",
          desc: "تطوير نظام هجين متقاطع البيئات يدمج خوارزميات YOLOv3 لمعالجة الصور على الحافة مع المقاطع البرمجية لمتحكمات ESP32 باستخدام بروتوكول MQTT الخفيف لتفعيل الأتمتة الميكانيكية الفورية بناءً على المحفزات البصرية.",
          tech: ["YOLOv3", "ESP32", "MQTT", "Edge-AI", "IoT Hardware"],
          link: "https://github.com/eizmecha/object-detection-YOLOv3-esp32"
        },
        {
          title: "نظام الصيانة التنبؤية لمحركات الطائرات النفاثة التابعة لـ NASA",
          category: "ai",
          desc: "قائد فريق. تطوير نظام برمجيات متقدم للتنبؤ بالعمر النافع المتبقي (RUL) للمحركات التوربينية باستخدام الشبكات العصبية المتكررة LSTM وخوارزميات الغابات العشوائية (Random Forest) محققاً دقة تصنيف وتنبؤ بلغت 85.5%، مدمجاً بلوحة قراءة Streamlit لمراقبة الصحة الهيكلية للمعدات.",
          tech: ["LSTM", "Random Forest", "Predictive Maintenance", "NASA Dataset"],
          link: "https://github.com/eizmecha/Predictive-Maintenance-NASA-Turbofan"
        },
        {
          title: "نظام خبير لتشخيص أعطال المركبات والسيارات الذكي",
          category: "ai",
          desc: "هندسة وتطوير نظام خبير ذكي متعدد اللغات ببنية بايثون يعتمد على هندسة المعرفة (Knowledge Engineering) ومحركات الاستدلال المنطقي لأتمتة عمليات كشف الأعطال وإصلاحها عبر 11 قطاعاً هندسياً معقداً في منظومات السيارات.",
          tech: ["Python", "Expert Systems", "Knowledge Engineering", "Diagnostics"],
          link: "https://github.com/eizmecha/Automotive-Expert-Engineer"
        },
        {
          title: "محاكاة خط إنتاج مؤتمت ومستودع ذكي متكامل",
          category: "industrial",
          desc: "قائد فريق. هندسة وبرمجة دورة تصنيع ومناولة كاملة باستخدام لغة الـ TIA Portal لمتحكمات Siemens S7-300 وربطها ببيئة المحاكاة التفاعلية Factory IO لفرز وتوزيع المنتجات عبر 6 مراحل مؤتمتة بالكامل، ومراقبتها بشاشة HMI متزامنة لحظياً.",
          tech: ["Siemens S7-300", "TIA Portal", "Factory IO", "HMI Design", "Digital Twin"],
          link: "https://github.com/eizmecha/Automated-Production-Line-with-Integrated-Warehouse-"
        }
      ],

      certsTitle: "الشهادات والاعتمادات المهنية",
      certs: [
        { title: "Microsoft Azure AI Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", date: "مايو 2026" },
        { title: "Learn SCADA: Collect, Analyze, and Visualize Data", issuer: "LinkedIn Learning", date: "مايو 2026" },
        { title: "Become a PLC Developer (Learning Path)", issuer: "LinkedIn Learning", date: "أبريل 2026" }
      ],
      rights: "جميع الحقوق محفوظة.",
    },
  };

  const t = content[lang];
  const isRtl = lang === "ar";

  const filteredProjects = t.projects.filter(p => activeTab === "all" || p.category === activeTab);

  if (!mounted) return null;

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen font-sans relative bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 transition-colors duration-500">
      
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60 dark:opacity-100"></div>

      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#070b14]/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="font-mono font-bold text-lg tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            EZZ_ALMULIKI.sys
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <a href="#about" className="hover:text-emerald-500 transition-colors">{isRtl ? "عن المهندس" : "About"}</a>
              <a href="#skills" className="hover:text-emerald-500 transition-colors">{isRtl ? "الكفاءات" : "Skills"}</a>
              <a href="#projects" className="hover:text-emerald-500 transition-colors">{isRtl ? "المشاريع" : "Projects"}</a>
              <a href="#journey" className="hover:text-emerald-500 transition-colors">{isRtl ? "المسار" : "Timeline"}</a>
              <a href="#certs" className="hover:text-emerald-500 transition-colors">{isRtl ? "الشهادات" : "Certifications"}</a>
            </div>
            <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 hidden md:inline"></span>
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="px-3 py-1.5 rounded bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-all flex items-center gap-2 text-xs font-bold border border-slate-300 dark:border-slate-700">
              <Globe size={14} /> {lang === "en" ? "عربي" : "EN"}
            </button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-300/60 dark:hover:bg-slate-700/60 transition-all border border-slate-300 dark:border-slate-700">
              {theme === "dark" ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </nav>

      <header className="relative z-10 pt-36 pb-16 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <Award size={14} /> {t.honors}
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-indigo-400">
          {lang === "en" ? "Ezz El-Din Al-Muliki" : "عز الدين المليكي"}
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-8 max-w-4xl leading-relaxed font-mono">
          {t.title}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#projects" className="px-8 py-3 rounded bg-emerald-600 dark:bg-emerald-500 text-white dark:text-[#070b14] font-bold hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all flex items-center justify-center gap-2">
            <ServerCog size={16} /> {t.explore}
          </a>
          <a href="mailto:ezzeldin.almuliki@gmail.com" className="px-8 py-3 rounded border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-bold">
            {t.contact}
          </a>
        </div>
      </header>

      <section className="relative z-10 py-8 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-6 rounded-lg shadow-sm flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
              <div className="text-emerald-600 dark:text-emerald-400 mb-4 opacity-75 group-hover:scale-110 transition-transform w-fit">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl font-mono font-black text-slate-800 dark:text-white tracking-tight mb-1">{stat.value}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-emerald-500" size={22} />
            <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white">{t.summaryTitle}</h3>
          </div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            {t.summaryDesc}
          </p>
        </div>
      </section>

      <section id="skills" className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{t.skillsTitle}</h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800/80 p-8 rounded-lg shadow-md hover:border-emerald-500/30 transition-all">
            <ServerCog className="w-9 h-9 text-emerald-600 dark:text-emerald-400 mb-6" />
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-4">{t.cat1}</h4>
            <ul className="space-y-3.5">
              {t.cat1Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                  <ChevronRight size={14} className="text-emerald-500 shrink-0 mt-1" /> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800/80 p-8 rounded-lg shadow-md hover:border-cyan-500/30 transition-all">
            <BrainCircuit className="w-9 h-9 text-cyan-600 dark:text-cyan-400 mb-6" />
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-4">{t.cat2}</h4>
            <ul className="space-y-3.5">
              {t.cat2Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                  <ChevronRight size={14} className="text-cyan-500 shrink-0 mt-1" /> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800/80 p-8 rounded-lg shadow-md hover:border-indigo-500/30 transition-all">
            <Bot className="w-9 h-9 text-indigo-600 dark:text-indigo-400 mb-6" />
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-4">{t.cat3}</h4>
            <ul className="space-y-3.5">
              {t.cat3Skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm font-semibold">
                  <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-1" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{t.projectsTitle}</h3>
          
          <div className="flex flex-wrap gap-2 bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-lg border border-slate-300 dark:border-slate-800 w-fit">
            {(Object.keys(t.tabs) as Array<keyof typeof t.tabs>).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-4 py-2 text-xs font-bold rounded transition-all ${
                  activeTab === tabKey 
                    ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-[#070b14] shadow-sm" 
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {t.tabs[tabKey]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white/70 dark:bg-[#0c1322]/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 rounded-lg hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between group border-l-4 border-l-slate-400 dark:border-l-slate-700 hover:border-l-emerald-500 dark:hover:border-l-emerald-400">
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors" title="View Source Code">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-justify font-normal">
                  {project.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-semibold rounded font-mono bg-slate-200/50 text-slate-700 dark:bg-slate-900/60 dark:text-emerald-400/90 border border-slate-300/40 dark:border-slate-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{t.journeyTitle}</h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent"></div>
        </div>

        <div className="relative border-l-[2px] border-slate-300 dark:border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
          {t.journey.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[39px] md:-left-[55px] top-1.5 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-800 border-2 border-slate-50 dark:border-[#070b14] group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-300"></div>
              
              <div className="bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800/60 p-6 rounded-lg hover:bg-white dark:hover:bg-slate-900/40 transition-colors shadow-sm">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-2 block uppercase tracking-widest">{item.year}</span>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Briefcase size={16} className="text-slate-400" /> {item.title}
                </h4>
                <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">{item.org}</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certs" className="relative z-10 py-16 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{t.certsTitle}</h3>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-300 dark:from-slate-800 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.certs.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 p-6 rounded-lg flex flex-col justify-between shadow-sm hover:border-emerald-500/30 transition-all">
              <div>
                <CheckCircle2 className="text-emerald-500 mb-4 shrink-0" size={20} />
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-snug mb-2">{cert.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider pt-3 border-t border-slate-100 dark:border-slate-800/40">
                <Calendar size={12} /> {cert.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 py-10 mt-16 border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-[#05080f] backdrop-blur-md w-full text-center">
        <div className="flex justify-center items-center gap-6 mb-4 text-sm font-bold">
          <a href="https://linkedin.com/in/ezzeldin-almuliki" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">LinkedIn</a>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <a href="https://github.com/eizmecha" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">GitHub</a>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <a href="mailto:ezzeldin.almuliki@gmail.com" className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors">Email</a>
        </div>
        <p className="text-slate-500 dark:text-slate-500 text-xs font-semibold mb-2">
          © {new Date().getFullYear()} Ezz El-Din Al-Muliki. {t.rights}
        </p>
        <div className="text-[10px] font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase flex justify-center items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          SYS_STATUS: OPERATIONAL // ENV: PRODUCTION_READY
        </div>
      </footer>

    </div>
  );
}