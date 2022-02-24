import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import VerticalLayout from "./components/VerticalLayout/verticalLayout";
import Home from "./pages/Home";

const home = "/";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <VerticalLayout />
        <Routes>
          <Route exact path={home} element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
