import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import FormLayout from "./layouts/FormLayout";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Catalog />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />

            {/* Form Routes */}
            <Route path="apply" element={<FormLayout />}>
              <Route index element={<Navigate to="step-1" replace />} />
              <Route path="step-1" element={<Page1 />} />
              <Route path="step-2" element={<Page2 />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
