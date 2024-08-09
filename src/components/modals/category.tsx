import {useEffect, useRef} from 'react';
import {NavbarDesktop} from "../navbar";
import SearchBar from "../search-bar.tsx";
import {useCategoryModal} from "../../hooks/useZustand.ts";
import {IoIosArrowForward} from "react-icons/io";
import {useGetCategories} from "../../hooks/useCategory.ts";
import {SingleCategoryType} from "../../types/category";
import {Link} from "react-router-dom";
import {getPreferredLanguage} from "../../lib/utils.ts";

const CategoryModal = () => {
    const {onClose, isOpen} = useCategoryModal();
    const modalRef = useRef<HTMLDivElement>(null);

    const getCategoriesQuery = useGetCategories(isOpen)
    const categoriesData: SingleCategoryType[] = getCategoriesQuery?.data?.data?.categories

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            className={`bg-white min-h-[50vh] `}
            ref={modalRef}
        >
            <NavbarDesktop/>

            <div className={"px-20"}>
                <SearchBar/>
            </div>

            <div className={"px-20 pb-10"}>
                <div className={"mx-auto container grid grid-cols-4 gap-10 mt-7"}>
                    {
                        categoriesData?.map(category => (
                            <div key={category.id} className={"flex flex-col gap-4"}>
                                <Link
                                    onClick={onClose}
                                    to={`/category/${category.id}`}
                                    className={"flex gap-1 items-center"}
                                >
                                    <span
                                        className={"font-pragmaticaBold text-[18px]"}> {getPreferredLanguage(category.name_uz, category.name_ru)}</span>
                                    <IoIosArrowForward className={"text-[19px] mt-1"}/>
                                </Link>

                                <ul className={"flex flex-col gap-2"}>
                                    {
                                        category.children?.map(subCategory => (
                                            <Link
                                                onClick={onClose}
                                                to={`/category/${subCategory.id}`}
                                            >
                                                {getPreferredLanguage(subCategory.name_uz, subCategory.name_ru)}
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;
