import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { WelcomeSection } from "./components/WelcomeSection";
import { MedalsSection } from "./components/MedalsSection";

export const RoutesSection = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<WelcomeSection />} />
        <Route path="/jogar" element={<MainPage />} />
        <Route path="/medalhas" element={<MedalsSection />} />
      </Routes>
    </BrowserRouter>
  );
};
