/* ============================================================
   Ibrahim Tayyab Memon — Portfolio
   Main Page JavaScript (v3 — Dynamic Skills & Projects)

   DEPENDENCIES: data.js must be loaded BEFORE this file.
   
   SECTIONS:
   1.  Content Data (7 languages)
   2.  State
   3.  Initialization (DOMContentLoaded)
   4.  renderSkills() — reads from SKILLS array (data.js)
   5.  renderProjects() — reads from PROJECTS array (data.js)
   6.  Show More / Show Less Toggle
   7.  renderServices()
   8.  Language System  (setLanguage / updatePlaceholders)
   9.  Dark / Light Mode
   10. Language Menu
   11. Mobile Hamburger Menu
   12. Scroll Handling (direction-aware navbar + progress bar)
   13. Smooth Scroll
   14. Text Rotation (Designer ↔ Developer)
   15. CV Download
   16. Scroll-Triggered Animations (IntersectionObserver)
   ============================================================ */


/* ──────────────────────────────────────────────────────────────
   1. CONTENT DATA — 7 Languages (spell-checked & professional)
   ────────────────────────────────────────────────────────────── */
const content = {

    english: {
        name: "Ibrahim Tayyab Memon",
        nickname: "(I T)",
        description: "Passionate full-stack developer specializing in modern web technologies. Transforming ideas into scalable digital solutions with cutting-edge tools.",
        navItems: ["home", "skills", "about", "services", "contact"],
        skillsTitle: "Skills",
        aboutTitle: "About Me",
        aboutDetails: {
            location: "Pakistan", education: "11th-Grade Student", profession: "Next.js & TypeScript Developer",
            techExpertise: "Technical Expertise", experience: "Experience", projects: "Key Projects",
            journey: "Journey & Aspirations",
            techList: [
                "Next.js — Experienced in building modern, scalable web applications",
                "TypeScript — Strong understanding of type safety and OOP principles",
                "React.js — Proficient in component-based architectures",
                "Tailwind CSS — Efficient utility-first styling implementation",
                "API Integration — REST APIs and dynamic data fetching",
            ],
            experienceDesc: "Web Developer (Freelance / Projects)",
            experienceList: [
                "Developed multiple web applications using Next.js & TypeScript",
                "Implemented responsive UI with Tailwind CSS",
                "Integrated REST APIs for dynamic content",
            ],
            journeyQuote: "Balancing school with coding taught me time management and problem-solving.",
            futureFocus: "Future Focus: Advancing full-stack capabilities and contributing to open-source projects.",
        },
        servicesTitle: "Services",
        servicesList: [
            "🛠️ Custom Web Development: Fast, secure, and scalable websites",
            "🎨 UI/UX Design: Visually appealing interfaces",
            "🔌 API Integration: Seamless third-party API connections",
            "📱 Front-End Development: Mobile-first responsive solutions",
        ],
        contactTitle: "Get in Touch",
        contactDesc: "I'd love to hear about your project! Let's connect! 💡",
        hireMe: "Hire Me", downloadCV: "Download CV", sendMessage: "Send Message",
        responseTime: "I'll get back to you within 24 hours! ⏳",
        placeholders: { name: "Your Name", email: "Your Email", message: "Your Message" },
        iAmText: "I'm a", textRotation: ["Designer", "Developer"],
        linkedinText: "LinkedIn Profile", githubText: "GitHub Portfolio",
        footer: {
            solutions: "Solutions", useCases: "Use Cases", resources: "Resources", company: "Company",
            explore: "Explore", about: "About", careers: "Careers", contactUs: "Contact Us",
            privacy: "Privacy Policy", subscribe: "Subscribe",
            copyright: "© 2025 Ibrahim Tayyab Memon (I T). All Rights Reserved.",
            subName: "Your Name", subEmail: "Your Email",
        },
    },

    urdu: {
        name: "ابراہیم طیّب میمن", nickname: "(آئی ٹی)",
        description: "جدید ویب ٹیکنالوجیز میں مہارت رکھنے والا پُرجوش فُل اسٹیک ڈویلپر۔ جدید ترین ٹولز کے ذریعے خیالات کو قابلِ توسیع ڈیجیٹل حل میں بدلنا۔",
        navItems: ["ہوم", "مہارتیں", "تعارف", "خدمات", "رابطہ"],
        skillsTitle: "مہارتیں", aboutTitle: "میرا تعارف",
        aboutDetails: {
            location: "پاکستان", education: "گیارہویں جماعت کا طالبِ علم", profession: "Next.js اور TypeScript ڈویلپر",
            techExpertise: "تکنیکی مہارت", experience: "تجربہ", projects: "اہم پروجیکٹس",
            journey: "سفر اور عزائم",
            techList: [
                "Next.js — جدید، قابلِ توسیع ویب ایپلیکیشنز بنانے کا تجربہ",
                "TypeScript — ٹائپ سیفٹی اور OOP اصولوں کی مضبوط سمجھ",
                "React.js — کمپوننٹ پر مبنی آرکیٹیکچر میں مہارت",
                "Tailwind CSS — مؤثر یوٹیلیٹی فرسٹ اسٹائلنگ",
                "API انٹیگریشن — REST APIs اور ڈائنامک ڈیٹا فیچنگ",
            ],
            experienceDesc: "ویب ڈویلپر (فری لانس / پروجیکٹس)",
            experienceList: [
                "Next.js اور TypeScript کے ذریعے متعدد ویب ایپلیکیشنز تیار کیں",
                "Tailwind CSS سے ریسپانسو یوزر انٹرفیس بنایا",
                "ڈائنامک مواد کے لیے REST APIs کو مربوط کیا",
            ],
            journeyQuote: "تعلیم اور کوڈنگ کے درمیان توازن نے مجھے وقت کا نظم اور مسائل حل کرنا سکھایا۔",
            futureFocus: "مستقبل کا ہدف: فُل اسٹیک صلاحیتوں کو بڑھانا اور اوپن سورس میں حصہ ڈالنا۔",
        },
        servicesTitle: "خدمات",
        servicesList: [
            "🛠️ حسبِ ضرورت ویب ڈویلپمنٹ: تیز، محفوظ اور قابلِ توسیع ویب سائٹس",
            "🎨 UI/UX ڈیزائن: دلکش اور خوبصورت انٹرفیس",
            "🔌 API انٹیگریشن: بے عیب تھرڈ پارٹی API کنکشنز",
            "📱 فرنٹ اینڈ ڈویلپمنٹ: موبائل فرسٹ ریسپانسو حل",
        ],
        contactTitle: "رابطہ کریں",
        contactDesc: "میں آپ کے پروجیکٹ کے بارے میں جاننا چاہوں گا! آئیے رابطہ کرتے ہیں! 💡",
        hireMe: "مجھے ملازمت دیں", downloadCV: "سی وی ڈاؤن لوڈ کریں", sendMessage: "پیغام بھیجیں",
        responseTime: "میں 24 گھنٹوں کے اندر جواب دوں گا! ⏳",
        placeholders: { name: "آپ کا نام", email: "آپ کا ای میل", message: "آپ کا پیغام" },
        iAmText: "میں ایک", textRotation: ["ڈیزائنر", "ڈویلپر"],
        linkedinText: "لنکڈاِن پروفائل", githubText: "گِٹ ہب پورٹ فولیو",
        footer: {
            solutions: "حل", useCases: "استعمال", resources: "وسائل", company: "کمپنی",
            explore: "دریافت کریں", about: "تعارف", careers: "کیریئرز",
            contactUs: "ہم سے رابطہ کریں", privacy: "رازداری کی پالیسی", subscribe: "سبسکرائب",
            copyright: "© 2025 ابراہیم طیّب میمن (آئی ٹی)۔ جملہ حقوق محفوظ ہیں۔",
            subName: "آپ کا نام", subEmail: "آپ کا ای میل",
        },
    },

    spanish: {
        name: "Ibrahim Tayyab Memon", nickname: "(I T)",
        description: "Desarrollador full-stack apasionado, especializado en tecnologías web modernas. Transformo ideas en soluciones digitales escalables con herramientas de vanguardia.",
        navItems: ["inicio", "habilidades", "sobre mí", "servicios", "contacto"],
        skillsTitle: "Habilidades", aboutTitle: "Sobre Mí",
        aboutDetails: {
            location: "Pakistán", education: "Estudiante de 11.° grado", profession: "Desarrollador Next.js y TypeScript",
            techExpertise: "Experiencia Técnica", experience: "Experiencia", projects: "Proyectos Clave",
            journey: "Trayectoria y Aspiraciones",
            techList: [
                "Next.js — Experiencia en la construcción de aplicaciones web modernas y escalables",
                "TypeScript — Sólida comprensión de la seguridad de tipos y los principios de POO",
                "React.js — Competente en arquitecturas basadas en componentes",
                "Tailwind CSS — Implementación eficiente del estilo utility-first",
                "Integración de APIs — APIs REST y obtención dinámica de datos",
            ],
            experienceDesc: "Desarrollador Web (Freelance / Proyectos)",
            experienceList: [
                "Desarrollé múltiples aplicaciones web con Next.js y TypeScript",
                "Implementé interfaces de usuario responsivas con Tailwind CSS",
                "Integré APIs REST para contenido dinámico",
            ],
            journeyQuote: "Equilibrar la escuela con la programación me enseñó gestión del tiempo y resolución de problemas.",
            futureFocus: "Enfoque futuro: mejorar las capacidades full-stack y contribuir a proyectos de código abierto.",
        },
        servicesTitle: "Servicios",
        servicesList: [
            "🛠️ Desarrollo Web Personalizado: Sitios rápidos, seguros y escalables",
            "🎨 Diseño UI/UX: Interfaces visualmente atractivas",
            "🔌 Integración de APIs: Conexiones perfectas con APIs de terceros",
            "📱 Desarrollo Front-End: Soluciones responsivas mobile-first",
        ],
        contactTitle: "Contáctame",
        contactDesc: "¡Me encantaría conocer tu proyecto! ¡Conectemos! 💡",
        hireMe: "Contrátame", downloadCV: "Descargar CV", sendMessage: "Enviar Mensaje",
        responseTime: "¡Te responderé en 24 horas! ⏳",
        placeholders: { name: "Tu Nombre", email: "Tu Correo", message: "Tu Mensaje" },
        iAmText: "Soy", textRotation: ["Diseñador", "Desarrollador"],
        linkedinText: "Perfil de LinkedIn", githubText: "Portafolio en GitHub",
        footer: {
            solutions: "Soluciones", useCases: "Casos de Uso", resources: "Recursos", company: "Compañía",
            explore: "Explorar", about: "Acerca de", careers: "Carreras", contactUs: "Contáctanos",
            privacy: "Política de Privacidad", subscribe: "Suscribirse",
            copyright: "© 2025 Ibrahim Tayyab Memon (I T). Todos los derechos reservados.",
            subName: "Tu Nombre", subEmail: "Tu Correo",
        },
    },

    french: {
        name: "Ibrahim Tayyab Memon", nickname: "(I T)",
        description: "Développeur full-stack passionné, spécialisé dans les technologies web modernes. Je transforme les idées en solutions numériques évolutives grâce à des outils de pointe.",
        navItems: ["accueil", "compétences", "à propos", "services", "contact"],
        skillsTitle: "Compétences", aboutTitle: "À Propos de Moi",
        aboutDetails: {
            location: "Pakistan", education: "Élève de 11e année", profession: "Développeur Next.js & TypeScript",
            techExpertise: "Expertise Technique", experience: "Expérience", projects: "Projets Clés",
            journey: "Parcours & Aspirations",
            techList: [
                "Next.js — Expérience dans la création d'applications web modernes et évolutives",
                "TypeScript — Solide compréhension de la sécurité des types et des principes de la POO",
                "React.js — Compétent en architectures basées sur les composants",
                "Tailwind CSS — Mise en œuvre efficace du style utility-first",
                "Intégration d'API — API REST et récupération dynamique de données",
            ],
            experienceDesc: "Développeur Web (Freelance / Projets)",
            experienceList: [
                "Développé plusieurs applications web avec Next.js & TypeScript",
                "Implémenté des interfaces utilisateur réactives avec Tailwind CSS",
                "Intégré des API REST pour du contenu dynamique",
            ],
            journeyQuote: "Concilier études et programmation m'a appris la gestion du temps et la résolution de problèmes.",
            futureFocus: "Objectif futur : améliorer mes compétences full-stack et contribuer à des projets open source.",
        },
        servicesTitle: "Services",
        servicesList: [
            "🛠️ Développement Web Sur-Mesure : Sites rapides, sécurisés et évolutifs",
            "🎨 Conception UI/UX : Interfaces visuellement attrayantes",
            "🔌 Intégration d'API : Connexions tierces transparentes",
            "📱 Développement Front-End : Solutions réactives mobile-first",
        ],
        contactTitle: "Contactez-moi",
        contactDesc: "J'aimerais en savoir plus sur votre projet ! Connectons-nous ! 💡",
        hireMe: "Engagez-moi", downloadCV: "Télécharger le CV", sendMessage: "Envoyer le Message",
        responseTime: "Je vous répondrai sous 24 heures ! ⏳",
        placeholders: { name: "Votre Nom", email: "Votre E-mail", message: "Votre Message" },
        iAmText: "Je suis", textRotation: ["Designer", "Développeur"],
        linkedinText: "Profil LinkedIn", githubText: "Portfolio GitHub",
        footer: {
            solutions: "Solutions", useCases: "Cas d'Utilisation", resources: "Ressources", company: "Entreprise",
            explore: "Explorer", about: "À Propos", careers: "Carrières", contactUs: "Contactez-nous",
            privacy: "Politique de Confidentialité", subscribe: "S'abonner",
            copyright: "© 2025 Ibrahim Tayyab Memon (I T). Tous droits réservés.",
            subName: "Votre Nom", subEmail: "Votre E-mail",
        },
    },

    german: {
        name: "Ibrahim Tayyab Memon", nickname: "(I T)",
        description: "Leidenschaftlicher Full-Stack-Entwickler mit Spezialisierung auf moderne Webtechnologien. Ich verwandle Ideen in skalierbare digitale Lösungen mit modernsten Tools.",
        navItems: ["Startseite", "Fähigkeiten", "Über mich", "Leistungen", "Kontakt"],
        skillsTitle: "Fähigkeiten", aboutTitle: "Über Mich",
        aboutDetails: {
            location: "Pakistan", education: "Schüler der 11. Klasse", profession: "Next.js- & TypeScript-Entwickler",
            techExpertise: "Technische Expertise", experience: "Erfahrung", projects: "Schlüsselprojekte",
            journey: "Werdegang & Ziele",
            techList: [
                "Next.js — Erfahrung im Bau moderner, skalierbarer Webanwendungen",
                "TypeScript — Fundierte Kenntnisse in Typsicherheit und OOP-Prinzipien",
                "React.js — Versiert in komponentenbasierten Architekturen",
                "Tailwind CSS — Effiziente Umsetzung von Utility-First-Styling",
                "API-Integration — REST-APIs und dynamische Datenabfrage",
            ],
            experienceDesc: "Webentwickler (Freelance / Projekte)",
            experienceList: [
                "Entwicklung mehrerer Webanwendungen mit Next.js & TypeScript",
                "Umsetzung responsiver UI mit Tailwind CSS",
                "Integration von REST-APIs für dynamische Inhalte",
            ],
            journeyQuote: "Die Balance zwischen Schule und Programmieren lehrte mich Zeitmanagement und Problemlösung.",
            futureFocus: "Zukunftsziel: Full-Stack-Fähigkeiten ausbauen und zu Open Source beitragen.",
        },
        servicesTitle: "Leistungen",
        servicesList: [
            "🛠️ Individuelle Webentwicklung: Schnelle, sichere und skalierbare Websites",
            "🎨 UI/UX-Design: Visuell ansprechende Benutzeroberflächen",
            "🔌 API-Integration: Nahtlose Anbindung von Drittanbieter-APIs",
            "📱 Front-End-Entwicklung: Mobile-First-responsive Lösungen",
        ],
        contactTitle: "Kontakt aufnehmen",
        contactDesc: "Ich würde gerne mehr über Ihr Projekt erfahren! Lassen Sie uns in Kontakt treten! 💡",
        hireMe: "Beauftragen", downloadCV: "Lebenslauf herunterladen", sendMessage: "Nachricht senden",
        responseTime: "Ich antworte innerhalb von 24 Stunden! ⏳",
        placeholders: { name: "Ihr Name", email: "Ihre E-Mail", message: "Ihre Nachricht" },
        iAmText: "Ich bin", textRotation: ["Designer", "Entwickler"],
        linkedinText: "LinkedIn-Profil", githubText: "GitHub-Portfolio",
        footer: {
            solutions: "Lösungen", useCases: "Anwendungsfälle", resources: "Ressourcen", company: "Unternehmen",
            explore: "Entdecken", about: "Über uns", careers: "Karriere",
            contactUs: "Kontaktieren Sie uns", privacy: "Datenschutzrichtlinie", subscribe: "Abonnieren",
            copyright: "© 2025 Ibrahim Tayyab Memon (I T). Alle Rechte vorbehalten.",
            subName: "Ihr Name", subEmail: "Ihre E-Mail",
        },
    },

    arabic: {
        name: "إبراهيم طيب ميمون", nickname: "(آي تي)",
        description: "مطور ويب متكامل وشغوف متخصص في تقنيات الويب الحديثة. أحوّل الأفكار إلى حلول رقمية قابلة للتوسع باستخدام أحدث الأدوات.",
        navItems: ["الرئيسية", "المهارات", "عنّي", "الخدمات", "تواصل"],
        skillsTitle: "المهارات", aboutTitle: "عنّي",
        aboutDetails: {
            location: "باكستان", education: "طالب في الصف الحادي عشر", profession: "مطور Next.js و TypeScript",
            techExpertise: "الخبرة التقنية", experience: "الخبرة العملية", projects: "المشاريع الرئيسية",
            journey: "المسيرة والطموحات",
            techList: [
                "Next.js — خبرة في بناء تطبيقات ويب حديثة وقابلة للتوسع",
                "TypeScript — فهم عميق لسلامة الأنواع ومبادئ البرمجة الكائنية",
                "React.js — إتقان البنى القائمة على المكونات",
                "Tailwind CSS — تنفيذ فعّال لأنماط Utility-First",
                "تكامل API — واجهات REST API وجلب البيانات الديناميكي",
            ],
            experienceDesc: "مطور ويب (مستقل / مشاريع)",
            experienceList: [
                "طوّرت عدة تطبيقات ويب باستخدام Next.js و TypeScript",
                "نفّذت واجهات مستخدم متجاوبة باستخدام Tailwind CSS",
                "دمجت واجهات REST API للمحتوى الديناميكي",
            ],
            journeyQuote: "التوازن بين الدراسة والبرمجة علّمني إدارة الوقت وحلّ المشكلات.",
            futureFocus: "التركيز المستقبلي: تطوير قدرات التطوير المتكامل والمساهمة في المصادر المفتوحة.",
        },
        servicesTitle: "الخدمات",
        servicesList: [
            "🛠️ تطوير ويب مخصص: مواقع سريعة وآمنة وقابلة للتوسع",
            "🎨 تصميم UI/UX: واجهات جذابة بصريًا",
            "🔌 تكامل API: ربط سلس بواجهات الطرف الثالث",
            "📱 تطوير الواجهة الأمامية: حلول متجاوبة بنهج الجوال أولاً",
        ],
        contactTitle: "تواصل معي",
        contactDesc: "أودّ معرفة المزيد عن مشروعك! دعنا نتواصل! 💡",
        hireMe: "وظّفني", downloadCV: "تحميل السيرة الذاتية", sendMessage: "إرسال رسالة",
        responseTime: "سأردّ خلال 24 ساعة! ⏳",
        placeholders: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك" },
        iAmText: "أنا", textRotation: ["مصمم", "مطوّر"],
        linkedinText: "ملف LinkedIn الشخصي", githubText: "معرض GitHub",
        footer: {
            solutions: "الحلول", useCases: "حالات الاستخدام", resources: "الموارد", company: "الشركة",
            explore: "استكشف", about: "عنّا", careers: "الوظائف", contactUs: "اتصل بنا",
            privacy: "سياسة الخصوصية", subscribe: "اشترك",
            copyright: "© 2025 إبراهيم طيب ميمون (آي تي). جميع الحقوق محفوظة.",
            subName: "اسمك", subEmail: "بريدك الإلكتروني",
        },
    },

    chinese: {
        name: "易卜拉欣·塔亚布·梅蒙", nickname: "(I T)",
        description: "热衷于现代 Web 技术的全栈开发者。利用前沿工具将创意转化为可扩展的数字解决方案。",
        navItems: ["首页", "技能", "关于", "服务", "联系"],
        skillsTitle: "技能", aboutTitle: "关于我",
        aboutDetails: {
            location: "巴基斯坦", education: "11年级学生", profession: "Next.js 与 TypeScript 开发者",
            techExpertise: "技术专长", experience: "工作经验", projects: "核心项目",
            journey: "成长历程与抱负",
            techList: [
                "Next.js — 拥有构建现代、可扩展 Web 应用的经验",
                "TypeScript — 深入理解类型安全与面向对象编程原则",
                "React.js — 精通基于组件的架构",
                "Tailwind CSS — 高效使用 Utility-First 样式方案",
                "API 集成 — REST API 及动态数据获取",
            ],
            experienceDesc: "Web 开发者（自由职业 / 项目）",
            experienceList: [
                "使用 Next.js 和 TypeScript 开发了多个 Web 应用",
                "通过 Tailwind CSS 实现了响应式用户界面",
                "为动态内容集成了 REST API",
            ],
            journeyQuote: "平衡学业与编程让我学会了时间管理和解决问题的能力。",
            futureFocus: "未来目标：提升全栈开发能力并为开源社区做贡献。",
        },
        servicesTitle: "服务",
        servicesList: [
            "🛠️ 定制 Web 开发：快速、安全、可扩展的网站",
            "🎨 UI/UX 设计：视觉吸引力强的界面",
            "🔌 API 集成：与第三方 API 的无缝对接",
            "📱 前端开发：移动优先的响应式解决方案",
        ],
        contactTitle: "联系我",
        contactDesc: "期待了解您的项目！让我们联系吧！💡",
        hireMe: "雇用我", downloadCV: "下载简历", sendMessage: "发送消息",
        responseTime: "我将在 24 小时内回复！⏳",
        placeholders: { name: "您的姓名", email: "您的邮箱", message: "您的留言" },
        iAmText: "我是", textRotation: ["设计师", "开发者"],
        linkedinText: "LinkedIn 主页", githubText: "GitHub 作品集",
        footer: {
            solutions: "解决方案", useCases: "使用场景", resources: "资源", company: "公司",
            explore: "探索", about: "关于", careers: "职业机会", contactUs: "联系我们",
            privacy: "隐私政策", subscribe: "订阅",
            copyright: "© 2025 易卜拉欣·塔亚布·梅蒙 (I T)。保留所有权利。",
            subName: "您的姓名", subEmail: "您的邮箱",
        },
    },
};


