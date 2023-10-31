import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Karim from "./Pages/Karim";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route
          path="/"
          element={<Home/>}/>
          <Route
          path="/karim"
          element={<Karim/>}/>
        </Routes>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
