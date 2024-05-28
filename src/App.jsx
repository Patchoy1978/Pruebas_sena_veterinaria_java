//importamos lo necesario par el funcionamiento de la página
import { Toaster } from "react-hot-toast";
import { Index } from "./componentes";
import { NavBar } from "./componentes/navbar";
import { Footer } from "./componentes/footer";
import "./componentes/mis_estilos.css";
import { RegistroMascota } from "./componentes/registromascota";
import { RegistroUsuarios } from "./componentes/registrousuarios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Servicios } from "./componentes/servicios";
import { Spa } from "./componentes/spa";
import { AlimentosParaMascotas } from "./componentes/alimentosmascotas";
import { AccesoriosParaMascotas } from "./componentes/accesoriosmascotas";
import { MedicamentosParaMascotas } from "./componentes/medicamentosmascotas";
import { Vision } from "./componentes/vision";
import { Mision } from "./componentes/mision";
import { PoliticaPrivacidad } from "./componentes/politicaprivacidad";
import { Contactenos } from "./componentes/contactenoc";
import { AgendarCitaVeterinaria } from "./componentes/agendarcitaveterinaria";
import { Urgencias } from "./componentes/urgencias";

//creams la funcion para el manejo de la web
function App() {
  return (
    //Llamamos el BrowserRouter para generar las rutas de navegación
    <BrowserRouter className="App">
      {/*para que el menú este en todas las páginas*/}
      <NavBar />
      {/*creamos las rutas para la navegación entre páginas*/}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registrousuarios" element={<RegistroUsuarios />} />
        <Route path="/registromascota" element={<RegistroMascota />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/alimentosmascotas" element={<AlimentosParaMascotas />} />
        <Route
          path="/accesoriosmascotas"
          element={<AccesoriosParaMascotas />}
        />
        <Route
          path="/medicamentosmascotas"
          element={<MedicamentosParaMascotas />}
        />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
        <Route path="/urgencias" element={<Urgencias />} />
        <Route
          path="/agendarcitaveterinaria"
          element={<AgendarCitaVeterinaria />}
        />
      </Routes>
      {/* para que el footer este en todas las paginas */}
      <Footer />
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
