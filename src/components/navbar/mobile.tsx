import {FaHeart} from "react-icons/fa6";
import {Link} from "react-router-dom";

const NavbarMobile = () => {
    return (
        <div className={"hidden max-lg:flex max-lg:flex-col max-lg:gap-5 max-lg:px-3 max-lg:pt-5"}>
            <div className={"flex justify-between"}>
                <Link to={'/'}>
                    <img src="/logo_mobile.svg" alt="#" className={"w-[90px] h-[38px]"}/>
                </Link>

                <div className={"flex gap-4 items-center"}>
                    <div className={"flex gap-1 items-center font-pragmaticaMedium"}>
                        <img src="/uz.svg" alt="#" className={"w-5 h-5"}/>
                        <span className={"text-sm font-bold"}>O'Z</span>
                    </div>

                    <img src={'/menu.svg'} alt={"#"} className={"cursor-pointer w-7 h-7"}/>
                </div>
            </div>

            <div className={"flex justify-between mt-1"}>
                <span className={"font-pragmaticaMedium"}>+ Добавить объявление</span>

                <FaHeart className={"text-[23px] text-[#7E7E7E]"}/>
            </div>
        </div>
    );
};

export default NavbarMobile;