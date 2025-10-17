// React Router 관련 임포트
import { Routes, Route } from "react-router-dom";

// 레이아웃 컴포넌트
import Layout from "./components/Layout";

// 페이지 컴포넌트들
import Home from "./pages/Home";
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import CardsPage from "./pages/CardsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { NavigationPage } from "./pages/NavigationPage";
import { ModalsPage } from "./pages/ModalsPage";
import { AnimationsPage } from "./pages/AnimationsPage";
import ComingSoonPage from "./pages/ComingSoonPage";

/**
 * 메인 앱 컴포넌트
 * React Router를 사용하여 페이지 라우팅을 설정합니다
 */
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
