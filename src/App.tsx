import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Layout />}>
          <Route index element={<Pages.Home />} />
          <Route path="about" element={<Pages.About />} />
          <Route path="resume" element={<Pages.Resume />} />
          <Route path="projects" element={<Pages.Projects />} />
          <Route path="contact" element={<Pages.Contact />} />
          <Route path="*" element={<Pages.NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 