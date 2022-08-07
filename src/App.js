import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollTop from "./components/Scrolltop";
import Description from "./pages/Description";
import DragonBallZ from "./pages/DragonBallz/DragonBallZ";
import Naruto from "./pages/Naruto/Naruto";
import OnePunch from "./pages/OnePunch/OnePunch";
import YuGiOh from "./pages/YuGiOh/YuGiOh";
import JujutsuKaisen from "./pages/JujutsuKaisen/JujutsuKaisen";
import HeroAcademi from "./pages/HeroAcademi/HeroAcademi";
import Shingeki from "./pages/Shingeki/Shingeki";
import Fullmetal from "./pages/Fullmetal/Fullmetal";
import { TheContext } from "./context/context";
import BlackCover from "./pages/BlackCover/BlackCover";
import Hunter from "./pages/Hunter/Hunter";
import Gitama from "./pages/Gintama/Gintama";
import Kimetsu from "./pages/Kimetsu/Kimetsu";
import Haikyuu from "./pages/Haikyuu/Haikyuu";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TheContext>
          <ScrollTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Dbz" element={<DragonBallZ />} />
              <Route path="/naruto" element={<Naruto />} />
              <Route path="/onepunch" element={<OnePunch />} />
              <Route path="/yugioh" element={<YuGiOh />} />
              <Route path="/JujutsuKaisen" element={<JujutsuKaisen />} />
              <Route path="/HeroAcademi" element={<HeroAcademi />} />
              <Route path="/shingeki" element={<Shingeki />} />
              <Route path="/fullmetal" element={<Fullmetal />} />
              <Route path="/blkCover" element={<BlackCover />} />
              <Route path="/hunter" element={<Hunter />} />
              <Route path="/gtm" element={<Gitama />} />
              <Route path="/kimetsu" element={<Kimetsu />} />
              <Route path="/haikyuu" element={<Haikyuu/>} />
              <Route path="/Description/:name" element={<Description />} />
            </Routes>
          </ScrollTop>
        </TheContext>
      </QueryClientProvider>
    </>
  );
}

export default App;
