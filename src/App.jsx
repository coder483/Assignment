import Home from "./components/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
