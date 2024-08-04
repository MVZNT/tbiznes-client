import {IoIosArrowForward as ArrowIcon} from "react-icons/io";
import {useState} from "react";

const AnnouncementSlider = () => {
    const [selectedImage, setSelectedImage] = useState<{ index: number, url: string }>({
        index: 0,
        url: "/post-image.png"
    })

    let sampleData = [
        {
            url: "/post-image.png"
        },
        {
            url: "https://picsum.photos/800/520"
        },
        {
            url: "https://picsum.photos/799/520"
        },
        {
            url: "https://picsum.photos/798/520"
        },
        {
            url: "https://picsum.photos/797/520"
        }
    ]

    const next = () => {
        const nextIndex = (selectedImage.index + 1) % sampleData.length;
        setSelectedImage({
            index: nextIndex,
            url: sampleData[nextIndex].url,
        });
    };

    const previous = () => {
        const prevIndex = (selectedImage.index - 1 + sampleData.length) % sampleData.length;
        setSelectedImage({
            index: prevIndex,
            url: sampleData[prevIndex].url,
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
                    sampleData.map((item, index) => (
                        <img
                            key={index}
                            alt="#"
                            src={item.url}
                            className={`select-none w-1/5 max-lg:w-1/3 h-[95px] max-lg:h-[70px] rounded-[10px] cursor-pointer ${selectedImage.index === index && "border-2 border-black"}`}
                            onClick={() => setSelectedImage({
                                index: index,
                                url: item.url
                            })}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AnnouncementSlider;