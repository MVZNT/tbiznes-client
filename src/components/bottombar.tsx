import {LuHome} from "react-icons/lu";
import {TbListSearch} from "react-icons/tb";
import {FaPlus, FaRegHeart} from "react-icons/fa6";
import {Link, useLocation} from "react-router-dom";

const Bottombar = () => {
    const {pathname} = useLocation()

    return (
        <div
            className={"hidden fixed bottom-0 left-0 right-0 max-lg:flex justify-evenly gap-4 bg-white p-4 text-[#7E7E7E]"}
        >
            <Link to={"/"} className={"flex flex-col gap-1 items-center"}>
                <LuHome className={"text-[22px]"}/>
                <span className={`${pathname === "/" && "font-pragmaticaMedium"}`}>Главная</span>
            </Link>

            <Link to={"/catalogs"} className={"flex flex-col gap-1 items-center"}>
                <TbListSearch className={"text-[22px]"}/>
                <span className={`${pathname === "/catalogs" && "font-pragmaticaMedium"}`}>Каталог</span>
            </Link>

            <Link to={'https://t.me/TBiznes_Bot'} target={"_blank"} className={"flex flex-col gap-1 items-center"}>
                <FaPlus className={"text-[22px]"}/>
                <span>Объявление</span>
            </Link>

            <Link
                to={"/favorites"}
                className={`flex flex-col gap-1 items-center`}
            >
                <FaRegHeart className={`text-[22px]`}/>
                <span className={`${pathname === "/favorites" && "font-pragmaticaMedium"}`}>
                    Избранное
                </span>
            </Link>
        </div>
    );
};

export default Bottombar;