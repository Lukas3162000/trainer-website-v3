import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import App from "./App";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="trainings" element={<Trainings />} />
          <Route path="über-mich" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
