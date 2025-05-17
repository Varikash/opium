'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Определяем доступные языки как литеральный тип
type AvailableLanguage = 'ru' | 'ro';

// Определяем форму нашего контекста
interface LanguageContextType {
    language: AvailableLanguage;
    toggleLanguage: () => void;
    setLanguage: (lang: AvailableLanguage) => void;
}

// Создаем контекст со значением по умолчанию
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Определяем props для компонента LanguageProvider
interface LanguageProviderProps {
    children: ReactNode;
    defaultLanguage?: AvailableLanguage;
}

// Кастомный хук для использования языкового контекста
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage должен использоваться внутри LanguageProvider');
    }
    return context;
};

// Компонент Provider, который оборачивает ваше приложение
export function LanguageProvider({
                                     children,
                                     defaultLanguage = 'ru'
                                 }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<AvailableLanguage>(defaultLanguage);

    // Функция для переключения между языками
    const toggleLanguage = () => {
        setLanguageState(prevLang => (prevLang === 'ru' ? 'ro' : 'ru'));
    };

    // Функция для прямой установки конкретного языка
    const setLanguage = (lang: AvailableLanguage) => {
        setLanguageState(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}