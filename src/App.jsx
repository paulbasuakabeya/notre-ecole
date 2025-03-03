import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/navebar/navbar";
import Footer from "./components/footer/footer";
import Accueil from "./pages/accueil";
import Activite from "./pages/activite";
import Contact from "./pages/contact";
import CycleOrganise from "./pages/cycleOrganise";
import NoMatch from "./pages/noMatch";
import Propos from "./pages/propos";
import DevCcommunique from "./pages/devCommunique";
// backend
import Home from "./components/devoir/home";
import Login from "./components/devoir/login";
import Signup from "./components/devoir/signup";
import Dashboard from "./components/devoir/dashboard";
import Navbartwo from "./components/navebar/navbarTwo";
import CommunicationList from "./components/communication/communicationList";
import EditCommunication from "./components/communication/editCommunication";
import CreateCommunication from "./components/communication/createCommunication";
import EditThing from "./components/devoir/editThing";
import AddThing from "./components/devoir/addThing";
import EntreDashboard from "./components/communication/entreDashboard";
import './App.css';

// Layout principal
function Layout() {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/navbartwo") ? <Navbartwo /> : <Navbar />}
      <main>
        <Outlet /> {/* Ici, les composants enfants vont être rendus */}
      </main>
      <Footer />
    </>
  );
}

// Layout spécifique pour Navbartwo
function NavbartwoLayout() {
  return (
    <>
      <Navbartwo />
      <main>
        <Outlet /> {/* Contenu des sous-routes */}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="apropos" element={<Propos />} />
          <Route path="devoir-et-communication" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="activites" element={<Activite />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cycles-organises" element={<CycleOrganise />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="devoir-communique" element={<DevCcommunique />} />
        </Route>

        {/* Routes imbriquées sous Navbartwo */}
        <Route path="/navbartwo" element={<NavbartwoLayout />}>
          <Route index element={<EntreDashboard/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="communications" element={<CommunicationList />} />
          <Route path="edit-communication/:id" element={<EditCommunication />} />
          <Route path="create-communication" element={<CreateCommunication />} />
          <Route path="signup" element={<Signup />} />
          <Route path="edit-thing/:id" element={<EditThing />} />
          <Route path="add-thing" element={<AddThing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
