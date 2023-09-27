import "./HomeNote.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { Detele } from "../features/CreateSclice";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const useselectordata = useSelector((item) => item.confistore.value);
  const dispatch = useDispatch();
  // use navigate
  const navigate = useNavigate();
  console.log(useselectordata, "useselectordata from notes page");

  const deletefun = (value) => {
    dispatch(
      Detele(
        useselectordata.filter((item, index) => {
          return item.id != value.id;
        })
      )
    );
  };
  const Updatedata = (value) => {
    navigate("/", { state: value });
  };

  return (
    <>
      <div className="div1">
        <h1 className="text-center">Notes</h1>
        <Container className="coll">
          <Row>
            {useselectordata.length > 0 ? (
              useselectordata.map((value, index) => {
                return (
                  <>
                    <Col className="col2" key={index}>
                      <div
                        className="fw-bold text-center"
                        style={{
                          backgroundColor: "blue",
                          border: "2px",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        }}
                      >
                        {value.title}
                      </div>
                      <div>{value.notes}</div>
                      <Row className="p-1">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deletefun(value);
                          }}
                        >
                          Delete
                        </button>
                      </Row>
                      <Row className="p-1">
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => {
                            Updatedata(value);
                          }}
                        >
                          Edit
                        </button>
                      </Row>
                    </Col>
                  </>
                );
              })
            ) : (
              <div>
                <h1>NO DATA Found</h1>
              </div>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Notes;
