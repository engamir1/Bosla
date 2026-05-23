// Web Pitch Deck - Bilingual Interactive Logic







let currentSlide = 1;



const totalSlides = 12;



let currentLanguage = 'ar'; // Default language is Arabic







// Structured Bilingual Slide Content



const slideData = {



    ar: {



        brandName: "بوصلة — وكالة نمو رقمي",



        langBtn: "English",



        prev: "السابق",



        next: "التالي",



        slide: "الشريحة",



        



        // Slide 1: Cover



        coverTagline: "في عالم مليء بالضوضاء الرقمية، كل بيزنس محتاج بوصلة توجهه",



        coverDesc: "إحنا مش مجرد وكالة تسويق رقمي تقليدية — إحنا شريك النمو الاستراتيجي اللي بيرسملك الطريق للتميز والربحية الموثقة بالأرقام.",



        coverCredits: "<span>🎓 مبادرة رواد مصر الرقمية (DEPI)</span> <span>📅 مشروع التخرج 2026</span>",



        



        // Slide 2: BMC



        bmcTitle: "نموذج العمل التجاري (BMC)",



        bmcSubtitle: "الهيكل الاستراتيجي لإدارة وتوليد قيمة وكالة بوصلة للنمو الرقمي",



        bmcPartners: "🤝 الشركاء الرئيسيون",



        bmcPartnersList: "<li>مصممو جرافيك محترفون</li><li>مطورو مواقع سحابية</li><li>شركات طباعة معتمدة</li><li>مصورو فوتوغرافي ومحتوى</li>",



        bmcActivities: "⚙️ الأنشطة الرئيسية",



        bmcActivitiesList: "<li>تخطيط وإطلاق الحملات الإعلانية</li><li>صناعة محتوى تسويقي إبداعي</li><li>تحليلات البيانات وإدارة الإعلانات</li>",



        bmcValue: "💎 القيمة المقترحة",



        bmcValueList: "<li>حلول تسويق 360° متكاملة</li><li>عائد استثماري (ROI) مضمون</li><li>فريق تسويقي متخصص بالكامل</li><li>تقارير أداء دورية وشفافة</li>",



        bmcRelations: "🎯 علاقة العملاء",



        bmcRelationsList: "<li>متابعة شهرية مستمرة</li><li>تقارير أداء دورية شفافة</li><li>دعم فني استراتيجي دائم</li>",



        bmcSegments: "👥 شرائح العملاء",



        bmcSegmentsList: "<li>الشركات الصغيرة والمتوسطة (SMEs)</li><li>الشركات الناشئة (Startups)</li><li>أصحاب البراندات الشخصية</li><li>رواد الأعمال الرقميين</li>",



        bmcResources: "🔑 الموارد الرئيسية",



        bmcResourcesList: "<li>فريق عمل إبداعي متخصص</li><li>أدوات تحليل ومراقبة الحملات</li><li>شبكة إعلامية وقنوات ترويجية</li>",



        bmcChannels: "📡 القنوات",



        bmcChannelsList: "<li>Facebook Page</li><li>Instagram Channel</li><li>منصات السوشيال ميديا</li><li>الموقع الرسمي للوكالة</li>",



        bmcCosts: "💰 هيكل التكاليف",



        bmcCostsList: "<li>رواتب الفريق الإبداعي</li><li>تراخيص أدوات التسويق والتحليل</li><li>ميزانية الإعلانات التجريبية</li>",



        bmcRevenues: "💵 مصادر الإيرادات",



        bmcRevenuesList: "<li>باقات الاشتراك الشهرية (Retainers)</li><li>نسب مئوية من إدارة الإنفاق الإعلاني</li><li>عقود المشاريع الثابتة</li>",



        



        // Slide 3: SWOT & TOWS



        swotTitle: "تحليل SWOT المطور (TOWS Matrix)",



        swotSubtitle: "تقييم العوامل الداخلية والخارجية وربطها بقرارات تشغيلية فورية",



        swotS: "نقاط القوة (Strengths)",



        swotSContent: "خبرة متراكمة في إدارة السوشيال ميديا وإطلاق الإعلانات الممولة. ميزة تنافسية قوية بالأسعار المناسبة للشركات الصغيرة، مع سهولة تواصل مباشر وقرب جغرافي.",



        swotWTOWS: "إجراء استراتيجي (TOWS): استغلال أدوات الأتمتة لزيادة الكفاءة التشغيلية.",



        swotW: "نقاط الضعف (Weaknesses)",



        swotWContent: "ضعف الثقة المبدئي لعدم وجود Portfolio ضخم (تم حله بنظام Pro Bono ودراسات الحالة). نقص في العمليات المنظمة (تم حله بالكامل باعتماد الـ SOPs القياسية).",



        swotOTOWS: "إجراء استراتيجي (TOWS): العمل مع أول 3 عملاء مجاناً لتوثيق دراسات الحالة بالأرقام.",



        swotO: "الفرص (Opportunities)",



        swotOContent: "نمو التجارة الإلكترونية واعتماد الشركات المحلية على التسويق الرقمي. دمج أدوات الذكاء الاصطناعي التوليدي لتقليل كلفة الإنتاج بـ 50% والتوسع الإقليمي.",



        swotSTOWS: "إجراء استراتيجي (TOWS): توفير شفافية كاملة لحماية العملاء من حرب أسعار المستقلين.",



        swotT: "التهديدات (Threats)",



        swotTContent: "منافسة قوية من الفريلانسرز بأسعار منخفضة. تهديد الذكاء الاصطناعي للمحتوى العشوائي (فرصة لتميز بوصلة بالاستراتيجية). تغير التكاليف المستمر.",



        swotTTOWS: "إجراء استراتيجي (TOWS): التميز من خلال تقديم استراتيجيات نمو متكاملة وقياس العوائد يومياً.",



        



        // Slide 4: SMART



        smartTitle: "الأهداف الذكية (SMART Objectives)",



        smartSubtitle: "الالتزام بأهداف تسويقية ومالية محددة وقابلة للقياس خلال عام 2026",



        smart01Title: "بناء الوعي",



        smart01Desc: "الوصول لـ 50,000 شخص مهتم بالتسويق، وتحقيق معدل تفاعل ER > 3% عبر قنوات السوشيال ميديا خلال الربع الأول.",



        smart02Title: "اكتساب العملاء",



        smart02Desc: "التعاقد مع أول 3 عملاء مدفوعين بالكامل للباقات المتوسطة والمتقدمة خلال الربع الأول من 2026 بفرص نمو حقيقية.",



        smart03Title: "ولاء العملاء",



        smart03Desc: "تحسين خدمة العملاء والولاء بتحديد متوسط زمن الرد < 5 دقائق، والحفاظ على تقييم رضا عملاء NPS > 8/10.",



        smart04Title: "نمو الأعمال",



        smart04Desc: "تحقيق إيرادات بقيمة 15,000 ج.م في Q1 والنمو الاستثماري التدريجي إلى 30,000 - 60,000 ج.م في الربع الثاني.",



        



        // Slide 5: Personas



        personaTitle: "شخصيات العملاء المثاليين (Buyer Personas)",



        personaSubtitle: "تحليل معمق للأشخاص والمشاريع التي تستهدفها خدمات وكالة بوصلة",



        p1Name: "أحمد — صاحب شركة ناشئة",



        p1Job: "مؤسس شركة ناشئة / E-commerce",



        p1Pain: "ميزانية محدودة — جرّب فريلانسرز بدون عائد حقيقي",



        p1Goal: "بناء وعي بالبراند وجذب أول 1,000 عميل حقيقي",



        p1Budget: "5,000 - 15,000 ج.م / شهرياً",



        p1Plats: "Facebook & Instagram",



        p2Name: "سارة — صاحبة متجر إلكتروني",



        p2Job: "صاحبة متجر ملابس / إكسسوارات وهدايا",



        p2Pain: "وقت محدود جداً — لا تعرف كيفية إدارة الحملات الإعلانية",



        p2Goal: "زيادة مبيعات المتجر وبناء قاعدة متابعين أوفياء",



        p2Budget: "3,000 - 8,000 ج.م / شهرياً",



        p2Plats: "Instagram & Facebook",



        p3Name: "عبدالله — رائد أعمال محلي",



        p3Job: "صاحب مشروع محلي (مطعم / خدمات / تطبيق)",



        p3Pain: "أسعار الوكالات الكبرى باهظة — يبحث عن جودة احترافية بسعر معقول",



        p3Goal: "إطلاق هوية رقمية قوية والمنافسة بقوة محلياً",



        p3Budget: "2,000 - 6,000 ج.م / شهرياً",



        p3Plats: "Facebook & Instagram",



        ageLabel: "العمر:",



        jobLabel: "الوظيفة:",



        painLabel: "نقطة الألم:",



        goalLabel: "الهدف الاستراتيجي:",



        budgetLabel: "الميزانية المتاحة:",



        platsLabel: "المنصات المفضلة:",



        



        // Slide 6: USP



        uspTitle: "عرض البيع الفريد (USP)",



        uspSubtitle: "الركائز الاستراتيجية الثلاث التي تجعل بوصلة الخيار الأول في السوق",



        usp1Title: "التحول للبيانات الرقمية الشفافة",



        usp1Desc: "الربط الفوري للعميل بـ Dashboards تفاعلية حية تظهر أرقام الحملات، وقياس العوائد الإعلانية المباشرة (ROAS & ROI) يومياً بكل وضوح.",



        usp2Title: "تنظيم تشغيلي فائق الجودة",



        usp2Desc: "كافة العمليات الإبداعية والإعلانية داخل الوكالة تدار عبر أدلة عمل معيارية صارمة (SOPs) تمنع العشوائية وتضمن استدامة الجودة الفائقة.",



        usp3Title: "فهم وتوطين الثقافات المحلية",



        usp3Desc: "فهم عميق ودقيق جداً لخصائص الجمهور المستهدف وتوطين محتوى الحملات (Localization) في السوق المصري والخليجي لضمان ولاء العميل.",



        



        // Slide 7: 7Ps



        mixTitle: "المزيج التسويقي لشركة بوصلة (7Ps)",



        mixSubtitle: "إدارة تفصيلية للركائز السبعة للخدمات وحلول النمو للوكالة",



        mixP1: "المنتج (Product)",



        mixP1Desc: "إدارة صفحات السوشيال ميديا، تصميم الهوية الإبداعية، إطلاق الإعلانات التفاعلية، وتحسين محركات البحث واستراتيجيات النمو الرقمي 360°.",



        mixP2: "السعر (Price)",



        mixP2Desc: "باقات اشتراك مرنة (Basic, Premium)، تسعير قائم على القيمة، مع تطبيق تأثير الشرك (Decoy Effect) لتسهيل اختيار الباقة المناسبة للعميل.",



        mixP3: "المكان (Place)",



        mixP3Desc: "تقديم الخدمات سحابياً 100%، التواجد القوي على LinkedIn & Facebook، والموقع الرسمي السلس للتواصل والتعاقد السحابي.",



        mixP4: "الترويج (Promotion)",



        mixP4Desc: "حملات تسويق بالمحتوى التعليمي لإثبات الخبرة، دراسات حالة (Case Studies) حقيقية، وريلز ولقاءات دورية تشرح نتائج عملائنا الفعالة.",



        mixP5: "الأشخاص (People)",



        mixP5Desc: "فريق عمل متناغم من الاستراتيجيين، مدراء الحسابات المتخصصين، مصممي المحتوى الإبداعي، وخبراء شراء المساحات الإعلانية (Media Buyers).",



        mixP6: "العملية (Process)",



        mixP6Desc: "دورة عمل قياسية تبدأ بـ Onboarding فوري للعميل، تخطيط مشترك للحملات، مراجعة إبداعية أسبوعية، وتقارير أداء شهرية شفافة.",



        mixP7: "الدليل المادي (Physical Evidence)",



        mixP7Desc: "سابقة أعمال وتصاميم متميزة، دراسات حالة (Case Studies) موثقة بالأرقام، أرباح ونتائج موثقة للحملات السابقة، وتقييمات العملاء الإيجابية.",



        



        // Slide 8: Content Calendar



        calTitle: "تقويم المحتوى الشهري (Content Calendar)",



        calSubtitle: "استراتيجية التناوب الأسبوعي للمحتوى العضوي والمدفوع (تفاعل وتحويل مستمر)",



        tabW1: "الأسبوع 1: تعريف",



        tabW2: "الأسبوع 2: تعليم",



        tabW3: "الأسبوع 3: تفاعل",



        tabW4: "الأسبوع 4: تحويل",



        daySat: "السبت", daySun: "الأحد", dayMon: "الإثنين", dayTue: "الثلاثاء", dayWed: "الأربعاء", dayThu: "الخميس", dayFri: "الجمعة",



        



        // Slide 9: Social Accounts & POC



        pocTitle: "الحسابات الرقمية ونقاط التواصل",



        pocSubtitle: "الهيكل التشغيلي لتوزيع المسؤوليات وقنوات خدمة العملاء بالوكالة",



        pocCard1: "📘 Facebook Page",



        pocCard1Desc: "<strong>الصفحة:</strong> <a href='https://www.facebook.com/bosla01' target='_blank' style='color: var(--gold); text-decoration: none; font-weight: bold;'>بوصلة – Bosla</a><br><strong>الحساب:</strong> <a href='https://www.facebook.com/bosla01' target='_blank' style='color: var(--gold); text-decoration: underline;'>@bosla01</a><br><strong>الجمهور:</strong> 30-50 سنة | أصحاب شركات ورواد أعمال<br><strong>المحتوى:</strong> أدلة تسويقية، دراسات حالة بالأرقام، وعروض باقات الشركات.",



        pocCard2: "📸 Instagram Account",



        pocCard2Desc: "<strong>الحساب:</strong> <a href='https://www.instagram.com/bosla011?igsh=MTRkamcwNGg5MGM0bw==' target='_blank' style='color: var(--gold); text-decoration: underline;'>@bosla011</a><br><strong>الجمهور:</strong> 20-35 سنة | أصحاب متاجر وإلكترونيات ورواد أعمال شباب<br><strong>المحتوى:</strong> فيديوهات Reels تفاعلية، نصائح سريعة، وكواليس العمل بالوكالة.",



        pocCard3: "👥 فريق عمل بوصلة",



        pocCard3Desc: "<strong>قائدة الفريق:</strong><br>• 👑 <strong>علياء عبدالحميد</strong> — قائدة الفريق ومديرة صناعة المحتوى<br><strong>أعضاء الفريق:</strong><br>• 📊 <strong>محمد أمير</strong> — المدير الاستراتيجي للتسويق<br>• 💼 <strong>محمد فتحي</strong> — مدير العمليات والمبيعات<br>• 🎨 <strong>سلمى عثمان</strong> — مصممة الهوية البصرية والجرافيك<br>• 📱 <strong>إسراء ثروت</strong> — أخصائية إدارة الحسابات والتواصل الاجتماعي<br><span style='font-size: 12px; color: var(--silver); display: block; margin-top: 5px;'>برعاية مبادرة رواد مصر الرقمية (DEPI)</span>",



        pocCard4: "💬 واتساب التواصل الفوري",



        pocCard4Desc: "<strong>الواتساب:</strong> <a href='https://wa.me/201507890092' target='_blank' style='color: var(--gold); text-decoration: underline; font-weight: bold;'>01507890092</a><br><strong>الهاتف:</strong> +20 100 858 2026<br><strong>اتفاقية الخدمة:</strong> رد فوري واحترافي على استفسارات الباقات والخدمات الرقمية.",



        



        // Slide 10: Control & Monitoring



        ctrlTitle: "أنظمة الرقابة والمتابعة (Control & Monitoring)",



        ctrlSubtitle: "مراقبة الأداء اليومية لضمان تحقيق الـ KPIs المطلوبة بأعلى معايير الشفافية للعملاء",



        ctrlR1: "تقارير البيانات المؤتمتة الفورية",



        ctrlR1Desc: "الربط الآلي لأداء الحملات ومراقبته عبر قواعد بيانات Airtable وأدوات Zapier لتقديم تقارير دقيقة ومقاسة بكل شفافية للعميل.",



        ctrlR2: "تقييم العائد الاستثماري ورضا العملاء",



        ctrlR2Desc: "مراقبة يومية وتوجيه ذكي للميزانية الإعلانية لضمان تحقيق ROAS > 3x، مع تفعيل شهري لاستبيانات NPS للحفاظ على جودة الشراكة.",



        ctrlR3: "دورة التقارير القياسية للعملاء",



        ctrlR3Desc: "تقرير يومي ملخص، تقرير منتصف الحملة (اليوم 3) لتحسين وتوجيه الإنفاق، تقرير ختامي (اليوم 5) شامل للـ KPIs، ودراسة حالة موثقة.",



        



        // Slide 13: Recommendations



        recTitle: "التوصيات والخطوات المستقبلية للنمو",



        recSubtitle: "الخطة الاستراتيجية لتطوير أعمال بوصلة لآفاق ريادية جديدة في عام 2026",



        rec1Title: "الاستثمار المكثف في دراسات الحالة (Case Studies)",



        rec1Desc: "توثيق كافة الأرقام وعوائد الحملات الإعلانية للعملاء الأوائل ونشرها كدراسات حالة مفصلة لبناء سلطة معرفية عالية للوكالة في السوق.",



        rec2Title: "دمج الذكاء الاصطناعي التوليدي (GenAI Workflow)",



        rec2Desc: "اعتماد أدوات الذكاء الاصطناعي المتقدمة في صياغة الأفكار وتصميم الجرافيك الأولي وكتابة الإسكربتات، لتقليص كلفة ووقت الإنتاج الإبداعي بـ 50%.",



        rec3Title: "بناء مجتمع رواد أعمال مغلق على Discord",



        rec3Desc: "تأسيس مجتمع تفاعلي مجاني لتقديم النصائح التسويقية لأصحاب الأعمال والـ SMEs، لبناء الثقة وتدفئة العملاء المحتملين قبل عملية البيع.",



        rec4Title: "تفعيل لوحات Looker Studio التفاعلية (خطة مستقبلية)",



        rec4Desc: "الربط المباشر لحملات العملاء بلوحات Looker Studio حية وتفاعلية في المرحلة القادمة (الربع الثالث)، لمتابعة الأداء لحظياً وزيادة مستويات الثقة والشفافية.",



        rec5Title: "إعادة الاستهداف الذكي (Omnipresent Retargeting)",



        rec5Desc: "إطلاق حملات إعادة استهداف مخصصة جداً للعملاء المحتملين الذين تفاعلوا مع محتوى الوكالة التعليمي، مما يعظم عائد المبيعات لـ 3 أضعاف."

        outroTitle: "شكراً لكم | Thank You",

        outroDesc: "بوصلة — نوجه العلامات التجارية نحو آفاق ريادية غير محدودة في السوق الرقمي.",

        outroPhone: "📞 الهاتف: <a href='tel:+201008582026' style='color: var(--chrome); text-decoration: none;'>+20 100 858 2026</a>",

        outroWhatsApp: "💬 واتساب: <a href='https://wa.me/201507890092' target='_blank' style='color: var(--gold); text-decoration: none; font-weight: bold;'>01507890092</a>",

        outroEmail: "✉️ البريد: <a href='mailto:growth@bosla.agency' style='color: var(--chrome); text-decoration: none;'>growth@bosla.agency</a>",

        outroWebsite: "🌍 الموقع: <a href='https://www.bosla.agency' target='_blank' style='color: var(--chrome); text-decoration: none;'>www.bosla.agency</a>",



    },



    en: {



        brandName: "BOSLA — Growth Agency",



        langBtn: "العربية",



        prev: "Prev",



        next: "Next",



        slide: "Slide",



        



        // Slide 1: Cover



        coverTagline: "In a world of digital noise, every business needs a compass",



        coverDesc: "We are not just a traditional digital marketing agency — we are the strategic growth partner that maps out your path to high-end digital market leadership.",



        coverCredits: "<span>🎓 Digital Egypt Pioneers Initiative (DEPI)</span> <span>📅 Graduation Project 2026</span>",



        



        // Slide 2: BMC



        bmcTitle: "Business Model Canvas (BMC)",



        bmcSubtitle: "The strategic framework detailing how Bosla creates, delivers, and captures professional value",



        bmcPartners: "🤝 Key Partners",



        bmcPartnersList: "<li>Professional Graphic Designers</li><li>Cloud Web Developers</li><li>Certified Printing Houses</li><li>Videographers & Content Creators</li>",



        bmcActivities: "⚙️ Key Activities",



        bmcActivitiesList: "<li>Campaign Planning & Execution</li><li>Creative Content Production</li><li>Data Analytics & Ad Management</li>",



        bmcValue: "💎 Value Proposition",



        bmcValueList: "<li>Integrated 360° Growth Solutions</li><li>Guaranteed ROI-centric execution</li><li>100% Dedicated Marketing Team</li><li>Daily Transparency & Dashboard Reports</li>",



        bmcRelations: "🎯 Client Relationships",



        bmcRelationsList: "<li>Dedicated Monthly Retainer Support</li><li>Transparent Dashboard Reporting</li><li>Continuous Growth Consulting</li>",



        bmcSegments: "👥 Customer Segments",



        bmcSegmentsList: "<li>Small & Medium Enterprises (SMEs)</li><li>High-growth Startups</li><li>Personal Branding Seekers</li><li>Digital Entrepreneurs</li>",



        bmcResources: "🔑 Key Resources",



        bmcResourcesList: "<li>Highly Specialized Creative Team</li><li>Campaign Analytics & Tracking Tools</li><li>Strong Digital Media Network</li>",



        bmcChannels: "📡 Channels",



        bmcChannelsList: "<li>Facebook Official Page</li><li>Instagram Channel</li><li>Social Media Networks</li><li>BOSLA Official Website</li>",



        bmcCosts: "💰 Cost Structure",



        bmcCostsList: "<li>Creative & Specialized Staff Salaries</li><li>Marketing Analytics Tools & Software</li><li>Ad Campaign Budgets & Experiments</li>",



        bmcRevenues: "💵 Revenue Streams",



        bmcRevenuesList: "<li>Monthly Retainer Packages</li><li>Ad Spend Performance Fees</li><li>Fixed-Price Project Contracts</li>",



        



        // Slide 3: SWOT & TOWS



        swotTitle: "Enhanced SWOT & TOWS Matrix",



        swotSubtitle: "Evaluating internal and external factors paired with immediate tactical mitigations",



        swotS: "Strengths (S)",



        swotSContent: "Proven expertise in social media management and media buying campaigns. Low-overhead cost advantage for local SMEs combined with high proximity.",



        swotWTOWS: "TOWS Strategy: Utilizing AI automation tools to boost internal output and reduce service delivery times.",



        swotW: "Weaknesses (W)",



        swotWContent: "Low initial trust due to starting portfolio (Mitigated via strategic Pro Bono campaigns and verified Case Studies). Standard Operating Processes missing (Solved with SOPs).",



        swotOTOWS: "TOWS Strategy: Executing free growth campaigns for first 3 clients to build fully-quantifiable case studies.",



        swotO: "Opportunities (O)",



        swotOContent: "Rapid shift of traditional local SMEs toward digital commerce. Generative AI integration to cut media production costs by 50% and expansion into GCC.",



        swotSTOWS: "TOWS Strategy: Offering total dashboard transparency to counter low-quality freelance pricing models.",



        swotT: "Threats (T)",



        swotTContent: "Severe price war from low-tier freelancers. Rise of low-quality automated spam content (opportunity for Bosla's strategic focus). Rising client acquisition costs.",



        swotTTOWS: "TOWS Strategy: Distinguishing Bosla by proving direct financial return on ad spends (ROAS) daily.",



        



        // Slide 4: SMART



        smartTitle: "SMART Objectives",



        smartSubtitle: "Committing to mathematically rigorous and time-bound growth metrics for 2026",



        smart01Title: "Awareness & Reach",



        smart01Desc: "Reach 50,000 highly targeted local business prospects and achieve a social media interaction rate of ER > 3% in Q1.",



        smart02Title: "Client Acquisition",



        smart02Desc: "Convert and sign the first 3 fully-paid contract retainer clients for Medium and Premium tiers by the end of Q1 2026.",



        smart03Title: "Customer Loyalty",



        smart03Desc: "Minimize client response delay to < 5 minutes on active channels, maintaining an outstanding Net Promoter Score (NPS) > 8/10.",



        smart04Title: "Revenue & Growth",



        smart04Desc: "Generate 15,000 EGP in total revenue during Q1, and scale incrementally to 30,000 - 60,000 EGP in Q2 2026.",



        



        // Slide 5: Personas



        personaTitle: "Ideal Customer Personas (Buyer Personas)",



        personaSubtitle: "Deep analytical profiling of the primary market prospects targeted by Bosla",



        p1Name: "Ahmed — Startup Founder",



        p1Job: "Founder, Tech Startup & E-commerce",



        p1Pain: "Extremely tight budgets — wasted money on cheap freelancers with zero ROAS",



        p1Goal: "Build solid brand awareness and acquire his first 1,000 active paying customers",



        p1Budget: "5,000 - 15,000 EGP / Month",



        p1Plats: "Facebook & Instagram",



        p2Name: "Sara — E-commerce Seller",



        p2Job: "Owner of a boutique apparel and gifts brand",



        p2Pain: "Zero time — completely clueless on active ad management and pixel tracking",



        p2Goal: "Boost sales volume and convert Instagram followers into loyal repeat buyers",



        p2Budget: "3,000 - 8,000 EGP / Month",



        p2Plats: "Instagram & Facebook",



        p3Name: "Abdullah — Local Business Owner",



        p3Job: "Owner of a local restaurant / service business",



        p3Pain: "Big Cairo-based marketing agencies are too expensive — wants premium local agency quality",



        p3Goal: "Launch a powerful digital footprint to dominate and out-compete local rivals",



        p3Budget: "2,000 - 6,000 EGP / Month",



        p3Plats: "Facebook & Instagram",



        ageLabel: "Age:",



        jobLabel: "Occupation:",



        painLabel: "Core Pain Point:",



        goalLabel: "Strategic Goal:",



        budgetLabel: "Available Budget:",



        platsLabel: "Preferred Platforms:",



        



        // Slide 6: USP



        uspTitle: "Unique Selling Proposition (USP)",



        uspSubtitle: "The three competitive pillars that position Bosla as an elite growth agency",



        usp1Title: "Data Transparency",



        usp1Desc: "Instantly connecting clients to live, interactive data dashboards to track performance and calculate direct ad returns (ROAS & ROI) daily.",



        usp2Title: "Elite Standard Operating Procedures",



        usp2Desc: "All creative, writing, and buying processes inside the agency are powered by strict SOPs that eliminate errors and secure high-end quality.",



        usp3Title: "Hyper-Localized Strategy",



        usp3Desc: "A master-level understanding of local target demographics, localizing campaign content perfectly within the Egyptian and GCC markets.",



        



        // Slide 7: 7Ps



        mixTitle: "The Marketing Mix (7Ps)",



        mixSubtitle: "Comprehensive breakdown of the seven foundational pillars of Bosla's growth services",



        mixP1: "Product",



        mixP1Desc: "Professional social media management, creative brand asset styling, interactive paid ads, SEO optimization, and 360° digital growth planning.",



        mixP2: "Price",



        mixP2Desc: "Value-centric pricing structures (Basic and Premium retainer tiers) utilizing the psychological Decoy Effect to ease client decision-making.",



        mixP3: "Place",



        mixP3Desc: "100% Cloud-integrated service delivery model. High presence on LinkedIn & Facebook backed by our responsive client onboarding system.",



        mixP4: "Promotion",



        mixP4Desc: "High-value marketing education content, detailed case study breakdowns, engaging video reels, and client-proven success stories.",



        mixP5: "People",



        mixP5Desc: "A top-tier team consisting of marketing strategists, specialized account managers, creative content writers, and expert Media Buyers.",



        mixP6: "Process",



        mixP6Desc: "A standard corporate onboarding framework: rapid client induction, collaborative campaign designs, weekly audits, and transparent monthly reviews.",



        mixP7: "Physical Evidence",



        mixP7Desc: "A stunning digital branding showcase, detailed numeric Case Studies, verified dashboard gains, and outstanding client reviews.",



        



        // Slide 8: Content Calendar



        calTitle: "Monthly Content Calendar",



        calSubtitle: "Strategic scheduling for maximum organic growth and paid conversion gains",



        tabW1: "Week 1: Awareness",



        tabW2: "Week 2: Education",



        tabW3: "Week 3: Engagement",



        tabW4: "Week 4: Conversion",



        daySat: "Sat", daySun: "Sun", dayMon: "Mon", dayTue: "Tue", dayWed: "Wed", dayThu: "Thu", dayFri: "Fri",



        



        // Slide 9: Social Accounts & POC



        pocTitle: "Digital Channels & Point of Contact",



        pocSubtitle: "Operational division of responsibilities and customer communication channels",



        pocCard1: "📘 Facebook Page",



        pocCard1Desc: "<strong>Page:</strong> <a href='https://www.facebook.com/bosla01' target='_blank' style='color: var(--gold); text-decoration: none; font-weight: bold;'>Bosla – Facebook</a><br><strong>Handle:</strong> <a href='https://www.facebook.com/bosla01' target='_blank' style='color: var(--gold); text-decoration: underline;'>@bosla01</a><br><strong>Audience:</strong> 30-50 Years | Business Owners & SMEs<br><strong>Content:</strong> Tailored marketing guides, numeric case studies, and corporate package retainers.",



        pocCard2: "📸 Instagram Account",



        pocCard2Desc: "<strong>Handle:</strong> <a href='https://www.instagram.com/bosla011?igsh=MTRkamcwNGg5MGM0bw==' target='_blank' style='color: var(--gold); text-decoration: underline;'>@bosla011</a><br><strong>Audience:</strong> 20-35 Years | E-commerce Owners & Young Startups<br><strong>Content:</strong> High-impact Reels, quick tactical tips, and humanizing behind-the-scenes office clips.",



        pocCard3: "👥 Bosla Agency Team",



        pocCard3Desc: "<strong>Team Leader:</strong><br>• 👑 <strong>Alyaa Abdelhamid</strong> — Team Leader & Content Director<br><strong>Team Members:</strong><br>• 📊 <strong>Mohamed Amir</strong> — Strategic Marketing Director<br>• 💼 <strong>Mohamed Fathy</strong> — COO / Sales Director<br>• 🎨 <strong>Salma Othman</strong> — Brand Identity & Visual Designer<br>• 📱 <strong>Esraa Tharwat</strong> — Social Media & Account Specialist<br><span style='font-size: 12px; color: var(--silver); display: block; margin-top: 5px;'>Under DEPI Graduation Project Initiative</span>",



        pocCard4: "💬 WhatsApp Instant Channels",



        pocCard4Desc: "<strong>WhatsApp:</strong> <a href='https://wa.me/201507890092' target='_blank' style='color: var(--gold); text-decoration: underline; font-weight: bold;'>01507890092</a><br><strong>Phone:</strong> +20 100 858 2026<br><strong>SLA:</strong> Immediate and professional responses regarding packages & retainer consultations.",



        



        // Slide 10: Control & Monitoring



        ctrlTitle: "Control & Monitoring Framework",



        ctrlSubtitle: "Daily performance tracking to ensure data transparency and guarantee key KPI metrics",



        ctrlR1: "Automated Data & Reporting Pipelines",



        ctrlR1Desc: "Automated aggregation of campaign performance and metrics via Airtable databases and Zapier workflows, ensuring high-speed data transparency.",



        ctrlR2: "Ad Returns & Loyalty Controls",



        ctrlR2Desc: "Continuous budget optimization to hit target ROAS > 3x, paired with monthly NPS surveys to measure and secure partner satisfaction.",



        ctrlR3: "Standard Reporting Cadence",



        ctrlR3Desc: "Daily briefing logs, a Day 3 mid-campaign audit, a final Day 5 performance deep-dive, and a long-term documented Case Study.",



        



        // Slide 13: Recommendations



        recTitle: "Recommendations & Strategic Next Steps",



        recSubtitle: "Operational guidelines to scale Bosla into a leading growth agency in 2026",



        rec1Title: "Aggressive Case Study Portfolios",



        rec1Desc: "Convert every single growth campaign result into a detailed, numeric case study. Publishing real ROAS gains builds massive agency authority.",



        rec2Title: "GenAI Production Integrations",



        rec2Desc: "Train the team on Generative AI pipelines for copywriting and creative drafting, slashing operational production costs by 50%.",



        rec3Title: "Exclusive Discord Brand Community",



        rec3Desc: "Build an invite-only community offering growth and marketing tips for local SMEs, generating warm leads for Bosla's agency retainers.",



        rec4Title: "Live Looker Studio Portals (Future Plan)",



        rec4Desc: "Launch dynamic, live client-accessible Looker Studio dashboards in the next phase (Q3) to automate real-time campaign performance visibility.",



        rec5Title: "Advanced Retargeting Funnels (Omnipresent ROAS)",



        rec5Desc: "Set up multi-stage custom audience retargeting funnels to convert warm visitors who read our educational content, tripling retainer sales."

        outroTitle: "Thank You | شكراً لكم",

        outroDesc: "BOSLA — We steer brands toward limitless pioneering horizons in the digital market.",

        outroPhone: "📞 Phone: <a href='tel:+201008582026' style='color: var(--chrome); text-decoration: none;'>+20 100 858 2026</a>",

        outroWhatsApp: "💬 WhatsApp: <a href='https://wa.me/201507890092' target='_blank' style='color: var(--gold); text-decoration: none; font-weight: bold;'>01507890092</a>",

        outroEmail: "✉️ Email: <a href='mailto:growth@bosla.agency' style='color: var(--chrome); text-decoration: none;'>growth@bosla.agency</a>",

        outroWebsite: "🌍 Website: <a href='https://www.bosla.agency' target='_blank' style='color: var(--chrome); text-decoration: none;'>www.bosla.agency</a>",



    }



};







