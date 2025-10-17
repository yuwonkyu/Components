import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import CardsPage from "./pages/CardsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { NavigationPage } from "./pages/NavigationPage";
import { ModalsPage } from "./pages/ModalsPage";
import { AnimationsPage } from "./pages/AnimationsPage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="buttons" element={<ButtonsPage />} />
        <Route path="inputs" element={<InputsPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="typography" element={<TypographyPage />} />
        <Route path="navigation" element={<NavigationPage />} />
        <Route path="modals" element={<ModalsPage />} />
        <Route path="animations" element={<AnimationsPage />} />
        <Route path="grids" element={<ComingSoonPage type="grids" />} />
        <Route path="carousel" element={<ComingSoonPage type="carousel" />} />
        <Route path="badges" element={<ComingSoonPage type="badges" />} />
        <Route path="progress" element={<ComingSoonPage type="progress" />} />
        <Route path="alerts" element={<ComingSoonPage type="alerts" />} />
      </Route>
    </Routes>
  );
}

export default App;
