import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import SideBar from "./component/sidebar/SideBar";

export default function App() {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
      </div>
      <Footer />
    </>
  )
}