import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/home";
// import NavbarDemo from "./pages/NavbarDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/navbar" element={<NavbarDemo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
