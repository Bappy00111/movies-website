import { useContext, useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SaidVer from "./components/SaidVer";
import { MovieContext, ThemContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setdarkMode] = useState(true);
  // const {darkMode} = useContext(ThemContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ''}`}>
      <ThemContext.Provider value={{ darkMode, setdarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Header></Header>
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <SaidVer></SaidVer>
              <MovieList></MovieList>
            </div>
          </main>
          <Footer></Footer>
        </MovieContext.Provider>
      </ThemContext.Provider>
    </div>
  );
}

export default App;
