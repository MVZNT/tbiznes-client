import {Carousel} from "antd";
import {CategoryCard, PostCard} from "../components/cards";
import {useEffect, useState} from "react";

const Home = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

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
                        Популярные категории
                    </span>

                <div
                    className={"grid grid-cols-5 gap-7 mt-10 max-lg:mt-5 max-lg:flex max-lg:gap-3 max-lg:overflow-x-auto"}
                >
                    <CategoryCard name={"Услуги"} url={"/category-sample-image.svg"}/>
                    <CategoryCard name={"Производство"} url={"/category-sample-image-2.svg"}/>
                    <CategoryCard name={"Торговля"} url={"/category-sample-image-3.svg"}/>
                    <CategoryCard name={"Недвижимость"} url={"/category-sample-image-4.svg"}/>
                    <CategoryCard name={"IT"} url={"/category-sample-image-5.svg"}/>
                </div>
            </div>

            {/*  Posts  */}
            <div className={"flex flex-col gap-4 mt-10"}>
                        <span
                            className={"font-pragmaticaExtendedBold text-3xl max-lg:text-base text-center"}
                        >
                            Последние объявления
                        </span>
                <div
                    className={"grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-4 gap-14 mt-10 max-lg:mt-5"}>
                    <PostCard
                        title={"Сервисный центр"}
                        cover_image={"/post-sample.jpg"}
                        descr={"Продается действующий бизнес! Компания с сервисной лицензией Canon"}
                    />

                    <PostCard
                        title={"Сервисный центр"}
                        cover_image={"/post-sample.jpg"}
                        descr={"Продается действующий бизнес! Компания с сервисной лицензией Canon"}
                    />

                    <PostCard
                        title={"Сервисный центр"}
                        cover_image={"/post-sample.jpg"}
                        descr={"Продается действующий бизнес! Компания с сервисной лицензией Canon"}
                    />

                    <PostCard
                        title={"Сервисный центр"}
                        cover_image={"/post-sample.jpg"}
                        descr={"Продается действующий бизнес! Компания с сервисной лицензией Canon"}
                    />
                </div>

                <div className={"flex justify-center mt-10"}>
                      <span
                          className={"rounded-lg py-[10px] w-[260px] bg-[#1D2023] text-center text-white font-pragmaticaMedium cursor-pointer"}
                      >
                          Еще объявления
                      </span>
                </div>
            </div>
        </div>

    );
};

export default Home;