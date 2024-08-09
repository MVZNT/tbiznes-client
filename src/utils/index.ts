import dateFormat from "dateformat";
import {SingleAnnouncementType} from "../types/announcement";

export const dateFormatter = (date: string) => {
    return dateFormat(date, "mm/dd/yyyy, HH:MM");
};

export const getLikedItems = (): SingleAnnouncementType[] | [] => {
    const getLikedAnnouncements = localStorage.getItem("likedAnnouncements");
    return getLikedAnnouncements ? JSON.parse(getLikedAnnouncements) : []
};

export const customSlugify = (text: string) => {
    return text
        .replace(/[^\p{L}\p{N}\s-]+/gu, '') // Remove unwanted characters
        .trim() // Trim leading and trailing whitespace
        .replace(/[-\s]+/g, '-') // Replace one or more hyphens or spaces with a single hyphen
        .replace(/-{2,}/g, '-') // Replace multiple consecutive hyphens with a single hyphen
        .toLowerCase();
};
