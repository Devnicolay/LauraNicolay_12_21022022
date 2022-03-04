import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import VerticalLayout from "./components/VerticalLayout/verticalLayout";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/Dashboard";

const home = "/";
const error = "/error";
const dashboard = "/user/:id";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <VerticalLayout />
        <Routes>
          <Route exact path={home} element={<Home />}></Route>
          <Route exact path={dashboard} element={<Dashboard />}></Route>
          <Route path={error} element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
