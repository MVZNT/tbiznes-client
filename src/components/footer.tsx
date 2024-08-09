import {IoCallOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="px-20 mt-16 bg-black-primary py-8 flex flex-col gap-16 max-lg:hidden max-lg:gap-10 max-lg:px-4">
            <div className="container mx-auto grid grid-cols-5 gap-5 max-lg:gap-6 max-lg:grid-cols-1">
                <img src="/logo_desktop.svg" alt="#" className={"max-h-10"}/>

                <div className={"hidden max-lg:flex text-white flex-col gap-3"}>
                    <span className={"font-bold"}>{t("social_links")}</span>
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
                    <span className={"font-bold"}>{t("contact")}</span>
                    <div className={"flex gap-1 items-center"}>
                        <IoCallOutline className={"text-xl text-white text-opacity-70"}/>
                        <a href={"tel:998770166601"}>+998 77 016-66-01</a>
                    </div>
                </div>

                <div className={"text-white flex flex-col gap-3 max-lg:hidden"}>
                    <span className={"font-bold"}>{t("social_links")}</span>
                    <div className={"flex gap-2"}>
                        <img src="/telegram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                        <img src="/instagram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                        <img src="/youtube-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                    </div>
                </div>
            </div>

            <div
                className="container mx-auto flex gap-14 text-xs text-[#DFDFDF] max-lg:flex-col max-lg:gap-2"
            >
                <span className={"cursor-pointer"}>{t("public_offer")}</span>
                <span className={"cursor-pointer"}>{t("user_agreement")}</span>
            </div>
        </div>
    );
};

export default Footer;