// Calendar calendar data helper for 4 weeks



const calendarData = {



    w1: [



        { day: "calSat", type: "🎯 البوست التعريفي / Intro Post", tag: "Organic" },



        { day: "calSun", type: "💡 نصيحة تسويقية / Marketing Tip", tag: "Organic" },



        { day: "calMon", type: "📊 إنفوجراف تفاعلي / Infographic", tag: "Organic" },



        { day: "calTue", type: "🎥 ريلز تعريفي / Reel Video", tag: "Organic" },



        { day: "calWed", type: "❓ استبيان / Poll Question", tag: "Engagement" },



        { day: "calThu", type: "📣 إطلاق حملة / Ad Launch", tag: "Paid Ad" },



        { day: "calFri", type: "🔄 إعادة مشاركة / Reshare Stats", tag: "Organic" }



    ],



    w2: [



        { day: "calSat", type: "📚 مقال تعليمي / Educational Article", tag: "Organic" },



        { day: "calSun", type: "🧩 دراسة حالة / Case Study", tag: "Trust" },



        { day: "calMon", type: "💬 مقولة ملهمة / Industry Quote", tag: "Organic" },



        { day: "calTue", type: "🎬 فيديو توضيحي / Explainer Video", tag: "Organic" },



        { day: "calWed", type: "📋 قائمة مراجعة / Actionable Checklist", tag: "Organic" },



        { day: "calThu", type: "💰 إعلان مدفوع / Conversion Ad", tag: "Paid Ad" },



        { day: "calFri", type: "✅ إحصائيات ونتائج / Stats & Gains", tag: "Organic" }



    ],



    w3: [



        { day: "calSat", type: "🏆 نجاح عميل / Client Win", tag: "Trust" },



        { day: "calSun", type: "🤔 سؤال تفاعلي / Interactive Q&A", tag: "Engagement" },



        { day: "calMon", type: "📈 مشاركة أرقام / Campaign Results", tag: "Organic" },



        { day: "calTue", type: "🎯 نصيحة سريعة / Quick Growth Tip", tag: "Organic" },



        { day: "calWed", type: "🔥 تريند الأسبوع / Weekly Trend", tag: "Engagement" },



        { day: "calThu", type: "💎 إعلان مخصص / Retargeting Ad", tag: "Paid Ad" },



        { day: "calFri", type: "📌 حفظ منشور / Saveable Carousel", tag: "Organic" }



    ],



    w4: [



        { day: "calSat", type: "🎁 عرض خاص / Exclusive Retainer Offer", tag: "Conversion" },



        { day: "calSun", type: "📞 طلب استشارة / Call to Action", tag: "Organic" },



        { day: "calMon", type: "⭐ تقييم عميل / Client Review", tag: "Trust" },



        { day: "calTue", type: "🚀 خدمة جديدة / Service Launch", tag: "Organic" },



        { day: "calWed", type: "📧 النشرة البريدية / Newsletter", tag: "Organic" },



        { day: "calThu", type: "💸 إعلانات تحويل / Conversion Sales", tag: "Paid Ad" },



        { day: "calFri", type: "🎉 حصاد الشهر / Monthly Wrap", tag: "Organic" }



    ]



};







