import {useQuery} from "@tanstack/react-query";
import {api} from "../api";
import {QueryKeys} from "./queryKeys.ts";

export const useGetCategories = (enabled: boolean) => {
    return useQuery({
        queryKey: [QueryKeys.GET_CATEGORIES],
        queryFn: async () => {
            return await api.get("/category", {
                params: {
                    includeSubCategories: true,
                }
            })
        },
        enabled
    })
}

export const useGetPrimaryCategories = () => {
    return useQuery({
        queryKey: [QueryKeys.GET_CATEGORIES],
        queryFn: async () => {
            return await api.get("/category", {
                params: {
                    includeSubCategories: false,
                    getOnlyPrimary: true,
                }
            })
        },
    })
}
