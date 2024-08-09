import {FiHeart} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {SingleAnnouncementType} from "../../types/announcement";
import dateFormat from "dateformat";
import useLikeOrDislike from "../../hooks/useLikeOrDislike.ts";
import {getPreferredLanguage} from "../../lib/utils.ts";
import {useTranslation} from "react-i18next";

type PostProps = {
    data: SingleAnnouncementType;
};

const PostCard = ({data}: PostProps) => {
    const {isUserLiked, onLikeOrDislike} = useLikeOrDislike(data)

    const {t} = useTranslation()

    return (
        <Link to={`/announcement/${data.id}`} className="flex flex-col gap-2 rounded-t-2xl">
            <div
                className="max-lg:h-[160px] h-[250px] bg-center bg-cover w-full rounded-2xl flex justify-between items-start px-4 pt-4 max-lg:px-1 max-lg:pt-3"
                style={{backgroundImage: `url(${data.cover_image.url})`}}
            >
                <span
                    className="bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm max-lg:text-[10px] max-lg:leading-4 font-pragmaticaMedium">
                    {getPreferredLanguage(data?.category?.name_uz, data?.category?.name_ru)}
                </span>

                <div className="p-2 max-lg:p-[5px] rounded-full bg-white" onClick={onLikeOrDislike}>
                    {isUserLiked ? (
                        <FaHeart className="text-red-500 text-[19px] max-lg:text-xs"/>
                    ) : (
                        <FiHeart className="text-[#353847] text-[19px] max-lg:text-xs"/>
                    )}
                </div>
            </div>

            <span className="font-pragmaticaMedium text-[18px] max-lg:text-sm">${data.price}</span>

            <span className="font-pragmaticaExtendedBold max-lg:text-xs">
                {getPreferredLanguage(data.descr_uz, data.descr_ru)?.length < 50 ? getPreferredLanguage(data.descr_uz, data.descr_ru) : `${getPreferredLanguage(data.descr_uz, data.descr_ru).substring(0, 49)}...`}
            </span>

            <div className="flex flex-col gap-1 ">
                <span className="font-pragmaticaMedium text-[#646464] text-sm max-lg:text-xs">
                    {getPreferredLanguage(data.location_name_uz, data.location_name_ru)}
                </span>

                <div
                    className="flex font-pragmaticaLight max-lg:flex-col max-lg:gap-1 gap-2 text-sm max-lg:text-xs text-[#646464]"
                >
                    <span>{t("createdAt")}: {dateFormat(data?.createdAt, "mm.dd.yyyy")}</span>
                    <span className="max-lg:hidden">•</span>
                    <span>{t("updatedAt")}: {dateFormat(data?.updatedAt, "mm.dd.yyyy")}</span>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;