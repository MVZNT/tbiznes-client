import {Carousel} from "antd";
import {CategoryCard, PostCard} from "../components/cards";
import {useEffect, useState} from "react";
import {useGetItemsForHome} from "../hooks/useAnnouncement.ts";
import {GetItemsForHomeType} from "../types/announcement";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Home = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

    const getItemsForHomeQuery = useGetItemsForHome()
    const itemsData: GetItemsForHomeType = getItemsForHomeQuery?.data?.data

    const {t} = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={"flex flex-col gap-5 mt-7 max-lg:gap-2"}>
            {/* Desktop carousel */}
            <Carousel
                autoplay
                arrows
                className={"z-0"}
                draggable
                style={{
                    display: isLargeScreen ? "block" : "none"
                }}
            >
                <div className={"h-[340px] max-lg:h-[200px] bg-[#353847] rounded-2xl "}>
                    <div className={"max-lg:hidden flex justify-between"}>
                        <div className={"flex flex-col justify-center pl-20 gap-5"}>
                            <h1
                                className={"font-bold text-[38px] max-lg:text-xl text-white font-pragmaticaExtendedBold leading-10"}
                            >
                                Продавайте и покупайте с легкостью!
                            </h1>

                            <p
                                className={"text-[18px] text-white w-[80%] leading-6"}
                            >
                                Найдите лучшие предложения и продайте свои товарыв два клика. Быстро,
                                удобно и
                                безопасно!
                            </p>

                            <button
                                className={"flex justify-center py-[10px] rounded-lg bg-white text-black w-[212px] font-medium text-base"}
                            >
                                Заказать размещение
                            </button>
                        </div>

                        <div
                            className="w-[600px] h-[340px] bg-cover bg-center rounded-r-2xl"
                            style={{backgroundImage: 'url(/sample-banner-image.jpg)'}}
                        ></div>
                    </div>
                </div>
            </Carousel>

            {/* Mobile carousel */}
            <Carousel
                autoplay
                draggable
                className={"z-0"}
                style={{
                    display: isLargeScreen ? "none" : "block"
                }}
            >
                <div className={"h-[180px] bg-[#353847] rounded-2xl"}>
                    <div className={"flex justify-between h-full"}>
                        <div className={"flex flex-col justify-center gap-3 p-3"}>
                            <h1 className={"text-white text-xs font-pragmaticaExtendedBold"}>
                                Продавайте и покупайте с легкостью!
                            </h1>

                            <span className={"text-[10px] text-white leading-4"}>Найдите лучшие предложения и продайте свои товарыв два клика. Быстро, удобнои безопасно!</span>

                            <button
                                className={"flex justify-center py-[6px] font-semibold rounded-lg bg-white text-black w-[129px] text-[10px]"}
                            >
                                Заказать размещение
                            </button>
                        </div>

                        <div
                            className="w-[400px] h-full bg-cover  rounded-r-2xl"
                            style={{backgroundImage: 'url(/sample-banner-image.jpg)'}}
                        ></div>
                    </div>
                </div>
            </Carousel>

            {/* Categories */}
            <div className={"flex flex-col gap-4 mt-10"}>
                    <span
                        className={"font-pragmaticaExtendedBold text-3xl max-lg:text-base text-center"}
                    >
                        {t("categories.popular")}
                    </span>
                <div
                    className={"grid grid-cols-5 gap-7 mt-10 max-lg:mt-5 max-lg:flex max-lg:gap-3 max-lg:overflow-x-auto"}
                >
                    {
                        itemsData?.popularCategories?.map(category => (
                            <CategoryCard key={category.id} data={category}/>
                        ))
                    }
                </div>
            </div>

            {/*  Posts  */}
            <div className={"flex flex-col gap-4 mt-10"}>
                <span
                    className={"font-pragmaticaExtendedBold text-3xl max-lg:text-base text-center"}
                >
                    {t("announcements.latest")}
                </span>

                <div
                    className={"grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-4 gap-14 mt-10 max-lg:mt-5"}
                >
                    {
                        itemsData?.latestAnnouncements?.map(announcment => (
                            <PostCard key={announcment.id} data={announcment}/>
                        ))
                    }
                </div>

                <div className={"flex justify-center"}>
                    <Link
                        to={"/announcements"}
                        className={"rounded-lg py-[10px] w-[260px] bg-[#1D2023] text-center text-white font-pragmaticaMedium cursor-pointer"}
                    >
                        {t("load_more")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;