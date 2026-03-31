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
import Admin from "./admin/AdminPage";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    );
  }

  const showCTA = location.pathname !== "/" && location.pathname !== "/contact";

  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>
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
      {showCTA && <CTASection />}
      <Footer />
    </>
  );
}

export default App;
