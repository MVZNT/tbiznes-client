import {MdOutlineArrowForwardIos} from "react-icons/md";
import {IoIosArrowForward as ArrowIcon} from "react-icons/io";
import {FaRegHeart} from "react-icons/fa";


const Announcement = () => {
    let categoriesBreadCrump = [
        "Главная", "Готовый бизнес", "Сервисные центры"
    ]

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex gap-2"}>
                {categoriesBreadCrump.map((category, index) => (
                    <div key={index} className={"flex gap-2 font-medium"}>
                        {index !== categoriesBreadCrump.length - 1 ? (
                            <div className={"text-[#353847] flex gap-2 items-center"}>
                                <span className={"text-sm"}>{category}</span>
                                <MdOutlineArrowForwardIos className={"text-sm mb-[1px]"}/>
                            </div>
                        ) : (
                            <span className={"text-[#7E7E7E] text-sm"}>{category}</span>
                        )}
                    </div>
                ))}
            </div>

            <div>
                <div className={"flex max-lg:flex-col max-lg:gap-1 mt-4 gap-3 text-sm max-lg:text-xs text-[#646464]"}>
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
            </div>

            <div className={"flex justify-between gap-20 w-full"}>
                {/* block 1 (left) */}
                <div className={"flex flex-col gap-10 w-[60%]"}>
                    {/* images (banner) */}
                    <div className={"flex flex-col gap-3 w-full"}>
                        <div
                            className={"h-[520px] w-full bg-cover bg-center rounded-[20px] flex justify-between items-center px-5"}
                            style={{backgroundImage: `url(/post-image.png)`}}
                        >
                            <div className={"p-2 rounded-full bg-white/80 flex items-center cursor-pointer"}>
                                <ArrowIcon className={"rotate-180 text-[18px] text-[#7E7E7E]"}/>
                            </div>

                            <div className={"p-2 rounded-full bg-white/80 flex items-center cursor-pointer"}>
                                <ArrowIcon className={"text-xl text-[#7E7E7E] text-[18px]"}/>
                            </div>
                        </div>

                        <div className={"flex justify-between gap-[10px] w-full overflow-x-auto"}>
                            <img
                                alt="#"
                                src="/post-image.png"
                                className={"w-1/5 h-[95px] rounded-[10px] border-2 border-black"}
                            />
                            <img src="/post-image.png" alt="#" className={"w-1/5 h-[95px] rounded-[10px]"}/>
                            <img src="/post-image.png" alt="#" className={"w-1/5 h-[95px] rounded-[10px]"}/>
                            <img src="/post-image.png" alt="#" className={"w-1/5 h-[95px] rounded-[10px]"}/>
                            <img src="/post-image.png" alt="#" className={"w-1/5 h-[95px] rounded-[10px]"}/>
                        </div>
                    </div>

                    {/* description */}
                    <div className={"flex flex-col gap-7"}>
                        <h1 className={"font-pragmaticaExtendedBold text-2xl"}>Описание</h1>

                        <span>
                            Компания находится более 10 лет на рынке, работает в сфере ремонта и продаж копировальной техники. Основной актив на сегодня— сервисный контракт с компанией Canon. Официальное право на сервисное обслуживание техники поставляемой Canon.
                            Прямой доступ к закупке всех оригинальных запчастей
                            Сертификаты для инженеров дающие право доступа к обслуживанию техники Canon
                            Это даёт эксклюзивное право заключать договора на обслуживание, то есть обеспечивает стабильный большой объем клиентуры, постоянный рост и достойную оплату за оказываемые услуги.Гарантийные ремонты приносят ещё большую высокую доходность, потому, что корпорация Canon компенсирует расходы и оплачивает трудозатраты напрямую официально
                            в иностранной валюте по европейским расценкам.
                        </span>
                    </div>
                </div>

                {/* block 2 (right) */}
                <div className={"w-[35%] flex flex-col gap-5"}>
                    <div
                        className={"bg-white rounded-xl p-[30px] flex flex-col gap-4"}
                        style={{
                            boxShadow: "0px 4px 16px 0px #00000014"
                        }}
                    >
                        <div className={"flex gap-3 items-center"}>
                            <FaRegHeart className={"text-xl text-[#7E7E7E]"}/>
                            <span className={"text-[#353847] font-pragmaticaMedium"}>В избранное</span>
                        </div>

                        <h1 className={"text-xl font-pragmaticaBold"}>
                            Продается действующий бизнес! Компания с сервисной лицензией Canon
                        </h1>

                        <span className={"text-2xl font-pragmaticaBold"}>$40000</span>

                        {/* left parts */}
                        <div className={"grid grid-cols-2 gap-3"}>
                            <button
                                className={"py-2  rounded-lg bg-black-primary text-white text-[17px]"}
                            >
                                Показать телефон
                            </button>

                            <button
                                className={"py-2 rounded-lg border border-black-primary text-[17px] font-semibold"}
                            >
                                Написать
                            </button>
                        </div>
                    </div>

                    <div
                        className={"bg-white rounded-xl p-[25px] flex flex-col gap-[9px]"}
                        style={{
                            boxShadow: "0px 4px 16px 0px #00000014"
                        }}
                    >
                        <h1 className={"font-pragmaticaExtendedBold text-[18px]"}>Расположение</h1>

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
            </div>
        </div>
    );
};

export default Announcement;