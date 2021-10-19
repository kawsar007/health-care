import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Announcement from './components/announcement/Announcement';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home';
import AuthProvider from "./context/AuthProvider";
import Contact from './pages/contact/Contact';
import Doctors from "./pages/doctors/Doctors";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Services from './pages/services/Services';
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Announcement />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
