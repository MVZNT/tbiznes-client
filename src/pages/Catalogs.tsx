import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {useGetCategories} from "../hooks/useCategory.ts";
import {SingleCategoryType} from "../types/category";
import {Link} from "react-router-dom";

const Catalogs = () => {
    const getCategoriesQuery = useGetCategories(true)
    const categoriesData: SingleCategoryType[] = getCategoriesQuery?.data?.data?.categories

    return (
        <Accordion type="single" collapsible>
            {
                categoriesData?.map((category) => (
                    <AccordionItem value={`${category.id}`}>
                        <AccordionTrigger className={"font-pragmaticaMedium text-base"}>
                            <Link to={`/category/${category.id}`}>{category.name_ru}</Link>
                        </AccordionTrigger>

                        {
                            category.children?.map((subCategory) => (
                                <AccordionContent className={"ml-3 text-base"}>
                                    <Link to={`/category/${subCategory.id}`}>{subCategory?.name_ru}</Link>
                                </AccordionContent>
                            ))
                        }
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
};

export default Catalogs;