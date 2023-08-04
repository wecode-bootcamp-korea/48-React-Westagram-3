import { BrowserRouter, Routes, Route } from "react-router-dom";
// jihye 의 컴포넌트
import MainJihye from "./pages/jihye/Main/Main";
import LoginJihye from "./pages/jihye/Login/Login";

// dain 의 컴포넌트
import MainDain from "./pages/dain/Main/Main";
import LoginDain from "./pages/dain/Login/Login";

// dana 의 컴포넌트
import MainDana from "./pages/dana/Main/Main";
import LoginDana from "./pages/dana/Login/Login";

// jisun 의 컴포넌트
import MainJisun from "./pages/jisun/Main/Main";
import LoginJisun from "./pages/jisun/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jihye-main" element={<MainJihye />} />
        <Route path="/jihye-login" element={<LoginJihye />} />
        <Route path="/dain-main" element={<MainDain />} />
        <Route path="/dain-login" element={<LoginDain />} />
        <Route path="/dana-main" element={<MainDana />} />
        <Route path="/dana-login" element={<LoginDana />} />
        <Route path="/jisun-main" element={<MainJisun />} />
        <Route path="/jisun-login" element={<LoginJisun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;