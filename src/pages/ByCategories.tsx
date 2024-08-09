import {Link, useParams} from "react-router-dom";
import {useGetAnnouncementsByCategory} from "../hooks/useAnnouncement.ts";
import {CatgeoriesBreadcrumpType, SingleAnnouncementType} from "../types/announcement";
import {PostCard} from "../components/cards";
import {useEffect} from "react";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {getPreferredLanguage} from "../lib/utils.ts";
import {useTranslation} from "react-i18next";

const AnnouncementsByCategories = () => {
    const {categoryId} = useParams()

    const getAnnouncementsQuery = useGetAnnouncementsByCategory(+categoryId!)
    const announcementsData: SingleAnnouncementType[] = getAnnouncementsQuery.data?.data?.announcements
    const categoriesBreadCrump: CatgeoriesBreadcrumpType[] = getAnnouncementsQuery?.data?.data?.categoriesBreadCrump

    const {t} = useTranslation();

    useEffect(() => {
        getAnnouncementsQuery?.refetch()
    }, [categoryId]);

    if (getAnnouncementsQuery?.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={"mt-5 flex flex-col gap-6"}>
            {/*<h1 className={"font-pragmaticaExtendedBold text-3xl max-lg:text-base text-center"}>*/}
            {/*    Объявления о категории*/}
            {/*    <span className={"text-red-500"}>«{categoryInfo?.name_ru}»</span>*/}
            {/*</h1>*/}

            <div className={"flex gap-2 mt-4 max-lg:mt-0"}>
                <Link to={'/'} className={"text-[#353847] flex gap-2 items-center"}>
                    <span className={"text-sm max-lg:text-xs"}>{t("main")}</span>
                    <MdOutlineArrowForwardIos className={"text-sm mb-[1px]"}/>
                </Link>

                {categoriesBreadCrump?.map((category, index) => (
                    <div key={index} className={"flex gap-2 font-medium "}>
                        {index !== categoriesBreadCrump?.length - 1 ? (
                            <Link to={`/category/${category.id}`} className={"text-[#353847] flex gap-2 items-center"}>
                                <span
                                    className={"text-sm max-lg:text-xs"}
                                >
                                    {getPreferredLanguage(category.name_uz, category.name_ru)}
                                </span>

                                <MdOutlineArrowForwardIos className={"text-sm mb-[1px]"}/>
                            </Link>
                        ) : (
                            <span
                                className={"text-[#7E7E7E] text-sm max-lg:text-xs"}
                            >
                                {getPreferredLanguage(category.name_uz, category.name_ru)}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className={"grid grid-cols-3 gap-5 max-lg:grid-cols-2"}>
                {
                    announcementsData?.map(announcement => (
                        <PostCard key={announcement.id} data={announcement}/>
                    ))
                }
            </div>
        </div>
    );
};

export default AnnouncementsByCategories;