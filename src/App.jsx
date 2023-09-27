import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Notes from "./component/Notes";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Provider } from "react-redux";
import { store } from "./features/ConfigStore";

function App() {
  return (
    <>
      <div className="sidebar">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex flex-column container">
            <Navbar.Brand href="#home" className="fw-bold">
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-column">
                <ul className="p-3 fw-bold">
                  <li
                    className="border rounded-5 p-3"
                    style={{ backgroundColor: "rgb(26, 25, 72)" }}
                  >
                    <NavLink
                      style={{
                        textDecoration: "none",
                      }}
                      to="/"
                    >
                      Home-Page
                    </NavLink>
                  </li>
                  <li
                    className="border rounded-5 p-3 mt-3"
                    style={{ backgroundColor: "rgb(26, 25, 72)" }}
                  >
                    <NavLink style={{ textDecoration: "none" }} to="/notes">
                      Note-Page
                    </NavLink>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="rout">
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </Provider>
      </div>
    </>
  );
}

export default App;
