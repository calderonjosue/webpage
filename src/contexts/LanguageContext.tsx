"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.blog": "Blog",
    "nav.certifications": "Certifications",
    
    // Home
    "home.headline": "Quality-driven testing with automation expertise",
    "home.subline": "I'm Josué, a QA Automation Engineer with expertise in Cypress, Playwright & Selenium. I combine technical testing skills with UX/UI design knowledge and business acumen to deliver quality products.",
    "home.featured": "Featured work",
    
    // About
    "about.title": "About",
    "about.intro.title": "Introduction",
    "about.intro.description": "I'm a Bogotá-based QA Automation Engineer with a unique background in Literature and UX/UI Design. Originally from Venezuela, I combine analytical thinking from my humanities education with technical expertise in automated testing. My approach goes beyond finding bugs—I validate products from a user-centered perspective, ensuring quality aligns with business goals.",
    "about.work.title": "Work Experience",
    "about.studies.title": "Education & Certifications",
    "about.technical.title": "Technical Skills",
    
    // Work
    "work.title": "Projects",
    "work.description": "QA and automation projects",
    
    // Blog
    "blog.title": "Writing about the multiple connections between Engineering, Science, Poetry, and Philosophy",
    "blog.description": "Read what I've been up to recently",
    "blog.earlier": "Earlier posts",
    
    // Certifications
    "cert.title": "Professional Certifications",
    "cert.linkedin": "See all certificates on",
    "cert.summary": "Total Summary",
    "cert.ux": "UX/UI Design",
    "cert.marketing": "Digital Marketing",
    "cert.testing": "Testing & QA",
    "cert.programming": "Programming",
    "cert.certificates": "certificates",
    "cert.total": "Overall Total: 56 professional certificates",
    "cert.testing.title": "Testing & Quality Assurance | 2023–Present",
    "cert.programming.title": "Programming & Development | 2021–2024",
    "cert.ux.title": "UX/UI Experience Design | 2021",
    "cert.marketing.title": "Digital Marketing & Growth Analyst | 2021–2025",
    "cert.institutions": "Institutions",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.work": "Trabajo",
    "nav.blog": "Blog",
    "nav.certifications": "Certificaciones",
    
    // Home
    "home.headline": "Pruebas de calidad con experiencia en automatización",
    "home.subline": "Soy Josué, un Ingeniero de Automatización QA con experiencia en Cypress, Playwright y Selenium. Combino habilidades técnicas de testing con conocimientos de diseño UX/UI y visión de negocio para entregar productos de calidad.",
    "home.featured": "Trabajo destacado",
    
    // About
    "about.title": "Acerca de",
    "about.intro.title": "Introducción",
    "about.intro.description": "Soy un Ingeniero de Automatización QA con sede en Bogotá con una formación única en Literatura y Diseño UX/UI. Originario de Venezuela, combino el pensamiento analítico de mi educación humanística con experiencia técnica en pruebas automatizadas. Mi enfoque va más allá de encontrar errores: valido productos desde una perspectiva centrada en el usuario, asegurando que la calidad se alinee con los objetivos del negocio.",
    "about.work.title": "Experiencia Laboral",
    "about.studies.title": "Educación y Certificaciones",
    "about.technical.title": "Habilidades Técnicas",
    
    // Work
    "work.title": "Proyectos",
    "work.description": "Proyectos de QA y automatización",
    
    // Blog
    "blog.title": "Escribiendo sobre las múltiples conexiones entre Ingeniería, Ciencia, Poesía y Filosofía",
    "blog.description": "Lee lo que he estado haciendo recientemente",
    "blog.earlier": "Publicaciones anteriores",
    
    // Certifications
    "cert.title": "Certificaciones Profesionales",
    "cert.linkedin": "Ver todos los certificados en",
    "cert.summary": "Resumen Total",
    "cert.ux": "Diseño UX/UI",
    "cert.marketing": "Marketing Digital",
    "cert.testing": "Testing y QA",
    "cert.programming": "Programación",
    "cert.certificates": "certificados",
    "cert.total": "Total General: 56 certificados profesionales",
    "cert.testing.title": "Testing y Aseguramiento de Calidad | 2023–Presente",
    "cert.programming.title": "Programación y Desarrollo | 2021–2024",
    "cert.ux.title": "Diseño de Experiencia UX/UI | 2021",
    "cert.marketing.title": "Marketing Digital y Analista de Crecimiento | 2021–2025",
    "cert.institutions": "Instituciones",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}