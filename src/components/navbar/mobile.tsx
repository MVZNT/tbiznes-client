import {Link} from "react-router-dom";
import SheetModal from "../ui/sheet.tsx";
import {useMenuModal} from "../../hooks/useZustand.ts";
import {useGetPrimaryCategories} from "../../hooks/useCategory.ts";
import {SingleCategoryType} from "../../types/category";
import {IoCallOutline} from "react-icons/io5";
import LanguageSelector from "../ui/langugage-selector.tsx";

const NavbarMobile = () => {
    const menuModal = useMenuModal()

    const getCategoriesQuery = useGetPrimaryCategories()
    const categoriesData: SingleCategoryType[] = getCategoriesQuery.data?.data?.categories

    return (
        <>
            <SheetModal isOpen={menuModal.isOpen} onClose={menuModal.onClose}>
                <div className={"flex flex-col gap-5 justify-between h-screen"}>
                    <div className={"flex flex-col gap-3"}>
                        <Link to={'/'}>
                            <img src="/logo_mobile.svg" alt="#" className={"w-[80px] h-[30px]"}/>
                        </Link>

                        <div className={"flex flex-col gap-2 mt-5"}>
                            {
                                categoriesData?.map(category => (
                                    <Link
                                        onClick={menuModal.onClose}
                                        to={`/category/${category.id}`}
                                        key={category.id}
                                        className={"flex "}
                                    >
                                        {category.name_ru}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"flex flex-col gap-5"}>
                        <div className={" flex flex-col gap-3"}>
                            <span className={"font-bold"}>По вопросам рекламы</span>
                            <div className={"flex gap-1 items-center"}>
                                <IoCallOutline className={"text-xl  text-opacity-70"}/>
                                <a href={"tel:998770166601"}>+998 77 016-66-01</a>
                            </div>
                        </div>

                        <div className={" flex flex-col gap-3 "}>
                            <span className={"font-bold"}>Социальные сети</span>
                            <div className={"flex gap-2"}>
                                <img src="/telegram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                                <img src="/instagram-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                                <img src="/youtube-icon.svg" alt="#" className={"w-8 h-8 cursor-pointer"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </SheetModal>

            <div className={"hidden max-lg:flex max-lg:flex-col max-lg:gap-5 max-lg:px-3 max-lg:pt-5 z-10"}>
                <div className={"flex justify-between"}>
                    <Link to={'/'}>
                        <img src="/logo_mobile.svg" alt="#" className={"w-[90px] h-[38px]"}/>
                    </Link>

                    <div className={"flex gap-4 items-center"}>
                        <LanguageSelector/>

                        <img
                            src={'/menu.svg'} alt={"#"}
                            className={"cursor-pointer w-7 h-7"}
                            onClick={menuModal.onOpen}
                        />
                    </div>
                </div>

                {/*<div className={"flex justify-between mt-1"}>*/}
                {/*    <span className={"font-pragmaticaMedium"}>+ Добавить объявление</span>*/}

                {/*    <FaHeart className={"text-[23px] text-[#7E7E7E]"}/>*/}
                {/*</div>*/}
            </div>
        </>

    );
};

export default NavbarMobile;