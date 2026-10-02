import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Pagination from './components/pagination/Pagination'
import Infinite from "./components/infinite scrolling/Infinite"
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pagination" element={<Pagination />}/>
          <Route path="/infinity" element={<Infinite/>}/>
        </Routes>

        <Analytics />
      </BrowserRouter>
    </div>
  )
};

export default App;
