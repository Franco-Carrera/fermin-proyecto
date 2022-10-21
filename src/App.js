import "./styles/App.css";
import { ContextWrapper } from "./utils/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import DetailAbout from "./layout/Spaces/DetailAbout/DetailAbout";

import Home from "./layout/Home/Home";

//paso actual: pedir whatsapp a fermín.
//ver utilities y limpieza de código.
//Subir avance al website. Pedirle foto o feedback.

//Luego chequear loading para traer la data y si sacamos el scroll.

function App() {
  return (
    <>
      <ContextWrapper>
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
      </ContextWrapper>
    </>
  );
}

export default App;

//order components
//selec imgs
//fin a modal => en progreso // Falta como cerrar haciendo click fuera de modal
