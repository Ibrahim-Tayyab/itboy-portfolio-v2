/* ============================================================
   DATA.JS — Centralized Data Store
   
   ★ TO ADD A NEW SKILL: Add an object to the SKILLS array.
   ★ TO ADD A NEW PROJECT: Add an object to the PROJECTS array.
   
   No other files need editing — renderSkills() and 
   renderProjects() in app.js read from these arrays.
   ============================================================ */


/* ──────────────────────────────────────────────────────────────
   SKILLS — 24 Skills (multi-language names + SVG icons)
   
   Icon sources:
     • https://cdn.simpleicons.org/{slug}
     • https://cdn.jsdelivr.net/gh/devicons/devicon/icons/...
   
   To add a skill, copy-paste a block and fill in each language.
   ────────────────────────────────────────────────────────────── */
const SKILLS = [
    /* ── 1. TypeScript ── */
    {
        name: {
            english: "TypeScript", urdu: "ٹائپ اسکرپٹ", spanish: "TypeScript",
            french: "TypeScript", german: "TypeScript", arabic: "تايب سكريبت", chinese: "TypeScript",
        },
        icon: "assets/images/TypeScript.png",
    },
    /* ── 2. JavaScript ── */
    {
        name: {
            english: "JavaScript", urdu: "جاوا اسکرپٹ", spanish: "JavaScript",
            french: "JavaScript", german: "JavaScript", arabic: "جافا سكريبت", chinese: "JavaScript",
        },
        icon: "assets/images/javascript.png",
    },
    /* ── 3. React.js ── */
    {
        name: {
            english: "React.js", urdu: "ری ایکٹ", spanish: "React.js",
            french: "React.js", german: "React.js", arabic: "React.js", chinese: "React.js",
        },
        icon: "assets/images/React.jsds.png",
    },
    /* ── 4. Next.js ── */
    {
        name: {
            english: "Next.js", urdu: "نیکسٹ جے ایس", spanish: "Next.js",
            french: "Next.js", german: "Next.js", arabic: "Next.js", chinese: "Next.js",
        },
        icon: "assets/images/nextjs.png",
    },
    /* ── 5. HTML ── */
    {
        name: {
            english: "HTML", urdu: "ایچ ٹی ایم ایل", spanish: "HTML",
            french: "HTML", german: "HTML", arabic: "HTML", chinese: "HTML",
        },
        icon: "assets/images/HTML.png",
    },
    /* ── 6. CSS ── */
    {
        name: {
            english: "CSS", urdu: "سی ایس ایس", spanish: "CSS",
            french: "CSS", german: "CSS", arabic: "CSS", chinese: "CSS",
        },
        icon: "assets/images/css.png",
    },
    /* ── 7. Tailwind CSS ── */
    {
        name: {
            english: "Tailwind CSS", urdu: "ٹیل ونڈ سی ایس ایس", spanish: "Tailwind CSS",
            french: "Tailwind CSS", german: "Tailwind CSS", arabic: "Tailwind CSS", chinese: "Tailwind CSS",
        },
        icon: "assets/images/Tailwind CSS.png",
    },
    /* ── 8. Firebase ── */
    {
        name: {
            english: "Firebase", urdu: "فائربیس", spanish: "Firebase",
            french: "Firebase", german: "Firebase", arabic: "Firebase", chinese: "Firebase",
        },
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    },
    /* ── 9. Cloud Firestore ── */
    {
        name: {
            english: "Cloud Firestore", urdu: "کلاؤڈ فائر اسٹور", spanish: "Cloud Firestore",
            french: "Cloud Firestore", german: "Cloud Firestore", arabic: "Cloud Firestore", chinese: "Cloud Firestore",
        },
        icon: "assets/images/cloud-firestore.png",
    },
    /* ── 10. MongoDB ── */
    {
        name: {
            english: "MongoDB", urdu: "مونگو ڈی بی", spanish: "MongoDB",
            french: "MongoDB", german: "MongoDB", arabic: "MongoDB", chinese: "MongoDB",
        },
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    /* ── 11. REST APIs ── */
    {
        name: {
            english: "REST APIs", urdu: "REST APIs", spanish: "APIs REST",
            french: "API REST", german: "REST-APIs", arabic: "واجهات REST API", chinese: "REST API",
        },
        icon: "assets/images/REST APIs.jpeg",
    },
    /* ── 12. Prompt Engineering ── */
    {
        name: {
            english: "Prompt Engineering", urdu: "پرامپٹ انجینئرنگ", spanish: "Ingeniería de Prompts",
            french: "Ingénierie de Prompts", german: "Prompt Engineering", arabic: "هندسة المطالبات", chinese: "提示工程",
        },
        icon: "assets/images/prompt-engineering.png",
    },
    /* ── 13. AI Agent Developer ── */
    {
        name: {
            english: "AI Agent Developer", urdu: "AI ایجنٹ ڈویلپر", spanish: "Desarrollador de Agentes IA",
            french: "Développeur d'Agents IA", german: "KI-Agenten-Entwickler", arabic: "مطوّر وكلاء الذكاء الاصطناعي", chinese: "AI 智能体开发",
        },
        icon: "assets/images/ai-agent-developer.png",
    },
    /* ── 14. AI Agent SDKs ── */
    {
        name: {
            english: "AI Agent SDKs", urdu: "AI ایجنٹ SDKs", spanish: "SDKs de Agentes IA",
            french: "SDKs Agents IA", german: "KI-Agenten-SDKs", arabic: "حزم تطوير وكلاء AI", chinese: "AI Agent SDK",
        },
        icon: "https://cdn.simpleicons.org/python/3776AB",
    },
    /* ── 15. Spec-Driven Development ── */
    {
        name: {
            english: "Spec-Driven Development", urdu: "اسپیک ڈرِون ڈویلپمنٹ", spanish: "Desarrollo Basado en Especificaciones",
            french: "Développement Piloté par Spécifications", german: "Spezifikationsgetriebene Entwicklung", arabic: "تطوير مبني على المواصفات", chinese: "规范驱动开发",
        },
        icon: "https://cdn.simpleicons.org/swagger/85EA2D",
    },
    /* ── 16. Chatbot Development ── */
    {
        name: {
            english: "Chatbot Development", urdu: "چیٹ بوٹ ڈویلپمنٹ", spanish: "Desarrollo de Chatbots",
            french: "Développement de Chatbots", german: "Chatbot-Entwicklung", arabic: "تطوير روبوتات المحادثة", chinese: "聊天机器人开发",
        },
        icon: "https://cdn.simpleicons.org/googlechat/00AC47",
    },
    /* ── 17. Web Chat ── */
    {
        name: {
            english: "Web Chat", urdu: "ویب چیٹ", spanish: "Chat Web",
            french: "Chat Web", german: "Web-Chat", arabic: "محادثة الويب", chinese: "网页聊天",
        },
        icon: "https://cdn.simpleicons.org/wechat/07C160",
    },
    /* ── 18. Graphic Design ── */
    {
        name: {
            english: "Graphic Design", urdu: "گرافک ڈیزائن", spanish: "Diseño Gráfico",
            french: "Design Graphique", german: "Grafikdesign", arabic: "تصميم جرافيكي", chinese: "平面设计",
        },
        icon: "assets/images/graphic-design.png",
    },
    /* ── 19. Microsoft Excel ── */
    {
        name: {
            english: "Microsoft Excel", urdu: "مائیکروسافٹ ایکسل", spanish: "Microsoft Excel",
            french: "Microsoft Excel", german: "Microsoft Excel", arabic: "Microsoft Excel", chinese: "Microsoft Excel",
        },
        icon: "assets/images/excel.png",
    },
    /* ── 20. Microsoft Word ── */
    {
        name: {
            english: "Microsoft Word", urdu: "مائیکروسافٹ ورڈ", spanish: "Microsoft Word",
            french: "Microsoft Word", german: "Microsoft Word", arabic: "Microsoft Word", chinese: "Microsoft Word",
        },
        icon: "assets/images/word.png",
    },
    /* ── 21. Problem Solving ── */
    {
        name: {
            english: "Problem Solving", urdu: "مسائل حل کرنا", spanish: "Resolución de Problemas",
            french: "Résolution de Problèmes", german: "Problemlösung", arabic: "حل المشكلات", chinese: "问题解决",
        },
        icon: "assets/images/Problem Solving.png",
    },
    /* ── 22. Git & GitHub ── */
    {
        name: {
            english: "Git & GitHub", urdu: "گِٹ اور گِٹ ہب", spanish: "Git y GitHub",
            french: "Git & GitHub", german: "Git & GitHub", arabic: "Git و GitHub", chinese: "Git 与 GitHub",
        },
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    /* ── 23. Node.js ── */
    {
        name: {
            english: "Node.js", urdu: "نوڈ جے ایس", spanish: "Node.js",
            french: "Node.js", german: "Node.js", arabic: "Node.js", chinese: "Node.js",
        },
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    /* ── 24. Python ── */
    {
        name: {
            english: "Python", urdu: "پائتھون", spanish: "Python",
            french: "Python", german: "Python", arabic: "بايثون", chinese: "Python",
        },
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
];


/* ──────────────────────────────────────────────────────────────
   PROJECTS — Dynamic project cards
   
   ★ TO ADD A PROJECT: Copy a block and edit title/desc/image/link.
     The render function handles everything else automatically.
   
   image: path relative to the html file (e.g. "assets/images/x.jpg")
         OR an absolute URL.
   link:  URL to open when the card is clicked.
   ────────────────────────────────────────────────────────────── */
const PROJECTS = [
    {
        image: "assets/images/Screenshot_1.jpg",
        link: "https://amreli-woodssss.netlify.app/",
        title: {
            english: "🛍️ E-Commerce Platform",
            urdu: "🛍️ ای کامرس پلیٹ فارم",
            spanish: "🛍️ Plataforma de Comercio Electrónico",
            french: "🛍️ Plateforme e-Commerce",
            german: "🛍️ E-Commerce-Plattform",
            arabic: "🛍️ منصة تجارة إلكترونية",
            chinese: "🛍️ 电子商务平台",
        },
        desc: {
            english: "Next.js, TypeScript, Tailwind CSS — Full shopping functionality",
            urdu: "Next.js، TypeScript، Tailwind CSS — مکمل خریداری کی فعالیت",
            spanish: "Next.js, TypeScript, Tailwind CSS — Funcionalidad completa de compras",
            french: "Next.js, TypeScript, Tailwind CSS — Fonctionnalité d'achat complète",
            german: "Next.js, TypeScript, Tailwind CSS — Vollständige Shop-Funktionalität",
            arabic: "Next.js، TypeScript، Tailwind CSS — وظائف تسوّق كاملة",
            chinese: "Next.js、TypeScript、Tailwind CSS — 完整的购物功能",
        },
    },
    {
        image: "assets/images/Screenshot_2.png",
        link: "https://nex-tool.vercel.app/",
        title: {
            english: "🛠️ NexTool — Web Tools Hub",
            urdu: "🛠️ نیکس ٹول — ویب ٹولز ہب",
            spanish: "🛠️ NexTool — Centro de Herramientas Web",
            french: "🛠️ NexTool — Hub d'Outils Web",
            german: "🛠️ NexTool — Web-Tools-Hub",
            arabic: "🛠️ نيكس تول — مركز أدوات الويب",
            chinese: "🛠️ NexTool — Web 工具中心",
        },
        desc: {
            english: "50+ free web tools for developers and creators — boost productivity with NexTool",
            urdu: "ڈویلپرز اور تخلیق کاروں کے لیے 50 سے زائد مفت ویب ٹولز",
            spanish: "Más de 50 herramientas web gratuitas para desarrolladores y creadores",
            french: "Plus de 50 outils web gratuits pour développeurs et créateurs",
            german: "Über 50 kostenlose Web-Tools für Entwickler und Kreative",
            arabic: "أكثر من 50 أداة ويب مجانية للمطورين والمبدعين",
            chinese: "为开发者和创作者提供 50 多种免费 Web 工具",
        },
    },
    {
        image: "assets/images/Screenshot_3.jpg",
        link: "https://assignment-1-gamma-five.vercel.app/",
        title: {
            english: "📊 Assignment",
            urdu: "📊 اسائنمنٹ",
            spanish: "📊 Tarea",
            french: "📊 Devoir",
            german: "📊 Aufgabe",
            arabic: "📊 واجب",
            chinese: "📊 作业",
        },
        desc: {
            english: "This is my first assignment",
            urdu: "یہ میری پہلی اسائنمنٹ ہے",
            spanish: "Esta es mi primera tarea",
            french: "Ceci est mon premier devoir",
            german: "Dies ist meine erste Aufgabe",
            arabic: "هذا هو واجبي الأول",
            chinese: "这是我的第一个作业",
        },
    },

    /* ──────────────────────────────────────────────────────────
       ★ ADD MORE PROJECTS BELOW — just copy this template:
       
       {
         image: "assets/images/YOUR_IMAGE.jpg",
         link: "https://your-project-url.com",
         title: {
           english: "🚀 Project Name",
           urdu: "🚀 پروجیکٹ نام",
           spanish: "🚀 Nombre del Proyecto",
           french: "🚀 Nom du Projet",
           german: "🚀 Projektname",
           arabic: "🚀 اسم المشروع",
           chinese: "🚀 项目名称",
         },
         desc: {
           english: "Short description here",
           urdu: "مختصر تفصیل یہاں",
           spanish: "Descripción corta aquí",
           french: "Description courte ici",
           german: "Kurze Beschreibung hier",
           arabic: "وصف قصير هنا",
           chinese: "简短描述",
         },
       },
       ────────────────────────────────────────────────────────── */
];


/* ──────────────────────────────────────────────────────────────
   UI LABELS — "Show More" / "Show Less" in 7 languages
   ────────────────────────────────────────────────────────────── */
const UI_LABELS = {
    showMore: {
        english: "Show More ▼", urdu: "مزید دکھائیں ▼", spanish: "Mostrar Más ▼",
        french: "Voir Plus ▼", german: "Mehr Anzeigen ▼", arabic: "عرض المزيد ▼", chinese: "显示更多 ▼",
    },
    showLess: {
        english: "Show Less ▲", urdu: "کم دکھائیں ▲", spanish: "Mostrar Menos ▲",
        french: "Voir Moins ▲", german: "Weniger Anzeigen ▲", arabic: "عرض أقل ▲", chinese: "收起 ▲",
    },
};