/* ──────────────────────────────────────────────────────────────
   2. STATE
   ────────────────────────────────────────────────────────────── */
let currentLanguage = "english";
let isDarkMode = true;
let textIndex = 0;
let textRotationInterval = null;
let lastScrollY = 0;
let mobileMenuOpen = false;
let skillsExpanded = false;
const SKILLS_INITIAL_COUNT = 12;


/* ──────────────────────────────────────────────────────────────
   3. INITIALIZATION
   ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        isDarkMode = false;
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.getElementById("themeIcon").src = "assets/images/moon.png";
    }

    renderSkills();
    renderProjects();
    renderServices();
    updatePlaceholders();
    startTextRotation();
    setupScrollHandler();
    setupScrollAnimations();

    document.addEventListener("click", (e) => {
        const dropdown = document.querySelector(".language-dropdown");
        const menu = document.getElementById("languageMenu");
        if (dropdown && menu && !dropdown.contains(e.target)) {
            menu.classList.remove("open");
        }
    });
});


/* ──────────────────────────────────────────────────────────────
   4. RENDER SKILLS — reads from SKILLS array (data.js)
      Shows first 12, hides the rest with .hidden-card class
   ────────────────────────────────────────────────────────────── */
function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;

    grid.innerHTML = SKILLS.map((skill, i) => {
        const isHidden = i >= SKILLS_INITIAL_COUNT && !skillsExpanded;
        return `
      <div class="skill-card ${isHidden ? 'hidden-card' : ''}" 
           data-index="${i}"
           style="transition-delay: ${(i % SKILLS_INITIAL_COUNT) * 60}ms">
        <img src="${skill.icon}" 
             alt="${skill.name[currentLanguage]}" 
             class="skill-logo" 
             loading="lazy" width="64" height="64"
             onerror="this.style.display='none'">
        <div class="skill-name">${skill.name[currentLanguage]}</div>
      </div>
    `;
    }).join("");

    // Update button text and visibility
    const btn = document.getElementById("showMoreBtn");
    if (btn) {
        btn.style.display = SKILLS.length <= SKILLS_INITIAL_COUNT ? "none" : "inline-block";
        const labels = UI_LABELS;
        btn.textContent = skillsExpanded
            ? labels.showLess[currentLanguage]
            : labels.showMore[currentLanguage];
    }

    // Re-observe for scroll animations
    setupScrollAnimations();
}


