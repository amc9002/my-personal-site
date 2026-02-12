import { Suspense } from "react"; // Дадалі толькі гэта
import { Header } from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

import Home from "./pages/Home/Home";
import Philosophy from "./pages/Philosophy/Philosophy"; // Імпартуй філасофію, як і астатнія старонкі
import Methodology from "./pages/Methodology/Methodology";
import AboutMe from "./pages/AboutMe";
import TechnicalCases from "./pages/TechnicalCases/TechnicalCases";
import Contacts from "./pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";

function App() {
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
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<TechnicalCases />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}

export default App;
