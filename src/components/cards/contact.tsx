import {useState} from "react";
import {useTranslation} from "react-i18next";

const ContactCard = ({phone, tg_username}: { phone: string, tg_username: string }) => {
    const [isPhoneVisible, setPhoneVisible] = useState(false)

    const {t} = useTranslation();

    const navigateToTelegram = () => {
        window.open(tg_username)
    }

    return (
        <div className={"grid grid-cols-2 gap-3 max-lg:grid-cols-1 max-lg:gap-2"}>
            <button
                onClick={() => setPhoneVisible(!isPhoneVisible)}
                className={"py-2 rounded-lg bg-black-primary text-white text-[17px] max-lg:text-sm"}
            >
                {!isPhoneVisible ? t("show_phone") : `+${phone || "---"}`}
            </button>

            <button
                onClick={navigateToTelegram}
                className={"py-2 rounded-lg border border-black-primary text-[17px] font-semibold max-lg:text-sm"}
            >
                {t("write_to_telegram")}
            </button>
        </div>
    );
};

export default ContactCard;