import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Portrait from "./components/Portrait"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/web/portrait" element={<Portrait />} />
      <Route path="/web/home" element={<Home />} />
      <Route path="/web/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
