import { useContext } from "react";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import MovieList from "./component/movie/MovieList";
import MovieSearch from "./component/movieSearch/MovieSearch";
import SideBar from "./component/sidebar/SideBar";
import { ThemeContext } from "./context";

export default function Page() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar />
                <div className="flex flex-col gap-5">
                    <div>
                        <MovieSearch />
                    </div>
                    <div>
                        <MovieList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}