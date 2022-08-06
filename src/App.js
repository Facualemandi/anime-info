import { Routes, Route } from "react-router-dom";
import DragonBallZ from "./pages/DragonBallZ";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollTop from "./components/Scrolltop";
import Description from "./pages/Description";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dbz" element={<DragonBallZ />} />
            <Route path="/Description/:name" element={<Description />} />
          </Routes>
        </ScrollTop>
      </QueryClientProvider>
    </>
  );
}

export default App;
