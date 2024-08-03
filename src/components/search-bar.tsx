const SearchBar = () => {
    return (
        <div className={"flex justify-between gap-3 w-full my-5 container mx-auto"}>
            <div
                className={"max-lg:hidden flex gap-1 cursor-pointer items-center justify-center bg-black-primary rounded-lg font-medium py-2 text-white w-[200px]"}
            >
                <img src="/category-search.svg" alt="#"/>
                <span>Все категории</span>
            </div>

            <form
                className={"border border-[#969696] p-[5px] max-lg:text-sm max-lg:py-1 pl-3 rounded-lg flex justify-between items-center w-full"}
            >
                <input className={"outline-none w-full pr-2"} placeholder={"Поиск по объявлениям"}/>

                <button
                    className={"py-1 max-lg:py-[7px] w-[78px] flex justify-center font-medium rounded-lg bg-black-primary text-white"}>Найти
                </button>
            </form>
        </div>
    );
};

export default SearchBar;