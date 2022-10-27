import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import DetailAbout from "./layout/Spaces/DetailAbout/DetailAbout";

import Home from "./layout/Home/Home";

//paso actual: pedir whatsapp a fermín.
//ver utilities y limpieza de código.
//Subir avance al website. Pedirle foto o feedback.

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/category/:categoryid"
            element={<ItemDetailContainer />}
          />
          <Route path="/detail-work" element={<ItemDetailContainer />} />
          <Route path="/detail-about" element={<DetailAbout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//order components //WEBP
//selec imgs
