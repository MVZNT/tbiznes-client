import {MdOutlineArrowForwardIos} from "react-icons/md";
import {ContactCard, PostCard} from "../components/cards";
import {AnnouncementSlider} from "../components/sliders";
import {FaRegHeart} from "react-icons/fa";


const Announcement = () => {
    let categoriesBreadCrump = [
        "Главная", "Готовый бизнес", "Сервисные центры"
    ]

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex gap-2 mt-4 max-lg:mt-0"}>
                {categoriesBreadCrump.map((category, index) => (
                    <div key={index} className={"flex gap-2 font-medium "}>
                        {index !== categoriesBreadCrump.length - 1 ? (
                            <div className={"text-[#353847] flex gap-2 items-center"}>
                                <span className={"text-sm max-lg:text-xs"}>{category}</span>
                                <MdOutlineArrowForwardIos className={"text-sm mb-[1px]"}/>
                            </div>
                        ) : (
                            <span className={"text-[#7E7E7E] text-sm max-lg:text-xs"}>{category}</span>
                        )}
                    </div>
                ))}
            </div>

            <div className={"flex  max-lg:gap-1 mt-4 gap-4 text-sm max-lg:text-xs text-[#646464]"}>
                <div className={"flex gap-1"}>
                    <span className={"text-[#353847]"}>Опубликовано:</span>
                    <span className={"text-[#7E7E7E]"}>14.06.2024</span>
                </div>

                <span className={"max-lg:hidden"}>•</span>

                <div className={"flex gap-1"}>
                    <span className={"text-[#353847]"}>Обновлено:</span>
                    <span className={"text-[#7E7E7E]"}>сегодня, 20:10</span>
                </div>
            </div>

            <div className={"flex justify-between gap-20 w-full mt-1 max-lg:flex-col"}>
                {/* block 1 (left) */}
                <div className={"flex flex-col gap-10 w-[60%] max-lg:w-full"}>
                    {/* images (banner) */}
                    <AnnouncementSlider/>

                    {/* Price and location bar */}
                    <div className={"hidden max-lg:block"}>
                        <PriceAndLocation/>
                    </div>

                    {/* description */}
                    <div className={"flex flex-col gap-7"}>
                        <h1 className={"font-pragmaticaExtendedBold text-2xl max-lg:text-[18px]"}>Описание</h1>

                        <span className={"max-lg:text-sm"}>
                            Компания находится более 10 лет на рынке, работает в сфере ремонта и продаж копировальной техники. Основной актив на сегодня— сервисный контракт с компанией Canon. Официальное право на сервисное обслуживание техники поставляемой Canon.
                            Прямой доступ к закупке всех оригинальных запчастей
                            Сертификаты для инженеров дающие право доступа к обслуживанию техники Canon
                            Это даёт эксклюзивное право заключать договора на обслуживание, то есть обеспечивает стабильный большой объем клиентуры, постоянный рост и достойную оплату за оказываемые услуги.Гарантийные ремонты приносят ещё большую высокую доходность, потому, что корпорация Canon компенсирует расходы и оплачивает трудозатраты напрямую официально
                            в иностранной валюте по европейским расценкам.
                        </span>
                    </div>
                </div>

                {/* block 2 (right) */}
                <div className={"w-[35%] max-lg:w-full flex flex-col gap-5"}>
                    <div className={"max-lg:hidden"}>
                        <PriceAndLocation/>
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
                    <h1 className={"font-pragmaticaExtendedBold text-2xl max-lg:text-[18px]"}>Похожие объявления</h1>

                    {/*  here i have to add more or more-scroll part  */}
                </div>

                <div className={"grid grid-cols-3 gap-[30px] max-lg:grid-cols-2"}>
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
            </div>
        </div>
    );
};

export default Announcement;


export const PriceAndLocation = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div
                className={"bg-white rounded-xl p-[30px] flex flex-col gap-4"}
                style={{
                    boxShadow: "0px 4px 16px 0px #00000014"
                }}
            >
                <div className={"flex gap-3 items-center"}>
                    <FaRegHeart className={"text-xl text-[#7E7E7E]"}/>
                    <span className={"text-[#353847] font-pragmaticaMedium max-lg:text-sm"}>В избранное</span>
                </div>

                <h1 className={"text-xl font-pragmaticaBold max-lg:text-base"}>
                    Продается действующий бизнес! Компания с сервисной лицензией Canon
                </h1>

                <span className={"text-2xl max-lg:text-xl font-pragmaticaBold"}>$40000</span>

                <div className={""}>
                    <ContactCard/>
                </div>
            </div>

            <div
                className={"bg-white rounded-xl p-[25px] flex flex-col gap-[9px]"}
                style={{
                    boxShadow: "0px 4px 16px 0px #00000014"
                }}
            >
                <h1 className={"font-pragmaticaExtendedBold text-[18px] max-lg:text-base"}>Расположение</h1>

                <div className={"flex flex-col gap-[5px] leading-4"}>
                    <div className={"flex gap-[5px] items-center"}>
                        <img src="/location.svg" alt="#" className={"w-[18px] h-[18px]"}/>
                        <span className={"self-center text-base"}>Ташкент, Мирзо-Улугбекский район</span>
                    </div>

                    <a href="https://www.google.com/" target={"_blank"}
                       className={"text-[#0061F3] "}>
                        Показать на карте
                    </a>
                </div>
            </div>
        </div>
    );
};

