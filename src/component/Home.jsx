import "./HomeNote.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPenNib } from "react-icons/fa";
import { FaJournalWhills } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ADD, Update } from "../features/CreateSclice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import uuid4 from "uuid4";
const Home = () => {
  // use navigate
  const navigate = useNavigate();
  // redux Concepts
  const dispatch = useDispatch();
  const useselectordata = useSelector((item) => item.confistore.value);
  let isLoadingUpdate = useSelector(
    (item) => item.confistore.isLoadingUpdateBtn
  );
  let isLoadingAdd = useSelector((item) => item.confistore.isLoadingADDBtn);
  console.log(useselectordata, "useselectordata from home page ");
  // Form Update data
  let obj = { id: null, title: "", notes: "" };

  // data pass use navigation
  const location = useLocation();
  const navigateData = location.state;
  if (navigateData != null) {
    obj = {
      id: navigateData.id,
      title: navigateData.title,
      notes: navigateData.notes,
    };
    isLoadingAdd = true;
    isLoadingUpdate = false;
  } else {
    console.log("navigateData is some problem");
  }
  // forms update state
  const [forms, StateValue] = useState(obj);

  // input field change event
  const onchange = (e) => {
    const { name, value } = e.target;
    StateValue({ ...forms, [name]: value });
  };
  // form submit event
  const AddData = (event) => {
    if ((forms.title != "") & (forms.notes != "")) {
      event.preventDefault();
      console.log(forms, "add");
      dispatch(
        ADD({
          id: uuid4(),
          title: forms.title,
          notes: forms.notes,
        })
      );
      navigate("/notes");
    } else {
      console.log("ADD From some Problem");
    }
  };

  // updateHome
  const updateHome = () => {
    let arrays = useselectordata.map((item) =>
      item.id === forms.id ? forms : item
    );
    dispatch(Update(arrays));
    navigate("/notes");
  };

  return (
    <>
      <div className="text-center1">
        <div className="div2">
          <Container>
            <Row>
              <Col>
                <div>
                  <h1>Add a Note</h1>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FaPenNib />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the title"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="title"
                      value={forms.title}
                      onChange={onchange}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <FaJournalWhills />
                    </span>
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      placeholder="Enter the Notes"
                      name="notes"
                      value={forms.notes}
                      onChange={onchange}
                    ></textarea>
                  </div>
                </div>
              </Col>
              <Row className="p-3">
                <Col>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      AddData(event);
                    }}
                    disabled={isLoadingAdd}
                  >
                    Add
                  </button>
                </Col>
                <Col>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      updateHome();
                    }}
                    disabled={isLoadingUpdate}
                  >
                    Update
                  </button>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
