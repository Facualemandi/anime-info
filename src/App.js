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

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dbz" element={<DragonBallZ />} />
            <Route path="/naruto" element={<Naruto />} />
            <Route path="/onepunch" element={<OnePunch />} />
            <Route path="/yugioh" element={<YuGiOh />} />
            <Route path="/JujutsuKaisen" element={<JujutsuKaisen />} />
            <Route path="/Description/:name" element={<Description />} />
          </Routes>
        </ScrollTop>
      </QueryClientProvider>
    </>
  );
}

export default App;
