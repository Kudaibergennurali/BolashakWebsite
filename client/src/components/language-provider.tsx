import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "kk";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.specialties": "Specialties",
    "nav.activity": "Activity",
    "nav.students": "For Students",
    "nav.applicants": "For Applicants",
    "nav.contacts": "Contacts",
    
    // Hero Section
    "hero.title": "Welcome to Bolashak College",
    "hero.subtitle": "Shaping the Future Through Excellence in Education",
    "hero.apply": "Apply Now",
    "hero.explore": "Explore Programs",
    
    // About Section
    "about.title": "About Bolashak College",
    "about.description": "Founded with a vision to provide world-class education, Bolashak College has been nurturing minds and building futures for over two decades.",
    "about.excellence": "Academic Excellence",
    "about.excellence.desc": "Committed to providing the highest quality education with experienced faculty and modern curriculum.",
    "about.community": "Vibrant Community",
    "about.community.desc": "A diverse student body from various backgrounds creating a rich learning environment.",
    "about.innovation": "Innovation Hub",
    "about.innovation.desc": "State-of-the-art facilities and cutting-edge technology to prepare students for tomorrow.",
    
    // Specialties
    "specialties.title": "Our Specialties",
    "specialties.description": "Discover our comprehensive range of programs designed to meet the demands of tomorrow's careers.",
    "spec.engineering": "Engineering",
    "spec.engineering.desc": "Computer Science, Software Engineering, IT",
    "spec.business": "Business",
    "spec.business.desc": "Management, Economics, Finance",
    "spec.science": "Sciences",
    "spec.science.desc": "Biology, Chemistry, Physics",
    "spec.arts": "Arts & Design",
    "spec.arts.desc": "Graphic Design, Digital Arts, Media",
    
    // Activity
    "activity.title": "Campus Activities",
    "activity.description": "Life at Bolashak College extends beyond the classroom with numerous opportunities for growth and engagement.",
    "activity.science": "Science Fair",
    "activity.science.desc": "Annual innovation showcase",
    "activity.sports": "Sports",
    "activity.sports.desc": "Athletic programs and competitions",
    "activity.arts": "Arts & Culture",
    "activity.arts.desc": "Creative expression programs",
    "events.upcoming": "Upcoming Events",
    "event.openday": "Open Day 2024",
    "event.openday.desc": "March 15, 2024 - Campus tours and program information",
    "event.competition": "Inter-College Competition",
    "event.competition.desc": "April 2-5, 2024 - Academic and sports competitions",
    
    // Students
    "students.title": "For Current Students",
    "students.description": "Access all the resources and services you need for a successful academic journey.",
    "students.portal": "Student Portal",
    "students.portal.desc": "Access grades, schedules, and academic resources online.",
    "students.library": "Digital Library",
    "students.library.desc": "Access thousands of digital books and research materials.",
    "students.support": "Student Support",
    "students.support.desc": "Academic counseling and career guidance services.",
    "students.access": "Access Portal →",
    "students.visit": "Visit Library →",
    "students.get": "Get Support →",
    
    // Applicants
    "applicants.title": "For Prospective Students",
    "applicants.description": "Start your journey with us. Everything you need to know about admissions and application process.",
    "applicants.process": "Admission Process",
    "step.1": "Submit Application",
    "step.1.desc": "Complete our online application form",
    "step.2": "Document Review",
    "step.2.desc": "Submit required academic documents",
    "step.3": "Interview & Assessment",
    "step.3.desc": "Participate in our evaluation process",
    "step.4": "Acceptance",
    "step.4.desc": "Receive admission decision and enrollment details",
    "applicants.start": "Start Your Application",
    
    // Contacts
    "contacts.title": "Get in Touch",
    "contacts.description": "Have questions? We're here to help. Contact us through any of the following channels.",
    "contacts.info": "Contact Information",
    "contacts.address": "Address",
    "contacts.phone": "Phone",
    "contacts.email": "Email",
    "contacts.hours": "Office Hours",
    "contacts.hours.desc": "Monday - Friday: 8:00 AM - 6:00 PM",
    "contacts.form": "Send us a Message",
    "form.name": "Full Name *",
    "form.email": "Email Address *",
    "form.subject": "Subject",
    "form.message": "Message *",
    "form.send": "Send Message",
    "inquiry.general": "General Inquiry",
    "inquiry.admission": "Admission Information",
    "inquiry.programs": "Program Details",
    "inquiry.other": "Other",
    
    // Footer
    "footer.tagline": "Excellence in Education",
    "footer.description": "Preparing students for success in an ever-changing world through innovative education and community engagement.",
    "footer.links": "Quick Links",
    "footer.resources": "Student Resources",
    "footer.career": "Career Services",
    "footer.calendar": "Academic Calendar",
    "footer.follow": "Follow Us",
    "footer.copyright": "© 2024 Bolashak College. All rights reserved.",
    
    // Tooltips
    "tooltip.language": "Change Language",
    "tooltip.theme": "Toggle Dark Mode",
    "tooltip.zoomin": "Zoom In",
    "tooltip.zoomout": "Zoom Out",
    "tooltip.reset": "Reset Zoom",
    "tooltip.chatbot": "AI Assistant (Coming Soon)",
  },
  kk: {
    // Navigation
    "nav.home": "Басты бет",
    "nav.about": "Біз туралы",
    "nav.specialties": "Мамандықтар",
    "nav.activity": "Іс-шаралар",
    "nav.students": "Студенттерге",
    "nav.applicants": "Түсушілерге",
    "nav.contacts": "Байланыс",
    
    // Hero Section
    "hero.title": "Болашақ колледжіне қош келдіңіз",
    "hero.subtitle": "Білім берудегі үздіктік арқылы болашақты қалыптастырамыз",
    "hero.apply": "Өтініш беру",
    "hero.explore": "Бағдарламаларды зерттеу",
    
    // About Section
    "about.title": "Болашақ колледжі туралы",
    "about.description": "Әлемдік деңгейдегі білім беру көзқарасымен құрылған Болашақ колледжі жиырма жылдан астам уақыт бойы ақыл-ойды дамытып, болашақ құруда.",
    "about.excellence": "Академиялық үздіктік",
    "about.excellence.desc": "Тәжірибелі оқытушылар мен заманауи оқу бағдарламасымен жоғары сапалы білім беруге берілген.",
    "about.community": "Жандануды қоғамдастық",
    "about.community.desc": "Әртүрлі жағдайлардан шыққан көпүлттық студенттер қауымы бай оқу ортасын құрайды.",
    "about.innovation": "Инновация орталығы",
    "about.innovation.desc": "Студенттерді ертеңгі күнге дайындау үшін заманауи мүкіштіктер мен жаңа технологиялар.",
    
    // Specialties
    "specialties.title": "Біздің мамандықтар",
    "specialties.description": "Ертеңгі мамандықтардың сұраныстарына сай әзірленген кешенді бағдарламаларымызды ашыңыз.",
    "spec.engineering": "Инженерия",
    "spec.engineering.desc": "Компьютер ғылымы, Бағдарламалық инженерия, АТ",
    "spec.business": "Бизнес",
    "spec.business.desc": "Менеджмент, Экономика, Қаржы",
    "spec.science": "Ғылымдар",
    "spec.science.desc": "Биология, Химия, Физика",
    "spec.arts": "Өнер және дизайн",
    "spec.arts.desc": "Графикалық дизайн, Сандық өнер, Медиа",
    
    // Activity
    "activity.title": "Кампус іс-шаралары",
    "activity.description": "Болашақ колледжіндегі өмір сыныптан тыс көптеген өсу және қатысу мүмкіндіктерімен кеңейеді.",
    "activity.science": "Ғылым жәрмеңкесі",
    "activity.science.desc": "Жылдық инновация көрмесі",
    "activity.sports": "Спорт",
    "activity.sports.desc": "Спорт бағдарламалары мен жарыстар",
    "activity.arts": "Өнер және мәдениет",
    "activity.arts.desc": "Шығармашылық өрнек бағдарламалары",
    "events.upcoming": "Алдағы іс-шаралар",
    "event.openday": "Ашық күн 2024",
    "event.openday.desc": "15 наурыз, 2024 - Кампус турлары және бағдарлама ақпараты",
    "event.competition": "Колледжаралық жарыс",
    "event.competition.desc": "2-5 сәуір, 2024 - Академиялық және спорт жарыстары",
    
    // Students
    "students.title": "Қазіргі студенттерге",
    "students.description": "Табысты академиялық сапар үшін қажет барлық ресурстар мен қызметтерге қол жеткізіңіз.",
    "students.portal": "Студент порталы",
    "students.portal.desc": "Бағалар, кестелер және академиялық ресурстарға онлайн қол жеткізу.",
    "students.library": "Сандық кітапхана",
    "students.library.desc": "Мыңдаған сандық кітаптар мен зерттеу материалдарына қол жеткізу.",
    "students.support": "Студенттерді қолдау",
    "students.support.desc": "Академиялық кеңес беру және мансап бағыттау қызметтері.",
    "students.access": "Порталға кіру →",
    "students.visit": "Кітапханаға кіру →",
    "students.get": "Қолдау алу →",
    
    // Applicants
    "applicants.title": "Болашақ студенттерге",
    "applicants.description": "Бізбен сапарыңызды бастаңыз. Қабылдау және өтініш беру процесі туралы білуге қажет барлық нәрсе.",
    "applicants.process": "Қабылдау процесі",
    "step.1": "Өтініш беру",
    "step.1.desc": "Біздің онлайн өтініш формасын толтырыңыз",
    "step.2": "Құжат қарау",
    "step.2.desc": "Қажетті академиялық құжаттарды ұсыныңыз",
    "step.3": "Сұхбат және бағалау",
    "step.3.desc": "Біздің бағалау процесіне қатысыңыз",
    "step.4": "Қабылдау",
    "step.4.desc": "Қабылдау шешімі мен тіркелу мәліметтерін алыңыз",
    "applicants.start": "Өтінішіңізді бастаңыз",
    
    // Contacts
    "contacts.title": "Байланыста болыңыз",
    "contacts.description": "Сұрақтарыңыз бар ма? Біз көмектесуге дайынбыз. Келесі арналардың кез келгені арқылы бізге хабарласыңыз.",
    "contacts.info": "Байланыс ақпараты",
    "contacts.address": "Мекен-жай",
    "contacts.phone": "Телефон",
    "contacts.email": "Электрондық пошта",
    "contacts.hours": "Жұмыс уақыты",
    "contacts.hours.desc": "Дүйсенбі - Жұма: 8:00 - 18:00",
    "contacts.form": "Бізге хабарлама жіберіңіз",
    "form.name": "Толық аты-жөні *",
    "form.email": "Электрондық пошта мекен-жайы *",
    "form.subject": "Тақырып",
    "form.message": "Хабарлама *",
    "form.send": "Хабарлама жіберу",
    "inquiry.general": "Жалпы сұрақ",
    "inquiry.admission": "Қабылдау ақпараты",
    "inquiry.programs": "Бағдарлама мәліметтері",
    "inquiry.other": "Басқа",
    
    // Footer
    "footer.tagline": "Білім берудегі үздіктік",
    "footer.description": "Инновациялық білім беру және қоғамдастық байланысы арқылы студенттерді үнемі өзгеріп отыратын әлемде табысқа дайындау.",
    "footer.links": "Жылдам сілтемелер",
    "footer.resources": "Студент ресурстары",
    "footer.career": "Мансап қызметтері",
    "footer.calendar": "Академиялық күнтізбе",
    "footer.follow": "Бізді қадағалаңыз",
    "footer.copyright": "© 2024 Болашақ колледжі. Барлық құқықтар қорғалған.",
    
    // Tooltips
    "tooltip.language": "Тілді өзгерту",
    "tooltip.theme": "Күңгірт режимді ауыстыру",
    "tooltip.zoomin": "Үлкейту",
    "tooltip.zoomout": "Кішірейту",
    "tooltip.reset": "Үлкейтуді қалпына келтіру",
    "tooltip.chatbot": "ЖИ көмекшісі (Жақын арада)",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}