/* ──────────────────────────────────────────────────────────────
   5. RENDER PROJECTS — reads from PROJECTS array (data.js)
      Just add objects to PROJECTS[] to add more projects.
   ────────────────────────────────────────────────────────────── */
function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((project) => `
    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card">
      <div class="project-image-wrapper">
        <img src="${project.image}" 
             alt="${project.title[currentLanguage]}" 
             class="project-image" 
             loading="lazy">
        <div class="project-image-overlay" aria-hidden="true"></div>
      </div>
      <div class="project-info">
        <h4>${project.title[currentLanguage]}</h4>
        <p>${project.desc[currentLanguage]}</p>
      </div>
    </a>
  `).join("");
}


/* ──────────────────────────────────────────────────────────────
   6. SHOW MORE / SHOW LESS TOGGLE
   ────────────────────────────────────────────────────────────── */
function toggleShowMore() {
    skillsExpanded = !skillsExpanded;

    const hiddenCards = document.querySelectorAll('.skill-card[data-index]');
    const btn = document.getElementById("showMoreBtn");

    hiddenCards.forEach(card => {
        const idx = parseInt(card.dataset.index);
        if (idx >= SKILLS_INITIAL_COUNT) {
            if (skillsExpanded) {
                // Reveal: remove hidden-card, trigger animation
                card.classList.remove("hidden-card");
                // Force reflow so IntersectionObserver picks them up
                requestAnimationFrame(() => {
                    card.classList.add("animate-in");
                });
            } else {
                // Hide: add hidden-card back
                card.classList.remove("animate-in");
                card.classList.add("hidden-card");
            }
        }
    });

    // Update button text
    if (btn) {
        btn.textContent = skillsExpanded
            ? UI_LABELS.showLess[currentLanguage]
            : UI_LABELS.showMore[currentLanguage];
    }

    // Scroll to keep button in view when collapsing
    if (!skillsExpanded) {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            setTimeout(() => {
                skillsSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    }
}


/* ──────────────────────────────────────────────────────────────
   7. SERVICES RENDERING
   ────────────────────────────────────────────────────────────── */
function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    const lang = content[currentLanguage];
    grid.innerHTML = lang.servicesList.map((service, i) => {
        const idx = service.indexOf(":");
        const title = idx !== -1 ? service.substring(0, idx) : service;
        const desc = idx !== -1 ? service.substring(idx + 1).trim() : "";
        return `
      <div class="service-card" style="transition-delay: ${i * 100}ms">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
    }).join("");
}


/* ──────────────────────────────────────────────────────────────
   8. LANGUAGE SYSTEM
   ────────────────────────────────────────────────────────────── */
function setLanguage(lang) {
    currentLanguage = lang;
    const c = content[lang];
    const isRTL = lang === "urdu" || lang === "arabic";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    const langCodes = { english: "en", urdu: "ur", spanish: "es", french: "fr", german: "de", arabic: "ar", chinese: "zh" };
    document.documentElement.lang = langCodes[lang] || "en";

    // Nav items
    const navBtns = document.querySelectorAll("#navLinks li button");
    const mobBtns = document.querySelectorAll("#mobileMenu button");
    c.navItems.forEach((item, i) => {
        if (navBtns[i]) navBtns[i].textContent = item;
        if (mobBtns[i]) mobBtns[i].textContent = item;
    });

    // Profile
    document.getElementById("profileName").childNodes[0].textContent = c.name + " ";
    document.getElementById("profileNickname").textContent = '"' + c.nickname + '"';
    document.getElementById("iAmText").textContent = c.iAmText + " ";
    document.getElementById("profileDesc").textContent = c.description;

    // Section titles
    document.getElementById("skillsTitle").textContent = c.skillsTitle;
    document.getElementById("aboutTitle").textContent = c.aboutTitle;
    document.getElementById("servicesTitle").textContent = c.servicesTitle;
    document.getElementById("contactTitle").textContent = c.contactTitle;

    // About section
    document.getElementById("aboutLocation").textContent = "📍 " + c.aboutDetails.location;
    document.getElementById("aboutEducation").textContent = "🎓 " + c.aboutDetails.education;
    document.getElementById("aboutProfession").textContent = "💻 " + c.aboutDetails.profession;
    document.getElementById("techExpertiseTitle").textContent = c.aboutDetails.techExpertise;
    document.getElementById("techList").innerHTML = c.aboutDetails.techList.map(t => `<li>${t}</li>`).join("");
    document.getElementById("experienceTitle").textContent = c.aboutDetails.experience;
    document.getElementById("experienceDesc").textContent = c.aboutDetails.experienceDesc;
    document.getElementById("experienceList").innerHTML = c.aboutDetails.experienceList.map(t => `<li>${t}</li>`).join("");
    document.getElementById("projectsTitle").textContent = c.aboutDetails.projects;
    document.getElementById("journeyTitle").textContent = c.aboutDetails.journey;
    document.getElementById("journeyQuote").textContent = c.aboutDetails.journeyQuote;
    document.getElementById("futureFocus").textContent = c.aboutDetails.futureFocus;

    // Contact
    document.getElementById("contactDesc").textContent = c.contactDesc;
    document.getElementById("linkedinText").textContent = c.linkedinText;
    document.getElementById("githubText").textContent = c.githubText;
    document.getElementById("responseTime").textContent = c.responseTime;

    // Buttons
    document.getElementById("hireMeBtn").textContent = c.hireMe;
    document.getElementById("downloadCVBtn").textContent = c.downloadCV;
    document.getElementById("sendMessageBtn").textContent = c.sendMessage + " 🚀";

    // Footer
    document.getElementById("footerName").textContent = c.name;
    document.getElementById("footerSolutions").textContent = c.footer.solutions;
    document.getElementById("footerUseCases").textContent = c.footer.useCases;
    document.getElementById("footerResources").textContent = c.footer.resources;
    document.getElementById("footerCompany").textContent = c.footer.company;
    document.getElementById("footerExplore").textContent = c.footer.explore;
    document.getElementById("footerAbout").textContent = c.footer.about;
    document.getElementById("footerCareers").textContent = c.footer.careers;
    document.getElementById("footerContactUs").textContent = c.footer.contactUs;
    document.getElementById("footerPrivacy").textContent = c.footer.privacy;
    document.getElementById("footerSubscribeTitle").textContent = c.footer.subscribe;
    document.getElementById("footerSubscribeBtn").textContent = c.footer.subscribe;
    document.getElementById("footerCopyright").textContent = c.footer.copyright;

    // Placeholders
    updatePlaceholders();

    // Re-render dynamic content (skills, projects, services update language)
    renderSkills();
    renderProjects();
    renderServices();
    setupScrollAnimations();

    // Update dropdown
    const langLabels = { english: "English", urdu: "اردو", spanish: "Español", french: "Français", german: "Deutsch", arabic: "العربية", chinese: "中文" };
    document.getElementById("languageBtn").textContent = (langLabels[lang] || lang) + " ▼";
    document.querySelectorAll(".language-menu button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.getElementById("languageMenu").classList.remove("open");

    // Restart text rotation
    textIndex = 0;
    startTextRotation();
}

function updatePlaceholders() {
    const c = content[currentLanguage];
    const el = (id) => document.getElementById(id);
    if (el("contactName")) el("contactName").placeholder = c.placeholders.name;
    if (el("contactEmail")) el("contactEmail").placeholder = c.placeholders.email;
    if (el("contactMessage")) el("contactMessage").placeholder = c.placeholders.message;
    if (el("footerSubName")) el("footerSubName").placeholder = c.footer.subName;
    if (el("footerSubEmail")) el("footerSubEmail").placeholder = c.footer.subEmail;
}


/* ──────────────────────────────────────────────────────────────
   9. DARK / LIGHT MODE
   ────────────────────────────────────────────────────────────── */
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.getElementById("themeIcon").src = isDarkMode ? "assets/images/sun.png" : "assets/images/moon.png";
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
}


/* ──────────────────────────────────────────────────────────────
   10. LANGUAGE MENU
   ────────────────────────────────────────────────────────────── */
function toggleLanguageMenu() {
    document.getElementById("languageMenu").classList.toggle("open");
}


/* ──────────────────────────────────────────────────────────────
   11. MOBILE HAMBURGER MENU
   ────────────────────────────────────────────────────────────── */
function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    document.getElementById("hamburgerBtn").classList.toggle("active", mobileMenuOpen);
    document.getElementById("mobileMenu").classList.toggle("open", mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
}

function mobileScrollTo(id) {
    toggleMobileMenu();
    setTimeout(() => scrollToSection(id), 300);
}


/* ──────────────────────────────────────────────────────────────
   12. SCROLL HANDLING
   ────────────────────────────────────────────────────────────── */
function setupScrollHandler() {
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                document.getElementById("scrollProgressBar").style.width = progress + "%";

                const navbar = document.getElementById("navbar");
                if (scrollTop <= 80) {
                    navbar.classList.remove("hidden-nav");
                } else if (scrollTop > lastScrollY + 5) {
                    navbar.classList.add("hidden-nav");
                } else if (scrollTop < lastScrollY - 5) {
                    navbar.classList.remove("hidden-nav");
                }
                lastScrollY = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}


/* ──────────────────────────────────────────────────────────────
   13. SMOOTH SCROLL
   ────────────────────────────────────────────────────────────── */
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}


/* ──────────────────────────────────────────────────────────────
   14. TEXT ROTATION
   ────────────────────────────────────────────────────────────── */
function startTextRotation() {
    if (textRotationInterval) clearInterval(textRotationInterval);
    const el = document.getElementById("rotatingText");
    if (!el) return;

    const texts = content[currentLanguage].textRotation;
    textIndex = 0;
    el.textContent = texts[0];
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";

    textRotationInterval = setInterval(() => {
        textIndex = (textIndex + 1) % texts.length;
        el.style.opacity = "0";
        el.style.transform = "translateY(10px)";
        setTimeout(() => {
            el.textContent = texts[textIndex];
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 250);
    }, 2500);
}


/* ──────────────────────────────────────────────────────────────
   15. CV DOWNLOAD
   ────────────────────────────────────────────────────────────── */
function downloadCV() {
    const a = document.createElement("a");
    a.href = "assets/images/Ibrahim_Tayyab_Memon_CV (1).jpg";
    a.download = "Ibrahim_Tayyab_Memon_CV.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


/* ──────────────────────────────────────────────────────────────
   16. SCROLL-TRIGGERED ANIMATIONS
   ────────────────────────────────────────────────────────────── */
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("hidden-card")) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".skill-card:not(.hidden-card), .service-card").forEach(el => {
        if (!el.classList.contains("animate-in")) {
            observer.observe(el);
        }
    });
}
