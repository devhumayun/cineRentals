import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import MovieList from "./component/movie/MovieList";
import MovieSearch from "./component/movieSearch/MovieSearch";
import SideBar from "./component/sidebar/SideBar";

export default function App() {
  return (
    <>
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
    </>
  );
}
