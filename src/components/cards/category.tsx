import {Link} from "react-router-dom";
import {SingleCategoryType} from "../../types/category";

type CategoryCardProps = {
    data: SingleCategoryType
}

const CategoryCard = ({data}: CategoryCardProps) => {
    return (
        <Link
            to={`/category/${data.id}`}
            className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0] max-lg:min-w-[150px] max-lg:max-w-[150px]"}
        >
            <span className={"text-[18px] font-bold ml-4 mt-3 max-lg:text-xs"}>{data.name_ru}</span>

            <div
                className={"bg-cover bg-center w-full h-[131px] max-lg:h-[85px] rounded-b-2xl"}
                style={{backgroundImage: `url(${data?.image?.url})`}}
            ></div>
        </Link>
    );
};

export default CategoryCard;