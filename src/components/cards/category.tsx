type CategoryCardProps = {
    name: string,
    url: string
}

const CategoryCard = ({name, url}: CategoryCardProps) => {
    return (
        <div className={"flex flex-col gap-2 rounded-2xl bg-[#F2F1F0] max-lg:min-w-[150px] max-lg:max-w-[150px]"}>
            <span className={"text-[18px] font-bold ml-4 mt-3 max-lg:text-xs"}>{name}</span>
            <img
                src={url}
                alt="#"
                className={"w-full h-[131px] max-lg:h-[85px] rounded-b-2xl"}
            />
        </div>
    );
};

export default CategoryCard;