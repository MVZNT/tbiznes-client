import {FaHeart} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useGetPrimaryCategories} from "../../hooks/useCategory.ts";
import {SingleCategoryType} from "../../types/category";
import {useCategoryModal} from "../../hooks/useZustand.ts";
import LanguageSelector from "../ui/langugage-selector.tsx";
import {getPreferredLanguage} from "../../lib/utils.ts";
import {useTranslation} from "react-i18next";

const Desktop = () => {
    const getCategoriesQuery = useGetPrimaryCategories()
    const categoriesData: SingleCategoryType[] = getCategoriesQuery.data?.data?.categories
    const {onClose} = useCategoryModal();

    const {t} = useTranslation()

    return (
        <div className="bg-black-primary text-white px-20 max-lg:hidden" onClick={onClose}>
            <div className="container mx-auto py-5 flex justify-between">
                <Link to={"/"}>
                    <img src="/logo_desktop.svg" alt="#" className={"max-h-10"}/>
                </Link>

                <ul className={"flex justify-between font-pragmaticaLight items-center gap-5"}>
                    {
                        categoriesData?.map(category => (
                            <Link to={`/category/${category.id}`} key={category.id}
                                  className={"cursor-pointer"}>{getPreferredLanguage(category.name_uz, category.name_ru)}</Link>
                        ))
                    }
                </ul>

                <div className={"flex items-center gap-7"}>
                    <Link to={'/favorites'}>
                        <FaHeart className={"text-[23px] text-[#CCCCCC]"}/>
                    </Link>

                    <button
                        onClick={() => window.open("https://t.me/TBiznes_Bot")}
                        className={"bg-transparent border border-white px-5 py-2 rounded-lg"}
                    >
                        {t("add_announcement")} +
                    </button>


                    <LanguageSelector/>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
