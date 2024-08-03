import {FaHeart} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Desktop = () => {
    return (
        <div className="bg-black-primary text-white px-20 max-lg:hidden">
            <div className="container mx-auto py-5 flex justify-between">
                <Link to={"/"}>
                    <img src="/logo_desktop.svg" alt="#" className={"max-h-10"}/>
                </Link>

                <ul className={"flex justify-between font-pragmaticaLight items-center gap-5"}>
                    <li className={"cursor-pointer"}>Франшизы</li>
                    <li className={"cursor-pointer"}>Бизнес планы</li>
                    <li className={"cursor-pointer"}>Бизнес идеи</li>
                    <li className={"cursor-pointer"}>Бизнес услуги</li>
                    <li className={"cursor-pointer"}>Оптовая торговля</li>
                </ul>

                <div className={"flex items-center gap-7"}>
                    <FaHeart className={"text-[23px] text-[#CCCCCC]"}/>

                    <button className={"bg-transparent border border-white px-5 py-2 rounded-lg"}>
                        Добавить объявление +
                    </button>

                    <div className={"flex gap-1 font-pragmaticaMedium"}>
                        <img src="/uz.svg" alt="#"/>
                        <span>O'Z</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
