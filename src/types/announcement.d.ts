import {SingleCategoryType} from "./category";

export type SingleImageType = {
    id: number,
    name: string,
    fileId: string,
    bucketId: string,
    url: string,
    createdAt: string,
    updatedAt: string
}

export type SingleAnnouncementType = {
    id: number,
    categoryId: number,
    title_uz: string,
    title_ru: string,
    price: number,
    descr_uz: string,
    descr_ru: string,
    cover_image: SingleImageType,
    images: SingleImageType[],
    location_code: string,
    location_name_uz: string,
    location_name_ru: string,
    phone: string,
    tg_username: string,
    views: number,
    createdAt: string,
    updatedAt: string,
    category: {
        id: number,
        name_uz: string,
        name_ru: string,
    }
}


export type CatgeoriesBreadcrumpType = {
    id: number,
    name_uz: string,
    name_ru: string
}

export type GetSingleAnnouncementType = {
    info: SingleAnnouncementType,
    categoriesBreadCrump: CatgeoriesBreadcrumpType[],
    relatedAnnouncements: SingleAnnouncementType[]
}

export type GetAnnouncementsType = {
    meta: {
        currentPage: number,
        limit: number,
        total_pages: number,
        totalAnnouncements: number
    },
    announcements: SingleAnnouncementType[]
}

export type GetItemsForHomeType = {
    popularCategories: SingleCategoryType[],
    latestAnnouncements: SingleAnnouncementType[]
}