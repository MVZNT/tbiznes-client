import {create} from "zustand";

interface ModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useCategoryModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export const useMenuModal = create<ModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

type LanguageStore = {
    selectedLanguage: string;
    setSelectedLanguage: (lang: string) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
    selectedLanguage: localStorage.getItem("lang") || "ru",
    setSelectedLanguage: (lang) => set({selectedLanguage: lang}),
}));