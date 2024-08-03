import {FiHeart} from "react-icons/fi";

type PostCardProps = {
    title: string,
    cover_image: string,
    descr: string,
}

const PostCard = ({title, cover_image, descr}: PostCardProps) => {
    return (
        <div className={"flex flex-col gap-2 rounded-t-2xl"}>
            <div
                className={"max-lg:h-[160px] h-[250px] bg-center bg-cover w-full rounded-2xl flex justify-between items-start px-4 pt-4 max-lg:px-1 max-lg:pt-3"}
                style={{backgroundImage: `url(${cover_image})`}}
            >
                <span
                    className={"bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm max-lg:text-[10px] max-lg:leading-4 font-pragmaticaMedium"}>
                    {title}
                </span>

                <div className={"p-2 max-lg:p-[5px] rounded-full bg-white"}>
                    <FiHeart className={"text-[#353847] text-[19px] max-lg:text-xs"}/>
                </div>
            </div>

            <span className={"font-pragmaticaMedium text-[18px] max-lg:text-sm"}>$40000</span>
            <span className={"font-pragmaticaExtendedBold max-lg:text-xs"}>
                {descr?.length < 50 ? descr : `${descr.substring(0, 49)}...`}
            </span>

            <div className={"flex flex-col gap-1 "}>
                <span
                    className={"font-pragmaticaMedium text-[#646464] text-sm max-lg:text-xs"}
                >
                    Ташкент, Мирзо-Улугбекский район
                </span>

                <div
                    className={"flex font-pragmaticaLight max-lg:flex-col max-lg:gap-1 gap-2 text-sm max-lg:text-xs text-[#646464]"}
                >
                    <span>Опубликовано: 14.06.2024</span>
                    <span className={"max-lg:hidden"}>•</span>
                    <span>Обновлено: сегодня, 20:10</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;