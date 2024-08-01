import {NavbarDesktop, NavbarMobile} from "./components";
import {Carousel} from "antd";
import {useEffect, useState} from "react";
import {IoCallOutline} from "react-icons/io5";
import {CategoryCard, PostCard} from "./components/cards";

function App() {
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
        <div className="flex flex-col min-h-screen">
            <NavbarDesktop/>
            <NavbarMobile/>

            <main className="px-20 flex-grow max-lg:px-3">
                <div className="container mx-auto flex flex-col gap-5 mt-7 max-lg:gap-2">
                    <div className={"flex justify-between gap-3 w-full"}>
                        <div
                            className={"max-lg:hidden flex gap-1 cursor-pointer items-center justify-center bg-black-primary rounded-lg font-medium py-2 text-white w-[200px]"}
                        >
                            <img src="/category-search.svg" alt="#"/>
                            <span>Все категории</span>
                        </div>

                        <form
                            className={"border border-[#969696] pr-1 max-lg:text-sm max-lg:py-1 pl-3 rounded-lg flex justify-between items-center w-full"}
                        >
                            <input className={"outline-none w-full pr-2"} placeholder={"Поиск по объявлениям"}/>

                            <button
                                className={"py-1 max-lg:py-[7px] w-[78px] flex justify-center font-medium rounded-lg bg-black-primary text-white"}>Найти
                            </button>
                        </form>
                    </div>

                    {/* Dekstop carousel */}
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
                                        className={"font-bold text-[38px] max-lg:text-xl text-white font-pragmaticaBold leading-10"}
                                    >
                                        Продавайте и покупайте с легкостью!
                                    </h1>

                                    <p
                                        className={"text-[18px] text-white w-[80%] leading-6"}
                                    >
                                        Найдите лучшие предложения и продайте свои товарыв два клика. Быстро, удобно и
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
                                    <h1 className={"text-white text-xs font-pragmaticaBold "}>
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
                        <span className={"font-pragmaticaBold text-3xl max-lg:text-base text-center"}>Популярные категории</span>

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
                            className={"font-pragmaticaBold text-3xl max-lg:text-base text-center"}
                        >
                            Последние объявления
                        </span>

                        <div className={"grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-4 gap-14 mt-10 max-lg:mt-5"}>
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
                                  className={"rounded-lg py-[10px] w-[260px] bg-[#1D2023] text-center text-white font-bold cursor-pointer"}
                              >
                                  Еще объявления
                              </span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="px-20 mt-16 bg-black-primary py-8 flex flex-col gap-16 max-lg:gap-10 max-lg:px-4">
                <div className="container mx-auto grid grid-cols-5 gap-5 max-lg:gap-6 max-lg:grid-cols-1">
                    <img src="/logo_desktop.svg" alt="#" className={"max-h-10"}/>

                    <div className={"hidden max-lg:flex text-white flex-col gap-3"}>
                        <span className={"font-bold"}>Социальные сети</span>
                        <div className={"flex gap-2"}>
                            <img src="/telegram-icon.svg" alt="#" className={"w-10 h-10 cursor-pointer"}/>
                            <img src="/instagram-icon.svg" alt="#" className={"w-10 h-10 cursor-pointer"}/>
                            <img src="/youtube-icon.svg" alt="#" className={"w-10 h-10 cursor-pointer"}/>
                        </div>
                    </div>

                    <ul className={"text-white flex flex-col gap-3"}>
                        <li className={"cursor-pointer"}>Франшизы</li>
                        <li className={"cursor-pointer"}>Бизнес планы</li>
                        <li className={"cursor-pointer"}>Бизнес идеи</li>
                    </ul>

                    <ul className={"text-white flex flex-col gap-3 max-lg:-mt-2"}>
                        <li className={"cursor-pointer"}>Бизнес услуги</li>
                        <li className={"cursor-pointer"}>Оптовая торговля</li>
                    </ul>


                    <div className={"text-white flex flex-col gap-3"}>
                        <span className={"font-bold"}>По вопросам рекламы</span>
                        <div className={"flex gap-1 items-center"}>
                            <IoCallOutline className={"text-xl text-white text-opacity-70"}/>
                            <a href={"tel:998770166601"}>+998 77 016-66-01</a>
                        </div>
                    </div>

                    <div className={"text-white flex flex-col gap-3 max-lg:hidden"}>
                        <span className={"font-bold"}>Социальные сети</span>
                        <div className={"flex gap-2"}>
                            <img src="/telegram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                            <img src="/instagram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                            <img src="/youtube-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex gap-14 text-xs text-[#DFDFDF] max-lg:flex-col max-lg:gap-2">
                    <span className={"cursor-pointer"}>Публичная оферта</span>
                    <span className={"cursor-pointer"}>Пользовательское соглашение</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
