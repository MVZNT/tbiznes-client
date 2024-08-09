import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {api} from "../api";
import {QueryKeys} from "./queryKeys.ts";
import {GetAnnouncementsType} from "../types/announcement";

export const useGetAnnouncements = (keyword?: string) => {
    return useInfiniteQuery({
        queryKey: [QueryKeys.GET_ANNOUNCEMENTS],
        queryFn: async (item) => {
            return await api.get("/announcement", {
                params: {
                    page: item.pageParam,
                    limit: 12,
                    keyword: keyword
                }
            });
        },
        refetchOnWindowFocus: false,
        initialPageParam: 1,
        getNextPageParam: (match) => {
            const matchInfo: GetAnnouncementsType = match?.data
            const metaData = matchInfo?.meta;
            return metaData.currentPage < metaData.total_pages
                ? metaData.currentPage + 1
                : undefined;
        }
    })
}

export const useGetItemsForHome = () => {
    return useQuery({
        queryKey: [QueryKeys.GET_ITEMS_FOR_HOME],
        queryFn: async () => {
            return await api.get("/announcement/home");
        },
        refetchOnWindowFocus: false
    })
}

export const useGetSingleAnnouncement = (announcementId: number) => {
    return useQuery({
        queryKey: [QueryKeys.GET_SINGLE_ANNOUNCEMENT],
        queryFn: async () => {
            return await api.get(`/announcement/${announcementId}`);
        },
        refetchOnWindowFocus: false
    })
}

export const useGetAnnouncementsByCategory = (categoryId: number) => {
    return useQuery({
        queryKey: [QueryKeys.GET_ANNOUNCEMENTS_BY_CATEGORY],
        queryFn: async () => {
            return await api.get(`/announcement/category/${categoryId}`);
        },
        refetchOnWindowFocus: false
    })
}
