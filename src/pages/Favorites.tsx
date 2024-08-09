import React from 'react';
import {getLikedItems} from "../utils";
import {PostCard} from "../components/cards";

const Favorites = () => {
    const likedItems = getLikedItems()

    return (
        <div className={"mt-10 flex flex-col gap-10"}>
            <h1 className={"font-pragmaticaExtendedBold text-3xl max-lg:text-base text-center"}>
                Избранные объявления
            </h1>

            <div className={"grid grid-cols-3 gap-5 max-lg:grid-cols-2"}>
                {
                    likedItems?.map((announcement) => (
                        <PostCard key={announcement.id} data={announcement}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorites;