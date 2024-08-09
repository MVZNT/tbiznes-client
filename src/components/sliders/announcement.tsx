import {IoIosArrowForward as ArrowIcon} from "react-icons/io";
import {useState} from "react";
import {SingleAnnouncementType} from "../../types/announcement";

const AnnouncementSlider = ({data}: { data: SingleAnnouncementType }) => {

    const [selectedImage, setSelectedImage] = useState<{ index: number, url: string }>({
        index: 0,
        url: data?.images[0]?.url
    })

    const next = () => {
        const nextIndex = (selectedImage.index + 1) % data?.images.length;
        setSelectedImage({
            index: nextIndex,
            url: data?.images[nextIndex]?.url,
        });
    };

    const previous = () => {
        const prevIndex = (selectedImage.index - 1 + data?.images.length) % data?.images.length;
        setSelectedImage({
            index: prevIndex,
            url: data?.images[prevIndex]?.url,
        });
    };


    return (
        <div className={"flex flex-col gap-3 w-full"}>
            <div
                className={"h-[520px] max-lg:h-[236px] w-full bg-cover bg-center rounded-[20px] flex justify-between items-center px-5 max-lg:px-2"}
                style={{backgroundImage: `url(${selectedImage?.url})`}}
            >
                <div
                    onClick={previous}
                    className={"p-2 rounded-full bg-white/80 flex items-center cursor-pointer max-lg:p-[6px]"}
                >
                    <ArrowIcon className={"rotate-180 text-xl max-lg:text-base text-[#7E7E7E]"}/>
                </div>

                <div
                    onClick={next}
                    className={"p-2 rounded-full bg-white/80 flex items-center cursor-pointer max-lg:p-[6px]"}
                >
                    <ArrowIcon className={"text-xl max-lg:text-base text-[#7E7E7E]"}/>
                </div>
            </div>

            <div className={"flex gap-[10px] w-full overflow-x-auto"}>
                {
                    data?.images.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-cover bg-center select-none w-1/5 max-lg:w-1/3 h-[95px] max-lg:h-[70px] rounded-[10px] cursor-pointer ${selectedImage.index === index && "border-2 border-black"}`}
                            onClick={() => setSelectedImage({
                                index: index,
                                url: item.url
                            })}
                            style={{backgroundImage: `url(${item?.url})`}}
                        ></div>
                    ))
                }
            </div>
        </div>
    );
};

export default AnnouncementSlider;