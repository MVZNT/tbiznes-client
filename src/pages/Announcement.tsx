import {MdOutlineArrowForwardIos} from "react-icons/md";
import {ContactCard, PostCard} from "../components/cards";
import {AnnouncementSlider} from "../components/sliders";
import {FaHeart} from "react-icons/fa";
import {GetSingleAnnouncementType, SingleAnnouncementType} from "../types/announcement";
import {useGetSingleAnnouncement} from "../hooks/useAnnouncement.ts";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import dateFormat from "dateformat";
import useLikeOrDislike from "../hooks/useLikeOrDislike.ts";
import {FiHeart} from "react-icons/fi";
import {customSlugify} from "../utils";
import {useTranslation} from "react-i18next";
import {getPreferredLanguage} from "../lib/utils.ts";

const Announcement = () => {
    const {announcementId} = useParams()
    const getAnnouncementQuery = useGetSingleAnnouncement(+announcementId!)
    const announcementData: GetSingleAnnouncementType = getAnnouncementQuery?.data?.data
    const {t} = useTranslation();

    useEffect(() => {
        if (announcementId) {
            getAnnouncementQuery.refetch();
        }
    }, [announcementId]);

    if (getAnnouncementQuery.isFetching) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={"flex flex-col gap-2 pb-14"}>
            <div className={"flex gap-2 mt-4 max-lg:mt-0"}>
                <Link to={'/'} className={"text-[#353847] flex gap-2 items-center"}>
                    <span className={"text-sm max-lg:text-xs"}>Главная</span>
                    <MdOutlineArrowForwardIos className={"text-sm mb-[1px]"}/>
                </Link>

                {announcementData?.categoriesBreadCrump?.map((category, index) => (
                    <div key={index} className={"flex gap-2 font-medium "}>
                        <Link to={`/category/${category.id}`} className={"text-[#353847] flex gap-2 items-center"}>
                            <span
                                className={"text-sm max-lg:text-xs"}
                            >
                                {getPreferredLanguage(category.name_uz, category.name_ru)}
                            </span>

                            <MdOutlineArrowForwardIos
                                className={`text-sm mb-[1px] ${announcementData?.categoriesBreadCrump?.length - 1 === index && "max-lg:hidden"}`}
                            />
                        </Link>
                    </div>
                ))}

                <span className={"text-[#7E7E7E] text-sm max-lg:text-xs max-lg:hidden"}>
                    {customSlugify(getPreferredLanguage(announcementData?.info?.title_uz, announcementData?.info?.title_ru) || new Date(announcementData?.info?.createdAt).toDateString() || "post")}
                </span>
            </div>

            <div className={"flex  max-lg:gap-1 mt-4 gap-4 text-sm max-lg:text-xs text-[#646464]"}>
                <div className={"flex gap-1"}>
                    <span className={"text-[#353847]"}>{t("createdAt")}:</span>
                    <span
                        className={"text-[#7E7E7E]"}>{dateFormat(announcementData?.info?.updatedAt, "mm.dd.yyyy,HH:MM")}</span>
                </div>

                <span className={"max-lg:hidden"}>•</span>

                <div className={"flex gap-1"}>
                    <span className={"text-[#353847]"}>{t("updatedAt")}:</span>
                    <span
                        className={"text-[#7E7E7E]"}>{dateFormat(announcementData?.info?.updatedAt, "mm.dd.yyyy,HH:MM")}</span>
                </div>
            </div>

            <div className={"flex justify-between gap-20 w-full mt-1 max-lg:flex-col"}>
                {/* block 1 (left) */}
                <div className={"flex flex-col gap-10 w-[60%] max-lg:w-full"}>
                    {/* images (banner) */}
                    {
                        announcementData?.info?.images?.length !== 0
                        && <AnnouncementSlider data={announcementData?.info}/>
                    }

                    {/* Price and location bar */}
                    <div className={"hidden max-lg:block"}>
                        <PriceAndLocation {...announcementData?.info}/>
                    </div>

                    {/* description */}
                    <div className={"flex flex-col gap-7"}>
                        <h1 className={"font-pragmaticaExtendedBold text-2xl max-lg:text-[18px]"}>{t("description")}</h1>

                        <span className={"max-lg:text-sm"}>
                            {getPreferredLanguage(announcementData?.info?.descr_uz, announcementData?.info?.descr_ru)}
                        </span>
                    </div>
                </div>

                {/* block 2 (right) */}
                <div className={"w-[35%] max-lg:w-full flex flex-col gap-5"}>
                    <div className={"max-lg:hidden"}>
                        <PriceAndLocation {...announcementData?.info}/>
                    </div>

                    <div className={"mt-[30px] flex flex-col gap-[30px] max-lg:hidden"}>
                        <div>
                            <img src="/ads.svg" alt="#"/>
                        </div>

                        <div>
                            <img src="/ads.svg" alt="#"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mt-20 flex flex-col gap-10 max-lg:mt-8"}>
                <div className={"flex justify-between items-center"}>
                    <h1 className={"font-pragmaticaExtendedBold text-2xl max-lg:text-[18px]"}>{t("announcements.related")}</h1>

                    {/*  here i have to add more (...) or more-scroll part  */}
                </div>

                <div className={"grid grid-cols-3 gap-[30px] max-lg:grid-cols-2"}>
                    {
                        announcementData?.relatedAnnouncements?.map(announcement => (
                            <PostCard key={announcement.id} data={announcement}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Announcement;

export const PriceAndLocation = (data: SingleAnnouncementType) => {
    const {isUserLiked, onLikeOrDislike} = useLikeOrDislike(data)
    const {t} = useTranslation();

    return (
        <div className={"flex flex-col gap-4"}>
            <div
                className={"bg-white rounded-xl p-[30px] flex flex-col gap-4"}
                style={{
                    boxShadow: "0px 4px 16px 0px #00000014"
                }}
            >
                <div className={"flex gap-3 items-center"}>
                    {isUserLiked ? (
                        <FaHeart
                            className="text-red-500 text-[19px] max-lg:text-xs cursor-pointer"
                            onClick={onLikeOrDislike}
                        />
                    ) : (
                        <FiHeart
                            className="text-[#353847] text-[19px] max-lg:text-xs cursor-pointer"
                            onClick={onLikeOrDislike}
                        />
                    )}
                    <span
                        className={"text-[#353847] font-pragmaticaMedium max-lg:text-sm"}>{t("save_to_favorites")}</span>
                </div>

                <h1 className={"text-xl font-pragmaticaBold max-lg:text-base"}>
                    {getPreferredLanguage(data.title_uz, data.title_ru)}
                </h1>

                <span className={"text-2xl max-lg:text-xl font-pragmaticaBold"}>${data.price}</span>

                <div>
                    <ContactCard phone={data.phone} tg_username={data.tg_username}/>
                </div>
            </div>

            <div
                className={"bg-white rounded-xl p-[25px] flex flex-col gap-[9px]"}
                style={{
                    boxShadow: "0px 4px 16px 0px #00000014"
                }}
            >
                <h1 className={"font-pragmaticaExtendedBold text-[18px] max-lg:text-base"}>{t("location")}</h1>

                <div className={"flex flex-col gap-[5px] leading-4"}>
                    <div className={"flex gap-[5px] items-center"}>
                        <img src="/location.svg" alt="#" className={"w-[18px] h-[18px]"}/>
                        <span
                            className={"self-center text-base"}>{getPreferredLanguage(data.location_name_uz, data.location_name_ru)}</span>
                    </div>

                    <a
                        href={`https://www.google.com/maps/place/${data.location_code}`}
                        target={"_blank"}
                        className={"text-[#0061F3]"}
                    >
                        {t("show_on_map")}
                    </a>
                </div>
            </div>
        </div>
    );
};