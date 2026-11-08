import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'th') return saved;
  } catch {}
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// t() returns the text for the current language from a { en, th } object;
// plain strings (tech names, tags) pass through unchanged.
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (v) => (v && typeof v === 'object' && 'en' in v ? v[lang] ?? v.en : v);
  return { lang, setLang, t };
}

// Interface labels
export const ui = {
  github: { en: 'GitHub', th: 'GitHub' },
  email: { en: 'Email', th: 'อีเมล' },
  projects: { en: 'Projects', th: 'โปรเจกต์' },
  skills: { en: 'Skills', th: 'ทักษะ' },
  experience: { en: 'Experience', th: 'ประสบการณ์' },
  activities: { en: 'Activities', th: 'กิจกรรม' },
  contact: { en: 'Contact', th: 'ติดต่อ' },
  all: { en: 'All', th: 'ทั้งหมด' },
  photoAlt: { en: 'Photo of Chitsanupong Preecharat', th: 'รูปของชิษณุพงศ์ ปรีชารัตน์' },
  langLabel: { en: 'Language', th: 'ภาษา' },
};
