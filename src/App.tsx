import { Suspense } from "react"; // Дадалі толькі гэта
import { Header } from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import HowIThink from "./pages/HowIThink";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
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
            <Route path="/how-i-think" element={<HowIThink />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}

export default App;
