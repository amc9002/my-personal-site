import { Suspense } from "react"; // Дадалі толькі гэта
import { Header } from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Philosophy from "./pages/Philosophy/Philosophy"; // Імпартуй філасофію, як і астатнія старонкі
import Methodology from "./pages/Methodology/Methodology";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contacts from "./pages/Contacts/Contacts";
import Projects from "./pages/Projects/Projects";
import CTASection from "./components/layout/CTA/CTASection";

function App() {
  // 3. Атрымліваем бягучы шлях
  const location = useLocation();
  // 4. Умова: паказваць усюды, апроч Галоўнай ("/") і Кантактаў ("/contact")
  const showCTA = location.pathname !== "/" && location.pathname !== "/contact";

  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>
        {/* Абгортваем Routes у Suspense. Без гэтага Backend будзе ламаць старонкі */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Main>
      {/* 5. Устаўка блока перад футэрам */}
      {showCTA && <CTASection />}
      <Footer />
    </>
  );
}

export default App;
