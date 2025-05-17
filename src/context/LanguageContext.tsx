'use client';

import React, {createContext, useState, useContext, ReactNode} from 'react';

interface LanguageContextType {
    language: string;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}


export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<string>('ru'); // Default language is Russian

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'ru' ? 'ro' : 'ru'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}