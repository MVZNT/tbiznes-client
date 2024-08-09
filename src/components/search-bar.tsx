import {useCategoryModal} from "../hooks/useZustand.ts";
import {RiCloseLargeFill} from "react-icons/ri";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const SearchBar = () => {
    const categoryModal = useCategoryModal()
    const [keyword, setKeyword] = useState("")

    const {t} = useTranslation()

    const onSearch = (e: any) => {
        e.preventDefault()

        if (!keyword) {
            return null
        }
        window.location.href = `/search?q=${keyword}`;
    }

    return (
        <div className="relative">
            <div className="flex justify-between gap-3 w-full my-5 container mx-auto">
                <div
                    onClick={() => categoryModal.isOpen ? categoryModal.onClose() : categoryModal.onOpen()}
                    className={
                        "select-none max-lg:hidden flex gap-1 cursor-pointer items-center justify-center bg-black-primary rounded-lg font-medium py-2 text-white w-[200px]"
                    }
                >
                    {
                        !categoryModal.isOpen
                            ? <img src="/category-search.svg" alt="#"/>
                            : <RiCloseLargeFill className={"text-[18px] mr-[3px] mb-[1px]"}/>
                    }
                    <span>{t("categories.all")}</span>
                </div>

                <form
                    className={
                        "border border-[#969696] p-[5px] max-lg:text-sm max-lg:py-1 pl-3 rounded-lg flex justify-between items-center w-full"
                    }
                    onSubmit={onSearch}
                >
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        className="outline-none w-full pr-2"
                        placeholder={t("search_placeholder")}
                    />

                    <button
                        type={"submit"}
                        className={
                            "py-1 max-lg:py-[7px] w-[78px] flex justify-center font-medium rounded-lg bg-black-primary text-white"
                        }
                    >
                        {t("search")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
