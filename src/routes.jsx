import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelfCheckIn from "./pages/SelfCheckIn";
import Faq from "./pages/Faq"
import ReceptionClosed from "./pages/ReceptionClosed"
import NoCheckout from "./pages/NoCheckout"
import CleaningTime from "./pages/CleaningTime";
import ContentsWrap from "./layouts/ContentsWrap";
import { LanguageProvider } from "./contexts/LanguageContext";
import ReservationNumber from "./pages/ReservationNumber";

function AppRoutes() {
  return (
    <Router>
      <LanguageProvider>
        <ContentsWrap>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/self-check-in" element={<SelfCheckIn />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/reception-closed" element={<ReceptionClosed />} />
            <Route path="/cleaning-time" element={<CleaningTime />} />
            <Route path="/reservation-number" element={<ReservationNumber />} />
            <Route path="/no-check-out" element={<NoCheckout />} />
          </Routes>
        </ContentsWrap>
      </LanguageProvider>
    </Router>
  );
}

export default AppRoutes;
