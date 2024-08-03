import {Footer, NavbarDesktop, NavbarMobile, SearchBar} from "./components";
import {Route, Routes} from "react-router-dom";
import {Announcement, Home} from "./pages";

function App() {
    return (
        <>
            <NavbarDesktop/>
            <NavbarMobile/>

            <div className="flex flex-col min-h-screen">
                <main className="px-20 flex-grow max-lg:px-3">
                    <SearchBar/>

                    <div className={"container mx-auto"}>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path={"/post/:id"} element={<Announcement/>}/>
                        </Routes>
                    </div>
                </main>
            </div>

            <Footer/>
        </>
    );
}

export default App;
