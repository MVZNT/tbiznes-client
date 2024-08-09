import {useLanguageStore} from "@/hooks/useZustand";
import {startTransition, useState} from "react";
import {useTranslation} from "react-i18next";

const languages = [
    {code: "uz", label: "O'Z", descr: "O'zbekcha", flag: "/uz.svg"},
    {code: "ru", label: "RU", descr: "Русский", flag: "/ru.svg"}
];

export default function LanguageSelector() {
    const storedLang = useLanguageStore((state) => state.selectedLanguage);
    const {i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const selectedLang = languages.find((item) => item.code === storedLang);
        return selectedLang ? selectedLang : languages[1];
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (language: any) => {
        startTransition(() => {
            setSelectedLanguage(language);
            i18n.changeLanguage(language.code);
        });
        setIsOpen(false);
        localStorage.setItem("lang", language.code);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown z-40">
            <button
                className="dropdown-button max-lg:bg-white"
                onClick={toggleDropdown}
            >
                <img src={selectedLanguage.flag} alt={selectedLanguage.label}/>
                <span className="max-lg:text-black-primary">
                    {selectedLanguage.label}
                </span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu max-lg:bg-black-primary">
                    {languages.map((language) => (
                        <li
                            key={language.code}
                            onClick={() => handleSelect(language)}
                        >
                            <img
                                src={language.flag}
                                alt={language.label}
                            />
                            <span className="max-lg:text-white">
                                {language.descr}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
