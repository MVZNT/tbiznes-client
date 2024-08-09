import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getPreferredLanguage = (uz: string, ru: string): string => {
    const storedLanguage = localStorage.getItem("lang");

    switch (storedLanguage) {
        case "uz":
            return uz;
        case "ru":
            return ru;
        default:
            return ru;
    }
};