// Update Slide Texts based on Selected Language



function updateLanguage() {



    const lang = slideData[currentLanguage];



    document.body.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');



    



    // Header & Global Controls



    document.getElementById('brand-title').innerText = lang.brandName;



    document.getElementById('lang-toggle').innerText = lang.langBtn;



    document.getElementById('btn-prev').innerText = currentLanguage === 'ar' ? '→' : '←';



    document.getElementById('btn-next').innerText = currentLanguage === 'ar' ? '←' : '→';



    



    // Cover Slide



    document.getElementById('cover-tagline').innerText = lang.coverTagline;



    document.getElementById('cover-desc').innerText = lang.coverDesc;



    document.getElementById('cover-credits').innerHTML = lang.coverCredits;



    



    // BMC Slide



    document.getElementById('bmc-title').innerText = lang.bmcTitle;



    document.getElementById('bmc-subtitle').innerText = lang.bmcSubtitle;



    document.getElementById('bmc-partners-title').innerText = lang.bmcPartners;



    document.getElementById('bmc-partners-list').innerHTML = lang.bmcPartnersList;



    document.getElementById('bmc-activities-title').innerText = lang.bmcActivities;



    document.getElementById('bmc-activities-list').innerHTML = lang.bmcActivitiesList;



    document.getElementById('bmc-value-title').innerText = lang.bmcValue;



    document.getElementById('bmc-value-list').innerHTML = lang.bmcValueList;



    document.getElementById('bmc-relations-title').innerText = lang.bmcRelations;



    document.getElementById('bmc-relations-list').innerHTML = lang.bmcRelationsList;



    document.getElementById('bmc-segments-title').innerText = lang.bmcSegments;



    document.getElementById('bmc-segments-list').innerHTML = lang.bmcSegmentsList;



    document.getElementById('bmc-resources-title').innerText = lang.bmcResources;



    document.getElementById('bmc-resources-list').innerHTML = lang.bmcResourcesList;



    document.getElementById('bmc-channels-title').innerText = lang.bmcChannels;



    document.getElementById('bmc-channels-list').innerHTML = lang.bmcChannelsList;



    document.getElementById('bmc-costs-title').innerText = lang.bmcCosts;



    document.getElementById('bmc-costs-list').innerHTML = lang.bmcCostsList;



    document.getElementById('bmc-revenues-title').innerText = lang.bmcRevenues;



    document.getElementById('bmc-revenues-list').innerHTML = lang.bmcRevenuesList;



    



    // SWOT Slide



    document.getElementById('swot-title').innerText = lang.swotTitle;



    document.getElementById('swot-subtitle').innerText = lang.swotSubtitle;



    document.getElementById('swot-s-title').innerText = lang.swotS;



    document.getElementById('swot-s-desc').innerText = lang.swotSContent;



    document.getElementById('swot-s-tows').innerHTML = `<span class="tows-label">TOWS:</span> ${lang.swotWTOWS}`;



    document.getElementById('swot-w-title').innerText = lang.swotW;



    document.getElementById('swot-w-desc').innerText = lang.swotWContent;



    document.getElementById('swot-w-tows').innerHTML = `<span class="tows-label">TOWS:</span> ${lang.swotOTOWS}`;



    document.getElementById('swot-o-title').innerText = lang.swotO;



    document.getElementById('swot-o-desc').innerText = lang.swotOContent;



    document.getElementById('swot-o-tows').innerHTML = `<span class="tows-label">TOWS:</span> ${lang.swotSTOWS}`;



    document.getElementById('swot-t-title').innerText = lang.swotT;



    document.getElementById('swot-t-desc').innerText = lang.swotTContent;



    document.getElementById('swot-t-tows').innerHTML = `<span class="tows-label">TOWS:</span> ${lang.swotTTOWS}`;



    



    // SMART Slide



    document.getElementById('smart-title').innerText = lang.smartTitle;



    document.getElementById('smart-subtitle').innerText = lang.smartSubtitle;



    document.getElementById('smart-01-title').innerText = lang.smart01Title;



    document.getElementById('smart-01-desc').innerText = lang.smart01Desc;



    document.getElementById('smart-02-title').innerText = lang.smart02Title;



    document.getElementById('smart-02-desc').innerText = lang.smart02Desc;



    document.getElementById('smart-03-title').innerText = lang.smart03Title;



    document.getElementById('smart-03-desc').innerText = lang.smart03Desc;



    document.getElementById('smart-04-title').innerText = lang.smart04Title;



    document.getElementById('smart-04-desc').innerText = lang.smart04Desc;



    



    // Personas Slide



    document.getElementById('persona-title').innerText = lang.personaTitle;



    document.getElementById('persona-subtitle').innerText = lang.personaSubtitle;



    



    document.getElementById('p1-name').innerText = lang.p1Name;



    document.getElementById('p1-job-label').innerText = lang.jobLabel;



    document.getElementById('p1-job').innerText = lang.p1Job;



    document.getElementById('p1-pain-label').innerText = lang.painLabel;



    document.getElementById('p1-pain').innerText = lang.p1Pain;



    document.getElementById('p1-goal-label').innerText = lang.goalLabel;



    document.getElementById('p1-goal').innerText = lang.p1Goal;



    document.getElementById('p1-budget-label').innerText = lang.budgetLabel;



    document.getElementById('p1-budget').innerText = lang.p1Budget;



    document.getElementById('p1-plats-label').innerText = lang.platsLabel;



    document.getElementById('p1-plats').innerText = lang.p1Plats;



    



    document.getElementById('p2-name').innerText = lang.p2Name;



    document.getElementById('p2-job-label').innerText = lang.jobLabel;



    document.getElementById('p2-job').innerText = lang.p2Job;



    document.getElementById('p2-pain-label').innerText = lang.painLabel;



    document.getElementById('p2-pain').innerText = lang.p2Pain;



    document.getElementById('p2-goal-label').innerText = lang.goalLabel;



    document.getElementById('p2-goal').innerText = lang.p2Goal;



    document.getElementById('p2-budget-label').innerText = lang.budgetLabel;



    document.getElementById('p2-budget').innerText = lang.p2Budget;



    document.getElementById('p2-plats-label').innerText = lang.platsLabel;



    document.getElementById('p2-plats').innerText = lang.p2Plats;



    



    document.getElementById('p3-name').innerText = lang.p3Name;



    document.getElementById('p3-job-label').innerText = lang.jobLabel;



    document.getElementById('p3-job').innerText = lang.p3Job;



    document.getElementById('p3-pain-label').innerText = lang.painLabel;



    document.getElementById('p3-pain').innerText = lang.p3Pain;



    document.getElementById('p3-goal-label').innerText = lang.goalLabel;



    document.getElementById('p3-goal').innerText = lang.p3Goal;



    document.getElementById('p3-budget-label').innerText = lang.budgetLabel;



    document.getElementById('p3-budget').innerText = lang.p3Budget;



    document.getElementById('p3-plats-label').innerText = lang.platsLabel;



    document.getElementById('p3-plats').innerText = lang.p3Plats;



    



    // USP Slide



    document.getElementById('usp-title').innerText = lang.uspTitle;



    document.getElementById('usp-subtitle').innerText = lang.uspSubtitle;



    document.getElementById('usp1-title').innerText = lang.usp1Title;



    document.getElementById('usp1-desc').innerText = lang.usp1Desc;



    document.getElementById('usp2-title').innerText = lang.usp2Title;



    document.getElementById('usp2-desc').innerText = lang.usp2Desc;



    document.getElementById('usp3-title').innerText = lang.usp3Title;



    document.getElementById('usp3-desc').innerText = lang.usp3Desc;



    



    // 7Ps Slide



    document.getElementById('mix-title').innerText = lang.mixTitle;



    document.getElementById('mix-subtitle').innerText = lang.mixSubtitle;



    document.getElementById('mix-p1-title').innerText = lang.mixP1;



    document.getElementById('mix-p1-desc').innerText = lang.mixP1Desc;



    document.getElementById('mix-p2-title').innerText = lang.mixP2;



    document.getElementById('mix-p2-desc').innerText = lang.mixP2Desc;



    document.getElementById('mix-p3-title').innerText = lang.mixP3;



    document.getElementById('mix-p3-desc').innerText = lang.mixP3Desc;



    document.getElementById('mix-p4-title').innerText = lang.mixP4;



    document.getElementById('mix-p4-desc').innerText = lang.mixP4Desc;



    document.getElementById('mix-p5-title').innerText = lang.mixP5;



    document.getElementById('mix-p5-desc').innerText = lang.mixP5Desc;



    document.getElementById('mix-p6-title').innerText = lang.mixP6;



    document.getElementById('mix-p6-desc').innerText = lang.mixP6Desc;



    document.getElementById('mix-p7-title').innerText = lang.mixP7;



    document.getElementById('mix-p7-desc').innerText = lang.mixP7Desc;



    



    // Content Calendar Slide



    document.getElementById('cal-title').innerText = lang.calTitle;



    document.getElementById('cal-subtitle').innerText = lang.calSubtitle;



    document.getElementById('tab-w1').innerText = lang.tabW1;



    document.getElementById('tab-w2').innerText = lang.tabW2;



    document.getElementById('tab-w3').innerText = lang.tabW3;



    document.getElementById('tab-w4').innerText = lang.tabW4;



    updateCalendarGrid("w1");



    



    // Social & POC Slide



    document.getElementById('poc-title').innerText = lang.pocTitle;



    document.getElementById('poc-subtitle').innerText = lang.pocSubtitle;



    document.getElementById('poc-card1-title').innerText = lang.pocCard1;



    document.getElementById('poc-card1-desc').innerHTML = lang.pocCard1Desc;



    document.getElementById('poc-card2-title').innerText = lang.pocCard2;



    document.getElementById('poc-card2-desc').innerHTML = lang.pocCard2Desc;



    document.getElementById('poc-card3-title').innerText = lang.pocCard3;



    document.getElementById('poc-card3-desc').innerHTML = lang.pocCard3Desc;



    document.getElementById('poc-card4-title').innerText = lang.pocCard4;



    document.getElementById('poc-card4-desc').innerHTML = lang.pocCard4Desc;



    



    // Control & Monitoring Slide



    document.getElementById('ctrl-title').innerText = lang.ctrlTitle;



    document.getElementById('ctrl-subtitle').innerText = lang.ctrlSubtitle;



    document.getElementById('ctrl-r1-title').innerText = lang.ctrlR1;



    document.getElementById('ctrl-r1-desc').innerText = lang.ctrlR1Desc;



    document.getElementById('ctrl-r2-title').innerText = lang.ctrlR2;



    document.getElementById('ctrl-r2-desc').innerText = lang.ctrlR2Desc;



    document.getElementById('ctrl-r3-title').innerText = lang.ctrlR3;



    document.getElementById('ctrl-r3-desc').innerText = lang.ctrlR3Desc;



    



    // Recommendations Slide



    document.getElementById('rec-title').innerText = lang.recTitle;



    document.getElementById('rec-subtitle').innerText = lang.recSubtitle;



    document.getElementById('rec-1-title').innerText = lang.rec1Title;



    document.getElementById('rec-1-desc').innerText = lang.rec1Desc;



    document.getElementById('rec-2-title').innerText = lang.rec2Title;



    document.getElementById('rec-2-desc').innerText = lang.rec2Desc;



    document.getElementById('rec-3-title').innerText = lang.rec3Title;



    document.getElementById('rec-3-desc').innerText = lang.rec3Desc;



    document.getElementById('rec-4-title').innerText = lang.rec4Title;



    document.getElementById('rec-4-desc').innerText = lang.rec4Desc;



    document.getElementById('rec-5-title').innerText = lang.rec5Title;



    document.getElementById('rec-5-desc').innerText = lang.rec5Desc;



    



    // Slide Numbers Info




    document.getElementById('outro-title').innerText = lang.outroTitle;

    document.getElementById('outro-desc').innerText = lang.outroDesc;

    document.getElementById('outro-phone').innerHTML = lang.outroPhone;

    document.getElementById('outro-whatsapp').innerHTML = lang.outroWhatsApp;

    document.getElementById('outro-email').innerHTML = lang.outroEmail;

    document.getElementById('outro-website').innerHTML = lang.outroWebsite;

    document.getElementById('slide-info').innerText = `${lang.slide} ${currentSlide} / ${totalSlides}`;



}







