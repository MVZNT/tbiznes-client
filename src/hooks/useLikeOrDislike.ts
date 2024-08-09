import {SingleAnnouncementType} from "../types/announcement";
import {useCallback, useState} from "react";

const useLikeOrDislike = (data: SingleAnnouncementType) => {
    const [isUserLiked, setIsUserLiked] = useState(() => {
        const getLikedAnnouncements = localStorage.getItem("likedAnnouncements");
        const parsedItems: SingleAnnouncementType[] = getLikedAnnouncements ? JSON.parse(getLikedAnnouncements) : [];
        return parsedItems.some((announcement) => announcement.id === data.id);
    });

    const onLikeOrDislike = useCallback((e: any) => {
        e.preventDefault();
        e.stopPropagation();

        const getLikedAnnouncements = localStorage.getItem("likedAnnouncements");
        const parsedItems: SingleAnnouncementType[] = getLikedAnnouncements ? JSON.parse(getLikedAnnouncements) : [];
        const findItem = parsedItems.find((announcement) => announcement.id === data.id);

        if (findItem) {
            const filteredItems = parsedItems.filter((announcement) => announcement.id !== data.id);
            localStorage.setItem("likedAnnouncements", JSON.stringify(filteredItems));
            setIsUserLiked(false);
        } else {
            setIsUserLiked(true);
            localStorage.setItem("likedAnnouncements", JSON.stringify([...parsedItems, data]));
        }
    }, [data]);

    return {isUserLiked, onLikeOrDislike};
};

export default useLikeOrDislike;
