import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/:slugn" element={<Category/>}/>
        </Routes>
    </>
  );
}

export default App;
