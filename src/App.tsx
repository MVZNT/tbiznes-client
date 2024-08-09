import {BottomBar, Footer, NavbarDesktop, NavbarMobile, SearchBar} from "./components";
import {Route, Routes} from "react-router-dom";
import {Announcement, AnnouncementsByCategories, Catalogs, Favorites, Home, Search} from "./pages";
import Announcements from "./pages/Announcements.tsx";
import CategoryModal from "./components/modals/category.tsx";
import {useCategoryModal} from "./hooks/useZustand.ts";

function App() {
    const categoryModal = useCategoryModal()

    return (
        <>
            <NavbarDesktop/>
            <NavbarMobile/>

            <div
                className={`fixed inset-0 bg-black bg-opacity-70 z-30 overflow-y-auto  ${!categoryModal.isOpen && "hidden"} duration-500 ease-in-out`}
            >
                <CategoryModal/>
            </div>

            <div className="flex flex-col min-h-screen pb-28">
                <main className="px-20 flex-grow max-lg:px-3">
                    <SearchBar/>

                    <div className={"container mx-auto"}>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path={"/announcement/:announcementId"} element={<Announcement/>}/>
                            <Route path={"/category/:categoryId"} element={<AnnouncementsByCategories/>}/>
                            <Route path={"/favorites"} element={<Favorites/>}/>
                            <Route path={"/announcements"} element={<Announcements/>}/>
                            <Route path={"/catalogs"} element={<Catalogs/>}/>
                            <Route path={"/search"} element={<Search/>}/>
                        </Routes>
                    </div>
                </main>
            </div>

            <BottomBar/>
            <Footer/>
        </>
    );
}

export default App;