// Update Calendar Grid dynamically on tab select



function updateCalendarGrid(weekKey) {



    const lang = slideData[currentLanguage];



    const grid = document.getElementById('calendar-grid');



    grid.innerHTML = '';



    



    // Write header days



    const dayNames = [lang.daySat, lang.daySun, lang.dayMon, lang.dayTue, lang.dayWed, lang.dayThu, lang.dayFri];



    dayNames.forEach(d => {



        const header = document.createElement('div');



        header.className = 'calendar-header-day';



        header.innerText = d;



        grid.appendChild(header);



    });



    



    // Write calendar cells



    const cells = calendarData[weekKey];



    cells.forEach(c => {



        const cell = document.createElement('div');



        cell.className = 'calendar-cell';



        



        const dayLabel = document.createElement('span');



        dayLabel.className = 'cell-day';



        dayLabel.innerText = lang[c.day] || c.day;



        



        const cellType = document.createElement('span');



        cellType.className = 'cell-type';



        cellType.innerText = c.type;



        



        const cellTag = document.createElement('span');



        cellTag.className = 'cell-tag';



        cellTag.innerText = c.tag;



        



        cell.appendChild(dayLabel);



        cell.appendChild(cellType);



        cell.appendChild(cellTag);



        grid.appendChild(cell);



    });



}







// Navigation Logic



function goToSlide(slideIndex) {



    if (slideIndex < 1 || slideIndex > totalSlides) return;



    



    // Deactivate current slide



    document.querySelector(`.slide[data-slide="${currentSlide}"]`).classList.remove('active');



    



    // Set current index



    currentSlide = slideIndex;



    



    // Activate new slide



    const newSlide = document.querySelector(`.slide[data-slide="${currentSlide}"]`);



    newSlide.classList.add('active');



    



    // Update Slide Info Texts



    const lang = slideData[currentLanguage];



    document.getElementById('slide-info').innerText = `${lang.slide} ${currentSlide} / ${totalSlides}`;



    



    // Update footer progress line width



    const progressPct = ((currentSlide - 1) / (totalSlides - 1)) * 100;



    document.getElementById('progress-bar').style.width = `${progressPct}%`;



    



    // Custom triggering animations on specific slides



    if (currentSlide === 4) { // SMART slide progress bars



        const bars = document.querySelectorAll('.smart-progress-bar');



        bars.forEach((bar, idx) => {



            const widths = ["90%", "85%", "95%", "80%"];



            setTimeout(() => {



                bar.style.width = widths[idx];



            }, 100);



        });



    }



}







// Setup Event Listeners



document.addEventListener('DOMContentLoaded', () => {



    // Initial translation update



    updateLanguage();



    goToSlide(1);



    



    // Lang switcher



    document.getElementById('lang-toggle').addEventListener('click', () => {



        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';



        updateLanguage();



    });



    



    // Nav buttons



    document.getElementById('btn-prev').addEventListener('click', () => {



        goToSlide(currentSlide - 1);



    });



    



    document.getElementById('btn-next').addEventListener('click', () => {



        goToSlide(currentSlide + 1);



    });



    



    // Key listeners



    document.addEventListener('keydown', (e) => {



        if (e.key === 'ArrowRight') {



            if (currentLanguage === 'ar') {



                goToSlide(currentSlide - 1);



            } else {



                goToSlide(currentSlide + 1);



            }



        } else if (e.key === 'ArrowLeft') {



            if (currentLanguage === 'ar') {



                goToSlide(currentSlide + 1);



            } else {



                goToSlide(currentSlide - 1);



            }



        }



    });



    



    // Calendar calendar tabs



    document.querySelectorAll('.calendar-tab').forEach(tab => {



        tab.addEventListener('click', (e) => {



            document.querySelector('.calendar-tab.active').classList.remove('active');



            e.target.classList.add('active');



            const week = e.target.getAttribute('data-week');



            updateCalendarGrid(week);



        });



    });



    



    // Recommendation panels expansion



    document.querySelectorAll('.rec-panel').forEach(panel => {



        panel.addEventListener('click', (e) => {



            const activePanel = document.querySelector('.rec-panel.active');



            const target = e.currentTarget;



            if (activePanel && activePanel !== target) {



                activePanel.classList.remove('active');



            }



            target.classList.toggle('active');



        });



    });



});




