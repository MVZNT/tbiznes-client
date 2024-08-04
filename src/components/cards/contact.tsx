const ContactCard = () => {
    return (
        <div className={"grid grid-cols-2 gap-3"}>
            <button
                className={"py-2  rounded-lg bg-black-primary text-white text-[17px] max-lg:text-sm"}
            >
                Показать телефон
            </button>

            <button
                className={"py-2 rounded-lg border border-black-primary text-[17px] font-semibold max-lg:text-sm"}
            >
                Написать
            </button>
        </div>
    );
};

export default ContactCard;