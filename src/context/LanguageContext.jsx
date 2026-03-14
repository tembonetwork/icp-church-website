import React, { createContext, useContext, useState } from 'react';
import translations from '../translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    const toggleLang = () => setLang((prev) => (prev === 'en' ? 'rw' : 'en'));

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => useContext(LanguageContext);
