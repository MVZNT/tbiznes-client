import {useGetAnnouncements} from "../hooks/useAnnouncement.ts";
import {PostCard} from "../components/cards";
import {useTranslation} from "react-i18next";

const Announcements = () => {
    const getAnnnouncementsQuery = useGetAnnouncements()
    const announcementsData = getAnnnouncementsQuery.data?.pages?.map((item) => item?.data)?.map((item) => item?.announcements)?.flat()

    const {t} = useTranslation();

    if (getAnnnouncementsQuery.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={"mt-10 flex flex-col gap-10 max-lg:gap-7 max-lg:mt-7"}>
            <h1 className={"font-pragmaticaExtendedBold text-3xl max-lg:text-xl text-center"}>
                {t("announcements.all")}
            </h1>

            <div className={"grid grid-cols-3 gap-5 max-lg:grid-cols-2"}>
                {
                    announcementsData?.map((announcement) => (
                        <PostCard key={announcement.id} data={announcement}/>
                    ))
                }
            </div>

            <button
                onClick={() => getAnnnouncementsQuery.fetchNextPage()}
                className={`flex justify-center mt-10 ${!getAnnnouncementsQuery.hasNextPage && "hidden"}`}
                disabled={getAnnnouncementsQuery.isFetchingNextPage}
            >
                  <span
                      className={`rounded-lg py-[10px] w-[260px] bg-[#1D2023] text-center text-white font-pragmaticaMedium cursor-pointer ${getAnnnouncementsQuery.isFetchingNextPage && "bg-opacity-70 cursor-not-allowed"}`}
                  >
                      {t("load_more")}
                  </span>
            </button>
        </div>
    );
};

export default Announcements;