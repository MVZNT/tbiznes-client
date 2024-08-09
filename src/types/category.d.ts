import {SingleImageType} from "./announcement";

export type SingleCategoryType = {
    id: number,
    name_uz: string,
    name_ru: string,
    image: SingleImageType,
    isPrimary: boolean,
    parentId: number | undefined,
    createdAt: string,
    updatedAt: string,
    children: SingleCategoryType[]
}