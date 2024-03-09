import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SaidVer from "./components/SaidVer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SaidVer></SaidVer>
          <MovieList></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
